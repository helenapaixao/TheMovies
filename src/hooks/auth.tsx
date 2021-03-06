import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api2";
import "@react-firebase/auth";

interface AuthState {
    id: string;
    name: string;
}

interface signInCredentials {
    email: string;
    password: string;
}

interface signInCredentialsFacebook {
    email: string;
    id: string;
    name: string;
}

interface AuthContextData {
    id: string;
    signIn(credentials: signInCredentials): Promise<void>;
    signInFacebook(credentials: signInCredentialsFacebook): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const id = localStorage.getItem("@TheMovie:token");
        const name = localStorage.getItem("@TheMovie:user");

        if (id && name) {
            return { id, name };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password }) => {
        const response = await api.post("sessions", {
            email,
            password,
        });

        const { id, name } = response.data;

        localStorage.setItem("@TheMovie:token", id);
        localStorage.setItem("@TheMovie:user", name);

        setData({ id, name });
    }, []);

    const signInFacebook = useCallback(async ({ email, name }) => {
        const response = await api.post("sessions", {
            email,
            name,
        });

        const { id } = response.data;

        localStorage.setItem("@TheMovie:token", id);
        localStorage.setItem("@TheMovie:user", name);

        setData({ id, name });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem("@TheMovie:token");
        localStorage.removeItem("@TheMovie:user");

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
            value={{ id: data.id, signIn, signOut, signInFacebook }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}

export { AuthProvider, useAuth };

import React, { useState, useEffect } from "react";

import { FiPower, FiSearch } from "react-icons/fi";
import { Container, Profile } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api2";

import Logo from "../../assets/logo.svg";

interface IProfiledata {
    id: number;
    name: string;
    avatar: string;
    movieGenre: string;
}

const Header: React.FC = () => {
    const [users, setUser] = useState<IProfiledata[]>([]);
    const { signOut } = useAuth();

    useEffect(() => {
        api.get("/profile").then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return (
        <Container>
            <header>
                <img src={Logo} alt="TheMovie" />
                <nav>
                    <div>
                        {users &&
                            users.map((profile) => (
                                <div>
                                    <span>Bem-vindo {profile.name}</span>
                                    <Link to="/profile">
                                        <strong>{profile.name}</strong>
                                    </Link>

                                    <div>
                                        <Link to="/search/">
                                            <FiSearch />
                                        </Link>
                                        <button type="button" onClick={signOut}>
                                            <FiPower />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </nav>
            </header>
        </Container>
    );
};

export default Header;

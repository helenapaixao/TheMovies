import React, { useRef, useCallback, useState } from "react";
import { Container, Content, Image } from "./styles";
import Logo from "../../assets/logo.svg";

import { FormHandles } from "@unform/core";
import FacebookLogin from "react-facebook-login";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";

import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/auth";

import Input from "../../components/Input";
import Button from "../../components/Button";

interface SignInFormData {
    email: string;
    password: string;
}

interface SignInFormDataFacebook {
    email: string;
    name: string;
    picture: string;
    accessToken: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const { signIn } = useAuth();
    const [userID, setuserID] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const history = useHistory();

    const handleSubmit = useCallback(
        async (data: SignInFormData) => {
            try {
                formRef.current?.setErrors({});

                const shema = Yup.object().shape({
                    email: Yup.string().required("Email obrigatório").email(),
                    password: Yup.string().required("Senha obrigatória"),
                });

                await shema.validate(data, {
                    abortEarly: false,
                });

                await signIn({
                    email: data.email,
                    password: data.password,
                });
                history.push("/profile");
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                    return;
                }
            }
        },
        [signIn, history]
    );

    const responseFacebook = useCallback((response) => {
        console.log(response.data);

        history.push("/profile");
    }, [history]);

    return (
        <Container>
            <Content>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <img src={Logo} alt="logo" />
                    <h1>Faça seu login</h1>
                    <Input name="email" icon={FiMail} placeholder="E-mail" />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Entrar</Button>
                    <FacebookLogin
                        appId="1445553365628155"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                </Form>
                <Link to="/signup">
                    <FiLogIn />
                    Criar Conta
                </Link>
            </Content>
            <Image />
        </Container>
    );
};

export default SignIn;

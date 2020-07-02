import React, { useRef } from "react";
import { Container, Content } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { FormHandles } from "@unform/core";

import Button from "../../components/Button";
import Input from "../../components/Input";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Faça seu login</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Button type="submit">Entrar</Button>
      </Content>
    </Container>
  );
};

export default SignIn;

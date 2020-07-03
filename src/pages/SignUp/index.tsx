import React, { useCallback, useRef } from "react";
import { Container, Content } from "./styles";
import { FormHandles } from "@unform/core";
import Logo from '../../assets/logo.svg'

import {
  FiArrowLeft,
  FiMail,
  FiUser,
  FiLock,
  FiGift,
} from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";

import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import getValidationErrors from "../../utils/getValidationErrors";
import MaskInput from '../../components/MaskInput';

import Input from "../../components/Input";
import Button from "../../components/Button";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  date: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const shema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string().required("Email obrigatório").email(),
          password: Yup.string().min(6, "No minimo senha com 6 caracteres"),
          date: Yup.string().required("Data de nascimento"),
        });

        await shema.validate(data, {
          abortEarly: false,
        });

        await api.post("/users", data);
        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
      }
    },
    [history]
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
        <img src={Logo} alt="logo"/>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <MaskInput
            name="date"
            icon={FiGift}
            mask="99/99/9999"
            placeholder="Data de nascimento"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para Login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;

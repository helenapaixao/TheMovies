import React, { useRef, useCallback } from "react";
import { Container, Content } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";

import { FormHandles } from "@unform/core";
import * as Yup from 'yup';

import Button from "../../components/Button";
import Input from "../../components/Input";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async(data: SignInFormData) =>  {
            try {
                formRef.current?.setErrors({});

                const shema = Yup.object().shape({
                    email: Yup.string().required('Email obrigatório').email(),
                    password: Yup.string().required('Senha obrigatória'),
                });

                await shema.validate(data, {
                    abortEarly:false,
                })

                const singIn({
                    email:data.email,
                    password: data.password,
                })
                history.push('/dashboard');
            }catch(err) {
                if(err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err);
                    formRef.current?.setErrors(errors);
                }


            }
        },
        [singIn,history]
    )

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

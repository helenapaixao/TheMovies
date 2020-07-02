import React, { useRef, useCallback } from "react";
import { Container } from "./styles";
import {FiMail} from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';


import Button from "../../components/Button";
import Input from "../../components/Input";


interface SignInFormData {
    email: string;
    password: string;
}


const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);


  return (
    <Container>
        <h1>SignIn</h1>
    </Container>
  );
};

export default SignIn;

import React, { useRef, useCallback } from "react";

import { FiCheckSquare } from "react-icons/fi";
import { FormHandles } from "@unform/core";
import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface IProfile {
    id: number;
    name: string;
    image: string;
    movieGenre: string;
}

interface ICreateProfileData {
    name: string;
    image: string;
    movieGenre: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleAddProfile: (profile: Omit<IProfile, "id" | "available">) => void;
}

const ModalAddProfile: React.FC<IModalProps> = ({ isOpen, setIsOpen, handleAddProfile }) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: ICreateProfileData) => {
            handleAddProfile(data);
            setIsOpen();
        },
        [handleAddProfile, setIsOpen]
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Novo Perfil</h1>
                <Input
                    name="image"
                    placeholder="Cole o link aqui da sua melhor foto"
                />

                <Input name="name" placeholder="Ex: The Matrix" />

                <Input name="movieGenre" placeholder="Ex: Ficção cientifica" />
                <button type="submit" data-testid="add-profile-button">
                    <p className="text">Adicionar Perfil</p>
                    <div className="icon">
                        <FiCheckSquare size={24} />
                    </div>
                </button>
            </Form>
        </Modal>
    );
};

export default ModalAddProfile;

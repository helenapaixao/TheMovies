import React, { useCallback, useRef } from "react";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import "./styles";

interface Profiledata {
    id: number;
    name: string;
    movieGenre: string;
    avatar: string;
}

interface IModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    handleUpdateProfile: (profile: Omit<Profiledata, "id">) => void;
    editingProfile: Profiledata;
}

interface IEditUserProfile {
    id: number;
    name: string;
    movieGenre: string;
    avatar: string;
}

const ModalEditProfile: React.FC<IModalProps> = ({
    isOpen,
    setIsOpen,
    editingProfile,
    handleUpdateProfile,
}) => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(
        async (data: IEditUserProfile) => {
            handleUpdateProfile(data);
            setIsOpen();
        },
        [handleUpdateProfile, setIsOpen]
    );

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Form
                ref={formRef}
                onSubmit={handleSubmit}
                initialData={editingProfile}
            >
                <h1>Editar Profile</h1>

                <Input name="avatar" placeholder="Cole o link aqui da imagem" />

                <Input name="name" placeholder="Nome" />

                <Input name="movieGenre" placeholder="Cidade" />

                <Button type="submit" data-testid="edit-profile-button">

                    <div className="text">Editar Profile</div>
                    <div className="icon"></div>
                </Button>
            </Form>
        </Modal>
    );
};

export default ModalEditProfile;

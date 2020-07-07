import React, { useState, useEffect } from "react";
import { Container, Content, ProfileContainer } from "./styles";

import Profile from "../../components/Profile";
import api from "../../services/api2";
import ModalEditProfile from "../../components/ModalEditProfile";
import ModalAddProfile from "../../components/ModalAddProfile";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

interface IProfiledata {
    id: number;
    name: string;
    avatar: string;
    movieGenre: string;
}

const Dashboard: React.FC = () => {
    const [profiles, setProfiles] = useState<IProfiledata[]>([]);
    const [editingProfile, setEditingProfile] = useState<IProfiledata>(
        {} as IProfiledata
    );
    const [modalOpen, setModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        async function loadProfiles(): Promise<void> {
            api.get("/profile").then((response) => {
                setProfiles(response.data);
            });
        }

        loadProfiles();
    }, []);

    async function handleAddProfile(
        profile: Omit<IProfiledata, "id">
    ): Promise<void> {
        try {
            const responseAdd = await api.post<IProfiledata>("/profile", {
                ...profiles,
            });
            setProfiles([...profiles, responseAdd.data]);
        } catch (err) {
            console.log(err);
        }
    }

    async function handleUpdateProfile(
        profile: Omit<IProfiledata, "id">
    ): Promise<void> {
        const { id } = editingProfile;
        const responseEdit = await api.put<IProfiledata>(`/profile/${id}`, {
            ...profile,
            id,
        });
        const newProfiles = [...profiles];
        const indexProfile = newProfiles.findIndex((w) => w.id === id);
        newProfiles[indexProfile] = responseEdit.data;
        setProfiles([...newProfiles]);
    }

    async function handleDeleteProfile(id: number): Promise<void> {
        await api.delete(`/profile/${id}`);
        const newProfiles = [...profiles];
        const indexDeleted = newProfiles.findIndex((w) => w.id === id);
        newProfiles.splice(indexDeleted, 1);
        setProfiles([...newProfiles]);
    }

    function toggleModal(): void {
        setModalOpen(!modalOpen);
    }

    function toggleEditModal(): void {
        setEditModalOpen(!editModalOpen);
    }

    function handleEditProfile(profile: IProfiledata): void {
        setEditingProfile(profile);
        toggleEditModal();
    }

    return (
        <Container>
            <ModalAddProfile
                isOpen={modalOpen}
                setIsOpen={toggleModal}
                handleAddProfile={handleAddProfile}
            />

            <ModalEditProfile
                isOpen={editModalOpen}
                setIsOpen={toggleEditModal}
                editingProfile={editingProfile}
                handleUpdateProfile={handleUpdateProfile}
            />
            <Content>
                <ProfileContainer>
                    {profiles &&
                        profiles.map((profile) => (
                            <Profile
                                key={profile.id}
                                profile={profile}
                                handleDelete={handleDeleteProfile}
                                handleEditProfile={handleEditProfile}
                            />
                        ))}
                </ProfileContainer>
            </Content>
        </Container>
    );
};
export default Dashboard;

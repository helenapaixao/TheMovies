import React from "react";
import { FiEdit3, FiTrash } from "react-icons/fi";

import { Container } from "./styles";

interface IProfile {
    id: number;
    name: string;
    avatar: string;
    movieGenre: string;
}

interface IProps {
    profile: IProfile;
    handleDelete: (id: number) => {};
    handleEditProfile: (profile: IProfile) => void;
}

const Profile: React.FC<IProps> = ({
    profile,
    handleDelete,
    handleEditProfile,
}: IProps) => {
    function setEditingProfile(): void {
        handleEditProfile(profile);
    }

    return (
        <Container>
            <header>
                <img src={profile.avatar} alt={profile.name} />
            </header>
            <section className="body">
                <h2>{profile.name}</h2>
                <div>
                    <button
                        type="button"
                        className="icon"
                        onClick={() => setEditingProfile()}
                        data-testid={`edit-profile-${profile.id}`}
                    >
                        <FiEdit3 size={20} />
                    </button>
                    <button
                        type="button"
                        className="icon"
                        onClick={() => handleDelete(profile.id)}
                        data-testid={`remove-profile-${profile.id}`}
                    >
                        <FiTrash size={20} />
                    </button>
                </div>
            </section>
        </Container>
    );
};

export default Profile;

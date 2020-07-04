import React from "react";

import { ProfilesContainer } from "./styles";

const Profile: React.FC = () => {
    return (
        <ProfilesContainer>
            <div>
                <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" />
                <h1>Fulano</h1>
            </div>
            <div>
                <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" />
                <h1>Add Perfil</h1>
            </div>
            <div>
                <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" />
                <h1>Add Perfil</h1>
            </div>
            <div>
                <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" />
                <h1>Add Perfil</h1>
            </div>
        </ProfilesContainer>
    );
};

export default Profile;

import React from "react";

import { FiPlus } from "react-icons/fi";

import {
    Container,
    Header,
    Content,
    Title,
    AllProfiles,
    CardProfile,
    CardAvatar,
    CardText,
    Button,
    AddProfile,
} from "./styles";

const Profiles: React.FC = () => {
    return (
        <Container>
            <Header></Header>

            <Content>
                <Title>Escolha um perfil</Title>

                <AllProfiles>
                    <CardProfile>
                        <CardAvatar>
                        <img
                                src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=195f820bdb85e57d7e08038a3f8eec821421d83d&v=4"
                                alt="Helena Paixão"
                            />
                        </CardAvatar>
                        <CardText>Helena Paixão</CardText>
                    </CardProfile>

                    <CardProfile>
                        <CardAvatar>
                            <img src="https://occ-0-2809-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABUOVXiUYacjlBLwNjhXI7yzjuheEv4j03647J1rGAtRjLkqadP2bMyykXIzsZ04QZnHJS0md3nlMNNj0HIMbQNKYr7RE.png?r=071" />
                        </CardAvatar>
                        <CardText>Karina</CardText>
                    </CardProfile>

                    <CardProfile>
                        <CardAvatar>
                            <img src="https://occ-0-2809-1380.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71" />
                        </CardAvatar>
                        <CardText>Convidado</CardText>
                    </CardProfile>

                    <CardProfile>
                        <AddProfile>
                            <FiPlus className="icon" color="grey" size={150} />
                        </AddProfile>
                        <CardText>Novo perfil</CardText>
                    </CardProfile>
                </AllProfiles>

                <Button>GERENCIAR PERFIS</Button>
            </Content>
        </Container>
    );
};

export default Profiles;

import React from "react";

import { FiPower, FiSearch } from "react-icons/fi";
import { Container, Profile, Divider } from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import Logo from "../../assets/logo.svg";

const Header: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <header>
                <img src={Logo} alt="TheMovies" />

                <nav>
                    <div>
                        <Profile>
                            <img
                                src="https://avatars3.githubusercontent.com/u/11083288?s=460&u=195f820bdb85e57d7e08038a3f8eec821421d83d&v=4"
                                alt="Primario"
                            />

                            <div>
                                <span>Bem-vindo,</span>
                                <Link to="/profile">
                                    <strong>Principal</strong>
                                </Link>
                            </div>
                            <div>
                                <Divider>
                                    <Link to="/search/">
                                        <FiSearch />
                                    </Link>
                                </Divider>

                                <Divider>
                                    <Link to="/favorites">
                                        <h1>Filmes Favoritos</h1>
                                    </Link>
                                </Divider>
                                <Divider>
                                    <button type="button" onClick={signOut}>
                                        <FiPower />
                                    </button>
                                </Divider>
                            </div>
                        </Profile>
                    </div>
                </nav>
            </header>
        </Container>
    );
};

export default Header;

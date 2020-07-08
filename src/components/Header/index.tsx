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
                                src="https://api.adorable.io/avatars/285/abott@adorable.png"
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

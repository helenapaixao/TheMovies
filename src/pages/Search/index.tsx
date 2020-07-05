import React, { useState, FormEvent } from "react";
import { getResults } from "../../services/client";

import { Section } from "../../styles/shared";
import { Container, Content, Form, Error } from "./styles";

import Header from "../../components/Header";
import MediaCarousel from "../../components/Moviecarousel";
import logo from "../../assets/logo.svg";

import Button from "../../components/Button";
import Input from "../../components/Input";
import SearchInput from "../../components/SearchInput";

export interface IResult {
    poster_path: string | null;
    overview: string;
    realese_date: string;
    original_title: string;
    original_language: string;
    title: string;
    popularity: number;
    vote_count: number;
    vote_avanger: number;
    first_air_date: string;
    origin_country: string;
    name: string;
    original_name: string;
    media_type: string;
    id: number;
}

const Search: React.FC = () => {
    const [query, setQuery] = useState("");
    const [inputError, setInputError] = useState("");
    const [result, setResult] = useState<IResult[]>([]);
    const [lastQuery, setLastQuery] = useState("");

    async function handleSearch(
        event: FormEvent<HTMLFormElement>
    ): Promise<void> {
        event.preventDefault();

        if (!query) {
            setInputError("To be continue, you need add a Search.");
            return;
        }

        try {
            const searchResult = await getResults(query);
            setResult(searchResult);

            setLastQuery(query);
            setQuery("");
            setInputError("");

            if (searchResult.length === 0) {
                setInputError(`No results found for ${query}`);
            }
        } catch (err) {
            setInputError("Ops, something bad happend.");
        }
    }

    return (
        <>
            <Container>
                <Header />
                <Content>
                    <img src={logo} alt="logo" />

                    <Form onSubmit={handleSearch}>
                        <SearchInput
                            name="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Digite o nome do Filme"
                        />
                        <Button type="submit">Buscar Filme</Button>
                    </Form>
                </Content>

                {inputError && <Error>{inputError}</Error>}

                {result.length > 0 && (
                    <Section>
                        <h1>Results for: {lastQuery}</h1>
                        <MediaCarousel items={result} />
                    </Section>
                )}
            </Container>
        </>
    );
};

export default Search;

import React, { useState, FormEvent } from "react";
import { getResults } from "../../services/client";

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

        //error handling
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

    return <h1>Search</h1>;
};

export default Search;

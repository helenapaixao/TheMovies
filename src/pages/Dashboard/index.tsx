import React from "react";

import Header from "../../components/Header";
import PopularMovies from "../../components/PopularMovies";
import ListMovies from "../../components/ListMovies";
import FamilyMovies from "../../components/FamilyMovies";
import Documentary from "../../components/DocumentaryMovies";


const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <PopularMovies />
            <ListMovies />
            <FamilyMovies />
            <Documentary />
        </>
    );
};

export default Dashboard;

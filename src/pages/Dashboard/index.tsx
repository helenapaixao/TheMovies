import React from "react";

import Header from "../../components/Header";
import PopularMovies from "../../components/PopularMovies";
import ListMovies from '../../components/ListMovies';

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <PopularMovies />
            <ListMovies/>
        </>
    );
};

export default Dashboard;

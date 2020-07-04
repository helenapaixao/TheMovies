import React from "react";

import Header from "../../components/Header";
import PopularMovies from "../../components/PopularMovies";

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <PopularMovies />
        </>
    );
};

export default Dashboard;

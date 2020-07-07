import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "../src/styles/global";
import Routes from "../src/routes/index";

import AppProvider from "./hooks/index";

import {FavoritesProvider} from "./hooks/favourites";

const App: React.FC = () => (
    <Router>
        <FavoritesProvider>
            <AppProvider>
                <Routes />
            </AppProvider>
        </FavoritesProvider>

        <GlobalStyle />
    </Router>
);
export default App;

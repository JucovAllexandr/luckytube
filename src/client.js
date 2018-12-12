import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import HomeLayout from "./components/HomeLayout";
import createStore from "./store";
import { resolve } from "url";

const fetchData = require("../src/api")
const store = createStore( window.REDUX_DATA );

fetchData.returnTrendVideos().then(res => {

    let popularTrends = res
    const jsx = (
        <ReduxProvider store={ store }>
            <Router>
                <HomeLayout props ={ popularTrends }/>
            </Router>
        </ReduxProvider>
    );
    
    const app = document.getElementById( "app" );
    ReactDOM.hydrate( jsx, app );
})
  



import React, {Component} from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import SearchLayout from "./SearchLayout"
const fetchData = require("../api")
import { fetchDataTrendVideos } from "../store"
import { resolve } from "url";

// import SettingsWindow from './settingsWindow';

class HomeLayout extends Component {
  constructor(props){
    super(props)
    this.state={
    }

  }

  render() {
    //  console.log(this.props)
    return (
      <div className="app">
        <header>
          <base href="/" />
          <link rel="stylesheet" href="/css/bootstrap.min.css"/>

          {/* <link rel="stylesheet" type="text/css" href="./dist/HomeLayout.css" /> */}

          <h2
            style={{
                fontSize:'50px',
                color:'white',
                fontFamily:'PT Sans',
                fontWeight: 'bold'

            }}
            onAnimationStart={() => { }}>
            LuckyTube

           </h2>

        </header>
        <SearchLayout />
        {/* <SettingsWindow /> */}
        <footer>
          <div>
            <ul>
            {

              console.log(this.props[0])
              // Array(this.props.props).map( x => {
              //   console.log(x.id)
              // })

              // fetchData.returnTrendVideos().then(data => new Promise(function(resolve,reject){
              //   console.log(data)
              //   resolve(data)
              // })).then(data => {
              //   console.log(data)
              // })

              // popularVideo.map( x =>{
              // console.log(x);
              // <li> {x["id"]} </li>
              // })
            }
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
HomeLayout.serverFetch = fetchDataTrendVideos
const mapDispatchToProps = {
  fetchDataTrendVideos,
};
// export default connect(mapDispatchToProps)(HomeLayout);
export default HomeLayout;

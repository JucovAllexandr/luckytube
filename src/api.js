import fetch from "isomorphic-fetch";

export function fetchCircuits( ) {
    return fetch( "http://ergast.com/api/f1/2018/circuits.json" )
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits );
}

export function returnTrendVideos(){
    return  new Promise(function(resolve,reject){
        fetch("https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=25&key="+
        "AIzaSyAdQeh6TFSUNrBImnI4-ki9LvvFs0Nlzc8")
        .then( res => res.json())
        .then( res =>  resolve(res.items) );
    }) 
     
}
//import React from 'react';

export default function YoutubeConnector(query){
    return new Promise(function(resolve,reject){
            let loadGapi = new Promise(function(resolve, reject) {
                const API_KEY = 'AIzaSyAdQeh6TFSUNrBImnI4-ki9LvvFs0Nlzc8';
                const script = document.createElement("script");
                script.src = "https://apis.google.com/js/client.js";
                script.onload = () => {
                    window.gapi.load('client', () => {
                    window.gapi.client.setApiKey(API_KEY);
                    window.gapi.client.load('youtube', 'v3', () => {
                        resolve(window.gapi)
                    });
                    });
                };
                document.body.appendChild(script);

            }).then(function(gapi){
                var request = gapi.client.youtube.search.list({
                            q: query,
                            part: 'snippet',
                            maxResults:50
                });
                request.execute(function(response){
                    var searchResult = response.result
                    let randoNum = Math.floor(Math.random() * searchResult.items.length) + 0
                    console.log(randoNum)
                    var item = searchResult.items[randoNum]
                    console.log(item)
                    let videoID = item.id.videoId
                    console.log(videoID)
                    resolve(videoID)
                })
                    // }).then(function(videoID){
                    //     let stasticLink = 'https://www.googleapis.com/youtube/v3/videospart=statistics&id='+videoID+'&'+'AIzaSyAdQeh6TFSUNrBImnI4-ki9LvvFs0Nlzc8'
                    //     fetch(stasticLink).then(
                    //         data=>{return(data.json()).then(res=>console.log(res))}

                    //     )
                    //     resolve(videoID)

                    // }))
            })

    })
}





// let search = (query) => new Promise(function(resolve,reject){
//     let loadGapi = new Promise(function(resolve, reject) {
//         const API_KEY = 'AIzaSyAdQeh6TFSUNrBImnI4-ki9LvvFs0Nlzc8';
//         const script = document.createElement("script");
//         script.src = "https://apis.google.com/js/client.js";
//         script.onload = () => {
//             window.gapi.load('client', () => {
//             window.gapi.client.setApiKey(API_KEY);
//             window.gapi.client.load('youtube', 'v3', () => {
//                 resolve(window.gapi)
//             });
//             });
//         };
//         document.body.appendChild(script);

//     }).then(function(gapi){
//         var request = gapi.client.youtube.search.list({
//                     q: query,
//                     part: 'snippet'
//         });
//         request.execute(function(response) {
//             var searchResult = response.result
//             let randoNum = Math.floor(Math.random() * 5) + 0
//             let videoID = searchResult.items[randoNum].id.videoId
//             console.log(videoID)
//             resolve(videoID)
//             })
//     })
// })


// function search() {
//     var q = $('#query').val();
//     var request = gapi.client.youtube.search.list({
//       q: q,
//       part: 'snippet'
//     });

import React, { Component } from 'react';
import * as bootstrap from 'react-bootstrap'
import {Jumbotron,Button, Container} from 'react-bootstrap'
import YoutubeConnector from "../Connectors/YoutubeConnector"
export default class SettingsWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateLevel:0,
            searchPhrase:'',
            searchPlaceholder:'Your request string',
            countOfViews:0,
            displayHelpCountOfViews:'collapse',
            countViewMin:0,
            countViewMax:0,
            countViewStep:1,
            linkOnVideo:'https://www.youtube.com/embed/'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeOfCountOfViews = this.handleChangeOfCountOfViews.bind(this);
        this.handleHelpMenuOfViewCounts = this.handleHelpMenuOfViewCounts.bind(this);
        this.handleMinMaxViews = this.handleMinMaxViews.bind(this);
        this.inputSearchPhrase = null;
      }
      handleMinMaxViews(event){
          let numbers = String(event).split('|')
          this.setState({countViewMin:(numbers[0])})
          this.setState({countViewMax:(numbers[1])})
          this.setState({countViewStep:(parseInt((numbers[1]-numbers[0])*0.01))})
          //this.setState({countViewMin:})
      }
      handleChange(event) {
        this.setState({searchPhrase: event.target.value});
      }
      handleChangeOfCountOfViews(event){
          this.setState({countOfViews: event.target.value});
      }
      handleHelpMenuOfViewCounts(event){
          this.setState({displayHelpCountOfViews: this.state.displayHelpCountOfViews == 'collapse' ? 'visible' : 'collapse'})
      }
      getLinkOnVideo(videoID){
          let link = 'https://www.youtube.com/embed/' + videoID
        this.setState({linkOnVideo:link})
      }

    

    render() {
        //const genres = ["Movie genres", "Music genres", "Television genres", "Web videos"]
        if(this.state.stateLevel == 0 )
        {
            return (
                    <div className="container">
                        <Jumbotron>
                        <h4>Please input your request below:</h4>
                        <form>
                            <bootstrap.FormControl 
                             style={{width:'40vh'}}
                             placeholder={this.state.searchPlaceholder}
                             onChange={this.handleChange} 
                             value={this.state.searchPhrase }
                             ref={(input) => this.inputSearchPhrase = input}
                             />
                        </form>
                        <br />
                        <Button 
                            bsStyle="primary"
                            onClick={ () =>{
                                if(this.state.searchPhrase !== '')
                                    this.setState({stateLevel:this.state.stateLevel+1})
                                else
                                    this.setState({searchPlaceholder:"Please input your request here"})
                            }}
                        >
                        Next
                        </Button>
                        </Jumbotron>
                    </div>
            );
        }
        else if(this.state.stateLevel == 1)
        {
            return (
                <div className="container">
                    <Jumbotron>
                    <h4>Please setup search criteria</h4>
                    <form>
                        <bootstrap.Label> Select count of views </bootstrap.Label>
                        <br />
                        <br />
                        <div style={{
                            width:'40vh',
                            height:'auto',
                            display:'grid',
                            visibility:this.state.displayHelpCountOfViews,
                            zIndex:'1000',
                            position:'absolute',
                            backgroundColor:'#05386b',
                            alignItems: 'center',
                            borderRadius: '10px',
                            boxShadow: '6px 3px 17px 1px black'
                            }}>
                            <bootstrap.Label onClick={(event)=>{
                                this.handleHelpMenuOfViewCounts(event);
                                this.handleMinMaxViews("1|100000");
                            }}
                             style={{height:'3vh', margin:'10px 10px 10px 10px'}}> {"(0 < 100 000)"}
                             </bootstrap.Label>
                            <bootstrap.Label onClick={(event)=>{
                                this.handleHelpMenuOfViewCounts(event);
                                this.handleMinMaxViews("100000|500000");
                            }}
                            style={{height:'3vh', margin:'10px 10px 10px 10px'}}> {"100 000 < 500 000"} </bootstrap.Label>
                            <bootstrap.Label onClick={(event)=>{
                                this.handleHelpMenuOfViewCounts(event);
                                this.handleMinMaxViews("500000|1000000");
                            }}
                            style={{height:'3vh', margin:'10px 10px 10px 10px'}}> {"500 000 < 1 000 000"} </bootstrap.Label>
                            <bootstrap.Label onClick={(event)=>{
                                this.handleHelpMenuOfViewCounts(event);
                                this.handleMinMaxViews("1000000|10000000");
                            }}
                            style={{height:'3vh', margin:'10px 10px 10px 10px'}}> {"1 000 000 < 10 000 000"} </bootstrap.Label>
                            <bootstrap.Label onClick={(event)=>{
                                this.handleHelpMenuOfViewCounts(event);
                                this.handleMinMaxViews("10000000|1000000000");
                            }}
                            style={{height:'3vh', margin:'10px 10px 10px 10px'}}> {"10 000 000 < 1 000 000 000"} </bootstrap.Label>
                            <bootstrap.Label onClick={(event)=>{
                                this.handleHelpMenuOfViewCounts(event);
                                this.handleMinMaxViews("1000000000|5000000000");
                            }}
                            style={{height:'3vh', margin:'10px 10px 10px 10px'}}> {"1 000 000 000+"} </bootstrap.Label>
                        </div>
                        <div style={{display:"-webkit-box"}}>
                            <input type="range" 
                                min={this.state.countViewMin} 
                                max={this.state.countViewMax} 
                                step={this.state.countViewStep} 
                                onChange={this.handleChangeOfCountOfViews} 
                                value={this.state.countOfViews} 
                                onClick={(event) => {
                                    console.log('lol')
                                    this.handleHelpMenuOfViewCounts(event)
                                }}
                                style={{
                                    width:'50vh'
                                }}
                                />
                            <bootstrap.Label style={{marginLeft:'10px'}}> {this.state.countOfViews} </bootstrap.Label>
                        </div>
                        
                    </form>
                    <br />
                    <div style={{margin:'10px', display:"inline-block"}}>
                        <Button 
                            style={{margin:'0 10px 10px 0'}}
                            bsStyle="danger"
                            onClick={ () =>{
                                this.setState({stateLevel:this.state.stateLevel-1})
                            }}
                        >
                        Back
                        </Button>
                        
                        <Button 
                            style={{margin:'0 10px 10px 0'}}
                            bsStyle="success"
                            onClick={ () =>{
                                var that = this
                                YoutubeConnector(this.state.searchPhrase).then(function(videoID){
                                    that.getLinkOnVideo(videoID) 
                                })
                                this.setState({stateLevel:this.state.stateLevel+1})
                            }}
                        >
                        Search
                        </Button>
                    </div>
                    </Jumbotron>
                </div>
        );
        }
        else if(this.state.stateLevel == 2)
        {
            return (
                <div className="container">
                    <Jumbotron style={{}}>
                        <iframe 
                            style={{width:'90vh',height:'50vh'}}
                            src={this.state.linkOnVideo}>
                        </iframe>
                        <div style={{margin:'10px', display:"inline-block"}}>
                        <Button 
                            style={{margin:'10px 10px 10px 0'}}
                            bsStyle="danger"
                            onClick={ () =>{
                                this.setState({stateLevel:this.state.stateLevel-2})
                            }}
                        >
                        Back
                        </Button>
                        
                        <Button 
                            style={{margin:'10px 10px 10px 0'}}
                            bsStyle="success"
                            onClick={ () =>{
                                var that = this
                                YoutubeConnector(this.state.searchPhrase).then(function(videoID){
                                    that.getLinkOnVideo(videoID) 
                                })
                            }}
                        >
                        Re-Roll
                        </Button>
                        </div>
                    </Jumbotron>
                   
                </div>
            )
        }
    }
}
import React,{Component} from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./Searchbox";
import {robots} from './robots'


class App extends Component{
    constructor(){
        super()
        this.state = {
        robots : robots,
        searchfield:''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value})
      
    }
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return( 
        <div className = 'tc'> 
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Cardlist robots ={filterRobots}/>
        </div>
        );
    }
}

export default App;

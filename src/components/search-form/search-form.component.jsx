import React from 'react';
import { SummonerQuery } from '../../lolApi.data';
import MatchList from '../match-list/match-list.component';

class SearchForm extends React.Component{
constructor() {
    super();
    
    this.state= {
        summonerNick:'',
        summonerData: ''
        
    }
}

getSummoner = async ()=> {
    const response = await fetch(SummonerQuery(this.state.summonerNick));
    const summonerData = await response.json();
    this.setState({summonerData: summonerData});
}


handleSubmit = event => {
    event.preventDefault();
    let summonerNickname= document.getElementById('summonerNickname').value;
    this.setState({summonerNick: summonerNickname},()=> this.getSummoner())
}

initMatchList = ()=> {
    const summPref = this.state.summonerData;
    return <MatchList nickName={summPref.name} accId={summPref.accountId} />
}




render() {

    
    
    return (
        <div className="search-form">
            <form onSubmit={this.handleSubmit}>
                <label> Browse my match history </label>
                <input type="text" id="summonerNickname"/>
                <button type="submit"> Look </button>
            </form>
            <button onClick={()=> console.log(this.state)}>Check State</button>
            {
                
                (this.state.summonerData) ? this.initMatchList() : null
            }
           
        </div>
    )
}

} 


export default SearchForm;
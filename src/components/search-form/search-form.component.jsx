import React from 'react';
import { SummonerQuery, Region } from '../../lolApi.data';
import MatchList from '../match-list/match-list.component';
import Form from '../form/form.component';

class SearchForm extends React.Component{
constructor() {
    super();
    
    this.state= {
        summonerNick:'',
        summonerData: '',
        region: ''
        
    }
}

getSummoner = async ()=> {
    const response = await fetch(SummonerQuery(this.state.summonerNick,this.state.region));
    const summonerData = await response.json();
    this.setState({summonerData: summonerData});
}


handleSubmit = event => {
    event.preventDefault();
    let server = document.querySelector('.drop-servers').value;
    let summonerNickname= document.getElementById('summonerNickname').value;
    this.setState({summonerNick: summonerNickname, region: Region[server]},()=> this.getSummoner())
}

initMatchList = ()=> {
    const summPref = this.state.summonerData;
    return <MatchList nickName={summPref.name} accId={summPref.accountId} region={this.state.region}/>
}




render() {

    
    
    return (
        <div className="search-form">
        <Form  onSubmit={this.handleSubmit}/>

            <button onClick={()=> console.log(this.state)}>Check State</button>
           
            {
                
                (this.state.summonerData) ? this.initMatchList() : null
            }
           
        </div>
    )
}

} 


export default SearchForm;
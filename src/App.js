import React from 'react';
import { MatchDetailsQuery } from './lolApi.data';
import SearchForm from './components/search-form/search-form.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      summoner: null,
      matchList:null
    } ;
  }

/*   componentDidMount = async () => {
   
    const response = await fetch(MatchDetailsQuery(2322977330));
    const data = await response.json();
    console.log(data);
  }  */

 

  // after Search
 /*  getMatchList = async () => {
    if (this.state.summoner) {
    const matchListResponse = await fetch(`${myProxy}https://eun1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.state.summoner.accountId}?endIndex=10&api_key=RGAPI-488cadb0-b959-44ff-91bb-b147ee494a12`);
    const matchListData = await matchListResponse.json();
    this.setState({matchList:matchListData})
    }
  } */

  

 

  

  render() {
    return (
      <div className="App">
          
          
          <SearchForm/>
      </div>
    );
  }
}
export default App;

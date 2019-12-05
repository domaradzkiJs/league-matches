import React from 'react';

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

 
   

  render() {
    return (
      <div className="App">
          
          
          <h2>Hello</h2>
          <p> Browse League of Legends players match history,
             For example, you can try these players: WilkFenris, MadTexas or your own.
          </p>
          <SearchForm/>
      </div>
    );
  }
}
export default App;

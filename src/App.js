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
          
          
          
          <SearchForm/>
      </div>
    );
  }
}
export default App;

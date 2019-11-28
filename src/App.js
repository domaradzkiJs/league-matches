import React from 'react';
import { Summoner } from './lolApi.data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state="";
  }

  componentDidMount = async () => {
    const myProxy = 'https://guarded-plateau-90176.herokuapp.com/';
    const response = await fetch(`${Summoner}`);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
export default App;

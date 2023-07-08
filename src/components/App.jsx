import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

import { getImages } from './Api/Api';

export class App extends Component  {
  state = {
    searchQuery: '',
    
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target[1].value.trim();
    this.setState({ searchQuery: query });
    evt.target.reset();
    getImages();
    // console.log(query);
  }
  
  render() {
    return (
      <div className={css.App}>
        <Searchbar handleQuery={this.handleSubmit}></Searchbar>
      </div>
    );}
};

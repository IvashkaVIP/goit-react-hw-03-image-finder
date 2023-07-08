import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component  {
  state = {
    searchQuery: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target[1].value.trim();
    console.log(query);
    if (!query) {
      alert('field cannot be empty'); return;
    }
    this.setState({ searchQuery: query });
        evt.target.reset();
  }
  
  render() {
    return (
      <div className={css.App}>
        <Searchbar handleQuery={this.handleSubmit}></Searchbar>
      </div>
    );}
};

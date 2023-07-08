import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import {ImageGallery} from './ImageGallery/ImageGallery'

import { getImages } from './Api/Api';

export const IMAGE_PER_PAGE = 12;

export class App extends Component {
  state = {
    
    images: [],
    searchQuery: '',
    loading: false,

    // id: '',
    // webformatURL: '',
    // largeImageURL: '',
  };

  // async componentDidMount() {
  //   const { images, searchQuery } = this.state;
    
    
  //   if (!images && searchQuery) {
  //   const data = await getImages(searchQuery, 1);
  //   console.log('didMount >>>>>>> ',data.hits);}
  // }

  handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target[1].value.trim();
    this.setState({ searchQuery: query });
    evt.target.reset();
    
    // console.log(query);
  };

  render() {
    const { images } = this.state;
    let isImages;
    if (images.length) isImages = true; else isImages = false;

    return (
      
        <div className={css.App}>
          <Searchbar handleQuery={this.handleSubmit}></Searchbar>
        { isImages&&<ImageGallery state={this.state}></ImageGallery>}
      
        </div>
    );
  }
}

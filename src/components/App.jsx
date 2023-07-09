import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './Api/Api';
import { Button } from './Button/Button';



export const IMAGE_PER_PAGE = 12;

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    loading: false,

    // id: '',
    // webformatURL: '',
    // largeImageURL: '',
  };

   async componentDidUpdate(prevprops, prevState) {
     const { images, searchQuery, currentPage } = this.state;

    //  console.log(!images.length);
     
     if (!images.length && searchQuery) {
     const data = await getImages(searchQuery, currentPage);
      //  console.log('didMount >>>>>>> ', data.hits);

      if (!images.length) this.setState(({ images }) => ({
        images: [...data.hits],
      })); else     this.setState(({ images }) => ({
        images: [images, ...data.hits],
      }));
       
      //  this.setState ({ images: data.hits });
    }
   }

  
  
  
  handleSubmit = evt => {
    evt.preventDefault();
    
    const query = evt.target[1].value.trim();
    // console.log(query);
    
    if (!query) {
      alert('enter a search query');
      return;
    }
    this.setState({ searchQuery: query });
    evt.target.reset();
    
  };

  render() {
    const { images } = this.state;
    let isImages;
    if (images.length) isImages = true;
    else isImages = false;

    return (
      <div className={css.App}>
        <Searchbar handleQuery={this.handleSubmit}/>
        {isImages && <ImageGallery images={images} />}
        {isImages && <Button />}
        {/* <ImageGallery state={this.state.searchQuery}></ImageGallery> */}
      </div>
    );
  }
}

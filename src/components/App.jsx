import css from './App.module.css';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './Api/Api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import {Loader} from './Loader/Loader'

export const IMAGE_PER_PAGE = 12;

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    totalPages: 1,
    selectedImageUrl: '',
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { images, searchQuery, currentPage } = this.state;
    let data = null;

    // console.log('prev >>>>>   ', prevState.searchQuery);
    // console.log('current >>>>  ', this.state.searchQuery);

    if (!images.length && searchQuery) {
      // ----------------- первый поиск
      data = await getImages(searchQuery, currentPage);
      //  console.log(data.total)
      if (!data.total) {
        alert(
          'nothing was found for the current query, please ask another one'
        );
        this.setState({ searchQuery: '' });
        return;
      }

      this.setState({ images: [...data.hits], totalPages: data.totalHits });
      return;
    }

    if (prevState.currentPage > currentPage) {
      data = await getImages(searchQuery, currentPage);
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
      }));
    }

    if (prevState.searchQuery !== searchQuery && searchQuery) {
      this.setState({
        images: [],
        currentPage: 1,
        totalPages: 1,
        isLoading: false,
      });
      return;
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
    // evt.target.reset();
  };

  handleClickLoadMore = evt => {
    // console.log('LoadMore Click');
    this.setState(prev => ({ currentPage: ++prev.currentPage }));
  };

  handleOpenModal = evt => {
    // console.log('OpenModal Click');
    // console.log(evt.currentTarget.id);
    // console.log(this.state.images[evt.currentTarget.id].largeImageURL);
    this.setState({
      selectedImageUrl: this.state.images[evt.currentTarget.id].largeImageURL,
    });
  };

  closeModal = () => {
    this.setState({ selectedImageUrl: '' });
  };

  isLoadMore = () => {
    const { searchQuery, currentPage, totalPages } = this.state;
    if (!searchQuery || currentPage * IMAGE_PER_PAGE >= totalPages)
      return false;

    return true;
  };

  render() {
    const { images, selectedImageUrl, isLoading } = this.state;
    
    return (
      <div className={css.App}>
        <Searchbar handleQuery={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onClick={this.handleOpenModal} />
        {this.isLoadMore() && <Button onClick={this.handleClickLoadMore} />}
        {selectedImageUrl && (
          <Modal onClose={this.closeModal}>
            <img src={selectedImageUrl} alt="" />{' '}
          </Modal>
        )}
      </div>
    );
  }
}

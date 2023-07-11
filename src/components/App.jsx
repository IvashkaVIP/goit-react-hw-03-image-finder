import css from './App.module.css';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImages } from './Api/Api';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import {ServiceMessage} from './ServiceMessage/ServiceMessage'
// import { toast } from 'react-toastify';

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
    const { searchQuery, currentPage } = this.state;

    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      this.apiImages(searchQuery, currentPage);
    }
  }

  apiImages = async (query, page) => {
    let data;

    this.setState({ isLoading: true });
    try {
      data = await getImages(query, page);
    } catch (er) {
      console.log(er);
    } finally {
      this.setState({ isLoading: false });
    }
    
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        totalPages: data.totalHits,
      }));

  };

  handleSubmit = ({query}) => {
    if (!query) { alert('The request cannot be empty'); return }
    
    this.setState({ images: [], searchQuery: query, currentPage: 1 });
    
  };

handleClickLoadMore = () => {
  this.setState(prevState => {
    // console.log('Click LoadMore');
      return {
        currentPage: prevState.currentPage + 1,
      };
    });
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
    return !(!searchQuery || currentPage * IMAGE_PER_PAGE >= totalPages);
  };

  render() {
    const { images, selectedImageUrl, isLoading} = this.state;

    return (
      <div className={css.App}>
        <Searchbar handleQuery={this.handleSubmit} />
        {isLoading && <Loader />}
        <ServiceMessage State={ this.state} />
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

import './style.css';
import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import imagesAPI from '../services/images-api';
import { scroll } from '../services/scroll';
import { Button } from './Button/Button';
import Loader from "react-loader-spinner";


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends React.Component {
  state = {
    query: '',
    image: [],
    error: null,
    page: 1,
    status: Status.IDLE,
    selectedImg: null,
  };
    
  componentDidUpdate(prevProps, prevState) {
    const newQuery = this.state.query
    const newPage = this.state.page

    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.setState({ status: Status.PENDING });
      imagesAPI.fetchImages(newQuery, newPage)
        .then(image => this.setState({
          status: Status.RESOLVED,
          image: [...this.state.image, ...image.hits]
        }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
    scroll()
  }
  
  loadNextPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    })
    )}
  newQuery = query => {
    this.setState({ query })
  }
  handleSelectedImg = (selectedImg) => {
    this.setState({ selectedImg });
  }
   closeModal = selectedImage => {
    this.setState({ selectedImg: null });
  }
  render() {
    const { status, query, image, selectedImg } = this.state;
    return (<div><Searchbar query={query} onSubmit={this.newQuery} />
      {status === Status.PENDING &&  <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 
      />}
        {status === Status.IDLE &&  <div>Введите запрос в поиск.</div>}
      {status === Status.REJECTED && <div>Ошибка</div>}
      {status === Status.RESOLVED && <div> <ImageGallery image={image} onSelect={this.handleSelectedImg}/>
        <Button onClick={this.loadNextPage} />
      {selectedImg && (
          <Modal
            srcImg={selectedImg.largeImageURL}
            altImg={selectedImg.tags}
            onClose={this.closeModal}
          />
        )}
      </div>
      }
         </div>)
    
  }
}
import '../style.css';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
      const { srcImg, altImg } = this.props;
      return createPortal(
        <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img width="800" height="600"  src={srcImg} alt={altImg} />
          </div>
         </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
    srcImg: PropTypes.string.isRequired,
  altImg: PropTypes.string.isRequired
}



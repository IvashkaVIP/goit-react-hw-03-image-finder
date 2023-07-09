import { Component } from "react";
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    //console.log(this.props);
    console.log('Modal >>> DidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal >>> WillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      console.log('Modal >>> handleKeyDown : Escape');
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      console.log('Modal >>>  Click on BackDrop');
      this.props.onClose();
    }
  };

  render() {
    return (
      <>
        <div className={css.Overlay} onClick={this.handleBackdropClick}>
          <div className={css.Modal}>{this.props.children}</div>
        </div>
      </>
    );
  }
}
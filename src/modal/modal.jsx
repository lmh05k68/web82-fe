import React from 'react';
import './modal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay} from '@fortawesome/free-solid-svg-icons';
const Modal = ({ movie, onClose }) => {
  return (
    <div className="modal">
        <img src={movie.image} width="450px" height="550px"></img>
        <div className="modal-content">
            <div className="content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{movie.name}</h2>
                <p>{movie.time} min {movie.year}</p>
                <p>{movie.introduce}</p>
                <button className="btn">
                    <FontAwesomeIcon icon={faPlay} />
                    <h4>PLAY MOVIE</h4>
                </button>
            </div>
        </div>
       
    </div>
  );
};
export default Modal;
import React from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../Store/Reducers/taskReducer';

const DeleteModal = ({ onClose, id }) => {

  const dispatch = useDispatch();

  const del = () => {
    dispatch(removeItem(id));
    onClose();
  };

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        <div className="modal-content">
          <p>Are you sure you want to delete this item?</p>
          <div className="buttons">
            <button className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button onClick={del} className="delete-button">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;

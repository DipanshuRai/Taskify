import React from 'react'
import './DeleteBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const DeleteBox = ({onDelete}) => {
  return (
    <div className="delete-box" onClick={onDelete}>
        <div className="icon">
            <FontAwesomeIcon icon={faTrash}/>
        </div>
    </div>
  );
}

export default DeleteBox

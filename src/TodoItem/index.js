import React from 'react';
import { BsCheckSquare } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

import './TodoItem.css';

function TodoItem(props) {


    return (
        <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
        >
            <BsCheckSquare />
        </span>
        <p  className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
        >
            <TiDelete />
        </span>
        </li>
    );
}

export { TodoItem };
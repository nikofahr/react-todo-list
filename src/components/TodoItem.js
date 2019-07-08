import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

export default class TodoItem extends Component {
  render() {
    const {
      title,
      handleDelete,
      handleEdit,
      number,
      editAble,
      handleCompleted
    } = this.props;
    const isClickable = !editAble ? 'clickable' : '';
    const isEditChange = editAble ? null : handleEdit;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
        <h6>
          {number}. {title}
        </h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success clickable"
            onClick={handleCompleted}
          >
            <FontAwesomeIcon icon="check" />
          </span>
          <span
            className={`mx-2 text-info ${isClickable}`}
            onClick={isEditChange}
          >
            <FontAwesomeIcon icon="pen" />
          </span>
          <span className="mx-2 text-danger clickable" onClick={handleDelete}>
            <FontAwesomeIcon icon="trash" />
          </span>
        </div>
      </li>
    );
  }
}

import React from 'react';

export default function CompletedItem(props) {
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
      {props.title}
    </li>
  );
}

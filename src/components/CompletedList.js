import React, { Component } from 'react';
import CompletedItem from './CompletedItem';

export default class CompletedList extends Component {
  render() {
    const { completedItems } = this.props;
    return (
      <ul className="my-3">
        {completedItems.map(item => {
          return <CompletedItem key={item.id} title={item.title} />;
        })}
      </ul>
    );
  }
}

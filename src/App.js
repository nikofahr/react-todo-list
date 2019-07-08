import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBook,
  faTrash,
  faPen,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import CompletedList from './components/CompletedList';

library.add(faBook, faTrash, faPen, faCheck);

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false,
    completedItems: []
  };

  handleChange = event => {
    this.setState({
      item: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({ items: [], item: '', editItem: false });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    this.setState({ items: filteredItems });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };

  handleCompleted = list => {
    const completedList = this.state.completedItems.concat(list);
    const filterItems = this.state.items.filter(item => item.id !== list.id);
    this.setState({ completedItems: completedList, items: filterItems });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-7 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />

            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              statusEdit={this.state.editItem}
              handleCompleted={this.handleCompleted}
            />
          </div>
          <div className="col col-md-5 mt-5">
            <h3 className="text-capitalize text-center">completed list</h3>
            <CompletedList completedItems={this.state.completedItems} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

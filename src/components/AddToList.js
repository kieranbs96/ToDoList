import React from 'react';
import '../styles/addToList.css';

class AddToList extends React.Component {
  render() {
    return (
      <form className="AddToList" onSubmit={this.props.submitHandler}>
        <input
          placeholder="Add a Task.."
          type="text"
          className="AddToList__input"
          value={this.props.term}
          onChange={this.props.changeHandler}
        />
        <button className="AddToList__btn btn">Add To List</button>
      </form>
    );
  }
}

export default AddToList;

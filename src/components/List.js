import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import AddToList from './AddToList';
import '../styles/list.css';

class List extends React.Component {
  render() {
    const items = this.props.items;
    const term = this.props.term;
    const transitionOptions = {
      timeout: { enter: 500, exit: 500 },
      transitionAppear: true
    };
    return (
      <div>
        <ul className="List">
          {items.map((item, index) => (
            <CSSTransition classNames="item" key={index} {...transitionOptions}>
              <li
                onClick={this.props.removeItem}
                className="List__item"
                key={index}
              >
                {item}
              </li>
            </CSSTransition>
          ))}
        </ul>
        <AddToList
          submitHandler={this.props.submitHandler}
          changeHandler={this.props.changeHandler}
          items={items}
          term={term}
        />
      </div>
    );
  }
}

export default List;

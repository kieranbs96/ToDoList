import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './styles/global.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: ['Example Task']
    };
  }

  componentDidMount() {
    let storageState = JSON.parse(localStorage.toDoState);
    this.setState({ ...storageState });
  }

  pushToLocalStorage = () => {
    localStorage.setItem('toDoState', JSON.stringify(this.state));
  };

  onChange = event => {
    this.setState({ term: event.target.value }, this.pushToLocalStorage);
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.term !== '') {
      this.setState(
        {
          term: '',
          items: [...this.state.items, this.state.term]
        },
        this.pushToLocalStorage
      );
    }
  };

  removeItem = event => {
    let editedStateItems = this.state.items;
    editedStateItems.splice(
      editedStateItems.indexOf(event.target.innerText),
      1
    );
    this.setState(
      { term: this.state.term, items: [...editedStateItems] },
      this.pushToLocalStorage
    );
  };

  render() {
    return (
      <div className="container">
        <Header />
        <List
          submitHandler={this.onSubmit}
          changeHandler={this.onChange}
          items={this.state.items}
          term={this.state.term}
          removeItem={this.removeItem}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

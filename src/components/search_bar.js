import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return <input onChange={this.onInputChange} />;
  }

  // event handler
  onInputChange(event) {
    console.log(event);
  }
}

export default SearchBar;

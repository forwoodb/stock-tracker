import React, {Component} from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Stock:</label>
          <input/>
          <label>Price:</label>
          <input/>
          <label>Shares:</label>
          <input/>
        </form>
      </div>
    );
  }
}
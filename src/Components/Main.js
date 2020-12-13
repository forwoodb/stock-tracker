import React, {Component} from 'react';
import Form from './Form';
import Table from './Table';
import Cash from './Cash';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [
        {
          id: 1,
          stock: 'OPGN',
          price: 2.99,
          shares: 1,
          broker: 'Robinhood',
        },
        {
          id: 2,
          stock: 'OSG',
          price: 2.32,
          shares: 1,
          broker: 'Robinhood',
        },
        {
          id: 3,
          stock: 'VIAC',
          price: 15.75,
          shares: 1,
          broker: 'WeBull',
        },
      ],

    }
  }

  render() {
    return (
      <div>
        <Form/>
        <Cash/>
        <Table stocks={this.state.stocks}/>
      </div>
    );
  }
}
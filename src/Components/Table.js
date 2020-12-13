import React, {Component} from 'react';

export default class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Shares</th>
            <th>Total</th>
            <th>Broker</th>
          </tr>
        </thead>
        <tbody>
          {this.props.stocks.map((stock) => {
            return (
              <Row
                key={stock.id}
                stock={stock.stock}
                price={stock.price}
                shares={stock.shares}
                broker={stock.broker}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

function Row(props) {
  const price = props.price;
  const shares = props.shares;
  const total = price * shares;

  return (
    <tr>
      <td>{props.stock}</td>
      <td>{price}</td>
      <td>{shares}</td>
      <td>{total}</td>
      <td>{props.broker}</td>
    </tr>
  );
}
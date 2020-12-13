import React, {Component} from 'react';

export default class Cash extends Component {
  constructor() {
    super();
    this.state = {
      accounts: [
        {
          id: 1,
          account: 'Robinhood',
          amount: 13.67,
        },
        {
          id: 2,
          account: 'WeBull',
          amount: 18.16,
        },
      ],
    }
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Cash</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.accounts.map((account) => {
            return (
              <AccountRow
                key={account.id}
                account={account.account}
                amount={account.amount}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

function AccountRow(props) {
  return (
    <tr>
      <td>{props.account}</td>
      <td>{props.amount}</td>
    </tr>
  );
}
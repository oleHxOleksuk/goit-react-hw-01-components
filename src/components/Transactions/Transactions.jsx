import css from './Transactions.module.css';

import PropTypes from 'prop-types';

const createColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 300) +
      ',' +
      Math.round(Math.random() * 300) +
      ',' +
      Math.round(Math.random() * 300) +
      ',' +
      0.2 +
      ')';
  
    return color;
  };
  
  export const TransactionStory = ({ items }) => {
    return (
      <table>
        <thead>
          <tr className={css.tipe}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} style={{ backgroundColor: createColor() }}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  TransactionStory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };
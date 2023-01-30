import PropTypes from "prop-types";
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css['transaction-history']}>
  <thead >
    <tr className={css['transaction-thead']}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => {
    return(
    <tr className={css['transaction-tbody']} key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    );
  })}
  </tbody>
</table>
    )
}

TransactionHistory.protoType = {
    items: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string
    })
    }
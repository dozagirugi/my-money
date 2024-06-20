import styles from "./Home.module.css";

export default function TransactionList({ transactions }) {
  return (
    <div className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{transaction.amount}원</p>
        </li>
      ))}
    </div>
  );
}

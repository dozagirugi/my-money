import styles from "./Home.module.css";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions"); // 삭제 메서드 가져오기
  return (
    <div className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>{transaction.amount}원</p>
          <button onClick={() => deleteDocument(transaction.id)}>X</button>
        </li>
      ))}
    </div>
  );
}

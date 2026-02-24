import { IconBank } from "../Icons";
import styles from "./accountitem.module.css";

export const AccountItem = ({ account }) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.account}>
        <div className={styles.info}> 
            <p className={styles.bank}><IconBank /> {account.bank}</p>
        </div>
        <div className={styles.details}>
            <p>Saldo</p>
            <p>{formatter.format(account.balance)}</p>
        </div>
    </div>
  );
};

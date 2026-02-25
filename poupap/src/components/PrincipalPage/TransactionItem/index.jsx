import styles from "./transactionitem.module.css";

const formater = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

export const TransactionItem  = ({item}) => {

    const isExpense = item.value < 0;

  return (
    <div className={styles.transaction}>
        <div className={styles.details + (isExpense ? ' ' + styles.expense : ' ' + styles.income)}>
            <p>{item.description}</p>
            <p>{formater.format(item.value)}</p>
        </div>
        <div className={styles.date}>
            {new Date(item.date).toLocaleDateString('pt-BR')}
        </div>
    </div>
  );
};
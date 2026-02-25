import styles from "./accounts.module.css";
import { AccountItem } from "../AccountItem";
import { IconBank, IconWallet } from "../Icons";
import { Button } from "../Button";

export const Accounts = () => {
  const accounts = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
  ];

  return (
    <>
        <ul className={styles.list}>
        {accounts.map((account, index) => {
            return (
                <li key={index}>
                    <AccountItem account={account} />
                </li>
            );
        })}
        </ul>
        <div className={styles.actions}>
            <Button variant="primary">
                <IconWallet /> Ver mais
            </Button>
        </div>
    </>
  );
};

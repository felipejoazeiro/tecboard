import styles from './aside.module.css';

export const Aside = ({ children }) => {
  return <aside className={styles.aside}>{children}</aside>;
};
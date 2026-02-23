import styles from './aside.module.css';
import logo from '../../assets/logo.svg';

export const Aside = ({ children }) => {
  return <aside className={styles.aside}>
    <img src={logo} alt="Logo" />
    <footer className={styles.footer}>
        Desenvolvido sem fins lucrativos por Alura e Tecboard.
    </footer>
  </aside>;
};
import { IconSavings } from '../Icons';
import { ProgressBar } from '../ProgressBar';
import styles from './savingsstatus.module.css';

export const SavingsStatus = ({ percent }) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
            <ProgressBar percent={percent} />
        </div>
    );
}
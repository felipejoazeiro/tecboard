import styles from './typography.module.css'

const TAGS = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p'
}

export const Typography = ({ variant, children }) => {
    const Component = TAGS[variant] || 'p';
    return (
        <Component className={styles[variant] || styles.p}>{children}</Component>
    );
}
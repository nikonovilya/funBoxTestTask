import styles from './Container.module.sass';

const Container = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container;

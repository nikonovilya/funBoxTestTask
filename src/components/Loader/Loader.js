import styles from './Loader.module.sass';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.Wrapper}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

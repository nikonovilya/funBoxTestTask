import styles from './ErrorBlock.module.sass';

const ErrorBlock = () => {
  return (
    <div className={styles.ErrorBlock}>
      <div className={styles.Content}>
        <span className={styles.Message}>Произошла ошибка.</span>
        <span className={styles.Offer}>Попробуйте перезагрузить страницу.</span>
      </div>
    </div>
  );
};

export default ErrorBlock;

import React from 'react';
import plural from 'plural-ru';
import clsx from 'clsx';
import styles from './Product.module.sass';
import catImg from '../../assets/img/cat.webp';

const Product = ({
  tagline,
  taglineNegative,
  title,
  filling,
  servingsCount,
  servingsWords,
  giftCount,
  giftWords,
  clarification,
  weight,
  weightUnit,
  description,
  disabled,
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  const servingsPluralWord = plural(
    servingsCount,
    servingsWords[0],
    servingsWords[1],
    servingsWords[2]
  );
  const giftPluralWord = plural(
    giftCount,
    giftWords[0],
    giftWords[1],
    giftWords[2]
  );

  const toggleActiveClass = () => {
    setIsActive((isActive) => !isActive);
    setIsHover(false);
  };
  const addActiveClass = () => {
    setIsActive(true);
    setIsHover(false);
  };
  const addHoverClass = () => {
    setIsHover(true);
  };
  const removeHoverClass = () => {
    setIsHover(false);
  };

  return (
    <div className={clsx(styles.Product, disabled ? styles.disabled : '')}>
      <div
        className={clsx(
          styles.Card,
          isActive ? styles.active : '',
          isHover ? styles.hover : ''
        )}
        onClick={toggleActiveClass}
        onMouseEnter={addHoverClass}
        onMouseLeave={removeHoverClass}
      >
        <div className={styles.Background}></div>
        <div
          className={styles.BackgroundImage}
          style={{ backgroundImage: `url(${catImg})` }}
        ></div>
        <p className={clsx(styles.Tagline, isHover ? styles.hover : '')}>
          {isActive && isHover ? taglineNegative : tagline}
        </p>
        <h2 className={styles.Title}>{title}</h2>
        <p className={styles.Filling}>{filling}</p>
        <p className={styles.Servings}>
          <span className={styles.ServingsCount}>{servingsCount} </span>
          <span>{servingsPluralWord}</span>
        </p>
        <p className={styles.Gift}>
          <span className={styles.GiftCount}>
            {giftCount > 1 ? `${giftCount} ` : ''}
          </span>
          <span>{giftPluralWord} </span>
          <span>в подарок</span>
        </p>
        {clarification ? (
          <p className={styles.Сlarification}>заказчик доволен</p>
        ) : null}
        <div className={styles.Weight}>
          <span className={styles.WeightCount}>{weight}</span>
          <span className={styles.WeightUnit}>{weightUnit}</span>
        </div>
      </div>
      <div className={styles.Offer}>
        {disabled ? (
          <span className={clsx(styles.OfferText, styles.disabled)}>
            Печалька, <span>{filling}</span> закончился.
          </span>
        ) : (
          <>
            {isActive ? (
              <span className={styles.OfferText}>{description}</span>
            ) : (
              <>
                <span className={styles.OfferText}>
                  Чего сидишь? Порадуй котэ, 
                </span>
                <button
                  className={clsx(styles.Btn, isHover ? styles.hover : '')}
                  onClick={addActiveClass}
                  onMouseEnter={addHoverClass}
                  onMouseLeave={removeHoverClass}
                >
                  <span className={styles.BtnWord}>купи</span>
                  <span>.</span>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;

import React from 'react';
import axios from 'axios';
import Container from '../../components/Container/Container';
import Product from '../../components/Product/Product';
import Loader from '../../components/Loader/Loader';
import ErrorBlock from '../../components/ErrorBlock/ErrorBlock';
import styles from './ProductsPage.module.sass';

const ProductsPage = () => {
  const [products, setProducts] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get('./productsData.json');
        setProducts(data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className={styles.ProductsPage}>
      <>
        {isLoading && <Loader />}
        {!isLoading && hasError && <ErrorBlock />}
        {!isLoading && !hasError && (
          <>
            <div className={styles.Content}>
              <Container>
                <h1 className={styles.Title}>Ты сегодня покормил кота?</h1>
                <div className={styles.Grid}>
                  {Object.keys(products).map((key, index) => {
                    const product = products[key];

                    return (
                      <Product
                        key={product.id}
                        tagline={product.tagline}
                        taglineNegative={product.taglineNegative}
                        title={product.title}
                        filling={product.filling}
                        servingsCount={product.servingsCount}
                        servingsWords={product.servingsWords}
                        giftCount={product.giftCount}
                        giftWords={product.giftWords}
                        clarification={product.clarification}
                        weight={product.weight}
                        weightUnit={product.weightUnit}
                        description={product.description}
                        disabled={product.disabled}
                      />
                    );
                  })}
                </div>
              </Container>
            </div>
          </>
        )}
        <div className={styles.Overlay}></div>
      </>
    </div>
  );
};

export default ProductsPage;

import React, { useContext } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";
import styles from "./products.module.css";

const Products = ({ products, showAll }) => {

  return (
    <div className={styles.toolbar}>
      <h1 className={styles.title}>Omiljeni proizvodi kupaca</h1>
        <Grid
          className={styles.mainGridStyle}
          container
          justifyContent="flex-start"
        >
          {products.map((product, i) => (
            <Grid
              className={styles.productGridStyle}
              key={product.id}
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
            >
              <Product
                product={product}
              
              />
            </Grid>
          ))}
        </Grid>
      {!showAll && (
        <Link
          href="/asortiman"
          className={styles.viewAllLink}
        >
         Vidi sve
        </Link>
      )}
    </div>
  );
};

export default Products;

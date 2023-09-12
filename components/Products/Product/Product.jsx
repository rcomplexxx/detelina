import React from "react";
import { IconButton, CardActions, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import styles from "./product.module.css";

const Product = ({ product }) => {
 

  const router = useRouter();

  return (
    <div className={styles.root}>
      <Link href={"products/" + product.id}>
        <div className={styles.media}>
          <Image
            src={`/images/` + product.image} // Path to your image from the `public` directory
            alt="Example Image"
            className="object_fit_cover"
            fill
          />
        </div>
      </Link>
      <div className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
         
       
      </div>
      
    </div>
  );
};

export default Product;

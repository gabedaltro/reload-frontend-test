import { makeStyles } from "@material-ui/styles";
import React from "react";
import { DefaultTheme } from "styled-components";
import { Product } from "types/product";
import ProductItem from "./ProductItem";

interface ProductsProps {
  products: Product[];
}

const useStyles = makeStyles((theme: DefaultTheme) => ({
  listProducts: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    transition: "all 0.3s ease",
    gap: 20,
    justifyItems: "center",
    justifySelf: "center",
    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const Products: React.FC<ProductsProps> = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.listProducts}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;

/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/styles";
import Typography from "components/typography/Typography";
import { Star } from "components/vector/Star";
import React from "react";
import { Product } from "types/product";

interface ProductIconsProps {
  product: Product;
}

const useStyles = makeStyles({
  pill: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F5F7FE",
    width: 46,
    borderRadius: 4,
  },
});

const ProductIcons: React.FC<ProductIconsProps> = ({ product }) => {
  const classes = useStyles();

  return (
    <>
      {product.isInPack && <Star />}
      {product.hasPrecaution && (
        <img src="images/hasPrecaution.png" alt="precaução" />
      )}
      <span className={classes.pill}>
        <img src="images/pill.png" width={16} alt="comprimido" />
        <Typography color="#545976" size={14}>
          {product.capsuleAmount}
        </Typography>
      </span>
    </>
  );
};

export default ProductIcons;

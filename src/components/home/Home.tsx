import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { products } from "json/products";
import { makeStyles } from "@material-ui/styles";
import Products from "components/products/Products";
import Typography from "components/typography/Typography";
import { DefaultTheme, useTheme } from "styled-components";
import { useApp } from "providers/app";

const useStyles = makeStyles((theme: DefaultTheme) => ({
  pageHeader: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 15,
  },
  content: {
    marginBottom: 15,
    display: "grid",
  },
  quantityProducts: {
    fontWeight: "bold",
    color: theme.primaryLight,
  },
}));

const Home: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { loading } = useApp();

  return loading ? (
    <div className={classes.pageHeader}>
      <Skeleton width={125} />
      <div style={{ display: "flex", gap: 5 }}>
        <Skeleton width={125} />
        <Skeleton width={125} style={{ backgroundColor: theme.primaryLight }} />
      </div>
    </div>
  ) : (
    <div>
      <div className={classes.pageHeader}>
        <Typography bold color="#545976" size={14}>
          Best Product
        </Typography>
        <Typography color="#545976" size={14}>
          From a base of{" "}
          <span className={classes.quantityProducts}>3456 products</span>
        </Typography>
      </div>
      <div className={classes.content}>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Home;

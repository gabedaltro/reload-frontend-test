/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useApp } from "providers/app";
import { Product } from "types/product";
import Button from "components/button/Button";
import { makeStyles } from "@material-ui/styles";
import { DefaultTheme } from "styled-components";
import { moneyFormat } from "helpers/numberFormat";
import { IoIosAddCircleOutline } from "react-icons/io";
import Typography from "components/typography/Typography";
import CircularProgress from "components/circular-progress/CircularProgress";
import ProductIcons from "./icons/ProductIcons";
import { addToCart, removeCartProduct } from "store/modules/cart/action";
import ModalConfirmeDelete from "./ModalConfirmeDelete";

interface ProductItemProps {
  product: Product;
}

const useStyles = makeStyles((theme: DefaultTheme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 396,
    height: 334,
    borderRadius: 8,
    boxShadow: "0px 6px 6px 0px #C6C9D6",
    position: "relative",
    padding: 10,
    [theme.breakpoints.down("lg")]: {
      width: "100%",
      "&.skeleton": {
        width: 396,
      },
    },
  },
  icons: {
    display: "flex",
    gap: 8,
  },
  description: {
    display: "flex",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  score: {
    "& > span": {
      fontWeight: "bold",
      color: theme.secondary,
    },
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F7FE",
    borderRadius: 9,
    gap: 10,
    padding: "10px 20px",
  },
  align: {
    display: "flex",
    gap: 5,
  },
  health: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
    "& > div > span": {
      display: "flex",
      gap: 3,
    },
  },
  infoTechnical: {
    display: "grid",
    gap: 5,
  },
  healthGoal: {
    color: "#fff",
    fontSize: 11,
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    height: 15,
    width: 15,
    padding: 0,
    borderRadius: "100%",
    background: `linear-gradient(180.32deg, #2EFFAF 15.34%, #00AAFF 98.15%)`,
  },
  progress: {
    border: "1px solid #999",
    borderRadius: "100%",
    height: 35,
    width: 35,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  itemInCircularProgress: {
    margin: "auto",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    position: "absolute",
  },
  buttonAddCart: {
    justifyContent: "end",
    display: "flex",
  },
}));

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const classes = useStyles();
  const { dispatch, cart } = useApp();
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    if (cart.products.length === 4) {
      toast.error("The cart is full");
      return;
    }

    cart.products.map((item) => {
      item.id === product.id ? setShowModal(true) : undefined;
      return;
    });

    dispatch(addToCart(product));
  }

  function handleDelete() {
    dispatch(removeCartProduct(product.id));
    setShowModal(false);
  }

  return (
    <div className={classes.box}>
      {showModal && (
        <ModalConfirmeDelete
          onDelete={handleDelete}
          product={product}
          onExit={() => setShowModal(false)}
        />
      )}
      <div className={classes.icons}>
        <ProductIcons product={product} />
      </div>
      <div className={classes.description}>
        <div className={classes.infoTechnical}>
          <Typography color="#545976" size={8}>
            {product.brand}
          </Typography>
          <Typography bold color="#545976" size={15}>
            {product.name}
          </Typography>
          <Typography size={13} className={classes.score}>
            Votré compabilité <span>{product.score}/100</span>
          </Typography>
        </div>
        <img src="images/magnesium.png" alt="foto-remédio" />
      </div>
      <div className={classes.infos}>
        <div className={classes.health}>
          <div>
            <span>
              <Typography className={classes.align} bold size={13}>
                Health goals
              </Typography>
              <span className={classes.healthGoal}>
                {product.healthGoals.length}
              </span>
            </span>
            <Typography size={12} color="#999">
              Améliorer les perfomances
            </Typography>
          </div>
          <div className={classes.progress}>
            <CircularProgress size={35} value={30}>
              <img
                className={classes.itemInCircularProgress}
                src="images/medalha.png"
                width={13.5}
                height={20.25}
                alt="medalha"
              />
            </CircularProgress>
          </div>
        </div>

        <div className={classes.health}>
          <div>
            <span>
              <Typography className={classes.align} bold size={13}>
                Symptoms
              </Typography>
              <span className={classes.healthGoal}>
                {product.symptoms.length}
              </span>
            </span>
            <Typography size={12} color="#999">
              Mémorie
            </Typography>
          </div>
          <div className={classes.progress}>
            <CircularProgress size={35} value={30}>
              <img
                className={classes.itemInCircularProgress}
                src="images/cerebro.png"
                alt="medalha"
                width={21.85}
                height={20.16}
              />
            </CircularProgress>
          </div>
        </div>
      </div>

      <div className={classes.buttonAddCart}>
        <Button
          onClick={handleClick}
          style={{ fontWeight: "bold" }}
          palette="secondary"
        >
          {moneyFormat(product.price)} <IoIosAddCircleOutline size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

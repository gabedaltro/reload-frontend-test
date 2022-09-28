/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { makeStyles } from "@material-ui/styles";
import Typography from "components/typography/Typography";
import CircularProgress from "components/circular-progress/CircularProgress";
import { useApp } from "providers/app";

const useStyles = makeStyles({
  header: {
    width: "100%",
    background: `linear-gradient(180deg, #3135C6 14.08%, #00AAFF 89.86%)`,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 15px",
    marginBottom: 30,
  },
  logo: {
    height: 27,
    maxWidth: 120,
  },
  cart: {
    background: "#fff",
    padding: 5,
    borderRadius: "100%",
    display: "grid",
    position: "relative",
    width: 30,
    justifyContent: "center",
    height: 30,
  },
  cartAndProgress: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  quantity: {
    height: 30,
    width: 30,
    borderRadius: "100%",
    display: "grid",
    justifyContent: "center",
    padding: 5,
    boxShadow: "0px 2px 2px rgba(84, 89, 118, 0.46)",
    background: `linear-gradient(180.32deg, #2EFFAF 15.34%, #00AAFF 98.15%)`,
  },
  progress: {
    position: "absolute",
    left: 0,
    top: 0,
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  const { cart } = useApp();

  return (
    <header className={classes.header}>
      <img className={classes.logo} src="images/kpsule.png" alt="logo kpsule" />
      <div className={classes.cartAndProgress}>
        <div className={classes.quantity}>
          <Typography size={18} color="#fff">
            {cart.products.length}
          </Typography>
        </div>
        <div className={classes.cart}>
          <BsCart3 />
          <div className={classes.progress}>
            <CircularProgress value={cart.products.length * 25} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

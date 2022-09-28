import React from "react";
import { Product } from "types/product";
import { DefaultTheme } from "styled-components";
import { makeStyles } from "@material-ui/styles";
import { Button, Dialog, Icon } from "@mui/material";
import Typography from "components/typography/Typography";

interface ModalConfirmeDeleteProps {
  product: Product;
  onExit(): void;
  onDelete(): void;
}

const useStyles = makeStyles((theme: DefaultTheme) => ({
  container: {
    padding: 40,
    borderRadius: 30,
    maxWidth: 396,
    height: 299,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 119,
    height: 83,
  },
  cancelButton: {
    background: "#E6E7EC",
    padding: "5px 30px",
    color: theme.contrast,
    borderRadius: 30,
    textTransform: "initial",
    fontWeight: "bold",
    "&:hover": {
      background: "#666",
    },
  },
  deleteButton: {
    textTransform: "initial",
    padding: "5px 30px",
    borderRadius: 30,
    background: "#21E7C5",
    fontWeight: "bold",
    color: theme.contrast,
    "&:hover": {
      background: "#097f6a",
    },
  },
  buttons: {
    display: "flex",
    gap: 10,
  },
  closeModal: {
    position: "absolute",
    right: 10,
    top: 10,
    cursor: "pointer",
  },
}));

const ModalConfirmeDelete: React.FC<ModalConfirmeDeleteProps> = ({
  product,
  onExit,
  onDelete,
}) => {
  const classes = useStyles();

  return (
    <Dialog open onClose={onExit}>
      <Icon onClick={onExit} className={classes.closeModal}>
        X
      </Icon>
      <div className={classes.container}>
        <img
          className={classes.image}
          src="images/cartFull.png"
          alt="cart-full"
        />

        <Typography bold size={13}>
          You've already added {`"${product.name}"`} to your basket. Do you want
          to remove it?
        </Typography>

        <div className={classes.buttons}>
          <Button className={classes.deleteButton} onClick={onDelete}>
            Yes
          </Button>
          <Button className={classes.cancelButton} onClick={onExit}>
            No keep it
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ModalConfirmeDelete;

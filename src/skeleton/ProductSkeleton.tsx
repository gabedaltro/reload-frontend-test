import React from "react";
import { Skeleton } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { DefaultTheme } from "styled-components";

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
  infos: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F5F7FE",
    borderRadius: 9,
    gap: 10,
    padding: "10px 20px",
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
  buttonAddCart: {
    justifyContent: "end",
    display: "flex",
  },
}));

const ProductSkeleton: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.box} skeleton`}>
      <div className={classes.icons}>
        <Skeleton width={30} height={40} />
        <Skeleton width={30} height={40} />
        <Skeleton width={60} height={40} />
      </div>
      <div className={classes.description}>
        <div className={classes.infoTechnical}>
          <Skeleton width={50} />
          <Skeleton width={230} />
          <Skeleton width={230} />
        </div>
        <Skeleton width={80} style={{ borderRadius: "100%" }} height={120} />
      </div>
      <div className={classes.infos}>
        <div className={classes.health}>
          <div>
            <span>
              <Skeleton width={150} />
            </span>
          </div>
          <div className={classes.progress}></div>
        </div>
        <div className={classes.health}>
          <div>
            <span>
              <Skeleton width={150} />
            </span>
          </div>
          <div className={classes.progress}></div>
        </div>
      </div>
      <div className={classes.buttonAddCart}>
        <Skeleton width={150} height={40} style={{ borderRadius: 20 }} />
      </div>
    </div>
  );
};

export default ProductSkeleton;

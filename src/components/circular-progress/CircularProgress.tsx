import React from "react";
import { makeStyles } from "@material-ui/styles";
import { CircularProgress as CircularProgressUI } from "@mui/material";

const useStyles = makeStyles({
  iconProgress: {
    color: "#00AAFF",
    position: "absolute",
    margin: "auto",
  },
});

interface CircularProgressProps {
  value: number;
  size?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  children,
  size = 30,
}) => {
  const classes = useStyles();

  return (
    <>
      <CircularProgressUI
        variant="determinate"
        className={classes.iconProgress}
        size={size}
        value={value}
      />
      {children}
    </>
  );
};

export default CircularProgress;

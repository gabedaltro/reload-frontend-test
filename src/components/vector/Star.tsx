import React, { HtmlHTMLAttributes } from "react";

export const Star: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div
      style={{
        backgroundImage: 'url("images/rectangle.png")',
        height: 24,
        width: 24,
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
      {...props}
    >
      <img
        src="images/star.png"
        style={{ top: "20%", position: "absolute" }}
        width={14}
        height={14}
        alt="estrela"
      />
    </div>
  );
};

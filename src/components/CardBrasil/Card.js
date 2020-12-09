import React from "react";
import Typography from "@material-ui/core/Typography";
import "./styles/styleCard.css";

function Card({ title, link, description, children }) {
  return (
    <div className="card">
      <div>
        <a href={link}>
          <Typography>{title}</Typography>
        </a>
        {description ? <p>{description}</p> : <div>{children}</div>}
      </div>
    </div>
  );
}

export default Card;

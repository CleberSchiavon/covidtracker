import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Card from "./Card";

const useStyles = makeStyles({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },

  table: {
    width: 100,
    tableLayout: 'fixed',
  },

  textRight: {
    textAlign: 'left',
  },

  td: {
    padding: 6,
    textAlign: 'left',
    verticalAlign: 'middle',
    fontWeight: 300,
    fontSize: 12,
    color: '#fff',
    borderBottom:'solid 1px rgba(255, 255, 255, 0.1)',
  },

  tableScroll:  {
    maxHeight: 600,
    overflow: 'auto',
  },

})


function CardBrasil() {

  const classes = useStyles();
  
  return (
    <Card title="Números do Covid-19 no Brasil por Estado (EM BREVE)">
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <span role="img" aria-label="alert">
                📍
              </span>{" "}
              <Typography
                style={{ color: "#2b2b2b", fontSize: 15, marginRight: 20 }}
                variant="inherit"
              >
                Estado
              </Typography>
            </td>
            <td>
              <span role="img" aria-label="alert">
                🚨
              </span>{" "}
              <Typography
                style={{ color: "#2b2b2b", fontSize: 15, marginRight: 20 }}
                variant="inherit"
              >
                Confirmados
              </Typography>
            </td>
            <td>
              <span role="img" aria-label="death">
                💀
              </span>{" "}
              <Typography
                style={{ color: "#2b2b2b", fontSize: 15, marginRight: 20 }}
                variant="inherit"
              >
                Mortes
              </Typography>
            </td>
          </tr>
        </thead>
      </table>
    </div>

  </Card>
  )
}

export default CardBrasil;
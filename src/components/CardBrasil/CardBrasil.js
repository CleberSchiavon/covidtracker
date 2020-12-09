import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Card from "./Card";
import "./styles/styleBRCard.css";
import { fetchStateData } from "../../api";

function CardBrasil() {
  const [data, setData] = useState([]);

  // Obter data dos estados pela API e setar a data no state
  useEffect(() => {
    async function fetchData() {
      const result = await fetchStateData();
      setData(result.data.data.sort((a, b) => (a.cases < b.cases ? 1 : -1))); // Essa logica aqui serve pra ordenar por maior numeros de casos
    }
    fetchData();
  }, []);

  function obterBandeira(uf) {
    return `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`;
  }

  return (
    <Card title="Números do Covid-19 no Brasil por Estado (BETA)">
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
                  Casos
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
        <div className="table-scroll">
          <table className="tbl-header">
            {data.map((
              report // MAP PRA LISTAR OS ESTADOS COM OS CASOS E MORTES
            ) => (
              <thead key={report.uid}>
                <tr>
                  <td className="flex">
                    <img
                      src={obterBandeira(report.uf)}
                      alt="uf flag"
                      width="20px"
                    />
                    <span>{report.uf}</span>
                  </td>
                  <td className="text-right">{report.cases}</td>
                  <td className="text-right">{report.deaths}</td>
                </tr>
              </thead>
            ))}
          </table>
        </div>
      </div>
    </Card>
  );
}

export default CardBrasil;

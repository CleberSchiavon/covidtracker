import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Typography} from '@material-ui/core'

import Card from './Card';
import analityc from '../../util/analytic';


function CountryCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fethData() {
      const result = await axios.get(
        "covid19-brazil-api.now.sh/api/report/v1",
      );
      setData(result.data.data.sort((a, b) => (a.cases < b.cases ? 1 : -1)));
    }
    fethData();
  }, []);

  function formatNumber(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  }

  function formatDate(date) {
    const d = new Date(date);
    const day = `${formatNumber(d.getDate())}/${formatNumber(d.getMonth() + 1)}/${d.getFullYear()}`;
    const hour = `${formatNumber(d.getHours())}:${formatNumber(d.getMinutes())}`;
    return `${day} - ${hour}`;
  }

  const stateCasesToStings = (report) => (`*${report.uf}* Casos ${report.cases} Mortes ${report.deaths} \n`);

  function getFlag(uf) {
    return `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`;
  }

  return (
    <Card
      title="Números do Covid-19 no Brasil por Estado (EM BREVE0"
    >
      <div>
       <Typography color='textSecondary'>Em breve</Typography>
        </div>


      <style jsx>
        {`
          .flex {
            display: flex;
            flex-direction: row;
          }
          table {
            width:100%;
            table-layout: fixed;
          }
          .text-rigth {
            text-align: left;
          }
          td{
            padding: 6px;
            text-align: left;
            vertical-align:middle;
            font-weight: 300;
            font-size: 12px;
            color: #fff;
            border-bottom: solid 1px rgba(255,255,255,0.1);
          }
          td > img {
            margin-right: 8px;
          }
          .table-scroll {
            max-height: 600px;
            overflow: auto;
          }
      `}
      </style>
    </Card>
  );
}

export default CountryCard;

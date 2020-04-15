import React from 'react';

//imports
import { Card, Chart, CountryPicker } from './components'
import { Typography } from "@material-ui/core";
//styles

import styles from './App.module.css';

// api
import { fetchData } from './api';

//image
import Image from './assets/COVID-19.png';

class App extends React.Component {
    
    state = {
        data: {},
        country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });        
    }

    handleCountryChange = async (country) => {
        
        if (country === 'global'){
            await fetchData();
        }
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country })
        
    }

    render(){
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={Image} alt="COVID-19"/>
                <Card data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Typography style={{justifyContent: 'flex-start', marginTop: 20, marginBottom: 6}} color="textSecondary">
                Cleber Schiavon @ 2020
                </Typography>
            </div>
        )
    }
}

export default App;
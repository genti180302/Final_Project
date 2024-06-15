import React, {useEffect, useState} from "react";
import "./exchangedatatable.scss"
import fetch from "node-fetch";
import Searchbar from "../Searchbar/searchbar";



const Exchangedatatable = () => {
        const headers = [
            {key:"id", label:"#"},
            {key:"name", label:"Exchange"},
            {key:"trust_score", label:"Trust Score"},
            {key:"trust_score_rank", label:"Trust Score Rank"},
            {key:"trade_volume_24h_btc_normalized", label:"24h Volume (Normalized)"},
            {key:"trade_volume_24h_btc", label:"24h Volume"}
        ]
    const [filteredExchanges, setFilteredExchanges] = useState([]);
    const [getExchanges, setGetExchanges] = useState([]);


    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/exchanges';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-Gd3yQ9vXsw14rfX83GTVNAEU'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setGetExchanges(data)
                setFilteredExchanges(data)
            })
            .catch(err => console.error('error:' + err));
    }, []);

    const handleSearch = (query) => {
        const filteredData = getExchanges.filter(exchange => exchange.name.toLowerCase().includes(query.toLowerCase()));
        setFilteredExchanges(filteredData)
    }


    return (
        <>
            <Searchbar onSearch={handleSearch}/>
            <table>
                <thead>
                <tr>
                    {headers.map((header) => {
                        return <th key={header.key}>{header.label}</th>
                    })}
                </tr>
                </thead>
                <tbody>
                {filteredExchanges.map((exchange, index) => {
                    return <tr key={exchange.id}>
                        <td> {index + 1}</td>
                        <td>
                                {/*<Link className='Exchange-linkStyle' to={`/details_/${exchange.id}`}>*/}
                                    <img className='Exchange-imgStyle' src={exchange.image}
                                         alt={exchange.name}/> {exchange.name}
                                    <span className='Exchange-symbol-Style'> {exchange.symbol} </span>
                                {/*</Link>*/}
                        </td>
                        <td> {exchange.trust_score}</td>
                        <td> {exchange.trust_score_rank}</td>
                        <td> {exchange.trade_volume_24h_btc_normalized.toLocaleString()}</td>
                        <td> {exchange.trade_volume_24h_btc}</td>

                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
}

export default Exchangedatatable
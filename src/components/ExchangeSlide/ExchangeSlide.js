import React, {useEffect, useState} from "react";
import '../ExchangeSlide/exchangeslide.scss'
import fetch from "node-fetch";
import {Link} from "react-router-dom";

const ExchangeSlide = () => {
    const [exchange, setExchange] = useState([]);
    const exchangeID = [270, 513, 24, 311, 89];
    const apiKey = '99beb61c-8840-42bb-b180-eabd3e54fd1e';

    useEffect(() => {
        Promise.all(exchangeID.map(id =>
            fetch(`https://pro-api.coinmarketcap.com/v1/exchange/info?id=${id}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'X-CMC_PRO_API_KEY': apiKey,
                }
            })
                .then(response => response.json())
        ))
            .then(data => {
                console.log(data);
                setExchange(data);
            })
            .catch(error => console.log(error));
    }, []);

    return(
        <>
            <div className='HeaderContainer'>
                <h1> Top Exchanges </h1>
            </div>
            <div>
                {exchange.length > 0 && exchange.map((exchangeData, index) => (
                    <div key={index} className={'ExchangeSlideStyle'}>
                        {Object.keys(exchangeData.data).map(key => (
                            <Link className={'Exchange-linkStyle'} to={`/details_/${exchangeData.data[key].id}`}>
                                <React.Fragment key={exchangeData.data[key].id}>
                                    <div className={'ExchangeDetailDesign'}>
                                    <img className='ExchangeSlideImgStyle' src={exchangeData.data[key].logo}
                                         alt={exchangeData.data[key].name}/>
                                        <p>{exchangeData.data[key].name}</p>
                                        <p>Visitors: {exchangeData.data[key].weekly_visits}</p>
                                    </div>
                                </React.Fragment>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ExchangeSlide;


// useEffect(() => {
//     Promise.all(exchangeID.map(id =>
//         fetch(`https://min-api.cryptocompare.com/data/v2/pair/mapping/exchange?e=${id}`, {
//             method: 'Get',
//             headers: {
//                 'accept': 'application/json',
//                 'authorization': `Apikey ${apiKey}`,
//             }})
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 setExchange(data)
//             }) // Return an object with id and data
//             .catch(error => console.log(error))
//     ))
//         .then(results => {
//             setExchange(results)
//         })
// }, []);


// useEffect(() => {
//     Promise.all(exchangeID.map(id =>
//         fetch(`https://pro-api.coinmarketcap.com/v1/exchange/info?id=${id}`, {
//             method: 'Get',
//             headers: {
//                 'accept': 'application/json',
//                 'X-CMC_PRO_API_KEY': apiKey,
//             }})
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 setExchange(data)
//             })
//             .catch(error => console.log(error))
//     ))
//         .then(results => {
//             setExchange(results)
//         })
// }, []);

// useEffect(() => {
//     fetch(`https://pro-api.coinmarketcap.com/v1/exchange/map`, {
//         method: 'GET',
//         headers: {
//             'accept': 'application/json',
//             'X-CMC_PRO_API_KEY': apiKey,
//         }})
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setExchange(data)
//         })
//         .catch(error => console.log(error))
// }, []);
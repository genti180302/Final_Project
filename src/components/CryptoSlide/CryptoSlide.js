import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import fetch from "node-fetch";
import '../CryptoSlide/cryptoslide.scss'


const CryptoSlide = () => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        const cryptoId = [1,2,3,13,8];

        Promise.all(cryptoId.map( id =>
        fetch(`https://data-api.cryptocompare.com/asset/v1/data/by/id?asset_id=${id}`, {
            method: 'Get',
        headers: {
            'accept': 'application/json',
            'authorization': 'f92836cc7e636a6cd55f0a6e8715d038e49de6a50fc45ea6bd86ad7a98cb6ecc',
        }
        })
            .then(response => response.json())
        ))
            .then(data => {
                console.log(data)
                setCryptos(data)
            })
            .catch(error => console.log(error))
    }, []);



    return(
        <>
            <div className={'HeaderContainer'}>
                <h1> Top Cryptocurrencies </h1>
            </div>
        <div>
            {cryptos.length > 0 && cryptos.map(crypto => (
                <Link style={{textDecoration:'none'}} to={`/details/${crypto.Data.ID}`} key={crypto.Data.ID}>
                <div key={crypto.ID} className='cryptoSlideStyle'>
                    <img className='CryptoSlideImgStyle' src={crypto.Data.LOGO_URL} alt={crypto.Data.Name}/>
                    <p>{crypto.Data.NAME}</p>
                    <p> {crypto.Data.PRICE_USD.toFixed(2)}$</p>
                    <p>{crypto.Data.SUPPLY_TOTAL?.toLocaleString()}</p>
                </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default CryptoSlide

// useEffect(() => {
//     fetch(`https://data-api.cryptocompare.com/asset/v1/data/by/id?asset_id=${asset_ids}`, {
//         method: 'Get',
//         headers: {
//             'accept': 'application/json',
//             'authorization': 'f92836cc7e636a6cd55f0a6e8715d038e49de6a50fc45ea6bd86ad7a98cb6ecc',
//         }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             setCryptos(data)
//         })
//         .catch(error => console.log(error))
// }, []);
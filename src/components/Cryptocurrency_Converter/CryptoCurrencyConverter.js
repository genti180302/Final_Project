import React, { useState } from 'react';
import fetch from "node-fetch";
import './CryptoCurrencyConverter.scss'

const CryptoCurrencyConverter = () => {
    // const [cryptoList, setCryptoList] = useState([]);
    const cryptoList = [];
    const [fromCurrency, setFromCurrency] = useState('bitcoin');
    const [toCurrency, setToCurrency] = useState('usd');
    const [amount, setAmount] = useState(1);
    const [conversionResult, setConversionResult] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', {
    //     })
    //         .then(response => response.json())
    //         .then(supportedCurrencies => {
    //             const vsCurrency = supportedCurrencies[11];
    //             return fetch(`${ApiUrl}?vs_currency=${vsCurrency}`, {
    //                 method: 'GET',
    //                 headers: {
    //                     'accept': 'application/json',
    //                     'x-cg-demo-api-key': ApiKey,
    //                 }
    //             })
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     setCryptoList(data)
    //                     console.log(data)
    //                 })
    //                 .catch(error => console.log(error))
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch('https://api.coingecko.com/api/v3/coins/list' , {
    //         method: 'GET',
    //         headers:{
    //             'accept': 'application/json',
    //             'x-cg-demo-api-key': 'f92836cc7e636a6cd55f0a6e8715d038e49de6a50fc45ea6bd86ad7a98cb6ecc',
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             setCryptoList(data)
    //             console.log(data)
    //         })
    //         .catch(error => console.log(error))
    // }, []);

    const handleConvert = () => {

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const rate = data[fromCurrency][toCurrency];
                setConversionResult(amount * rate);
            })
            .catch(error => console.error('Error fetching conversion rate:', error));
    };

    return (
        <div className='AllConverter'>
            <h1 style={{marginTop:'50px', fontSize:'40px'}}>
                Crypto Converter
            </h1>
            <div className='From-To-Converter'>
                <div className='From-Converter'>
                    <label>From</label>
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {cryptoList.map((crypto) => (
                            <option key={crypto.id} value={crypto.id}>{crypto.name}</option>
                        ))}
                        <option value='bitcoin'> Bitcoin</option>
                        <option value='ethereum'>Ethereum</option>
                        <option value='solana'>Solana</option>
                        <option value='binancecoin'>BNB</option>
                        <option value='ripple'>Ripple</option>
                    </select>
                </div>
                <div className='To-Converter'>
                    <label>To</label>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        <option value='usd'>USD</option>
                        <option value='eur'>EUR</option>
                        <option value='chf'>CHF</option>
                    </select>
                </div>
            </div>
            <div className='AmountConverter'>
                <label> Amount </label>
                <input className='inputConverter' type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div className='Button-Converter'>
                <button onClick={handleConvert}>Convert</button>
            </div>
            {conversionResult !== null && (
                <div className='Result-Converter'>
                    {/*<div className='Converter-Title'>*/}
                    {/*    <h2>Conversion Result</h2>*/}
                    {/*</div>*/}
                    <div className='Total-Converter'>
                        <p> {conversionResult.toLocaleString()} {toCurrency.toUpperCase()}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CryptoCurrencyConverter;

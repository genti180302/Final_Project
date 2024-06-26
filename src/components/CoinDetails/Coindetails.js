import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import fetch from "node-fetch";
import './Coindetails.scss'

const CoinDetailPage = () => {
    const {id} = useParams();
    const [coinDetails, setCoinDetails] = useState(null);
    // const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        fetch(`https://data-api.cryptocompare.com/asset/v1/data/by/id?asset_id=${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setCoinDetails(data);
            })
            .catch(error => console.log(error));
    }, [id]);


    if (!coinDetails) {
        return <div style={{color: "white"}}>Loading...</div>;
    }

    return (
        <>
            <div style={{color: "white", display: 'flex', flexDirection: 'column', height: '700px'}}>
                <Link to={'/'} style={{textDecoration:'none'}}>
                <h1 style={{marginTop: '40px', fontSize: '40px', color:'white'}}>
                    <img className='CoinDetailImgStyle' src={coinDetails.Data.LOGO_URL} alt={coinDetails.Data.Name}/>
                    {coinDetails.Data.NAME}
                </h1>
                </Link>
                <div className='DataContainer'>
                    <div className='DataItems'>
                        {coinDetails.Data.ASSET_DESCRIPTION_SUMMARY}
                        <a href={coinDetails.Data.BLOG_URL} target="_blank" rel="noopener noreferrer"
                           className="DataValue">Go to Blog</a>
                    </div>
                    <div className={'MarketDataStyle'}>
                        <h1 style={{marginTop: '30px'}}> Market Data
                            {/*<img src={coinDetails.Data.LOGO_URL} alt={coinDetails.Data.Name}/>*/}
                        </h1>
                        <div className={'MarketDataFlex'}>
                            <div className={'MarketDataTitle'}>
                                <p> Price </p>
                                <p> Market Cap </p>
                                <p> Symbol </p>
                                <p> 24H Change </p>
                                <p> White Paper </p>
                            </div>
                            <div className={'MarketDataValue'}>
                                <p>{coinDetails.Data.PRICE_USD.toLocaleString()}$ </p>
                                <p>{coinDetails.Data.CIRCULATING_MKT_CAP_USD.toLocaleString()} </p>
                                <p>{coinDetails.Data.SYMBOL} </p>
                                <p className={'DetailsValueText'}> {coinDetails.Data.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD.toFixed(2)}% </p>
                                <p><a style={{textDecoration:'none', color:'white'}}
                                    href={coinDetails.Data.WHITE_PAPER_URL}> Click here </a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 style={{marginTop: '40px', fontSize: '40px'}}> Supply {coinDetails.Data.NAME}</h1>
                <div className='allSupplys'>
                    <div className="SupplyItems">
                        <p>Circulating Supply </p>
                        <p className="supply-value">{coinDetails.Data.SUPPLY_CIRCULATING.toLocaleString()}</p>
                    </div>

                    <div className="SupplyItems">
                        Future Supply
                        <p className="supply-value">{coinDetails.Data.SUPPLY_FUTURE.toLocaleString()} </p>
                    </div>
                    <div className="SupplyItems">
                        Issued Supply
                        <p className="supply-value">  {coinDetails.Data.SUPPLY_ISSUED.toLocaleString()}</p>
                    </div>
                    <div className="SupplyItems">
                        Supply Locked
                        <p className="supply-value">  {coinDetails.Data.SUPPLY_LOCKED.toLocaleString()} </p>
                    </div>
                    <div className="SupplyItems">
                        Total Supply
                        <p className="supply-value"> {coinDetails.Data.SUPPLY_TOTAL.toLocaleString()} </p>
                    </div>
                    <div className="SupplyItems">
                        Max Supply
                        <p className="supply-value"> {coinDetails.Data.SUPPLY_MAX.toLocaleString()} </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoinDetailPage;



import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import './exchangedetail.scss'


const Exchangedetails = () => {
    const { id } = useParams();
    const [exchangeDetails, setExchangeDetails] = useState(null);

    useEffect(() => {
        fetch(`https://pro-api.coinmarketcap.com/v1/exchange/info?id=${id}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'X-CMC_PRO_API_KEY': '99beb61c-8840-42bb-b180-eabd3e54fd1e',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setExchangeDetails(data)
            })
            .catch(error => console.log(error))

    }, [id]);

    if(!exchangeDetails){
        return <div style={{color:'white'}}> Loading .... </div>
    }

    return(
        <>
            <div style={{color: "white", display: 'flex', flexDirection: 'column', height: '700px'}}>
                <Link to={'/'} style={{textDecoration:'none'}}>
                <h1 style={{marginTop: '40px', fontSize: '40px', color:'white'}}>
                    <img className='ExchangeDetailImgStyle' src={exchangeDetails.data[id].logo}
                         alt={exchangeDetails.data[id].name}/>
                    {exchangeDetails.data[id].name}
                </h1>
                    </Link>
            <div className='DataContainer'>
                    <div className={'ExchangeDataStyle'}>
                        <h1 style={{marginTop: '30px'}}> Exchange Data </h1>
                        <div className={'ExchangeDataFlex'}>
                            <div className={'ExchangeDataTitle'}>
                                <p> Price </p>
                                <p> Launched </p>
                                <p> Spot Volume </p>
                                <p> Weekly Visits </p>
                                <p> Website </p>
                            </div>
                            <div className={'MarketDataValue'}>
                                <p>{exchangeDetails.data[id].name} </p>
                                <p>{exchangeDetails.data[id].date_launched}</p>
                                <p>{exchangeDetails.data[id].spot_volume_usd.toLocaleString()}</p>
                                <p className={'DetailsValueText'}> {exchangeDetails.data[id].weekly_visits.toLocaleString()}</p>
                                <p><a style={{textDecoration: 'none', color: 'white'}}
                                      href={exchangeDetails.data[id].urls.website}> {exchangeDetails.data[id].name} </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='DataExchangeItems' style={{borderRadius: '0%'}}>
                {exchangeDetails.data[id].description}
                <a style={{fontSize:'30px', color:'white'}} href={exchangeDetails.data[id].urls.website} target="_blank" rel="noopener noreferrer"
                   className="DataValue">Go to {exchangeDetails.data[id].name}</a>
            </div>

        </>
    )
}

export default Exchangedetails;
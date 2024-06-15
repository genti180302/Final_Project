import {useState,useEffect} from "react";
import "./cryptodatatable.scss"
import fetch from "node-fetch";
import {ApiKey, ApiUrl} from "../../database/apiurl";
import Searchbar from "../Searchbar/searchbar";


    const Cryptodatatable = () => {
        const [getApi,setGetApi] = useState([]);
        const [filteredCoin, setFilteredCoin] = useState([]);
        const headers = [
            {key: "id", label: "#"},
            {key: "name", label: 'Coin'},
            {key: "current_price", label: 'Price'},
            {key: "price_change_24h", label: "24h"},
            {key: "market_cap", label: 'Market Cap'},
            {key: "total_supply", label: "Total Supply"},
        ]
        // const [selectedCoin, setSelectedCoin] = useState(null);

        useEffect(() => {
            fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', {
            })
                .then(response => response.json())
                .then(supportedCurrencies => {
                    const vsCurrency = supportedCurrencies[11];
                    return fetch(`${ApiUrl}?vs_currency=${vsCurrency}`, {
                        method: 'GET',
                        headers: {
                            'accept': 'application/json',
                            'x-cg-demo-api-key': ApiKey,
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            setGetApi(data)
                            setFilteredCoin(data)
                        })
                        .catch(error => console.log(error))
                })
        }, [])

        const handleSearch = (query) => {
            const filteredData = getApi.filter((coin) => {
               return coin.name.toLowerCase().includes(query.toLowerCase());
            })
            setFilteredCoin(filteredData)
                console.log("Filtered Data:", filteredData)
        }


        return (
                <>
                    <Searchbar onSearch={handleSearch}/>
                    <table>
                        <thead>
                        <tr>
                            {headers.map((header) => (
                                <th key={header.key}>{header.label}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {filteredCoin.map((coin, index) => (
                            <tr key={coin.id}>
                                <td>{index + 1}</td>
                                <td style={{width: '240px'}}>
                                        {/*<Link className='linkStyle' to={`/details/1`}>*/}
                                        <img className='imgStyle' src={coin.image}
                                             alt={coin.name}/>
                                        {coin.name} <span className='symbolStyle'> {coin.symbol} </span>
                                        {/*</Link>*/}
                                </td>
                                <td style={{marginRight:'20px'}}>{coin.current_price.toLocaleString()} $</td>
                                <td style={{color: coin.price_change_24h > 0 ? "green" : "red", marginRight:'25px'}}>{coin.price_change_24h.toLocaleString()} $</td>
                                <td>{coin.market_cap.toLocaleString()}</td>
                                <td>{coin.total_supply}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
        );
    };


export default Cryptodatatable


import {ApiUrl, ApiKey} from "./apiurl";
import {useEffect,useState} from "react";

// import axios from "axios";

// const fetch = require('node-fetch');

// const GetApiData = () => {
//     const [getApi,setGetApi] = useState([]);
//
//
//     useEffect(() => {
//         fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', {
//         })
//             .then(response => response.json())
//             .then(supportedCurrencies => {
//                 const vsCurrency = supportedCurrencies[11];
//                 return fetch(`${ApiUrl}?vs_currency=${vsCurrency}`, {
//                     method: 'GET',
//                     headers: {
//                         'accept': 'application/json',
//                         'x-cg-demo-api-key': ApiKey,
//                     }
//                 })
//                     .then(response => response.json())
//                     .then(data => {
//                         setGetApi(data)
//                         console.log(data)
//                     })
//                     .catch(error => console.log(error))
//             })
//     }, [])
//
//     return(
//         <>
//             {
//                 getApi.map((coin,index) => {
//                     return <div key={index}>
//                         <p key={coin.id}> {coin.name}</p>
//                     </div>
//
//                 })
//             }
//         </>
//     )
// }
//
// export default GetApiData




















// const GetApiData = () => {
//     const [getData, setGetData] = useState([]);
//
//     useEffect(() => {
//         axios.get( ApiUrl , {
//             headers: {
//                 'X-CMC_PRO_API_KEY': ApiKey
//             }
//         })
//             .then(response => {
//                 console.log(response.data)
//                 setGetData(response.data)
//             })
//             .catch(error => console.log(error))
//     }, []);
//
//     return(
//         <>
//         </>
//     )
// }
//
// export default GetApiData


// const fetch = require('node-fetch');
//
// const GetApiData = () => {
//     const [getApi,setGetApi] = useState([]);
//
//
//     useEffect(() => {
//         fetch('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', {
//         })
//             .then(response => response.json())
//             .then(supportedCurrencies => {
//                 const vsCurrency = supportedCurrencies[0];
//                 return fetch(`${ApiUrl}?vs_currency=${vsCurrency}`, {
//                     method: 'GET',
//                     headers: {
//                         'accept': 'application/json',
//                         'x-cg-demo-api-key': ApiKey,
//                     }
//                 })
//                     .then(response => response.json)
//                     .then(data => {
//                         setGetApi(data)
//                         console.log(data)
//                     })
//                     .catch(error => console.log(error))
//             })
//     }, [])
//
//     return(
//         <>
//
//         </>
//     )
// }
//
// export default GetApiData
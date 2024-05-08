import "./sass/main.scss"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CoinDetails from "./components/CoinDetails/Coindetails";
import Crypto from "./Pages/Crypto/Crypto";
import Exchange from "./Pages/Exchange/Exchange";
import Exchangedetails from "./components/ExchangeDetails/exchangedetails";
import Homepage from "./Pages/Homepage/Homepage";


const Navigation = () => {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/Cryptocurrencies" element={<Crypto/>}/>
                    <Route path="/Exchange" element={<Exchange/>}/>
                    <Route path="/details/:id" element={<CoinDetails/>}/>
                    <Route path="/details_/:id" element={<Exchangedetails/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}




const App = () => {


    return (
        <>
            <Navigation/>
        </>
    );
}

export default App


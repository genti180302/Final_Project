import React from "react";
import Header from "../../components/Header/header";
import CryptoSlide from "../../components/CryptoSlide/CryptoSlide";
import ExchangeSlide from "../../components/ExchangeSlide/ExchangeSlide";
import AnimationCrypto from "../../components/Animation_Crypto/animation";
import Footer from "../../components/Footer/footer";
import CryptoCurrencyConverter from "../../components/Cryptocurrency_Converter/CryptoCurrencyConverter";
import AnimationExchange from "../../components/Animation_Exchange/AnimationExchange";



const Homepage = () => {

    return(
        <>
            <Header/>
            <AnimationCrypto/>
            <CryptoSlide/>
            <ExchangeSlide/>
            <CryptoCurrencyConverter/>
            <AnimationExchange/>
            <Footer/>
        </>
    )
}

export default Homepage
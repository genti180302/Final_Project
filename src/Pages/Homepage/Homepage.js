import React from "react";
import Header from "../../components/Header/header";
import CryptoSlide from "../../components/CryptoSlide/CryptoSlide";
import ExchangeSlide from "../../components/ExchangeSlide/ExchangeSlide";
import styled, { keyframes } from 'styled-components';
import AnimationCrypto from "../../components/Animation_Crypto/animation";
import Animation_exchange from "../../components/Animation_Exchange/animation_exchange";
import Footer from "../../components/Footer/footer";
import CryptoCurrencyConverter from "../../components/Cryptocurrency_Converter/CryptoCurrencyConverter";



const Homepage = () => {

    // const horizontalScroll = keyframes;
    //
    // const ImageContainer = styled.div;
    //
    // const Wrapper = styled.div;
    //
    // const Image = styled.img


    return(
        <>
            <Header/>
            <AnimationCrypto/>
            <CryptoSlide/>
            <ExchangeSlide/>
            <CryptoCurrencyConverter/>
            <Animation_exchange/>
            <Footer/>
        </>
    )
}

export default Homepage
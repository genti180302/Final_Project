import React from "react";
import '../Header/header.scss'
import {Link} from "react-router-dom"


const Header = () => {

    return(
        <>
            <header className='headerStyle'>
                <Link to={'/'}>
                <h1 className='H1-Flex'> GegoCrypto </h1>
                </Link>
                    <nav>
                        <ul>
                            <li><Link to="/"> Homepage </Link></li>
                            <li><Link to="/Cryptocurrencies"> Cryptocurrencies </Link></li>
                            {/*<li><Link to="/NFT"> NFT </Link></li>*/}
                            <li><Link to="/Exchange"> Exchange </Link></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}

export default Header
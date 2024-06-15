import React, {useState} from "react";
import './Newsletter.scss'
import fetch from "node-fetch";


const Footer = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [successText, setSuccessText] = useState('')
    // const [showData, setShowData] = useState('')


    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };



    const handleEmailChange = (e) => {
        const value = e.target.value;

        setEmail(value)
        if (!isEmailValid(value)) {
            setError('');
            setSuccessText('');
        } else {
            setError('');
        }

    }


    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (isEmailValid(email)){
            fetch('http://localhost:3001/subscriptions' , {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'Email': email}),
            })
                .then(response => response.json())
                .then(data => {
                    // setShowData(data)
                    setSuccessText('Thank you for subscribing')
                    setEmail('')
                    setError('')
                })
                .catch(error => {
                    console.log(error)
                    setError('There was a problem with your subscription. Please try again later.')
                    setSuccessText('')
                })
        }
        else {
            setSuccessText('')
            setError('This Email is not valid, please check your Email')
        }
    }


    return(
        <>
            <div className={'footer-container'}>
                <div className='footerText'>
                    <p style={{display:"flex", justifyContent:'flex-start',fontSize:'23px'}}> Interested to stay up-to-date with cryptocurrencies? </p>
                    <p style={{display:"flex", justifyContent:'flex-start',fontSize:'15px'}}> Get the latest crypto news, updates, and reports by subscribing to our free newsletter:</p>
                </div>
                <div className='form-style'>
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <input type="email" value={email} onChange={handleEmailChange} name='Email' placeholder='Enter your email'
                                   style={{border: '2px solid white', height: '30px', borderRadius: '15px'}}/>
                            <button type="submit"> Subscribe</button>
                        </div>
                        <div style={{width: '100%', height: '50px', marginTop: '15px', color: 'darkred'}}>
                            {error && <p> {error} </p>}
                        </div>
                        <div style={{width: '100%', height: '50px', marginTop: '15px', color: 'green'}}>
                            {!error && <p style={{display:'flex', justifyContent:'flex-start'}}> {successText} </p>}
                        </div>
                    </form>
                </div>
                {/*<div>*/}
                {/*    {showData && (*/}
                {/*        <div className="data-display">*/}
                {/*            <h2>Received Data:</h2>*/}
                {/*            <pre>{JSON.stringify(showData, null, 2)}</pre>*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </>
    )
}

export default Footer;

// if (!isEmailValid(value)) {
//     setError('This Email is not valid please check your Email')
//     setSuccessText('')
// }
// else {
//     setError('')
// }
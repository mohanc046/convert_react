
import logo from '../../images/logo.png'
import underline from '../../images/underline.png'
import twitter from '../../images/twitter.png'
import tele from '../../images/tele.png'
import faceb from '../../images/faceb.png'
import { useState } from 'react'

export const Footer = () => {

    const [redirectionConfig, setRedirectionConfig] = useState([
        {
            imageURL : twitter,
            redirectionURL : "https://twitter.com/"
        },
        {
            imageURL : tele,
            redirectionURL : "https://telegram.org/"
        },
        {
            imageURL : faceb,
            redirectionURL : "https://www.facebook.com/"
        }
    ])

    return (
        <>
            <div className="footer-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="first">
                                    <a href="#"><img src={logo} /></a>
                                    <p>Reference site about Lorem Ipsum, giving information</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="second">
                                    <h1>LINKS:</h1>
                                    <img src={underline} />
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Investment Plan</a></li>
                                        <li><a href="#">Referral Program</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="third">
                                    <h1>ADDRESS:</h1>
                                    <img src={underline} />
                                    <p>64 Victoria Street, London,<br />SW1E 6QP, United Kingdom</p>
                                    <ul>
                                        {redirectionConfig.map(item =>
                                            <li>
                                                <a href={item.redirectionURL} target="_blank">
                                                    <img src={item.imageURL} />
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="last-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1>2022 Procoin Limited</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
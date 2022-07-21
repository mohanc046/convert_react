

import coinBase from '../../images/coinbase.png'
import binance from '../../images/binance.png'
import crypto from '../../images/crypto.png'
import gemini from '../../images/gemini.png'
import bitflyer from '../../images/bitflyer.png'

export const Partner = () => {
    return (
        <div className="partner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="partner_main">
                            <h1>Our Partner</h1>
                            <ul>
                                <li>
                                    <div className="partner_box">
                                        <img src={coinBase} />
                                    </div>
                                </li>
                                <li>
                                    <div className="partner_box">
                                        <img src={binance} />
                                    </div>
                                </li>
                                <li>
                                    <div className="partner_box">
                                        <img src={crypto} />
                                    </div>
                                </li>
                                <li>
                                    <div className="partner_box">
                                        <img src={gemini} />
                                    </div>
                                </li>
                                <li>
                                    <div className="partner_box">
                                        <img src={bitflyer} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
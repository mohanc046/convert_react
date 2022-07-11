

import coinBase from '../../images/coinbase.png'
import binance from '../../images/binance.png'
import crypto from '../../images/crypto.png'
import gemini from '../../images/gemini.png'
import bitflyer from '../../images/bitflyer.png'

export const Partner = () => {
    return (
        <div class="partner-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="partner_main">
                            <h1>Our Partner</h1>
                            <ul>
                                <li>
                                    <div class="partner_box">
                                        <img src={coinBase} />
                                    </div>
                                </li>
                                <li>
                                    <div class="partner_box">
                                        <img src={binance} />
                                    </div>
                                </li>
                                <li>
                                    <div class="partner_box">
                                        <img src={crypto} />
                                    </div>
                                </li>
                                <li>
                                    <div class="partner_box">
                                        <img src={gemini} />
                                    </div>
                                </li>
                                <li>
                                    <div class="partner_box">
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
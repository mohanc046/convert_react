

import coinBase from '../../images/coinbase.png'
import binance from '../../images/binance.png'
import crypto from '../../images/crypto.png'
import gemini from '../../images/gemini.png'
import bitflyer from '../../images/bitflyer.png'

export const Partner = () => {

    const partnersList = [coinBase, binance, crypto, gemini, bitflyer];

    return (
        <div className="partner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="partner_main">
                            <h1>Our Partner</h1>
                            <ul>
                                {partnersList.map(item => <li>
                                    <div className="partner_box">
                                        <img src={item} />
                                    </div>
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
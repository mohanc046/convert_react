import perfect from '../../images/perfect.png'
import ethereum from '../../images/ethereum.png'
import bitcoin from '../../images/bitcoin.png'
import litecoin from '../../images/litecoin.png'
import dogecoin from '../../images/dogecoin.png'


export const WeAccept = () => {
    return (
        <div class="accept-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1>We Accept</h1>
                        <ul>
                            <li><img src={perfect} /></li>
                            <li><img src={ethereum} /></li>
                            <li><img src={bitcoin} /></li>
                            <li><img src={litecoin} /></li>
                            <li><img src={dogecoin} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
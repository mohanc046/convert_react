import perfect from '../../images/perfect.png'
import ethereum from '../../images/ethereum.png'
import bitcoin from '../../images/bitcoin.png'
import litecoin from '../../images/litecoin.png'
import dogecoin from '../../images/dogecoin.png'


export const WeAccept = () => {

    const listOfCurrencyWeAccept = [perfect, ethereum, bitcoin, litecoin, dogecoin]

    return (
        <div className="accept-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1>We Accept</h1>
                        <ul>
                            {listOfCurrencyWeAccept.map(item => <li><img src={item} /></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
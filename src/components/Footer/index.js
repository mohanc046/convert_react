
import logo from '../../images/logo.png'
import underline from '../../images/underline.png'
import twitter from '../../images/twitter.png'
import tele from '../../images/tele.png'
import faceb from '../../images/faceb.png'

export const Footer = () => {
    return (
        <>

            <div class="footer-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="first">
                                    <a href="#"><img src={logo} /></a>
                                    <p>Reference site about Lorem Ipsum, giving information</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="second">
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
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div class="third">
                                    <h1>ADDRESS:</h1>
                                    <img src={underline} />
                                    <p>64 Victoria Street, London,<br />SW1E 6QP, United Kingdom</p>
                                    <ul>
                                        <li><a href="https://twitter.com/" target="_blank"><img src={twitter} /></a></li>
                                        <li><a href="https://telegram.org/" target="_blank"><img src={tele} /></a></li>
                                        <li><a href="https://www.facebook.com/" target="_blank"><img src={faceb} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="last-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1>2022 Procoin Limited</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
import affiliate_coin from '../../images/affiliate_coin.png'

export const Affiliate = () => {
    return (
        <div class="affiliate-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="affiliate_main">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="affiliate_left">
                                    <img src={affiliate_coin} />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="affiliate_right">
                                    <h5>AFFILIATE PROGRAM</h5>
                                    <h1>Earn money with your friends </h1>
                                    <p>We offer you not only an affiliate program, but also the opportunity to grow your career with MiTrade. Additional bonuses will be a great addition to the reward program.We offer you not only an affiliate program, but also the opportunity to grow your career with MiTrade. Additional bonuses will be a great addition to the reward program.</p>
                                </div>
                                <ul>
                                    <li>
                                        <div class="round">
                                            <h1>5%</h1>
                                            <p>Level1</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="round">
                                            <h1>3%</h1>
                                            <p>Level1</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="round">
                                            <h1>1%</h1>
                                            <p>Level1</p>
                                        </div>
                                    </li>
                                </ul>
                                <div class="affiliate_btn">
                                    <a href="#">Join With Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
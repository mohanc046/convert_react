import subscribe_image from '../../images/subscribe_image.png'

export const Subscription = () => {
    return (
        <div className="subscribe-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="subscribe_left">
                                <img src={subscribe_image} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="subscribe_right">
                                <h3>GET IN TOUCH</h3>
                                <h1>Subscribe to <br />Techsite Investment</h1>
                                <p>Enter your e-mail here to stay updated on our initiatives and news. Your opinion or suggestion is also appreciated</p>
                                <input type="text" placeholder="E mail Address..." /><button>SUBSCRIBE</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
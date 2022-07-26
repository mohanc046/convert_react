
import running_days from '../../images/running_days.png'
import total_members from '../../images/total_members.png'
import total_deposit from '../../images/total_deposit.png'
import tot_withdrawal from '../../images/tot_withdrawal.png'
import twentyFour from '../../images/twentyfour.png'
import up from '../../images/up.png'
import daily from '../../images/daily.png'
import down from '../../images/down.png'
import deposit from '../../images/deposit.png'
import investing from '../../images/investing.png'
import { useState } from 'react'


export const Analytics = () => {

    const [analyticsInfo, setAnalyticsInfo] = useState([
        {
            imageURL: running_days,
            score: "78",
            title: "Running Days"
        },
        {
            imageURL: total_members,
            score: "3142",
            title: "Total Members"
        },
        {
            imageURL: total_deposit,
            score: "1292",
            title: "Total Deposit"
        },
        {
            imageURL: tot_withdrawal,
            score: "322",
            title: "Total Withdrawal"
        }
    ])

    return (
        <div className="live-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="live_main">
                            <ul>
                                {analyticsInfo.map(item => <li>
                                    <div className="live_box">
                                        <img src={item.imageURL} />
                                        <h1>{item.score}</h1>
                                        <p>{item.title}</p>
                                    </div>
                                </li>)}
                            </ul>
                            <h3>checkout</h3>
                            <h2>WHY CHOOSE US</h2>
                            <div className="choose">
                                <ul>
                                    <li>
                                        <div className="one">
                                            <img src={twentyFour} />
                                            <h4>24/7 SUPPORT</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="up_img">
                                            <img src={up} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="two">
                                            <img src={daily} />
                                            <h4>DAILY PROFIT</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="down_img">
                                            <img src={down} />
                                        </div>
                                    </li>

                                    <li>
                                        <div className="one">
                                            <img src={deposit} />
                                            <h4>DEPOSIT<br />PROTECTION</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="up_img">
                                            <img src={up} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="two">
                                            <img src={investing} />
                                            <h4>INVESTING WITH<br />BODERS</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
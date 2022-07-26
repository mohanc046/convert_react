
import { useState } from 'react'
import pm from '../../images/pm.png'

export const Transactions = () => {

    const [transactionInfo, setTransactionInfo] = useState([
        {
            title: "Last Deposits",
            transactions: [
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                }
            ]
        },
        {
            title: "Last Withdrawals",
            transactions: [
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                },
                {
                    title: "crismee",
                    cost: "$30.00",
                    img: pm
                }
            ]
        }
    ])

    return (
        <div className="transaction-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h1>Our Last transactions</h1>
                        {transactionInfo.map(item =>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="transaction_box">
                                    <h2>{item.title}</h2>
                                    {item.transactions.map(entry => <ul>
                                        <li>{entry.title}:</li>
                                        <li>{entry.cost}</li>
                                        <li><img src={entry.img} /></li>
                                    </ul>)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
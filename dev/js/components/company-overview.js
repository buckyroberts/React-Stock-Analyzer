import React from 'react';
import {Sparklines, SparklinesLine, SparklinesSpots} from 'react-sparklines';


export default (props) => {

    return (
        <div className="col-md-6 col-lg-4">
            <div className="company-overview">
                <h2>{props.company.company_name}</h2>
                <h3 className="ticker">{props.company.ticker} <span className="text-light text-default-light">{props.company.date} </span></h3>

                <div>
                    <Sparklines data={props.company.prices} height={30} width={100}>
                        <SparklinesLine style={{
                            strokeWidth: 0.3,
                            stroke: '#2980b9',
                            fill: '#3498db',
                            fillOpacity: '.15' }} />
                        <SparklinesSpots size={0.5} style={{
                            stroke: "#c0392b",
                            strokeWidth: 0.3,
                            fill: "white" }} />
                    </Sparklines>
                </div>

                <h3 className="text-secondary">Daily Overview</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                        <th>Adj. Close</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{props.company.open}</td>
                        <td>{props.company.high}</td>
                        <td>{props.company.low}</td>
                        <td>{props.company.close}</td>
                        <td>{props.company.adj_close}</td>
                    </tr>
                    </tbody>
                </table>

                <h3 className="text-success">Performance</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Volume</th>
                        <th>Amount Change</th>
                        <th>Percent Change</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{props.company.volume}</td>
                        <td>{props.company.change}</td>
                        <td>{props.company.pct_change}</td>
                    </tr>
                    </tbody>
                </table>

                <h3 className="text-info">Technical Analysis</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Indicator</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>RSI 14</td>
                        <td>{props.company.rsi_14}</td>
                    </tr>
                    <tr>
                        <td>SMA 50</td>
                        <td>{props.company.sma_50}</td>
                    </tr>
                    <tr>
                        <td>SMA 200</td>
                        <td>{props.company.sma_200}</td>
                    </tr>
                    <tr>
                        <td>Full Stochastic</td>
                        <td>{props.company.sto}</td>
                    </tr>
                    <tr>
                        <td>OBV</td>
                        <td>{props.company.obv}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

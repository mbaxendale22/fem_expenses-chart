import './App.css'
import { Header } from './header'
import { Bar } from './bar'

function App() {
    return (
        <div className="wrapper">
            <Header totalBalance={921.48} />
            <main>
                <h2>Spending - Last 7 days</h2>

                <figure>
                    <Bar barHeight="40" day="mon" />
                    <Bar barHeight="70" day="tue" />
                    <Bar barHeight="30" day="wed" />
                    <Bar barHeight="50" day="thu" />
                    <Bar barHeight="50" day="fri" />
                    <Bar barHeight="50" day="sat" />
                    <Bar barHeight="50" day="sun" />
                </figure>

                <section className="totals-section">
                    <div className="left-side">
                        <p className="color-brown">Total this month</p>
                        <h1 className="color-dark-brown">$478.33</h1>
                    </div>
                    <div className="right-side">
                        <p>+2.4%</p>
                        <p className="color-brown">from last month</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default App

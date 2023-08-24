import './App.css'
import { Header } from './header'
import { Bar } from './bar'
import { data } from './data'
import { Totals } from './totals'
const MY_BALANCE = 921.48

function App() {
    const totalBalance = data.reduce((acc, value) => {
        return acc + value.amount
    }, 0)

    console.log(totalBalance)

    return (
        <div className="wrapper">
            <Header totalBalance={MY_BALANCE} />
            <main>
                <h2>Spending - Last 7 days</h2>

                <figure>
                    {data.map((singleDay) => (
                        <Bar
                            barHeight={singleDay.amount * 2}
                            day={singleDay.day}
                            dailyTotal={singleDay.amount.toString()}
                        />
                    ))}
                </figure>

                <Totals />
            </main>
        </div>
    )
}

export default App

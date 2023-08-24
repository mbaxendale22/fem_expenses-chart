import './totals.css'
export const Totals = () => {
    return (
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
    )
}

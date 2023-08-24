import './bar.css'
import { useState } from 'react'

type Props = {
    barHeight: number
    day: string
    dailyTotal: string
}

export const Bar = (props: Props) => {
    const { barHeight, day, dailyTotal } = props
    const [showTotal, setShowTotal] = useState(false)

    const handleShowTotal = () => {
        setShowTotal(!showTotal)
    }

    const barStyle = {
        height: `${barHeight}px`,
        backgroundColor: showTotal ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
    }

    const dailyTotalStyle = {
        display: showTotal ? 'block' : 'none',
    }

    return (
        <div className="bar-container">
            <div className="daily-total" style={dailyTotalStyle}>
                {`$${dailyTotal}`}
            </div>
            <div
                className="bar"
                style={barStyle}
                onMouseEnter={handleShowTotal}
                onMouseLeave={handleShowTotal}
            ></div>
            <p className="body-sm">{day}</p>
        </div>
    )
}

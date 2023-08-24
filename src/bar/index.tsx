import { useState } from 'react'

type Props = {
    barHeight: string
    day: string
}

export const Bar = (props: Props) => {
    const { barHeight, day } = props
    const [showTotal, setShowTotal] = useState(false)

    const handleShowTotal = () => {
        setShowTotal(!showTotal)
    }

    return (
        <div className="bar-container">
            <div
                className="daily-total"
                style={showTotal ? { display: 'block' } : { display: 'none' }}
            >
                {32.5}
            </div>
            <div
                className="bar"
                style={{ height: `${barHeight}px` }}
                onMouseEnter={handleShowTotal}
                onMouseLeave={handleShowTotal}
            ></div>
            <p className="body-sm">{day}</p>
        </div>
    )
}

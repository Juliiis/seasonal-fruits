import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const currentMonth = (new Date()).getMonth() + 1

function List() {
    const [fruits, setFruits] = useState([])
    const [loading, setLoading] = useState(true)
    const [month, setMonth] = useState(currentMonth)

    useEffect(async () => {
        const response = await fetch(`/api/available-fruits?month=${month}`)
        setFruits(await response.json())
        setLoading(false)
    }, [month])

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }

    if (loading) {
        return 'Loading'
    }

    return (
        <div>
            <h2>List</h2>
            <select onChange={handleMonthChange} value={month}>
                <option value="1">January</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.id}>
                        <Link to={`/description/${fruit.id}`}>
                            {fruit.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default List;

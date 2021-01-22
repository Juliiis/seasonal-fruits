import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Description() {
    const { id } = useParams()
    const [fruit, setFruit] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/fruit?id=${id}`)
                setFruit(await response.json())
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

    if(loading){
        return 'Loading'
    }

    if(!fruit){
        return 'Fruit not found'
    }

    return (
        <div>
            <Link to="/list">Back</Link>

            <h2>{fruit.properties}</h2>
        </div>
    )
}
export default Description;
import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Description() {
    const { id } = useParams()
    return (
        <div>
            <Link to="/list">Back</Link>

            <h2>I'm description for {id}</h2>
        </div>
    )
}
export default Description;
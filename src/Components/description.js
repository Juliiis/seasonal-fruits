import React from 'react'
import { useParams } from 'react-router-dom'

function Description() {
    const { id } = useParams()
    return (
        <div>
            <h2>I'm description for {id}</h2>
        </div>
    )
}
export default Description;
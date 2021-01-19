import React from 'react'
import { Link } from 'react-router-dom'

const backendResponse = [
    {
      "id": "grape",
      "name": "Grape",
      "monthStart": 9,
      "monthEnd": 1,
      "properties": [
        "You can make wine with them!"
      ]
    }
  ]

function List() {
    return (
        <div>
            <h2>List</h2>
            <ul>
                {backendResponse.map(fruit => (
                    <li>
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

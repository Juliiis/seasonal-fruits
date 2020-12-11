import React from 'react'
import { Link } from 'react-router-dom'

function List() {
    return (
        <div>
            <h2>List</h2>
            <ul>
                <li>
                    <Link to="/description/banana">Banana</Link>
                </li>
                <li>
                    <Link to="/description/pera">Pera</Link>
                </li>
                <li>
                    <Link to="/description/manzana">Manzana</Link>
                </li>
            </ul>
        </div>
    )
}
export default List;

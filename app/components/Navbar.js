import React from 'react'

export default class Navbar extends React.Component {
    render() {

        const selections = ['Top', 'New']

        return (
            <ul className='flex-center'>
                {selections.map((selection) => (
                    <li key={selection}>
                        <button className='btn-clear nav-link'>
                            {selection}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}
import React from 'react'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: 'Top'
        }

        this.updateCategory = this.updateCategory.bind(this)
    }

    updateCategory(selectedCategory) {
        this.setState({
            selectedCategory
        })
    }

    render() {

        const categories = ['Top', 'New']

        return (
            <ul className='flex-center'>
                {categories.map((category) => (
                    <li key={category}>
                        <button
                            className='btn-clear nav-link'
                            style={category === this.state.selectedCategory ? {color: 'rgb(187, 46, 31)'} : null}
                            onClick={() => this.updateCategory(category)}>
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}
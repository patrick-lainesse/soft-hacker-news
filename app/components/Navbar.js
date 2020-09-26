import React from 'react'
import PropTypes from 'prop-types'

// Curly braces: props that are destructured when the function is invoked
function CategoryNav({selected, onUpdateCategory}) {

    const categories = ['Top', 'New']

    return (
        <ul className='flex-center'>
            {categories.map((category) => (
                <li key={category}>
                    <button
                        className='btn-clear nav-link'
                        style={category === selected ? {color: 'rgb(187, 46, 31)'} : null}
                        onClick={() => onUpdateCategory(category)}>
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    )
}

CategoryNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateCategory: PropTypes.func.isRequired
}

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

        const {selectedCategory} = this.state

        return (
            <React.Fragment>
                <CategoryNav
                    selected = {selectedCategory}
                    onUpdateCategory = {this.updateCategory}
                />
            </React.Fragment>
        )
    }
}
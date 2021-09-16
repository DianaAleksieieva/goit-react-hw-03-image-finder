import '../style.css';
import React from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends React.Component {
  state = {
    query: ''
    }
handleChange = event => {
    this.setState({
      query: event.currentTarget.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
      this.props.onSubmit(this.state.query)
    this.reset()
  }
  reset = () => {
      this.setState({ query: '' })
  }
  render() {
    return <header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button" >
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
       onChange={this.handleChange}
       value={this.state.query}
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
  }
}

Searchbar.propTypes = {
    query: PropTypes.string.isRequired
}



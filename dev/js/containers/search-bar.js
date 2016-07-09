import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCompany} from '../actions/index';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchTerm: ''};

        // bind "this" to function so calling object is not undefined
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();

        // fetch data
        this.props.fetchCompany(this.state.searchTerm);
        this.setState({searchTerm: ''});
    }

    onInputChange(e) {
        this.setState({searchTerm: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="form-row">
                    <input
                        onChange={this.onInputChange}
                        value={this.state.searchTerm}
                        className="search-input"
                        placeholder="Enter ticker symbol..."
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchCompany}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

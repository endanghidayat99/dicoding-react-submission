import React, { Component } from 'react';

class SearchBox extends Component {
    onSearchBoxChange = (event) => {
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Search notes..."
                    onChange={this.onSearchBoxChange}
                />
            </div>
        );
    }
}

export default SearchBox;
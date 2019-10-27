
// global dependencies
import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

// local dependencies
import IArtist from '../../interfaces/Artist';

interface IProps {
    value: string,
    suggestions: Array<IArtist>,
    isLoading: boolean,
    actions: {
        onChange: any,
        onSuggestionsFetchRequested: any,
        onSuggestionsClearRequested: any,
        onSuggestionSelected?: any,
    }
}

// local components
function getSuggestionValue(suggestion: IArtist) {
    return suggestion.name;
}

function renderSuggestion(suggestion: IArtist) {
    return (
        <span>{suggestion.name}</span>
    );
}

class SearchBox extends Component<IProps> {

    static defaultProps = {
        value: '',
        suggestions: [],
        isLoading: false,
        onSuggestionSelected: () => {},
    };

    render() {

        // initialization
        const {
            value,
            suggestions,
            isLoading,
            actions,
        } = this.props;

        const {
            onChange,
            onSuggestionsFetchRequested,
            onSuggestionsClearRequested,
            onSuggestionSelected,
        } = actions;

        const inputProps = {
            placeholder: 'Search here',
            value,
            onChange,
        };

        return (
            <div>
                <div className={`search-box ${isLoading ? 'search-box-is-loading' : ''}`}>
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        onSuggestionSelected={onSuggestionSelected}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBox;

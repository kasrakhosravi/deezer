
// global dependencies
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// local dependencies
import SearchBox from '../components/SearchBox';
import UpdateInputValue from '../actionCreators/UpdateInputValue';
import FetchSuggestions from '../actionCreators/FetchSuggestions';
import ClearSuggestions from '../actionCreators/ClearSuggestions';
import SelectSuggestion from '../actionCreators/SelectSuggestion';


const SearchBoxContainer = (props: any) => <SearchBox {...props} />;

const mapStateToProps = (state: any, props: any) => {

    const {
        value,
        suggestions,
        isLoading,
    } = state.searchBoxReducer;

    return {
        value,
        suggestions,
        isLoading,
    };
};

function mapDispatchToProps(dispatch: any) {
    const actions = bindActionCreators(
        {
            onChange: UpdateInputValue,
            onSuggestionsFetchRequested: FetchSuggestions,
            onSuggestionsClearRequested: ClearSuggestions,
            onSuggestionSelected: SelectSuggestion,
        },
        dispatch
    );

    return { actions, dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);

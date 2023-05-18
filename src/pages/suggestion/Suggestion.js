import React from 'react';
// Component
import SuggestionHeader from '../../components/suggestion/SuggestionHeader';
import SuggestionField from '../../components/suggestion/SuggestionField';
import SuggestionCards from '../../components/suggestion/SuggestionCards';

const Suggestion = () => {
    return (
        <div>
            <SuggestionHeader />
            <SuggestionField />
            <SuggestionCards />
            
        </div>
    );
};

export default Suggestion;
import React from 'react';
import SearchBar from '../containers/search-bar';
import CompanyList from '../containers/company-list';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Stock Market Analyzer</h2>
        <SearchBar />
        <CompanyList />
    </div>
);

export default App;

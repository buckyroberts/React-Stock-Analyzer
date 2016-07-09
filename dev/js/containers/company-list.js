import React, {Component} from 'react';
import {connect} from 'react-redux';
import CompanyOverview from '../components/company-overview';


class CompanyList extends Component {
    
    displayOverview() {
        return this.props.companies.map((company) => {
            return (
                <CompanyOverview key={company.ticker} company={company} />
            );
        });
    }

    render() {
        return (
            <div className="container ">
                {this.displayOverview()}
            </div>
        );
    }

}

function mapStateToProps({companies}) {
    return {companies};
}

export default connect(mapStateToProps)(CompanyList);

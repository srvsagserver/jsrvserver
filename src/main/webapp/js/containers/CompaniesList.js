import React from 'react';
import { connect } from 'react-redux';

class CompaniesList extends  React.Component {
    renderList() {
        return this.props.companiesList.map((company) => {
           return (
               <li
                   key={company.id}
                   className="list-group-item">
                   {company.title}
               </li>
           );
        });
    }

    render() {
        return (
          <ul className="list-group col-md-8">
              {this.renderList()}
          </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of CompaniesList
    return {
        companiesList: state.companiesList
    };
}

export default connect(mapStateToProps)(CompaniesList);

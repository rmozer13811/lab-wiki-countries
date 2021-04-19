import React from 'react';

class CountryDetails extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.match.params.code}</span>
      </div>
    );
  }
}

export default CountryDetails;

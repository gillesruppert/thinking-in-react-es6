module React from 'react';

class _ProductCategoryRow {
  render () {
    return (
      <tr><th colSpan="2">{this.props.category}</th></tr>
    );
  }
}


export var ProductCategoryRow = React.createClass(_ProductCategoryRow.prototype);


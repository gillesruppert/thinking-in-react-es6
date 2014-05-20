module React from 'react';

import {ProductCategoryRow} from './product-category-row';
import {ProductRow} from './product-row';

class _ProductTable {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.products.forEach(function (product) {
      if ((this.props.filterText !== '' && product.name.indexOf(this.props.filterText) === -1) ||
        (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }, this);
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export var ProductTable = React.createClass(_ProductTable.prototype);

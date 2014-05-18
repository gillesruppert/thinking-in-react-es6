module React from 'react';
import {ProductTable} from './product-table';
import {SearchBar} from './search-bar';

class _FilterableProductTable {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export var FilterableProductTable = React.createClass(_FilterableProductTable.prototype);

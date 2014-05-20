module React from 'react';
import {ProductTable} from './product-table';
import {SearchBar} from './search-bar';

class _FilterableProductTable {
  getInitialState() {
    return {
      filterText: '',
      inStockOnly: false
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export var FilterableProductTable = React.createClass(_FilterableProductTable.prototype);

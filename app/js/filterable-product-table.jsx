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

  handleUserInput(filterText, inStockOnly) {
    this.setState({ filterText, inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput}
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

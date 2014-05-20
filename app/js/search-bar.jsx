module React from 'react';

class _SearchBar {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} />
        <p>
          <input type="checkbox" value={this.props.inStockOnly} />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export var SearchBar = React.createClass(_SearchBar.prototype);

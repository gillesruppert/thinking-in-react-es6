module React from 'react';

class _SearchBar {
  render () {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export var SearchBar = React.createClass(_SearchBar.prototype);

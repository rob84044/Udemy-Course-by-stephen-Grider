import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    term: 'varvaervaer'
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input value={this.state.term} type="text" />
          </div>
        </form>
      </div>
    );
  }
}

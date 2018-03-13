import React from 'react';
import createReactContext from 'create-react-context';

export const VisibilityFilterContext = createReactContext({
  visibilityFilter: 'SHOW_ALL',
});

export default class VisibilityProvider extends React.Component {
  state = { visibilityFilter: 'SHOW_ALL' };

  setVisibilityFilter = newFilterValue => {
    this.setState({
      visibilityFilter: newFilterValue,
    });
  };

  render() {
    return (
      <VisibilityFilterContext.Provider
        value={{
          ...this.state,
          setVisibilityFilter: this.setVisibilityFilter,
        }}
      >
        {this.props.children}
      </VisibilityFilterContext.Provider>
    );
  }
}

import React from 'react';
import { VisibilityFilterContext } from '../providers/visibilityFilterProvider';
import Link from '../components/Link';

const FilterLink = ({ filter, ...props }) => {
  return (
    <VisibilityFilterContext.Consumer>
      {({ visibilityFilter, setVisibilityFilter }) => (
        <Link
          onClick={() => {
            setVisibilityFilter(filter);
          }}
          active={visibilityFilter === filter}
          {...props}
        />
      )}
    </VisibilityFilterContext.Consumer>
  );
};

export default FilterLink;

import React from 'react'
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../redux/todosApp/todoAppAction';

const Link = ({active, children, onClick}) => {
    if (active) {
      return <span >{children}</span>;
    }
    return (
      <button href='#'
         onClick={e => {
           e.preventDefault();
           onClick();
         }}
      className="all_button">
        {children}
      </button>
    );
  };

  const mapStateToLinkProps = (state, ownProps) => {
    return {
      active:
        ownProps.filter ===
        state.visibilityFilter
    };
  };
  const mapDispatchToLinkProps = (dispatch, ownProps) => {
    return {
      onClick: () => {
        dispatch(
          setVisibilityFilter(ownProps.filter)
        );
      }
    };
  }

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link);

export default FilterLink;
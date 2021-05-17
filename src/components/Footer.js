import React from 'react';
import FilterLink from './Link'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../redux/todosApp/todoAppTypes';


const Footer = () => (
  <div>
      <FilterLink filter={SHOW_ALL} >
        All
      </FilterLink>
      <FilterLink filter={SHOW_ACTIVE} >
        Active
      </FilterLink>
      <FilterLink filter={SHOW_COMPLETED} >
        Completed
      </FilterLink>
  
  </div>
);
  
export default Footer;
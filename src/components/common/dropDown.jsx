import React from 'react';

const DropDown = ({ onSort }) => {
    return <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Sort By
  </button>
 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   <a class="dropdown-item" onClick={() => onSort("asc")}>Price - Low to High</a>
   <a class="dropdown-item" onClick={() => onSort("dsc")}>Price - High to Low </a>
 </div>
 </div>;
}
 
export default DropDown;
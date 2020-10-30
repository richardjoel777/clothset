import React from "react";

const ListGroup = ({
  items,
  nameProperty,
  idProperty,
  onCategorySelect,
  selectedCategory,
}) => {
  return (
    <ul className="list-group" style={{cursor :"pointer", width:"100%"}}>
      {items.map((category) => (
        <li
          onClick={() => onCategorySelect(category)}
          className={
            category === selectedCategory
              ? "list-group-item active"
              : "list-group-item"
          }
          key={category[idProperty]}
        >
          {category[nameProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  idProperty: "_id",
  nameProperty: "name",
};

export default ListGroup;

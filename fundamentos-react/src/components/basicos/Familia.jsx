import React from "react";
import "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, props);
      })}
    </div>
  );
};

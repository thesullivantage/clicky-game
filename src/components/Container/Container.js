import React from "react";

const Container = props => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        {props.children}
      </div>
    </div>
  </div>
);

export default Container;

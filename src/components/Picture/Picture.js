import React from "react";
import "./Picture.css"

const Picture = props => (
	<a 
		className="waves-effect waves-light btn center-align"
		onClick={props.handleClick}

	>
		<img 
			className="" 
			width="300"
			src={props.source}
			data-clicked={props.clicked}
			data-index={props.index}
		/>
	</a>
);

export default Picture;

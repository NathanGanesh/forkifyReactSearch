import React from 'react';

export default function Search(props) {
	return (
		<div>
			<form onSubmit={props.onsubmit}>
				<input onChange={(event) => props.onchange(event)} placeholder="chicken,onions,carrots" />
			</form>
		</div>
	);
}

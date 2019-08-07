import React from "react";
import "../../styles/home.scss";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}

	componentDidMount() {
		this.intervalID = setInterval(() => {
			this.setState({ number: this.state.number + 1 });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	render() {
		return (
			<div>
				<h2>{this.state.number}</h2>
			</div>
		);
	}
}

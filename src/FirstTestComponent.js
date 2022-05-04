import React, {Component} from 'react';

export class FirstComponent extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>I'll Explore React.js</div>)
    return (<div className="comptext">
    <h1>
		First Component
	</h1>
	<h2>
        {this.props.text}
	</h2>
        {element}
    </div>)
    }
}
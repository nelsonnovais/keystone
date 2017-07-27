import React from 'react';
import evalDependsOn from '../../../../../../fields/utils/evalDependsOn';
const lookUpTable = {
	'Permissions': 'Permissões',
};

module.exports = React.createClass({
	displayName: 'FormHeading',
	propTypes: {
		options: React.PropTypes.object,
	},
	render () {
		if (!evalDependsOn(this.props.options.dependsOn, this.props.options.values)) {
			return null;
		}
		return <h3 className="form-heading">{lookUpTable[this.props.content] !== undefined ? lookUpTable[this.props.content] : this.props.content}</h3>;
	},
});

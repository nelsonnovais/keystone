import React from 'react';
import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';

var EmailColumn = React.createClass({
	displayName: 'EmailColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
	},
	renderValue () {
		const value = this.props.data.fields[this.props.col.path];
		if (!value) return;
		console.log('this value4:' + value);
		return (
			<ItemsTableValue to={'mailto:' + value} padded exterior field={this.props.col.type}>
				{value}
			</ItemsTableValue>
		);
	},
	render () {
		return (
			<ItemsTableCell>
				{this.renderValue()}
			</ItemsTableCell>
		);
	},
});

module.exports = EmailColumn;

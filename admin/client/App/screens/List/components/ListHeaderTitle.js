import { css } from 'glamor';
import React, { PropTypes } from 'react';
import theme from '../../../../theme';

import ListSort from './ListSort';

function ListHeaderTitle ({
	activeSort,
	availableColumns,
	handleSortSelect,
	title,
	...props
}) {
	var titulo = '';
	console.log('Title: ' + title);
	const field = title.split(' ');
	console.log('Split: ' + field);
	const lookUptable = {
		'Categories': 'Categorias',
	};
	titulo = field[0] + ' ' + field[1];
	if (field[3]) {
		titulo = field[0] + ' ' + lookUptable[field[3]];
	};
	return (
		<h2 className={css(classes.heading)} {...props}>
			{titulo}
			<ListSort
				activeSort={activeSort}
				availableColumns={availableColumns}
				handleSortSelect={handleSortSelect}
			/>
		</h2>
	);
};

ListHeaderTitle.propTypes = {
	activeSort: PropTypes.object,
	availableColumns: PropTypes.arrayOf(PropTypes.object),
	handleSortSelect: PropTypes.func.isRequired,
	title: PropTypes.string,
};

const classes = {
	heading: {
		[`@media (max-width: ${theme.breakpoint.mobileMax})`]: {
			fontSize: '1.25em',
			fontWeight: 500,
		},
	},
};

module.exports = ListHeaderTitle;

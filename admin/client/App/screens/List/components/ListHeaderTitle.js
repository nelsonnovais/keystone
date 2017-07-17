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
	const field = title.split(' ');
	const lookUptable = {
		'Post': field[0] + 'Post',
		'Posts': field[0] + 'Posts',
		'Post Categories': field[0] + 'Categorias',
	};
	return (
		<h2 className={css(classes.heading)} {...props}>
			{lookUptable[field[1]]}
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

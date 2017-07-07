/**
 * A item in the primary navigation. If it has a "to" prop it'll render a
 * react-router "Link", if it has a "href" prop it'll render a simple "a" tag
 */

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';

const PrimaryNavItem = ({ children, className, href, label, title, to, active }) => {
	const itemClassName = classnames('primary-navbar__item', className);
	const lookUpTable = {
		'User': 'Utilizador',
		'Post Categories': 'Categorias',
		'Enquiries': 'Requrimentos',
		'Posts': 'Posts',
		'Users': 'Utilizadores',
	};
	const Button = to ? (
		<Link
			className="primary-navbar__link"
			key={lookUpTable[title]}
			tabIndex="-1"
			title={lookUpTable[title]}
			to={to}
			// Block clicks on active link
			onClick={(evt) => { if (active) evt.preventDefault(); }}
		>
			{children}
		</Link>
	) : (
		<a
			className="primary-navbar__link"
			href={href}
			key={lookUpTable[title]}
			tabIndex="-1"
			title={lookUpTable[title]}
		>
			{children}
		</a>
	);

	return (
		<li
			className={itemClassName}
			data-section-label={label}
		>
			{Button}
		</li>
	);
};

PrimaryNavItem.displayName = 'PrimaryNavItem';
PrimaryNavItem.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	href: PropTypes.string,
	label: PropTypes.string,
	title: PropTypes.string,
	to: PropTypes.string,
};

module.exports = PrimaryNavItem;

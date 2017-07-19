/**
 * Render a popout list item
 */

import React from 'react';
import blacklist from 'blacklist';
import classnames from 'classnames';

var PopoutListItem = React.createClass({
	displayName: 'PopoutListItem',
	propTypes: {
		icon: React.PropTypes.string,
		iconHover: React.PropTypes.string,
		isSelected: React.PropTypes.bool,
		label: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func,
	},
	getInitialState () {
		return {
			hover: false,
		};
	},
	hover () {
		this.setState({ hover: true });
	},
	unhover () {
		this.setState({ hover: false });
	},
	// Render an icon
	renderIcon () {
		if (!this.props.icon) return null;
		const icon = this.state.hover && this.props.iconHover ? this.props.iconHover : this.props.icon;
		const iconClassname = classnames('PopoutList__item__icon octicon', ('octicon-' + icon));

		return <span className={iconClassname} />;
	},
	render () {
		const itemClassname = classnames('PopoutList__item', {
			'is-selected': this.props.isSelected,
		});
		const props = blacklist(this.props, 'className', 'icon', 'iconHover', 'isSelected', 'label');
		const lookUpTable = {
			'User': 'Utilizador',
			'Post Categories': 'Categorias',
			'Image': 'Imagem',
			'Enquiries': 'Requerimentos',
			'Posts': 'Posts',
			'Users': 'Utilizadores',
			'Name:': 'Nome',
			'Email': 'Email',
			'Can access Keystone': 'Previlegios de Administrador',
			'Title': 'Título',
			'Author': 'Autor',
			'State': 'Estado',
			'Published Date': 'Data de Publicação',
			'Content Extended': 'Artigo Completo',
			'Content Brief': 'Introdução',
			'Categories': 'Categorias',
			'Draft': 'Rascunho',
			'Published': 'Publicado',
			'Archived': 'Arquivado',
		};
		return (
			<button
				type="button"
				title={this.props.label}
				className={itemClassname}
				onFocus={this.hover}
				onBlur={this.unhover}
				onMouseOver={this.hover}
				onMouseOut={this.unhover}
				{...props}
			>
				{this.renderIcon()}
				<span className="PopoutList__item__label">
					{lookUpTable[this.props.label]}
				</span>
			</button>
		);
	},
});

module.exports = PopoutListItem;

/**
 * Render a header for a popout
 */

import React from 'react';
import Transition from 'react-addons-css-transition-group';
const lookUpTable = {
	'Title': 'Título',
	'State': 'Estado',
	'Author': 'Autor',
	'Published Date': 'Data de Publicação',
	'Name': 'Nome',
	'Image': 'Imagem',
	'Content Brief': 'Introdução',
	'Content Extended': 'Artigo Completo',
	'Categories': 'Categorias',
	'Email': 'Email',
	'Password': 'Password',
	'Can access Keystone': 'Previlégios de Administrador',
	'Filter': 'Filtro',
	'Columns': 'Colunas',
	'Download': 'Download',
};
const PopoutHeader = React.createClass({
	displayName: 'PopoutHeader',
	propTypes: {
		leftAction: React.PropTypes.func,
		leftIcon: React.PropTypes.string,
		title: React.PropTypes.string.isRequired,
		transitionDirection: React.PropTypes.oneOf(['next', 'prev']),
	},
	render () {
		// If we have a left action and a left icon, render a header button
		var headerButton = (this.props.leftAction && this.props.leftIcon) ? (
			<button
				key={'button_' + this.props.transitionDirection}
				type="button"
				className={'Popout__header__button octicon octicon-' + this.props.leftIcon}
				onClick={this.props.leftAction}
			/>
		) : null;
		// If we have a title, render it
		console.log(lookUpTable[this.props.title]);
		var headerTitle = this.props.title ? (

			<span
				key={'title_' + this.props.transitionDirection}
				className="Popout__header__label"
			>
				{lookUpTable[this.props.title] !== undefined ? lookUpTable[this.props.title] : this.props.title}
			</span>
		) : null;

		return (
			<div className="Popout__header">
				<Transition
					transitionName="Popout__header__button"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200}
				>
					{headerButton}
				</Transition>
				<Transition
					transitionName={'Popout__pane-' + this.props.transitionDirection}
					transitionEnterTimeout={360}
					transitionLeaveTimeout={360}
				>
					{headerTitle}
				</Transition>
			</div>
		);
	},
});

module.exports = PopoutHeader;

import React from 'react';
import { findDOMNode } from 'react-dom';

import {
	FormField,
	FormInput,
	FormSelect,
	SegmentedControl,
} from '../../../admin/client/App/elemental';

const INVERTED_OPTIONS = [
	{ label: 'Corresponde', value: false },
	{ label: 'Não corresponde', value: true },
];

const MODE_OPTIONS = [
	{ label: 'Contem', value: 'contains' },
	{ label: 'Exatamente', value: 'exactly' },
	{ label: 'Começa por', value: 'beginsWith' },
	{ label: 'Acaba em', value: 'endsWith' },
];

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
};

function getDefaultValue () {
	return {
		mode: MODE_OPTIONS[0].value,
		inverted: INVERTED_OPTIONS[0].value,
		value: '',
	};
}

var TextFilter = React.createClass({
	propTypes: {
		filter: React.PropTypes.shape({
			mode: React.PropTypes.oneOf(MODE_OPTIONS.map(i => i.value)),
			inverted: React.PropTypes.boolean,
			value: React.PropTypes.string,
		}),
	},
	statics: {
		getDefaultValue: getDefaultValue,
	},
	getDefaultProps () {
		return {
			filter: getDefaultValue(),
		};
	},
	updateFilter (value) {
		this.props.onChange({ ...this.props.filter, ...value });
	},
	selectMode (e) {
		const mode = e.target.value;
		this.updateFilter({ mode });
		findDOMNode(this.refs.focusTarget).focus();
	},
	toggleInverted (inverted) {
		this.updateFilter({ inverted });
		findDOMNode(this.refs.focusTarget).focus();
	},
	updateValue (e) {
		this.updateFilter({ value: e.target.value });
	},
	render () {
		const { field, filter } = this.props;
		const mode = MODE_OPTIONS.filter(i => i.value === filter.mode)[0];
		const placeholder = lookUpTable[field.label] + ' ' + mode.label.toLowerCase() + '...';

		return (
			<div>
				<FormField>
					<SegmentedControl
						equalWidthSegments
						onChange={this.toggleInverted}
						options={INVERTED_OPTIONS}
						value={filter.inverted}
					/>
				</FormField>
				<FormField>
					<FormSelect
						onChange={this.selectMode}
						options={MODE_OPTIONS}
						value={mode.value}
					/>
				</FormField>
				<FormInput
					autoFocus
					onChange={this.updateValue}
					placeholder={placeholder}
					ref="focusTarget"
					value={this.props.filter.value}
				/>
			</div>
		);
	},
});

module.exports = TextFilter;

import React from 'react';
import getRelatedIconClass from '../utils/getRelatedIconClass';

class Section extends React.Component {
	render () {
		const lookUpTable = {
			'User': 'Utilizador',
			'Post Categories': 'Categorias',
			'Enquiries': 'Requerimentos',
			'Posts': 'Posts',
			'Users': 'Utilizadores',
			'Image': 'Imagem',
			'Name': 'Nome',
			'Email': 'Email',
			'Can access Keystone': 'Previlégios de Administrador',
		};
		const iconClass = this.props.icon || getRelatedIconClass(this.props.id);
		return (
			<div className="dashboard-group" data-section-label={this.props.label}>
				<div className="dashboard-group__heading">
					<span className={`dashboard-group__heading-icon ${iconClass}`} />
					{lookUpTable[this.props.label]}
				</div>
				{this.props.children}
			</div>
		);
	}
}

Section.propTypes = {
	children: React.PropTypes.element.isRequired,
	icon: React.PropTypes.string,
	id: React.PropTypes.string,
	label: React.PropTypes.string.isRequired,
};

export default Section;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const styles = {
	list: {
		width: 350
	},
	fullList: {
		width: 'auto'
	}
};

class MainNav extends React.Component {

	state = {
		mainNavIsOpen: false
	};

	toggleMainNav = (state, value) => {
		this.props.onClick({state, value})
	};

	render() {

		const { classes } = this.props;

		const listItems = (
			<div>
				<ListItem button onClick={() => { this.toggleMainNav(false, 'lyrics') }}>
					<ListItemText primary="Lyrics" />
				</ListItem>
				<ListItem button onClick={() => { this.toggleMainNav(false, 'table') }}>
					<ListItemText primary="Table" />
				</ListItem>
				<ListItem button onClick={() => { this.toggleMainNav(false, 'form') }}>
					<ListItemText primary="Form" />
				</ListItem>
			</div>
		);

		const sideList = (
			<div className={ classes.list }>
				<List>{ listItems }</List>
			</div>
		);

		return (
			<div>
				<Drawer open={this.props.open} onClose={() => { this.toggleMainNav(false) }}>
					<div
						tabIndex={0}
						role="button"
						onKeyDown={() => { this.toggleMainNav(false) }}>
						{ sideList }
					</div>
				</Drawer>
			</div>
		);
	}
}

MainNav.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainNav);

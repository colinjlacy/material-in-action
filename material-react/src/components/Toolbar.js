import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CodeIcon from '@material-ui/icons/Code';

const styles = {
	root: {
		flexGrow: 1,
		textAlign: 'left'
	},
	flex: {
		flex: 1
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20
	}
};

function ButtonAppBar(props) {
	const { classes } = props;

	function emitToggleEvent() {
		props.onToggle()
	}

	function emitClickEvent() {
		props.onClick()
	}

	function navigateToRepo() {
		window.location = 'https://github.com/colinjlacy/material-in-action';
	}

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton className={ classes.menuButton } color="inherit" aria-label="Menu" onClick={ emitToggleEvent }>
						<MenuIcon />
					</IconButton>
					<Typography variant="title" color="inherit" className={classes.flex}>
						Material in React
					</Typography>
					<Button color="inherit" onClick={ emitClickEvent }>Modal</Button>
					<IconButton color="inherit" onClick={ navigateToRepo }>
						<CodeIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
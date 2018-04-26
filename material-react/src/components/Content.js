import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import LyricsPage from './LyricsPage.js'
import TablePage from './TablePage.js'
import FormPage from './FormPage.js'

const styles = theme => ({
	root: {
		flexGrow: 1,
		padding: '2rem',
		textAlign: 'left'
	},
	paper: {
		padding: theme.spacing.unit * 2,
		color: theme.palette.text.secondary
	}
});

function ContentArea(props) {

	const { classes } = props;

	const page = props.page;

	let displayContent;

	if(page === 'lyrics') { displayContent = <LyricsPage /> } else
	if(page === 'table') { displayContent = <TablePage /> } else
	if(page === 'form') { displayContent = <FormPage /> }

	return (
		<div className={classes.root}>
			{ displayContent }
		</div>
	);
}

ContentArea.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentArea);

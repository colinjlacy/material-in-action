import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	},
	button: {
		margin: theme.spacing.unit
	},
	'button-container': {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '100%'
	}
});

class FormPage extends React.Component {
	state = {
		age: '',
		multiline: 'Controlled',
		currency: 'EUR'
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<Grid container spacing={16}>
				<Grid item xs={12} sm={4} md={8}>
					<Typography variant="display2" color="primary">Simple Form</Typography>
					<form className={classes.container} autoComplete="off">
						<TextField
							required
							id="first"
							label="First Name"
							className={classes.textField}
							onChange={this.handleChange('firstName')}
							fullWidth
							margin="normal"
							/>
						<TextField
							id="middle"
							label="Middle Name"
							className={classes.textField}
							fullWidth
							margin="normal"
							/>
						<TextField
							required
							id="last"
							label="Last Name"
							className={classes.textField}
							fullWidth
							margin="normal"
							/>
						<TextField
							required
							id="age"
							label="Age"
							className={classes.textField}
							type="number"
							helperText="Numbers only, please"
							fullWidth
							margin="normal"
							/>
						<div className={classes['button-container']}>
							<Button variant="raised" color="secondary" type="submit" className={classes.button}>
								Submit
							</Button>
						</div>
					</form>
				</Grid>
			</Grid>
		);
	}
}

FormPage.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormPage);
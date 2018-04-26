import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog';

class AlertDialog extends React.Component {

	handleClose = (val) => {
		this.props.onClick(val);
	};

	render() {
		return (
			<div>
				<Dialog open={this.props.open}
				        onClose={this.handleClose}
				        aria-labelledby="alert-dialog-title"
				        aria-describedby="alert-dialog-description">
					<DialogTitle id="alert-dialog-title">{"This is an Example of a Modal"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Modals are a great way to communicate a focused message, bringing the user's attention to something important - generally a step in a workflow, or a message that indicates they're about to something that will have consequences.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={() => { this.handleClose() }} color="primary">
							Disagree
						</Button>
						<Button onClick={() => { this.handleClose('Agree') }} color="primary" autoFocus>
							Agree
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default AlertDialog;

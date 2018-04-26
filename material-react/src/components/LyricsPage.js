import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


function LyricsPage() {
	return (
		<Grid container spacing={16}>
			<Grid item xs={12}>
				<Typography variant="display2" color="primary">Material Girl</Typography>
				<Typography variant="subheading">Madonna, 1984</Typography>
				<Typography variant="body2">
					<p>Some boys kiss me, some boys hug me<br/>
						I think they're okay<br/>
						If they don't give me proper credit, I just walk away<br/>
						They can beg and they can plead<br/>
						But they can't see the light, that's right<br/>
						'Cause the boy with the cold hard cash is always Mister Right</p>

					<p>
						'Cause we are living in a material world<br/>
						And I am a material girl<br/>
						You know that we are living in a material world<br/>
						And I am a material girl</p>

					<p>
						Some boys romance, some boys slow dance<br/>
						That's all right with me<br/>
						If they can't raise my interest, then I have to let them be<br/>
						Some boys try, and some boys lie<br/>
						But I don't let them play, no way<br/>
						Only boys that save their pennies make my rainy day</p>

					<p>
						'Cause we are living in a material world<br/>
						And I am a material girl<br/>
						You know that we are living in a material world<br/>
						And I am a material girl<br/>
						Living in a material world<br/>
						And I am a material girl<br/>
						You know that we are living in a material world<br/>
						And I am a material girl</p>

					<p>
						Living in a material world (-terial)<br/>
						Living in a material world<br/>
						Living in a material world (-terial)<br/>
						Living in a material world</p>

					<p>
						Boys may come, and boys may go<br/>
						And that's all right, you see<br/>
						Experience has made me rich, and now they're after me</p>

					<p>
						'Cause everybody's living in a material world<br/>
						And I am a material girl<br/>
						You know that we are living in a material world<br/>
						And I am a material girl<br/>
						Living in a material world<br/>
						And I am a material girl<br/>
						You know that we are living in a material world<br/>
						And I am a material girl</p>
				</Typography>
			</Grid>
		</Grid>
	)
}

export default LyricsPage;

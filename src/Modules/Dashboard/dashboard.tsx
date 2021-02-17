import React from 'react';
import { Paper, Button, Typography, Grid, makeStyles } from '@material-ui/core';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	button: {
		background: theme.palette.primary.main,
		margin: theme.spacing(2)
	},

	Header: {
		background: theme.palette.grey[500],
		height: 150,
		display: 'flex',
		// justifyContent: 'center',
		alignItems: 'center',
		fontSize: 20,
		paddingLeft: theme.spacing(2)
		//marginLeft: 20
	},

	paper: {
		padding: theme.spacing(2)
	}
}));

export default function Dashboard() {
	const classes = useStyles();

	return (
		<>
			<div className={classes.Header}>
				<h2>World Domination</h2>
				<img height='150' width='150' src='https://www.cad-visie.nl/wp-content/uploads/DoveSmith.png' />
			</div>
			<div style={{ marginLeft: 22, marginRight: 14, marginTop: 14 }}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Paper className={classes.paper}>
							<div style={{ marginLeft: 0, marginRight: 0, marginTop: 0 }}>
								<Grid item xs={6}>
									<Paper className={classes.paper}>
										{' '}
										<Button variant='contained'>Links</Button>
									</Paper>
								</Grid>
								<Grid item xs={6}>
									<Paper className={classes.paper}>tyhyuh</Paper>
								</Grid>
							</div>
						</Paper>
					</Grid>
					<Grid item xs={3}>
						<Paper className={classes.paper}>tyhyuh</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>
							<form noValidate autoComplete='off'>
								<Grid container>
									<Grid item xs={6}>
										<TextField fullWidth id='standard-basic' label='Waarde 1' />
									</Grid>
									<Grid item xs={6}>
										<TextField fullWidth id='outlined-basic' label='Waarde 2' variant='outlined' />
									</Grid>
								</Grid>
							</form>
						</Paper>
					</Grid>

					<Grid item xs={6}>
						<Paper className={classes.paper}>tyhyuh</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper className={classes.paper}>tyhyuh</Paper>
					</Grid>
				</Grid>
				{/* <Paper className={classes.button}>
            <Button variant="contained">Links</Button>
            <Button variant="contained">Rechts</Button>
            <Typography variant='body1'>tekst</Typography>
        </Paper> */}
			</div>
		</>
	);
}

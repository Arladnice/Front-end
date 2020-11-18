import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			padding: theme.spacing(10),
		},
		table: {
			minWidth: 650,
		},
		paper: {
			padding: theme.spacing(2),
			color: theme.palette.text.secondary,
		},
		cryptoInputBox: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: 10,
			marginTop: 10,
		},
		currencyInput: {
			minWidth: 'calc(70% - 10)',
		},
		currencyType: {
			minWidth: '30%',
		},
		textOfTypografy: {
			textAlign: 'center',
			paddingTop: 10,
		},
		currencyIcon: {
			width: 18,
			height: 18,
			borderRadius: 30,
		},
	})
);

export default useStyles
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TCoin } from '../../types';

type ICryptoTable = {
	items: TCoin[];
	classes: any;
}

const CryptoTable: React.FC<ICryptoTable> = ({ items, classes }) => {
	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">FullName</TableCell>
						<TableCell align="left">Price</TableCell>
						<TableCell align="left">volume24hour</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{items.map((coin) => (
						<TableRow key={coin.name}>
							<TableCell>
								<img
									className={classes.currencyIcon}
									src={coin.imageUrl}
									alt="Coin Icon"
								/>
							</TableCell>
							<TableCell align="left">{coin.name}</TableCell>
							<TableCell align="left">{coin.fullName}</TableCell>
							<TableCell align="left">${coin.price}</TableCell>
							<TableCell align="left">${coin.volume24Hour}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CryptoTable;
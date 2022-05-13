import { makeStyles, Theme, createStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

export const SampleTable = () => {
  const classes = useStyles();
  const theme = useTheme();
  const hidenOnMobile = useMediaQuery(theme.breakpoints.down('xs'));
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            {!hidenOnMobile && <TableCell align="right">Description</TableCell>}
            <TableCell align="right">Values</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Lorem ipsum
              </TableCell>

              {!hidenOnMobile &&               <TableCell align="right">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </TableCell>}

              <TableCell align="right">300</TableCell>
              <TableCell align="right">#</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
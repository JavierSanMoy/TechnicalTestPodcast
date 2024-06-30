import styled from "@emotion/styled";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";
import { formatDate, formatTime } from "../../common/utils/utils";

const PodcastDetailTable = ({ handleClick }) => {
  const podcasts = useSelector((state) => state.podcasts);
  const { detailPodcastChapters } = podcasts;
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#cccccc",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <TableContainer component={Paper} className="m-24">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detailPodcastChapters?.results?.slice(1).map((row) => (
            <StyledTableRow key={row.trackId}>
              <StyledTableCell component="th" scope="row">
                <Button variant="text" onClick={() => handleClick(row.trackId)}>
                  {row.trackName}
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                {formatDate(row.releaseDate)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {formatTime(row.trackTimeMillis)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
PodcastDetailTable.propTypes = {
  handleClick: PropTypes.func,
};
export default PodcastDetailTable;

import React from 'react';
import PropTypes from 'prop-types';
import TableRowHeader from '@components/ui/table-row/TableRowHeader';
import TableRowItem from '@components/ui/table-row/TableRowItem';

const TableRow = React.memo(
  ({ item, index }) => {
    const match = {
      matchCode: item.C,
      matchTime: item.T,
      matchName: item.N,
      matchDate: item.D,
      matchDay: item.DAY,
      league: item.LN,
    };

    const matchResultData = {
      host: {
        id: item.OCG[1].ID,
        rate: item.OCG[1].OC[0].O,
        mbs: item.OCG[1].OC[0].MBS,
      },
      draw: {
        id: item.OCG[1].ID,
        rate: item.OCG[1].OC[1].O,
        mbs: item.OCG[1].OC[1].MBS,
      },
    };

    const lowerUpperData = {
      lower: {
        id: item.OCG[5].ID,
        rate: item.OCG[5].OC[25].O,
        mbs: item.OCG[5].OC[25].MBS,
      },
      upper: {
        id: item.OCG[5].ID,
        rate: item.OCG[5].OC[26].O,
        mbs: item.OCG[5].OC[26].MBS,
      },
    };

    const doubleData = {
      x1: {
        id: item.OCG[2].ID,
        rate: item.OCG[2].OC[3].O,
        mbs: item.OCG[2].OC[3].MBS,
      },
      x12: {
        id: item.OCG[2].ID,
        rate: item.OCG[2].OC[4].O,
        mbs: item.OCG[2].OC[4].MBS,
      },
      x2: {
        id: item.OCG[2].ID,
        rate: item.OCG[2].OC[5].O,
        mbs: item.OCG[2].OC[5].MBS,
      },
    };

    return (
      <div className="table-row">
        <TableRowHeader>
          <span className="index">{index + 1} </span>
          <span className="date">
            ({match.matchDate} - {match.matchDay})
          </span>
          <span className="league"> {match.league}</span>
        </TableRowHeader>

        <TableRowItem match={match} lowerUpperData={lowerUpperData} matchResultData={matchResultData} doubleResultData={doubleData}>
          <span>
            {match.matchCode} - {match.matchTime} | {match.matchName}
          </span>
        </TableRowItem>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps === nextProps,
);

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    N: PropTypes.string.isRequired,
    DAY: PropTypes.string.isRequired,
    D: PropTypes.string.isRequired,
    T: PropTypes.string.isRequired,
    NID: PropTypes.string.isRequired,
    LN: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
    OCG: PropTypes.shape({
      OC: PropTypes.shape({
        ID: PropTypes.string.isRequired,
        O: PropTypes.string.isRequired,
        MBS: PropTypes.string.isRequired,
        rate: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export default TableRow;

import React, { useMemo } from 'react';
import Data from '@/db/bulten_data.json';
import TableRowHeader from '@components/ui/table-row/TableRowHeader';
import TableList from './TableList';

function Table() {
  const events = Object.values(Data.Events);
  const count = useMemo(() => events?.length, [events]);

  return (
    <div className="table">
      <div className="table-content">
        <TableRowHeader type="header">
          <div className="table-cell-info">
            <span className="total">Total Count: {count}</span>
          </div>
        </TableRowHeader>
        <TableList events={events} />
      </div>
    </div>
  );
}

export default Table;

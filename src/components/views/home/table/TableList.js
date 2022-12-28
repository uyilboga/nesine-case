import React, { useMemo, useState } from 'react';
import TableRow from '@components/ui/table-row';
import useScroll from '@/hooks/useScroll';
import PropTypes from 'prop-types';

function TableList({ events }) {
  const page = useScroll();
  const [perPage] = useState(50);

  const filteredEvents = useMemo(() => events.slice(0, page * perPage), [page]);

  return (
    <div className="table-list">
      <div className="table-list-wrapper">
        {filteredEvents.map((item, index) => (
          <TableRow key={item.NID} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

TableList.propTypes = {
  events: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.shape]),
};

export default TableList;

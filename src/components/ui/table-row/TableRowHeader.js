import React from 'react';
import PropTypes from 'prop-types';
import { staticHeaderData } from '@/utils/constants';

function TableRowHeader({ children, type }) {
  return (
    <div className={`table-row-item ${type === 'header' ? 'table-row-header' : ''}`}>
      <div className="table-col-info">{children}</div>
      <div className="table-col-list">
        {staticHeaderData.map((i, index) => (
          <div className="col-item" key={index}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

TableRowHeader.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.string,
};

TableRowHeader.defaultProps = {
  type: '',
};

export default TableRowHeader;

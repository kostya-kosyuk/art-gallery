import React from 'react';
import classNames from 'classnames';

import './Filters.scss';
import { Link } from 'react-router-dom';
import { DefaultFilters } from './DefaultFilters';

type Props = {
  filtersStatus: boolean,
  filtersCloser: (_:boolean) => void,
}

export const Filters:React.FC<Props> = ({ filtersStatus,filtersCloser }) => {
  const handlerExit = () => {
    filtersCloser(false);
  }

  return (
    <div className={classNames('filters', {
      'filters--isOpen': filtersStatus,
    })}>
      <div
        className="filters__exit"
        onClick={handlerExit}
      ></div>

      <DefaultFilters />
    </div>
  );
};

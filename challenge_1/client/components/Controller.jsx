import React, {useEffect, useState} from 'react';
import EventList from './EventList';
import ReactPaginate from 'react-paginate';

const Controller = ({ events }) => {
  // pages = number of events / desired items per page (limit)

  return (
    <div>
      <EventList eventList={events} />
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </div>
    
  )
};

export default Controller;
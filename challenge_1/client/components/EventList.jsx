import React from 'react';

const EventList = ({ eventList }) => {
  // pages = number of events / desired items per page (limit)
  return (
    <div className="eventsList">
      <ul>
        {eventList.map((event, index) => {
          <li key={index}>{event.description}</li>
        })}
      </ul>
    </div>
  )
};

export default EventList;
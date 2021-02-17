import React, {useEffect, useState} from 'react';

const EventList = ({ events }) => {
  
  return (
    <div className="eventsList">
      <ul>
        {events.map((event, index) => {
          <liv key={index}>{event.description}</liv>
        })}
      </ul>
    </div>
  )
};

export default EventList;
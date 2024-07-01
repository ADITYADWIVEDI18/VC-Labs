import React from 'react';
import TimelineItem from './TimelineItem';

const TimelineContainer = ({ events }) => {
  return (
    <div className="timeline-container mx-auto w-full h-[100vh] p-16 overflow-scroll">
      <div className="relative wrap overflow-hidden p-10 overflow-y-auto timeline-container">
        <div className="absolute border-opacity-20 border-gray-700 h-full border hidden md:block" style={{ left: 'calc(4% + 1px)', width: '4px', backgroundColor: '#396DFF' }}></div>
        
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            index={index + 1}
            title={event.heading}
            content={event.smallContent}
            align="left"
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineContainer;

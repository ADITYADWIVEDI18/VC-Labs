import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import ResponsiveTimeline from './ResponsiveTimeline';

const TimelineContainer = ({ events }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`timeline-container mx-auto w-full ${isMobile ? 'h-full overflow-auto' : 'h-[100vh] overflow-scroll'}`}>
      <div className="relative wrap overflow-hidden p-10">
        {!isMobile && (
          <div className="absolute border-opacity-20 border-gray-700 h-full border hidden md:block sm:border-hidden" style={{ left: 'calc(4% + 1px)', width: '4px', backgroundColor: '#396DFF' }}></div>
        )}

        {events.map((event, index) => (
          isMobile ? (
            <ResponsiveTimeline
              key={index}
              index={index + 1}
              title={event.heading}
              content={event.smallContent}
            />
          ) : (
            <TimelineItem
              key={index}
              index={index + 1}
              title={event.heading}
              content={event.smallContent}
              align="left"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default TimelineContainer;

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
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full p-6 sm:p-10 lg:p-16 bg-[#F1F5FF] rounded-lg shadow-lg">
        <div className="relative wrap overflow-hidden p-10">
          {!isMobile && (
            <div className="absolute border-opacity-20 border-gray-700 h-full border hidden md:block sm:border-hidden" style={{ left: 'calc(4% + 1px)', width: '4px', backgroundColor: '#396DFF' }}></div>
          )}

          <div className="flex flex-col items-center justify-center">
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
      </div>
    </div>
  );
};

export default TimelineContainer;

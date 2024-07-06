import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const [viewRef, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // 20% of the component must be visible
  });

  const [countStarted, setCountStarted] = useState(false);
  const [counts, setCounts] = useState({
    views: 0,
    followers: 0,
    calls: 0,
  });

  useEffect(() => {
    if (inView && !countStarted) {
      // Start counting up
      setCountStarted(true);

      const startCounting = () => {
        let viewsCount = 0;
        let followersCount = 0;
        let callsCount = 0;

        const interval = setInterval(() => {
          if (viewsCount < 150) {
            viewsCount += 15; // Adjust step as needed
          }
          if (followersCount < 100) {
            followersCount += 5; // Adjust step as needed
          }
          if (callsCount < 350) {
            callsCount += 25; // Adjust step as needed
          }

          setCounts({
            views: viewsCount,
            followers: followersCount,
            calls: callsCount,
          });

          // Clear interval once all counts reach their final values
          if (
            viewsCount >= 150 &&
            followersCount >= 100 &&
            callsCount >= 350
          ) {
            clearInterval(interval);
          }
        }, 50); // Adjust interval as needed

        return () => clearInterval(interval);
      };

      startCounting();
    }
  }, [inView, countStarted]);

  return (
    <div ref={viewRef} className="font-anton bg-[#396DFF] text-[#BFFFDB] flex flex-col sm:flex-row justify-evenly w-full py-16 space-y-8 sm:space-y-0 sm:space-x-8">
      <div className="text-center sm:text-left">
        <span className="text-[3em] sm:text-[6em]">{counts.views.toLocaleString()}M+</span>
        <span className="text-xl sm:text-2xl font-grotesk block">
          <br />
          Views generated
        </span>
      </div>
      <div className="text-center sm:text-left">
        <span className="text-[3em] sm:text-[6em]">{counts.followers.toLocaleString()}K+</span>
        <span className="text-xl sm:text-2xl font-grotesk block">
          <br />
          Followers earned
        </span>
      </div>
      <div className="text-center sm:text-left">
        <span className="text-[3em] sm:text-[6em]">{counts.calls}+</span>
        <span className="text-xl sm:text-2xl font-grotesk block">
          <br />
          Calls booked
        </span>
      </div>
    </div>
  );
};

export default Counter;

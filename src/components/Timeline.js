// import React from 'react';

// const Timeline = ({ events }) => {
//   const containerRef = React.createRef();
//   const timelineLineRef = React.createRef();

//   const handleScroll = (event) => {
//     // Check if the container has reached its scroll limit
//     if (containerRef.current.scrollWidth <= containerRef.current.clientWidth + event.target.scrollLeft) {
//       // Allow page scrolling
//       document.body.style.overflowX = 'auto';
//     } else {
//       // Prevent page scrolling while container scrolls
//       document.body.style.overflowX = 'hidden';
//     }

//     // Update timeline line height on scroll
//     timelineLineRef.current.style.height = `${containerRef.current.scrollHeight}px`;
//   };

//   return (
//     <div className="max-w-7xl mx-auto w-full">
//       <div ref={containerRef} className="grid grid-cols-9 gap-4 px-2 overflow-x-auto" onScroll={handleScroll}>
//         {/* Timeline line */}
//         <div ref={timelineLineRef} className="absolute left-1/2 transform -translate-x-1/2 h-0 bg-indigo-300 w-1 z-10"></div>

//         {events.map((event, index) => (
//           <React.Fragment key={index}>
//             {/* Left side content (col-span-4) */}
//             <div className="col-span-4"></div>
//             <div className="col-span-1 flex justify-center items-center relative">
//               <div className="h-full w-1 bg-indigo-300 absolute left-1/2 transform -translate-x-1/2"></div>
//               <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-20 text-white text-center">{index + 1}</div>
//             </div>
//             <div className="col-span-4">
//               <div className="w-full bg-indigo-400 rounded-md p-2 md:pr-4 text-right">
//                 <h1 className="text-white text-xl font-medium py-2">{event.title}</h1>
//                 <p className="text-gray-100 sm:text-sm text-xs">{event.description}</p>
//               </div>
//             </div>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;

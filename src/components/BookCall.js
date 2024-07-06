import React, { useEffect } from 'react';

const BookCall = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full bg-blue-50 p-8 rounded-lg shadow-lg text-center">
      <p className="text-[3em] text-[#00185C] font-bold mb-8">Book a Call</p>
      <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }} data-url="https://calendly.com/adityaadwivedi18/30min"></div>
    </div>
  );
}

export default BookCall;

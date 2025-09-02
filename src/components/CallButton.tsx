import { Phone } from 'lucide-react';

const CallButton = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919719588684';
  };

  return (
    <button
      onClick={handleCall}
      className="fixed left-4 bottom-4 z-50 bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 font-medium animate-pulse hover:animate-none"
      aria-label="Call Now"
    >
      <Phone className="w-5 h-5 animate-[wiggle_1s_ease-in-out_infinite]" />
      <span className="hidden sm:inline">CALL NOW</span>
    </button>
  );
};

export default CallButton;
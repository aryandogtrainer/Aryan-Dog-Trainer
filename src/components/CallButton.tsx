import { Phone } from 'lucide-react';

const CallButton = () => {
  const handleCall = () => {
    window.location.href = 'tel:+919719588684';
  };

  return (
    <button
      onClick={handleCall}
      className="fixed left-4 bottom-4 z-50 bg-red-500 hover:bg-red-600 text-white rounded-full w-[60px] h-[60px] shadow-lg transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none hover:scale-110"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite]" />
    </button>
  );
};

export default CallButton;
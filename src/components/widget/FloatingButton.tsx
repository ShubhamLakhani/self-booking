export default function FloatingButton({ onClick }: { onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="fixed bottom-6 right-6 z-50 bg-[#F15A24] text-white font-semibold py-3 px-6 rounded-full shadow-lg"
      >
        Book Now
      </button>
    );
  }
  
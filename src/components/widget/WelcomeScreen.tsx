export default function WelcomeScreen({ onNext }: { onNext: () => void }) {
    return (
      <div className="text-center p-6 space-y-4">
        <img src="/logo.png" alt="Logo" className="h-12 mx-auto" />
        <h2 className="text-xl font-bold text-[#F15A24]">
          Welcome To <span className="text-black">Paw Parking!</span>
        </h2>
        <img src="/welcome_illustration.png" alt="Welcome" className="w-48 mx-auto" />
        <button
          onClick={onNext}
          className="w-full py-3 bg-[#F15A24] text-white font-semibold rounded-xl flex justify-center items-center gap-2"
        >
          Make a Booking →
        </button>
        <p className="text-xs text-gray-500 pt-6">
          Powered by <br />
          <img src="/powered_by.png" className="h-6 mx-auto" alt="Powered by" />
        </p>
      </div>
    );
  }
  
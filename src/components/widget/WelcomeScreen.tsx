import Image from "next/image";

export default function WelcomeScreen({ onNext }: { onNext: () => void }) {
    return (
      <div className="mt-60 text-center">
        <h2 className="text-24 font-semibold text-orange">
          Welcome To <span className="text-black">Paw Parking!</span>
        </h2>
        <Image src="/welcome_illustration.png" alt="Welcome" width={280} height={280} className="w-full object-contain object-center my-50 mx-auto" />
        <button
          type="button"
          onClick={onNext}
          className="w-full py-3 bg-orange hover:bg-orange-600 text-white font-semibold rounded-xl flex justify-center items-center gap-2 cursor-pointer transition duration-200 ease-in-out"
        >
          Make a Booking  &nbsp; →
        </button>
        <p className="text-14 text-orange font-[400] mt-25 mb-1.5">Powered by</p>
          <Image src="/powered_by.svg" width={140} height={22} className="object-contain object-center mx-auto" alt="Powered by" />
      </div>
    );
  }
  
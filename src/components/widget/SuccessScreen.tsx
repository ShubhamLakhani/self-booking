import type { Pets } from "./Widget";

export default function SuccessScreen({
    name,
    date,
    pets,
  }: {
    name: string;
    date: string;
    pets: Pets;
  }) {
    const summary = Object.entries(pets)
      .filter(([, count]) => count > 0)
      .map(([type, count]) => `${count} ${type}${count > 1 ? 's' : ''}`)
      .join(' and ');
  
    return (
      <div className="mt-4 pt-16 border-t border-gray h-full">
        <div className="max-w-80 mx-auto  w-full h-full text-center">
          <img src="/success_illustration.png" width={204} height={352} className="object-contain object-center mx-auto mb-5 w-full" alt="Success" />
          <h3 className="text-2xl font-semibold text-black mb-4">Thank You for your Booking Request!</h3>
          <p className="text-sm text-black-900">
            Our staff will get in touch with you shortly to confirm your booking.
          </p>
          <div className="bg-red-50 text-sm text-black p-4 rounded-lg mt-32 text-left">
            Booking request for <b>{summary}</b> ({name}) has been sent for <b>{date}</b>.
          </div>
        </div>
      </div>
    );
  }
  
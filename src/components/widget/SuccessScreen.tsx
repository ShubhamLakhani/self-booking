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
      <div className="text-center p-6 space-y-4">
        <img src="/success_illustration.png" className="w-40 mx-auto" alt="Success" />
        <h3 className="text-lg font-semibold">Thank You for your Booking Request!</h3>
        <p className="text-sm text-gray-600">
          Our staff will get in touch with you shortly to confirm your booking.
        </p>
        <div className="bg-red-50 text-sm text-black p-4 rounded-lg">
          Booking request for <b>{summary}</b> ({name}) has been sent for <b>{date}</b>.
        </div>
      </div>
    );
  }
  
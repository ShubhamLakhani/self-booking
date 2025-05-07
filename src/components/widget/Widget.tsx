import { useState } from 'react';
import FloatingButton from './FloatingButton';
import WelcomeScreen from './WelcomeScreen';
import BookingForm from './BookingForm';
import SuccessScreen from './SuccessScreen';

export interface Pets {
    Dog: number;
    Cat: number;
    Bird: number;
}
interface BookingData {
  fullName: string;
  checkInDate: string;
  pets: Pets;
}

export default function Widget() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<'welcome' | 'form' | 'success'>('welcome');

  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const closeWidget = () => {
    setVisible(false);
    setStep('welcome');
    setBookingData(null);
  };

  const handleFormSubmit = (data: any) => {
    setBookingData(data);
    setStep('success');
  };

  return (
    <>
      {!visible && <FloatingButton onClick={() => setVisible(true)} />}

      {visible && (
        <div className="">
          <div className="flex justify-end p-3">
            <button onClick={closeWidget} className="text-2xl font-light text-gray-400">&times;</button>
          </div>
          {step === 'welcome' && <WelcomeScreen onNext={() => setStep('form')} />}
          {step === 'form' && <BookingForm onSubmitSuccess={handleFormSubmit} />}
          {step === 'success' && bookingData && (
            <SuccessScreen
              name={bookingData.fullName}
              date={bookingData.checkInDate}
              pets={bookingData.pets}
            />
          )}
        </div>
      )}
    </>
  );
}

import { useState } from 'react';
import FloatingButton from './FloatingButton';
import WelcomeScreen from './WelcomeScreen';
import BookingForm from './BookingForm';
import SuccessScreen from './SuccessScreen';
import Image from 'next/image';

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

  const openWidget = () => {
    setVisible(true);
    window.parent.postMessage({ type: 'WIDGET_RESIZE', width: '400px', height: '650px' }, '*');
  };
  
  const closeWidget = () => {
    setVisible(false);
    setStep('welcome');
    setBookingData(null);
    window.parent.postMessage({ type: 'WIDGET_RESET' }, '*');
  };

  const handleFormSubmit = (data: BookingData) => {
    setBookingData(data);
    setStep('success');
  };

  return (
    <div
    >
      {!visible && <FloatingButton onClick={openWidget} />}

      {visible && (
        <div className="min-w-[400px] min-h-[700px] bg-white rounded-xl fixed bottom-4 right-4 z-50  border border-gray-200 p-24">
          {step === 'welcome' ? (
            <div className="flex justify-between items-start">
            <Image src="/logo.png" alt="Logo" width={140} height={46} className="object-contain object-center" />
            <button onClick={closeWidget} className="text-2xl w-5 h-5 flex items-center cursor-pointer font-light text-black">&times;</button>
          </div>
          ) : step === 'form' ? (
            <div className="flex justify-between items-start">
              <button className='w-5 h-5 flex items-center justify-center cursor-pointer font-light text-black'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9417 17.8082C14.9998 17.8662 15.0458 17.9352 15.0773 18.011C15.1087 18.0869 15.1249 18.1682 15.1249 18.2503C15.1249 18.3325 15.1087 18.4138 15.0773 18.4897C15.0458 18.5655 14.9998 18.6345 14.9417 18.6925C14.8836 18.7506 14.8147 18.7967 14.7388 18.8281C14.663 18.8595 14.5816 18.8757 14.4995 18.8757C14.4174 18.8757 14.3361 18.8595 14.2602 18.8281C14.1843 18.7967 14.1154 18.7506 14.0573 18.6925L7.80733 12.4425C7.74922 12.3845 7.70312 12.3156 7.67167 12.2397C7.64021 12.1638 7.62402 12.0825 7.62402 12.0003C7.62402 11.9182 7.64021 11.8369 7.67167 11.761C7.70312 11.6851 7.74922 11.6162 7.80733 11.5582L14.0573 5.30816C14.1746 5.19088 14.3337 5.125 14.4995 5.125C14.6654 5.125 14.8244 5.19088 14.9417 5.30816C15.059 5.42544 15.1249 5.5845 15.1249 5.75035C15.1249 5.9162 15.059 6.07526 14.9417 6.19253L9.13311 12.0003L14.9417 17.8082Z" fill="black"/>
                </svg>
              </button>
              <h6 className='mx-auto text-base font-semibold'>Send a Booking Enquiry</h6>
              <button onClick={closeWidget} className="text-2xl w-5 h-5 flex items-center cursor-pointer font-light text-black">&times;</button>
            </div>
          ) : (
            <div className="flex justify-end items-start">

              <button onClick={closeWidget} className="text-2xl w-5 h-5 flex items-center cursor-pointer font-light text-black">&times;</button>
            </div>
          )}
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
    </div>
  );
}

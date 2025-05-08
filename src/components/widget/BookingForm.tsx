import { useForm } from 'react-hook-form';
import { useState } from 'react';

const services = ['Boarding', 'Grooming', 'Day Care'];

type FormData = {
  fullName: string;
  mobile: string;
  checkInDate: string;
};

export default function BookingForm({
  onSubmitSuccess
}: {
  onSubmitSuccess: (data: { fullName: string; mobile: string; checkInDate: string; service: string; pets: { Dog: number; Cat: number; Bird: number } }) => void;
}) {
  const [selectedService, setSelectedService] = useState('Boarding');
  const [pets, setPets] = useState({ Dog: 0, Cat: 0, Bird: 0 });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const handlePetChange = (type: "Dog" | "Cat" | "Bird", delta: number) => {
    setPets(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  const onSubmit = (data: FormData) => {
    const payload = {
      ...data,
      service: selectedService,
      pets
    };
    onSubmitSuccess(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-4 pt-4 border-t border-gray'>
      <div>
        <p className="text-14 font-semibold text-black mb-2">What are you booking for?</p>
        <div className="flex gap-[16px] mb-4">
          {services.map(service => (
            <button
              key={service}
              type="button"
              onClick={() => setSelectedService(service)}
              className={`px-2 flex items-center w-1/3 justify-center py-3 rounded-xl border font-normal text-sm text-black cursor-pointer ${
                selectedService === service
                  ? 'border-orange'
                  : 'border-gray'
              }`}
            >
              {service}
                <span className={`w-4 h-4 min-w-4 flex items-center justify-center border border-gray ms-2 rounded-full ${selectedService === service ? 'bg-orange border-orange' : 'bg-white'}`}> 
                {selectedService === service && (
                  <i><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-inside-1_12899_105718" fill="white">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6947 3.70495C11.8259 3.83622 11.8996 4.01424 11.8996 4.19985C11.8996 4.38547 11.8259 4.56348 11.6947 4.69475L6.0947 10.2948C5.96343 10.426 5.78541 10.4997 5.5998 10.4997C5.41418 10.4997 5.23617 10.426 5.1049 10.2948L2.3049 7.49475C2.17739 7.36273 2.10683 7.18591 2.10842 7.00237C2.11002 6.81883 2.18364 6.64326 2.31342 6.51348C2.44321 6.38369 2.61878 6.31007 2.80232 6.30848C2.98585 6.30688 3.16268 6.37744 3.2947 6.50495L5.5998 8.81005L10.7049 3.70495C10.8362 3.57372 11.0142 3.5 11.1998 3.5C11.3854 3.5 11.5634 3.57372 11.6947 3.70495Z"/>
                  </mask>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6947 3.70495C11.8259 3.83622 11.8996 4.01424 11.8996 4.19985C11.8996 4.38547 11.8259 4.56348 11.6947 4.69475L6.0947 10.2948C5.96343 10.426 5.78541 10.4997 5.5998 10.4997C5.41418 10.4997 5.23617 10.426 5.1049 10.2948L2.3049 7.49475C2.17739 7.36273 2.10683 7.18591 2.10842 7.00237C2.11002 6.81883 2.18364 6.64326 2.31342 6.51348C2.44321 6.38369 2.61878 6.31007 2.80232 6.30848C2.98585 6.30688 3.16268 6.37744 3.2947 6.50495L5.5998 8.81005L10.7049 3.70495C10.8362 3.57372 11.0142 3.5 11.1998 3.5C11.3854 3.5 11.5634 3.57372 11.6947 3.70495Z" fill="#1D2939"/>
                  <path d="M11.6947 3.70495L12.7555 2.64445L12.7552 2.64413L11.6947 3.70495ZM11.8996 4.19985H13.3996H11.8996ZM11.6947 4.69475L12.7554 5.75541L12.7555 5.75525L11.6947 4.69475ZM6.0947 10.2948L7.1552 11.3556L7.15536 11.3554L6.0947 10.2948ZM5.1049 10.2948L4.04424 11.3554L4.0444 11.3556L5.1049 10.2948ZM2.3049 7.49475L1.22596 8.53682L1.23502 8.54619L1.24424 8.55541L2.3049 7.49475ZM3.2947 6.50495L4.35536 5.44429L4.34614 5.43507L4.33676 5.42602L3.2947 6.50495ZM5.5998 8.81005L4.53914 9.87071L5.5998 10.9314L6.66046 9.87071L5.5998 8.81005ZM10.7049 3.70495L9.6444 2.64413L9.64424 2.64429L10.7049 3.70495ZM11.1998 3.5V5V3.5ZM11.6947 3.70495L10.6339 4.76545C10.4839 4.61543 10.3996 4.41198 10.3996 4.19985H11.8996H13.3996C13.3996 3.61649 13.168 3.05701 12.7555 2.64445L11.6947 3.70495ZM11.8996 4.19985H10.3996C10.3996 3.98772 10.4839 3.78427 10.6339 3.63425L11.6947 4.69475L12.7555 5.75525C13.168 5.34269 13.3996 4.78321 13.3996 4.19985H11.8996ZM11.6947 4.69475L10.634 3.63409L5.03404 9.23409L6.0947 10.2948L7.15536 11.3554L12.7554 5.75541L11.6947 4.69475ZM6.0947 10.2948L5.0342 9.23393C5.18422 9.08395 5.38766 8.9997 5.5998 8.9997V10.4997V11.9997C6.18316 11.9997 6.74264 11.768 7.1552 11.3556L6.0947 10.2948ZM5.5998 10.4997V8.9997C5.81193 8.9997 6.01538 9.08395 6.1654 9.23393L5.1049 10.2948L4.0444 11.3556C4.45696 11.768 5.01643 11.9997 5.5998 11.9997V10.4997ZM5.1049 10.2948L6.16556 9.23409L3.36556 6.43409L2.3049 7.49475L1.24424 8.55541L4.04424 11.3554L5.1049 10.2948ZM2.3049 7.49475L3.38383 6.45268C3.52955 6.60356 3.61019 6.80565 3.60837 7.0154L2.10842 7.00237L0.608482 6.98934C0.603469 7.56617 0.825217 8.12189 1.22596 8.53682L2.3049 7.49475ZM2.10842 7.00237L3.60837 7.0154C3.60655 7.22516 3.52241 7.42581 3.37408 7.57414L2.31342 6.51348L1.25276 5.45282C0.844865 5.86072 0.613494 6.4125 0.608482 6.98934L2.10842 7.00237ZM2.31342 6.51348L3.37408 7.57414C3.22576 7.72246 3.02511 7.8066 2.81535 7.80842L2.80232 6.30848L2.78928 4.80854C2.21245 4.81355 1.66066 5.04492 1.25276 5.45282L2.31342 6.51348ZM2.80232 6.30848L2.81535 7.80842C2.60559 7.81025 2.40351 7.72961 2.25263 7.58388L3.2947 6.50495L4.33676 5.42602C3.92184 5.02527 3.36611 4.80352 2.78928 4.80854L2.80232 6.30848ZM3.2947 6.50495L2.23404 7.56561L4.53914 9.87071L5.5998 8.81005L6.66046 7.74939L4.35536 5.44429L3.2947 6.50495ZM5.5998 8.81005L6.66046 9.87071L11.7656 4.76561L10.7049 3.70495L9.64424 2.64429L4.53914 7.74939L5.5998 8.81005ZM10.7049 3.70495L11.7654 4.76577C11.6154 4.91575 11.4119 5 11.1998 5V3.5V2C10.6164 2 10.057 2.23169 9.6444 2.64413L10.7049 3.70495ZM11.1998 3.5V5C10.9877 5 10.7842 4.91575 10.6342 4.76577L11.6947 3.70495L12.7552 2.64413C12.3426 2.23169 11.7832 2 11.1998 2V3.5Z" fill="white" mask="url(#path-1-inside-1_12899_105718)"/>
                  </svg></i>
                )}
                </span>
            </button>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <label htmlFor="name" className='text-xs font-semibold text-black mb-2 block'>Full Name*</label>
        <input
          type="text"
          id='name'
          placeholder="Full Name*"
          {...register('fullName', { required: 'Full Name is required' })}
          className="w-full border border-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-200 transition duration-200"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor="mobile" className='text-xs font-semibold text-black mb-2 block'>Mobile Number*</label>
        <input
          type="tel"
          id='mobile'
          placeholder="Mobile Number*"
          {...register('mobile', {
            required: 'Mobile number is required',
            pattern: {
              value: /^[0-9+\-()\s]{10,18}$/,
              message: 'Invalid mobile number'
            }
          })}
          className="w-full border border-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-200 transition duration-200"
        />
        {errors.mobile && (
          <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
        )}
      </div>

      <div className='mb-4'>
        <label htmlFor="checkInDate" className='text-xs font-semibold text-black mb-2 block'>Check In Date*</label>
        <input
          type="date"
          id='checkInDate'
          {...register('checkInDate', { required: 'Check-in date is required' })}
          className="w-full border border-gray rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-200 transition duration-200"
        />
        {errors.checkInDate && (
          <p className="text-red-500 text-xs mt-1">{errors.checkInDate.message}</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 text-left mb-28">
        {(["Dog", "Cat", "Bird"] as Array<"Dog" | "Cat" | "Bird">).map((animal) => (
          <div key={animal}>
            <p className="mb-2 font-medium text-sm text-gray-700">{animal}</p>
            <div className="flex items-center justify-between gap-2 border rounded-xl px-3 py-1 border-[#F15A24] text-[#F15A24]">
              <button
                type="button"
                onClick={() => handlePetChange(animal, -1)}
                className="font-bold text-lg cursor-pointer"
              >
                −
              </button>
              <span>{pets[animal]}</span>
              <button
                type="button"
                onClick={() => handlePetChange(animal, 1)}
                className="font-bold text-lg cursor-pointer"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-orange hover:bg-orange-600 text-white font-semibold rounded-xl flex justify-center items-center gap-2 cursor-pointer transition duration-200 ease-in-out"
      >
        Make a Booking
      </button>
    </form>
  );
}

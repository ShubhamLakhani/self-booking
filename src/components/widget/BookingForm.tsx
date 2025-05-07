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
  onSubmitSuccess: (data: any) => void;
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-6 pb-6">
      <div>
        <p className="text-sm font-semibold text-gray-800 mb-2">What are you booking for?</p>
        <div className="flex gap-2">
          {services.map(service => (
            <button
              key={service}
              type="button"
              onClick={() => setSelectedService(service)}
              className={`px-4 py-2 rounded-full border font-medium text-sm ${
                selectedService === service
                  ? 'bg-[#F15A24] text-white border-[#F15A24]'
                  : 'border-gray-300 text-gray-700'
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Full Name*"
          {...register('fullName', { required: 'Full Name is required' })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Mobile Number*"
          {...register('mobile', {
            required: 'Mobile number is required',
            pattern: {
              value: /^[0-9+\-()\s]{10,18}$/,
              message: 'Invalid mobile number'
            }
          })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
        />
        {errors.mobile && (
          <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>
        )}
      </div>

      <div>
        <input
          type="date"
          {...register('checkInDate', { required: 'Check-in date is required' })}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
        />
        {errors.checkInDate && (
          <p className="text-red-500 text-xs mt-1">{errors.checkInDate.message}</p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        {(["Dog", "Cat", "Bird"] as Array<"Dog" | "Cat" | "Bird">).map((animal) => (
          <div key={animal}>
            <p className="mb-2 font-medium text-sm text-gray-700">{animal}</p>
            <div className="flex items-center justify-center gap-2 border rounded-xl px-3 py-2 border-[#F15A24] text-[#F15A24]">
              <button
                type="button"
                onClick={() => handlePetChange(animal, -1)}
                className="font-bold text-lg"
              >
                −
              </button>
              <span>{pets[animal]}</span>
              <button
                type="button"
                onClick={() => handlePetChange(animal, 1)}
                className="font-bold text-lg"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full mt-4 py-3 bg-[#F15A24] text-white font-semibold rounded-xl"
      >
        Make a Booking
      </button>
    </form>
  );
}


"use client";

import { useState } from "react";
import { CalendarDays, Send } from "lucide-react";

type BookingFormProps = {
  equipmentId: string;
  equipmentName: string;
};

export default function BookingForm({
  equipmentId,
  equipmentName,
}: BookingFormProps) {
  const [bookingDate, setBookingDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!bookingDate || !returnDate || !purpose.trim()) {
      setMessage("Please fill in all the fields.");
      return;
    }

    if (returnDate < bookingDate) {
      setMessage("Return date cannot be before booking date.");
      return;
    }

    const bookingData = {
      equipmentId,
      equipmentName,
      bookingDate,
      returnDate,
      purpose,
    };

    console.log("Booking request:", bookingData);

    setMessage("Booking request submitted successfully!");

    setBookingDate("");
    setReturnDate("");
    setPurpose("");
  };

  return (
    <div className="rounded-2xl border border-[#E5DDCE] bg-white p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-[#292D28]">
        Request a Booking
      </h2>

      <p className="mt-2 text-sm leading-6 text-[#77766E]">
        Select your booking dates and tell us why you need this equipment.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        {/* Booking date */}
        <div>
          <label
            htmlFor="bookingDate"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Booking Date
          </label>

          <div className="relative">
            <CalendarDays
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="bookingDate"
              type="date"
              value={bookingDate}
              onChange={(event) => setBookingDate(event.target.value)}
              className="w-full rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] text-black py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#34483C]"
            />
          </div>
        </div>

        {/* Return date */}
        <div>
          <label
            htmlFor="returnDate"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Expected Return Date
          </label>

          <div className="relative">
            <CalendarDays
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#87917A]"
            />

            <input
              id="returnDate"
              type="date"
              min={bookingDate || undefined}
              value={returnDate}
              onChange={(event) => setReturnDate(event.target.value)}
              className="w-full rounded-xl border border-[#E5DDCE] bg-[#F7F1E7] text-black py-3.5 pl-12 pr-4 text-sm outline-none focus:border-[#34483C]"
            />
          </div>
        </div>

        {/* Purpose */}
        <div>
          <label
            htmlFor="purpose"
            className="mb-2 block text-sm font-medium text-[#292D28]"
          >
            Purpose of Booking
          </label>

          <textarea
            id="purpose"
            rows={4}
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
            placeholder="Explain why you need this equipment..."
            className="w-full resize-none rounded-xl border border-[#E5DDCE] text-black bg-[#F7F1E7] px-4 py-3.5 text-sm outline-none placeholder:text-[#AAA69D] focus:border-[#34483C]"
          />
        </div>

        {/* Message */}
        {message && (
          <p
            role="status"
            className={`text-sm ${
              message.includes("successfully")
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#34483C] py-4 text-sm font-semibold text-white transition hover:bg-[#293B30]"
        >
          Submit Booking Request
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

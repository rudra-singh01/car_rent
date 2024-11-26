import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="px-[5vw] md:px-[10vw] lg:px-[15vw] pt-10 pb-10">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Terms and Conditions</h2>
      <ul className="list-disc list-inside space-y-3 text-gray-700 text-base md:text-lg lg:text-2xl flex flex-col gap-5">
        <li>
          Time and Kilometers will be calculated and charged from our garage to
          garage.
        </li>
        <li>
          Toll and parking tickets, Permits, and any Government Tax will be
          charged at actuals.
        </li>
        <li>
          All cars on outstation duties shall be charged a minimum average of
          250 km. Per calendar day.
        </li>
        <li>
          All coaches/buses on outstation duties shall be charged a minimum
          average of 250 km limit. Per calendar day.
        </li>
        <li>GST shall be levied as applicable.</li>
        <li>
          We shall not be responsible for any loss and allow any deduction from
          our bills due to breakdowns if any. In case of breakdown of the
          vehicle, we shall arrange a replacement car at the earliest.
        </li>
        <li>Payments Terms 15 days of the date of invoice.</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;

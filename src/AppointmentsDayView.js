import React, { useState } from "react";

const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  // function to conver unix timestamp into human readable hours and minutes
  const appointmentTimeOfDay = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(":");
    return `${h}:${m}`;
  };

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment, idx) => {
          return (
            <li key={idx}>
              <button type="button" onClick={() => setSelectedAppointment(idx)}>
                {appointmentTimeOfDay(appointment)}
              </button>
            </li>
          );
        })}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today</p>
      ) : null}
    </div>
  );
};

export default AppointmentsDayView;

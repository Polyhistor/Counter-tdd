import React from "react";

const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment, idx) => {
        return <li key={idx}>{appointment.startsAt}</li>;
      })}
    </ol>
  </div>
);

export default AppointmentsDayView;

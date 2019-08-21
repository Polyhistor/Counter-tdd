import React from "react";
import AppointmentsDayView from "./AppointmentsDayView";

const Appointment = ({ customer, appointments }) => {
  return (
    <>
      <div>{customer.firstName}</div>
      <AppointmentsDayView appointments={appointments} />
    </>
  );
};

export default Appointment;

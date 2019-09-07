import React from "react";

export const AppointmentForm = ({ selectableServices, service, onSubmit }) => {
  const handleChange = ({ target }) => {
    setService(service => ({
      ...customer,
      [target.name]: target.value
    }));
  };

  return (
    <form id="appointment" onSubmit={() => onSubmit(service)}>
      <label htmlFor="service">Select a service</label>
      <select id="service" name="service" value={service}>
        <option />
        {selectableServices.map(s => (
          <option key={s}>{s}</option>
        ))}
      </select>
    </form>
  );
};

AppointmentForm.defaultProps = {
  selectableServices: [
    "Cut",
    "Blow-dry",
    "Cut & color",
    "Beard trim",
    "Cut & beard trim",
    "Extensions"
  ]
};

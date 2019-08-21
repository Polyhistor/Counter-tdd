import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from "react-dom/test-utils";

import Appointment from "../appointment";
import AppointmentsDayView from "../appointmentsdayview";

describe("Appointment", () => {
  let container;
  let customer;
  const today = new Date();

  const render = component => ReactDOM.render(component, container);

  beforeEach(() => {
    container = document.createElement("div");
  });

  const appointments = [
    { startsAt: today.setHours(12, 0) },
    { startsAt: today.setHours(13, 0) }
  ];
  it("renders the customer first name", () => {
    customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} appointments={appointments} />);
    expect(container.textContent).toMatch("Ashley");
  });

  it("renders the customer first name", () => {
    customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} appointments={appointments} />);
    expect(container.textContent).toMatch("Jordan");
  });
});

describe("AppointmentsDayView", () => {
  // helper variables
  let container;
  const today = new Date();

  // helper functions
  beforeEach(() => {
    container = document.createElement("div");
  });
  const render = component => ReactDOM.render(component, container);
  const appointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Ashley" } }
  ];

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);

    expect(container.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders multiple appointments in an ol element", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelector("ol").children).toHaveLength(2);
  });

  it("renders each appointment in an li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0].textContent).toEqual("12:00");
    expect(container.querySelectorAll("li")[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(container.textContent).toMatch(
      "There are no appointments scheduled for today"
    );
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    expect(container.querySelectorAll("li > button")).toHaveLength(2);
    expect(container.querySelectorAll("li > button")[0].type).toEqual("button");
  });

  it.skip("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={appointments} />);
    const button = container.querySelectorAll("button")[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch("Jordan");
  });
});

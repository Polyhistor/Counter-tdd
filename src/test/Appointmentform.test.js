import React from "react";
import { createContainer } from "./domManipulators";
import { AppointmentForm } from "../AppointmentForm";
import ReactTestUtils from "react-dom/test-utils";

describe("AppointmentForm", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  const form = id => container.querySelector(`form[id="${id}"]`);
  const field = name => form("appointment").elements[name];
  const findOption = (dropdownNode, textContent) => {
    const options = Array.from(dropdownNode.childNodes);
    return options.find(option => option.textContent === textContent);
  };
  const labelFor = text => container.querySelector(`label[for="${text}"]`);

  it("renders a form", () => {
    render(<AppointmentForm />);
    expect(form("appointment")).not.toBeNull();
  });

  describe("service field", () => {
    it("renders as a select box", () => {
      render(<AppointmentForm />);
      expect(field("service")).not.toBeNull();
      expect(field("service").tagName).toEqual("SELECT");
    });

    it("initially has a blank value chose", () => {
      render(<AppointmentForm />);
      const firstNode = field("service").childNodes[0];
      expect(firstNode.value).toEqual("");
      expect(firstNode.selected).tobeTruthy;
    });

    it("lists all salon services", () => {
      const selectableServices = ["Cut", "Blow-dry"];
      render(<AppointmentForm selectableServices={selectableServices} />);
      const optionNodes = Array.from(field("service").childNodes);
      const renderedServices = optionNodes.map(node => node.textContent);
      expect(renderedServices).toEqual(
        expect.arrayContaining(selectableServices)
      );
    });

    it("pre-selects the existing value", () => {
      const services = ["Cut", "Blow-dry"];
      render(
        <AppointmentForm selectableServices={services} service="Blow-dry" />
      );
      const option = findOption(field("service"), "Blow-dry");
      expect(option.selected).toBeTruthy();
    });

    it("renders a label", () => {
      render(<AppointmentForm />);
      expect(labelFor("service").textContent).toEqual("Select a service");
    });

    it("assigns and id that matches the label", () => {
      render(<AppointmentForm />);
      expect(labelFor("service").htmlFor).toEqual(field("service").id);
    });

    it("saves existing value when submitted", async () => {
      expect.hasAssertions();
      render(
        <AppointmentForm
          {...{ service: "Blow-dry" }}
          onSubmit={service => expect(service).toEqual("Blow-dry")}
        />
      );
      await ReactTestUtils.Simulate.submit(form("appointment"));
    });
  });
});

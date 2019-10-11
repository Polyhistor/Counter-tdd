import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function that renders the shallow version of our component
 * @function setup
 * @param {object} props - optional props that can be passed into the component
 * @param {object} state - initial state of the setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

/**
 * Function that retuns a ShallowWrapper containing node(s) with the give data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - value of data-test attribute for serach
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

it("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

it("renders increment button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

it("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

it("counter starts at 0", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain("0");
});

it("increments counter by a button click", () => {});

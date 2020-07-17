import React from "react";
import { shallow } from "enzyme";
import CardBlock from ".";

describe(CardBlock, () => {
  it("renders the content correctly", () => {
    const text = "My Text";
    const wrapper = shallow(<CardBlock>{text}</CardBlock>);

    expect(wrapper).toHaveText(text);
    expect(wrapper).toMatchSnapshot();
  });

  it("includes the expected CSS class", () => {
    const wrapper = shallow(<CardBlock>Test</CardBlock>);
    expect(wrapper).toHaveClassName("card-block");
  });
});
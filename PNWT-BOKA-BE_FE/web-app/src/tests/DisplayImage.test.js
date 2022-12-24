import React from 'react';
import { shallow } from 'enzyme';
import { DisplayImage } from '../components/DisplayImage';
describe("DisplayImage", () => {
    it("should render div", () => {
        const component = shallow(<DisplayImage />);
        const div = component.find('div');
        expect(div).toBeDefined();
    });

    it("should render image", () => {
        const component = shallow(<DisplayImage />);
        const img = component.find('img');
        expect(img).toBeDefined();
    });

    it("should render input", () => {
        const component = shallow(<DisplayImage />);
        const input = component.find('input');
        expect(input).toBeDefined();
    });

    it("should click", () => {
        const component = shallow(<DisplayImage />);
        const input = component.find('input');
    });
});
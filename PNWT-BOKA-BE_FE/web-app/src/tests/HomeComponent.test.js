import React from 'react';
import { shallow } from 'enzyme';
import { HomeComponent } from '../components/HomeComponent';
describe("HomeComponent", () => {
    it("should render div", () => {
        const component = shallow(<HomeComponent />);
        const div = component.find('div'); 
        expect(div).toBeDefined();
    });

    it("should check if all elements are there", () => {
        const component = shallow(<HomeComponent />);
        const div = component.find('div');
        expect(div.find('div')).toBeDefined();
        const div2 = div.find('div');
        expect(div2.find('h6')).toBeDefined();
        expect(div2.find('h1')).toBeDefined();
        expect(div2.find('h5')).toBeDefined();
        expect(div2.find('div')).toBeDefined();
    }); 
});
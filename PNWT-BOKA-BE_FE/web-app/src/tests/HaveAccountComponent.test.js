import React from 'react';
import { shallow } from 'enzyme';
import { HaveAccountComponent } from '../components/HaveAccountComponent';
describe("HaveAccountComponent", () => {
    it("should render div", () => {
        const component = shallow(<HaveAccountComponent />);
        const div = component.find('div'); 
        expect(div).toBeDefined();
    });

    it("should check if all elements are there", () => {
        const component = shallow(<HaveAccountComponent />);
        const div = component.find('div');
        expect(div.find('p')).toHaveLength(2);
    }); 
});
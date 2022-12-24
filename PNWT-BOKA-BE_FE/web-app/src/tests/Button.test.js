import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../components/Button';
describe("Button", () => {
    it("should render div", () => {
        const component = shallow(<Button />);
        const div = component.find('div');
        expect(div).toBeDefined();
    });

    it("should click", () => {
        const mockCallBack = jest.fn();
        const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
        button.find('div').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    }); 
});
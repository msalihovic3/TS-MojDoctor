import React from 'react';
import { shallow } from 'enzyme';
import { AddEmployeeInputs } from '../components/AddEmployeeInputs';
describe("AddEmployeeInputs", () => {
    it("should render div", () => {
        const component = shallow(<AddEmployeeInputs />);
        const div = component.find('div');
        expect(div).toBeDefined();
    });

    it("should check if it doesnt have a labels", () => {
        const mockCallBack = jest.fn();
        const component = shallow((<AddEmployeeInputs name={"nasiha"}
            password={"1232"} 
            email={"nasiha@email.com"} 
            phoneNumber={123322}
            setName={mockCallBack}
            setPassword={mockCallBack} 
            setEmail={mockCallBack} 
            setPhoneNumber={mockCallBack}/>));
            const div = component.find('div');
            expect(div).toBeDefined();
            expect(div.find('label')).toHaveLength(0);
    }); 


    it("should check if 1 error is there", () => {
        const mockCallBack = jest.fn();
        const component = shallow((<AddEmployeeInputs
            password={"1232"} 
            email={"nasiha@email.com"} 
            phoneNumber={123322}
            setName={mockCallBack}
            setPassword={mockCallBack} 
            setEmail={mockCallBack} 
            setPhoneNumber={mockCallBack}
            nameError={"error"}/>));
            const div = component.find('div');
            expect(div).toBeDefined();
            expect(div.find('div')).toHaveLength(1);
    }); 

    it("should check if 4 inputs contain what is set", () => {
        const mockCallBack = jest.fn();
        const password = "nasi1233";
        const email = "nasiha@email.com"
        const phoneNumber = 1233333;
        const name = "nasiha";
        const component = shallow((<AddEmployeeInputs 
            name={name}
            password={password} 
            email={email} 
            phoneNumber={phoneNumber}
            setName={mockCallBack}
            setPassword={mockCallBack} 
            setEmail={mockCallBack} 
            setPhoneNumber={mockCallBack}/>));
            const div = component.find('div');
            expect(div).toBeDefined();
            expect(div.find('input').contains(name));
            expect(div.find('input').contains(password));
            expect(div.find('input').contains(email));
            expect(div.find('input').contains(phoneNumber));
    }); 

    it("should check if changed input works", () => {
        const mockCallBack = jest.fn();
        const password = "nasi1233";
        const email = "nasiha@email.com"
        const phoneNumber = 1233333;
        const name = "nasiha";
        const e = {
            target: {
                value: "nije nasiha"
            }
        };
        const component = shallow((<AddEmployeeInputs 
            name={name}
            password={password} 
            email={email} 
            phoneNumber={phoneNumber}
            setName={e}
            setPassword={mockCallBack} 
            setEmail={mockCallBack} 
            setPhoneNumber={mockCallBack}/>));
            const div = component.find('div');
            expect(div).toBeDefined();
            expect(div.find('input').contains("nije nasiha"));
            expect(div.find('input').contains(password));
            expect(div.find('input').contains(email));
            expect(div.find('input').contains(phoneNumber));
    }); 
});
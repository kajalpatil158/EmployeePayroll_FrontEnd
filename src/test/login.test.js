import React from "react";
import { shallow, mount } from "enzyme";
import { Login }  from '../pages/login';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";




describe('Test Login component', () => {
    test('givenDataTestId_whenVisitedLoginPage_shouldRenderH2TagProperty', () => {
        /*const component = shallow(<Login />)
        expect(component.find('h2').text()).toEqual('Employee Payroll App')
        done()*/
        const { getByTestId } = render(<Login />);
        const title = getByTestId("h2");
        expect(title).toHaveTextContent("Employee Payroll App");
    })
})

import React from "react";
import { shallow, mount } from "enzyme";
import { Login }  from '../pages/login';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe('Test Login component', () => {
    test('givenDataTestId_whenVisitedLoginPage_shouldRenderH2TagProperty', () => {
        const { getByTestId } = render(<Login />);
        const title = getByTestId("h2");
        expect(title).toHaveTextContent("Employee Payroll App");
    })
})

describe('Negative Test Login component', () => {
    test('givenDataTestId_whenVisitedLoginPage_shouldNotRenderH2TagProperty', () => {
        const { getByTestId } = render(<Login />);
        const title = getByTestId("h2");
        expect(title).not.toHaveTextContent("Employee App");
    })
})


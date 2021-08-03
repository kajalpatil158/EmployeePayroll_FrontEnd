import React from "react";
import { shallow, mount } from "enzyme";
import { Register } from '../pages/register'
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe('Test Login component', () => {
    test('givenDataTestId_whenVisitedLoginPage_shouldRenderH2TagProperty', () => {
        const { getByTestId } = render(<Register />);
        const title = getByTestId("h2");
        expect(title).toHaveTextContent("Employee Payroll App");
    })
})
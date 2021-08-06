import React from "react";
import { Login } from '../pages/login';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe('Test Login component', () => {
    test('givenDataTestId_whenVisitedLoginPage_shouldRenderH2TagProperty', () => {
        const { getByTestId } = render(<Login />);
        const title = getByTestId("h2");
        expect(title).toHaveTextContent("Employee Payroll App");
    })

    test('givenDataTestId_whenVisitedLoginPage_shouldNotRenderH2TagProperty', () => {
        const { getByTestId } = render(<Login />);
        const title = getByTestId("h2");
        expect(title).not.toHaveTextContent("Employee App");
    })
})

describe('Login Form test', () => {
    it('check if form login displays', () => {
        const { getByTestId } = render(<Login />);
        const logo = getByTestId('avatar');
        const form = getByTestId('Form');
        const email = getByTestId('Email');
        const password = getByTestId('password');
        const button = getByTestId('button');

        expect(logo).toBeInTheDocument();
        expect(form).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
    })
    it("givenTestIdElement_WhenLoginPageRendered_ShouldContainExpectedValuesInLoginPage", () => {
        const { getByTestId } = render(<Login />);
        const email = getByTestId("Email");
        const password = getByTestId("password");

        expect(email).toHaveTextContent("Email");
        expect(password).toHaveTextContent("Password");
    });
});
describe('Negative Login Form test', () => {
    it("givenTestIdElement_WhenLoginPageRendered_ShouldNotContainExpectedValuesInLoginPage", () => {
        const { getByTestId } = render(<Login />);
        const email = getByTestId("Email");
        const password = getByTestId("password");
        
        expect(email).not.toHaveTextContent("email");
        expect(password).not.toHaveTextContent("password");
    });
})

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
})
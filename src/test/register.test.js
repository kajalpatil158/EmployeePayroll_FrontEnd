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

    test('givenDataTestId_whenVisitedLoginPage_shouldNotRenderH2TagProperty', () => {
        const { getByTestId } = render(<Register />);
        const title = getByTestId("h2");
        expect(title).not.toHaveTextContent("Employee App");
    })
})
describe("Register Page Elements availabity test", () => {
    it("givenTestIdElement_WhenRegisterPageRendered_ShouldContainThoseElements", () => {
      const { getByTestId } = render(<Register />);
      const logo = getByTestId("avatar");
      const form = getByTestId("Form");
      const firstName = getByTestId("firstName");
      const lastName = getByTestId("lastName");
      const email = getByTestId("email");
      const password = getByTestId("password");
      const confirmPassword = getByTestId("confirmPassword");
      const button = getByTestId("button");
  
      expect(logo).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(firstName).toBeInTheDocument();
      expect(lastName).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(confirmPassword).toBeInTheDocument();
    })
})  

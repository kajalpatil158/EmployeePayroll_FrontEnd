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

    it("givenTestIdElement_WhenLoginPageRendered_ShouldContainExpectedElementValue", () => {
        const { getByTestId } = render(<Register />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const email = getByTestId("email");
        const password = getByTestId("password");
        const confirmPassword = getByTestId("confirmPassword");
    
        expect(firstName).toHaveTextContent("FirstName");
        expect(lastName).toHaveTextContent("LastName");
        expect(email).toHaveTextContent("Email");
        expect(password).toHaveTextContent("Password");
        expect(confirmPassword).toHaveTextContent("ConfirmPassword");
        
      });

      it("givenTestIdElement_WhenLoginPageRendered_ShouldNotContainExpectedElementValue", () => {
        const { getByTestId } = render(<Register />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const email = getByTestId("email");
        const password = getByTestId("password");
       

        expect(firstName).not.toHaveTextContent("firstName");
        expect(lastName).not.toHaveTextContent("lastName");
        expect(email).not.toHaveTextContent("email");
        expect(password).not.toHaveTextContent("password");
      });
})  

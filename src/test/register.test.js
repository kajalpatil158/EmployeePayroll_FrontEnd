import React from "react";
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

    test('givenDataTestId_whenVisitedLoginPage_shouldNotRenderH2TagProperty', () => {
      const { getByTestId } = render(<Register />);
      const title = getByTestId("h2");
      expect(title).not.toHaveTextContent("Employee Paoll");
  })

  test('givenDataTestId_whenVisitedLoginPage_shouldNotRenderH2TagProperty', () => {
    const { getByTestId } = render(<Register />);
    const title = getByTestId("h2");
    expect(title).not.toHaveTextContent("Emp Payroll");
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
      const button = getByTestId("button");
  
      expect(logo).toBeInTheDocument();
      expect(form).toBeInTheDocument();
      expect(firstName).toBeInTheDocument();
      expect(lastName).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(email).toBeInTheDocument();
      expect(password).toBeInTheDocument();
    })

    it("givenTestIdElement_WhenLoginPageRendered_ShouldContainExpectedElementValue", () => {
        const { getByTestId } = render(<Register />);
        const firstName = getByTestId("firstName");
        const lastName = getByTestId("lastName");
        const email = getByTestId("email");
        const password = getByTestId("password");
       
    
        expect(firstName).toHaveTextContent("FirstName");
        expect(lastName).toHaveTextContent("LastName");
        expect(email).toHaveTextContent("Email");
        expect(password).toHaveTextContent("Password");
        
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



it("givenTestIdElement_WhenLoginPageRendered_ShouldNotContainExpectedElementValue", () => {
  const { getByTestId } = render(<Register />);
  const firstName = getByTestId("firstName");
  const lastName = getByTestId("lastName");
  const email = getByTestId("email");
  const password = getByTestId("password");
 

  expect(firstName).not.toHaveTextContent("firstame");
  expect(lastName).not.toHaveTextContent("lastName");
  expect(email).not.toHaveTextContent("email");
  expect(password).not.toHaveTextContent("password");
});


it("givenTestIdElement_WhenLoginPageRendered_ShouldNotContainExpectedElementValue", () => {
  const { getByTestId } = render(<Register />);
  const firstName = getByTestId("firstName");
  const lastName = getByTestId("lastName");
  const email = getByTestId("email");
  const password = getByTestId("password");
 

  expect(firstName).not.toHaveTextContent("firsame");
  expect(lastName).not.toHaveTextContent("lastNme");
  expect(email).not.toHaveTextContent("emil");
  expect(password).not.toHaveTextContent("pasword");
});
})  

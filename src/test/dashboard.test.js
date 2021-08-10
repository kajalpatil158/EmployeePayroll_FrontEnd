import React from "react";
import { Dashboard } from '../components/dashboard';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe('Test dashboard Component', () => {
    it('givenDataTestId_whenVisitedFormComponent_shouldRenderProperly', (done) => {
        const { getByTestId } = render(<Dashboard />);
        const appbar = getByTestId('appbar');
        const typography = getByTestId('typography');
        const logoutbutton = getByTestId('logoutbutton')

        expect(appbar).toBeInTheDocument();
        expect(typography).toBeInTheDocument();
        expect(logoutbutton).toBeInTheDocument();
        done();
    })
})

describe('Negative Test dashboard Component', () => {
    it('givenWrongDataTestId_whenVisitedFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const appbar = queryByTestId('appba');
        const typography = queryByTestId('typograph');
        const logoutbutton = queryByTestId('logoutbuton')

        expect(appbar).not.toBeInTheDocument();
        expect(typography).not.toBeInTheDocument();
        expect(logoutbutton).not.toBeInTheDocument();
        done();
    })
})


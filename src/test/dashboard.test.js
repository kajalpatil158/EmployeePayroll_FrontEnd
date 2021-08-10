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

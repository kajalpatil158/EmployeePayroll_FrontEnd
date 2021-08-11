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

describe('Negative Test dashboard Component', () => {
    it('givenWrongDataTestId_whenVisitedFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const appbar = queryByTestId('appar');
        const typography = queryByTestId('typoraphy');
        const logoutbutton = queryByTestId('logutbutoon')

        expect(appbar).not.toBeInTheDocument();
        expect(typography).not.toBeInTheDocument();
        expect(logoutbutton).not.toBeInTheDocument();
        done();
    })
})

describe('Negative Test dashboard Component', () => {
    it('givenWrongDataTestId_whenVisitedFormComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const appbar = queryByTestId('apbar');
        const typography = queryByTestId('tyoraphy');
        const logoutbutton = queryByTestId('logoutbton')

        expect(appbar).not.toBeInTheDocument();
        expect(typography).not.toBeInTheDocument();
        expect(logoutbutton).not.toBeInTheDocument();
        done();
    })
})


describe('Test dashboard side navigation Component', () => {
    it('givenDataTestId_whenVisitedDashboardSideNavigationComponent_shouldRenderProperly', (done) => {
        const { getByTestId } = render(<Dashboard />);
        const drawer = getByTestId('drawer');
        const listbutton = getByTestId('listbutton');
        const addbutton = getByTestId('addbutton')
        const editbutton = getByTestId('editbutton');
        const deletebutton = getByTestId('deletebutton');

        expect(drawer).toBeInTheDocument();
        expect(listbutton).toBeInTheDocument();
        expect(addbutton).toBeInTheDocument();
        expect(editbutton).toBeInTheDocument();
        expect(deletebutton).toBeInTheDocument();
        done()
    })
})

describe('Negative Test dashboard side navigation Component', () => {
    it('givenWrongDataTestId_whenVisitedDashboardSideNavigationComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const drawer = queryByTestId('drwer');
        const listbutton = queryByTestId('listbuton');
        const addbutton = queryByTestId('addbuton')
        const editbutton = queryByTestId('editbuton');
        const deletebutton = queryByTestId('deletebuton');

        expect(drawer).not.toBeInTheDocument();
        expect(listbutton).not.toBeInTheDocument();
        expect(addbutton).not.toBeInTheDocument();
        expect(editbutton).not.toBeInTheDocument();
        expect(deletebutton).not.toBeInTheDocument();
        done()
    })
})


describe('Negative Test dashboard side navigation Component', () => {
    it('givenWrongDataTestId_whenVisitedDashboardSideNavigationComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const drawer = queryByTestId('draer');
        const listbutton = queryByTestId('listbutto');
        const addbutton = queryByTestId('addbuttn')
        const editbutton = queryByTestId('editbuttn');
        const deletebutton = queryByTestId('deleebuton');

        expect(drawer).not.toBeInTheDocument();
        expect(listbutton).not.toBeInTheDocument();
        expect(addbutton).not.toBeInTheDocument();
        expect(editbutton).not.toBeInTheDocument();
        expect(deletebutton).not.toBeInTheDocument();
        done()
    })
})

describe('Negative Test dashboard side navigation Component', () => {
    it('givenWrongDataTestId_whenVisitedDashboardSideNavigationComponent_shouldNotRenderProperly', (done) => {
        const { queryByTestId } = render(<Dashboard />);
        const drawer = queryByTestId('draer');
        const listbutton = queryByTestId('litbutto');
        const addbutton = queryByTestId('adbuttn')
        const editbutton = queryByTestId('edtbuton');
        const deletebutton = queryByTestId('dletebuton');

        expect(drawer).not.toBeInTheDocument();
        expect(listbutton).not.toBeInTheDocument();
        expect(addbutton).not.toBeInTheDocument();
        expect(editbutton).not.toBeInTheDocument();
        expect(deletebutton).not.toBeInTheDocument();
        done()
    })
})

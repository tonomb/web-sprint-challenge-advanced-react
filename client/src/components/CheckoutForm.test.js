import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    //passed sanity check when looking for wrong header
    const formHeader = screen.getByText(/checkout form/i);

    expect(formHeader).toBeInTheDocument()

});

test("form shows success message on submit with form details", () => {
    
    // == arrange ==
    render(<CheckoutForm />)

    const fNameInput = screen.getByLabelText(/first name/i)
    const lNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const submitBtn = screen.getByRole('button')

    
    // == act ==
    fireEvent.change(fNameInput, {target: {value: 'Antonio'}})
    fireEvent.change(lNameInput, {target: {value: 'Martinez Baez'}})
    fireEvent.change(addressInput, {target: {value: 'valladolid 21'}})
    fireEvent.change(cityInput, {target: {value: 'Mexico'}})
    fireEvent.change(stateInput, {target: {value: 'Mexico'}})
    fireEvent.change(zipInput, {target: {value: '06700'}})
    fireEvent.click(submitBtn)

    const successMessage = screen.getByTestId('successMessage');

    expect(successMessage).toBeInTheDocument();


});

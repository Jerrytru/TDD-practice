import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';


let container;
let customer;


describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'Ashley' };
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Ashley');
  });
});

describe('Appointment', () => {
  it('renders the customer first name', () => {
    const customer = { firstName: 'Jordan' };
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Appointment customer={customer} />, container);
    expect(container.textContent).toMatch('Jordan');
  });
});
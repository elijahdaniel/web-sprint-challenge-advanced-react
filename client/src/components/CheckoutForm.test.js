import React from 'react'
import { render, screen } from '@testing-library/react'
import CheckoutForm from './CheckoutForm'

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<CheckoutForm />)

  const h2 = screen.getAllByText(/checkout form/i)
  expect(h2).toBeTruthy()
})

test('form shows success message on submit with form details', () => {
  render(<CheckoutForm />)

  const btn = screen.getByRole('button')
  btn.click()

  const msg = screen.getAllByTestId('successMessage')
  expect(msg).toBeTruthy()
})

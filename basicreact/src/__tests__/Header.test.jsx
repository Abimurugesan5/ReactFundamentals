import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Components/Header'
// import { act } from 'rect-test-render'
test("To check the spellings",()=>{
    render(<Header/>)
    const element = screen.getByText(/Home/i);
    expect(element).toBeInTheDocument();
    const element1 = screen.getByText(/About/i);
    expect(element1).toBeInTheDocument()
    const element2=screen.getByText(/Services/i)
    expect(element2).toBeInTheDocument()
    const element3=screen.getByText(/Flights/i)
    expect(element3).toBeInTheDocument()
    const element4=screen.getByText(/Discounts/i)
    expect(element4).toBeInTheDocument
    const element5=screen.getByText(/Book Tickets/i)
    expect(element5).toBeInTheDocument;
})
test("Buttons are clickable or not",async ()=>{
    render(<Header/>)
    const buttonElement=screen.getAllByRole('button')
    const element5=screen.getByText(/Book Tickets/i)
    expect(screen.getByText('Book Tickets')).toBeInTheDocument()
    fireEvent.click(element5)
})
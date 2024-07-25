import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe('App Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Items Store')).toBeInTheDocument();
  });

  test('fetches and displays items', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'Item 1', description: 'Description 1', price: 10, category: 'Category 1', image: 'image1.jpg' }]),
      })
    );

    render(<App />);
    expect(await screen.findByText('Item 1')).toBeInTheDocument();
  });

  test('handles item click', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'Item 1', description: 'Description 1', price: 10, category: 'Category 1', image: 'image1.jpg' }]),
      })
    );

    render(<App />);
    const item = await screen.findByText('Item 1');
    fireEvent.click(item);
    expect(screen.getByText('Details:')).toBeInTheDocument();
  });
});
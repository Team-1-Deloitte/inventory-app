import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './Item';

describe('Item Component', () => {
  const item = { id: 1, name: 'Item 1', description: 'Description 1', price: 10, category: 'Category 1', image: 'image1.jpg' };

  test('renders Item component', () => {
    render(<Item item={item} deleteItem={jest.fn()} viewDetails={jest.fn()} addItem={jest.fn()} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  test('handles delete item', () => {
    const deleteItem = jest.fn();
    render(<Item item={item} deleteItem={deleteItem} viewDetails={jest.fn()} addItem={jest.fn()} />);
    fireEvent.click(screen.getByText('Delete Item'));
    expect(deleteItem).toHaveBeenCalledWith(1);
  });

  test('handles view details', () => {
    const viewDetails = jest.fn();
    render(<Item item={item} deleteItem={jest.fn()} viewDetails={viewDetails} addItem={jest.fn()} />);
    fireEvent.click(screen.getByText('View Details'));
    expect(viewDetails).toHaveBeenCalledWith(1);
  });
});
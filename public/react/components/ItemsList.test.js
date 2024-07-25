import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ItemsList } from './ItemsList';

describe('ItemsList Component', () => {
  const items = [
    { id: 1, name: 'Item 1', description: 'Description 1', price: 10, category: 'Category 1', image: 'image1.jpg' },
    { id: 2, name: 'Item 2', description: 'Description 2', price: 20, category: 'Category 2', image: 'image2.jpg' },
  ];

  test('renders ItemsList component', () => {
    render(<ItemsList items={items} deleteItem={jest.fn()} viewDetails={jest.fn()} addItem={jest.fn()} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('handles delete item', () => {
    const deleteItem = jest.fn();
    render(<ItemsList items={items} deleteItem={deleteItem} viewDetails={jest.fn()} addItem={jest.fn()} />);
    fireEvent.click(screen.getAllByText('Delete Item')[0]);
    expect(deleteItem).toHaveBeenCalledWith(1);
  });
});
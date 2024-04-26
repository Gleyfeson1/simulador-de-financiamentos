import React from 'react';
import { render } from '@testing-library/react';
import CardProduct from '@/app/(pages)/simulate/[[...vehicle]]/components/CardProduct';

describe('CardProduct', () => {
  it('renders with correct props', () => {
    const props = {
      name: 'Car Name',
      city: 'City Name',
      description: 'Car Description',
      year: 2022,
      km: 10000,
      price: 60000,
      type: '1',
      src: 'car-image.jpg',
    };

    render(<CardProduct {...props} />);

  });
});

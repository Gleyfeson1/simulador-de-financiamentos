import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '@/components/Button';

describe('Button component', () => {
    test('renders children', () => {
        const { getByText } = render(<Button>Hello</Button>);
        expect(getByText('Hello')).toBeInTheDocument();
      });
      
    test('applies custom className', () => {
        const { container } = render(<Button className="custom-class">Button</Button>);
        const button = container.querySelector('button');
        expect(button).toHaveClass('custom-class');
    });
});
import { render, fireEvent, screen } from '@testing-library/react';
import BMI from '../src/pages/BMI';

describe('BMI Calculator', () => {
    it('renders without crashing', () => {
        render(<BMI />);
    });

    it('calculates BMI correctly with valid input', () => {
        render(<BMI />);
        const weightInput = screen.getByLabelText(/Weight/i);
        const heightInput = screen.getByLabelText(/Height/i);

        fireEvent.change(weightInput, { target: { value: '70' } });
        fireEvent.change(heightInput, { target: { value: '1.75' } });

        fireEvent.click(screen.getByText(/Calculate BMI/i));

        expect(screen.getByText(/Your BMI is: 22.9/i)).toBeInTheDocument();
    });

    it('displays an error message for invalid input', () => {
        render(<BMI />);
        const weightInput = screen.getByLabelText(/Weight/i);
        const heightInput = screen.getByLabelText(/Height/i);

        fireEvent.change(weightInput, { target: { value: 'abc' } });
        fireEvent.change(heightInput, { target: { value: 'xyz' } });

        fireEvent.click(screen.getByText(/Calculate BMI/i));

        expect(screen.getByText(/No input value found/i)).toBeInTheDocument();
    });

    it('displays an error message for weight out of range', () => {
        render(<BMI />);
        const weightInput = screen.getByLabelText(/Weight/i);
        const heightInput = screen.getByLabelText(/Height/i);

        fireEvent.change(weightInput, { target: { value: '400' } });
        fireEvent.change(heightInput, { target: { value: '1.75' } });

        fireEvent.click(screen.getByText(/Calculate BMI/i));

        expect(screen.getByText(/Error: Weight value should be between 1.0-300.0/i)).toBeInTheDocument();
    });

    it('displays an error message for height out of range', () => {
        render(<BMI />);
        const weightInput = screen.getByLabelText(/Weight/i);
        const heightInput = screen.getByLabelText(/Height/i);

        fireEvent.change(weightInput, { target: { value: '70' } });
        fireEvent.change(heightInput, { target: { value: '4.0' } });

        fireEvent.click(screen.getByText(/Calculate BMI/i));

        expect(screen.getByText(/Error: Height value should be between 0.1-3.0/i)).toBeInTheDocument();
    });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { TemperamentForm } from '@/components/features/TemperamentForm';
import { describe, it, expect, vi } from 'vitest';

describe('TemperamentForm', () => {
  it('renders all questions', () => {
    render(<TemperamentForm />);
    
    expect(screen.getByText('How do you handle stress?')).toBeInTheDocument();
    expect(screen.getByText('Your energy level')).toBeInTheDocument();
    expect(screen.getByText('Social preference')).toBeInTheDocument();
  });

  it('allows selecting answers', () => {
    render(<TemperamentForm />);
    
    const calmOption = screen.getByLabelText('Stay calm and composed');
    const highEnergyOption = screen.getByLabelText('High energy, always active');
    const extrovertOption = screen.getByLabelText('Enjoy being around people, social gatherings');
    
    fireEvent.click(calmOption);
    fireEvent.click(highEnergyOption);
    fireEvent.click(extrovertOption);
    
    expect(calmOption).toBeChecked();
    expect(highEnergyOption).toBeChecked();
    expect(extrovertOption).toBeChecked();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<TemperamentForm />);
    
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    
    expect(await screen.findAllByText(/please select/i)).toHaveLength(3);
  });
});
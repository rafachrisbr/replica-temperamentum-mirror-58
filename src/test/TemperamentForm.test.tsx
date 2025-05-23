import { render, screen, fireEvent } from '@testing-library/react';
import { TemperamentForm } from '@/components/features/TemperamentForm';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('TemperamentForm', () => {
  it('renders all questions', () => {
    render(
      <BrowserRouter>
        <TemperamentForm />
      </BrowserRouter>
    );
    
    const questions = screen.getAllByRole('heading', { level: 3 });
    expect(questions).toHaveLength(13); // Total number of temperament questions
  });

  it('allows selecting answers', () => {
    render(
      <BrowserRouter>
        <TemperamentForm />
      </BrowserRouter>
    );
    
    const firstQuestionOptions = screen.getAllByRole('radio');
    fireEvent.click(firstQuestionOptions[0]);
    
    expect(firstQuestionOptions[0]).toBeChecked();
  });
});
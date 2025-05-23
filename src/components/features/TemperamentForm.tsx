import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { questions } from '@/utils/quiz';
import { temperamentFormSchema, type TemperamentFormData } from '@/types/form';
import { useTestStore } from '@/stores/testStore';
import { calculateResults } from '@/utils/quiz';
import { useNavigate } from 'react-router-dom';

export function TemperamentForm() {
  const navigate = useNavigate();
  const { setTemperamentResults } = useTestStore();
  
  const form = useForm<TemperamentFormData>({
    resolver: zodResolver(temperamentFormSchema),
    defaultValues: {
      answers: {},
    },
  });

  const onSubmit = (data: TemperamentFormData) => {
    const results = calculateResults(data.answers);
    setTemperamentResults(results);
    navigate('/results');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className="space-y-4">
            <h3 className="text-lg font-medium text-white">
              {index + 1}. {question.text}
            </h3>
            <RadioGroup
              onValueChange={(value) => {
                form.setValue(`answers.${question.id}`, value);
              }}
              value={form.watch(`answers.${question.id}`)}
              className="space-y-2"
            >
              {question.options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <RadioGroupItem value={option.id} id={option.id} />
                  <label
                    htmlFor={option.id}
                    className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>
        ))}
        
        <Button 
          type="submit"
          className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all"
        >
          Ver Resultados
        </Button>
      </form>
    </Form>
  );
}
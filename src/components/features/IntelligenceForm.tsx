import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { intelligenceQuestions } from '@/utils/intelligences';
import { intelligenceFormSchema, type IntelligenceFormData } from '@/types/form';
import { useTestStore } from '@/stores/testStore';
import { calculateIntelligenceResults } from '@/utils/intelligences';
import { useNavigate } from 'react-router-dom';

export function IntelligenceForm() {
  const navigate = useNavigate();
  const { setIntelligenceResults } = useTestStore();
  
  const form = useForm<IntelligenceFormData>({
    resolver: zodResolver(intelligenceFormSchema),
    defaultValues: {
      answers: {},
    },
  });

  const onSubmit = (data: IntelligenceFormData) => {
    const results = calculateIntelligenceResults(data.answers);
    setIntelligenceResults(results);
    navigate('/intelligence-results');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {intelligenceQuestions.map((question, index) => (
          <div key={question.id} className="space-y-4">
            <h3 className="text-lg font-medium text-white">
              {index + 1}. {question.text}
            </h3>
            <RadioGroup
              onValueChange={(value) => {
                form.setValue(`answers.${question.id}`, parseInt(value));
              }}
              value={form.watch(`answers.${question.id}`)?.toString()}
              className="space-y-2"
            >
              {question.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <RadioGroupItem value={option.value.toString()} id={`${question.id}-${option.value}`} />
                  <label
                    htmlFor={`${question.id}-${option.value}`}
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
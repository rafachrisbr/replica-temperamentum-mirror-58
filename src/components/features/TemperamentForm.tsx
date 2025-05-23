import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { simpleTemperamentFormSchema, type SimpleTemperamentFormData } from '@/types/form';
import { Label } from '@/components/ui/label';

export function TemperamentForm() {
  const form = useForm<SimpleTemperamentFormData>({
    resolver: zodResolver(simpleTemperamentFormSchema),
    defaultValues: {
      stressHandling: undefined,
      energyLevel: undefined,
      socialPreference: undefined
    }
  });

  const onSubmit = (data: SimpleTemperamentFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Stress Handling Question */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-white">
            How do you handle stress?
          </Label>
          <RadioGroup
            onValueChange={(value) => form.setValue('stressHandling', value as 'calm' | 'anxious' | 'aggressive')}
            className="space-y-2"
          >
            {[
              { value: 'calm', label: 'Stay calm and composed' },
              { value: 'anxious', label: 'Become anxious and worried' },
              { value: 'aggressive', label: 'React strongly and aggressively' }
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-3 space-y-0">
                <RadioGroupItem value={option.value} id={`stress-${option.value}`} />
                <Label
                  htmlFor={`stress-${option.value}`}
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {form.formState.errors.stressHandling && (
            <p className="text-red-500 text-sm">Please select how you handle stress</p>
          )}
        </div>

        {/* Energy Level Question */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-white">
            Your energy level
          </Label>
          <RadioGroup
            onValueChange={(value) => form.setValue('energyLevel', value as 'high' | 'medium' | 'low')}
            className="space-y-2"
          >
            {[
              { value: 'high', label: 'High energy, always active' },
              { value: 'medium', label: 'Moderate, balanced energy' },
              { value: 'low', label: 'Prefer calm, low-energy activities' }
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-3 space-y-0">
                <RadioGroupItem value={option.value} id={`energy-${option.value}`} />
                <Label
                  htmlFor={`energy-${option.value}`}
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {form.formState.errors.energyLevel && (
            <p className="text-red-500 text-sm">Please select your energy level</p>
          )}
        </div>

        {/* Social Preference Question */}
        <div className="space-y-4">
          <Label className="text-lg font-medium text-white">
            Social preference
          </Label>
          <RadioGroup
            onValueChange={(value) => form.setValue('socialPreference', value as 'extrovert' | 'introvert' | 'ambivert')}
            className="space-y-2"
          >
            {[
              { value: 'extrovert', label: 'Enjoy being around people, social gatherings' },
              { value: 'introvert', label: 'Prefer solitude and small groups' },
              { value: 'ambivert', label: 'Balance between social and alone time' }
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-3 space-y-0">
                <RadioGroupItem value={option.value} id={`social-${option.value}`} />
                <Label
                  htmlFor={`social-${option.value}`}
                  className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {form.formState.errors.socialPreference && (
            <p className="text-red-500 text-sm">Please select your social preference</p>
          )}
        </div>

        <Button 
          type="submit"
          className="w-full bg-[#2E7D32] text-white border border-[#388E3C] hover:bg-[#266c2a] transition-all"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
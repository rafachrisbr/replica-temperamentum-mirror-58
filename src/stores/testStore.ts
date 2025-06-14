
import { create } from 'zustand';

interface IntelligenceResult {
  type: string;
  name: string;
  score: number;
  description: string;
  color: string;
}

interface TestStore {
  intelligenceResults: IntelligenceResult[] | null;
  setIntelligenceResults: (results: IntelligenceResult[]) => void;
  reset: () => void;
}

export const useTestStore = create<TestStore>((set) => ({
  intelligenceResults: null,
  setIntelligenceResults: (results) => set({ intelligenceResults: results }),
  reset: () => set({ intelligenceResults: null }),
}));

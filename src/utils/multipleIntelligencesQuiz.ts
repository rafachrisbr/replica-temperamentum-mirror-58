
export interface IntelligenceStage {
  id: string;
  title: string;
  statements: {
    key: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';
    text: string;
    intelligence: 'kinesthetic' | 'spatial' | 'interpersonal' | 'intrapersonal' | 'linguistic' | 'logical' | 'musical';
  }[];
}

export interface IntelligenceDescription {
  type: 'kinesthetic' | 'spatial' | 'interpersonal' | 'intrapersonal' | 'linguistic' | 'logical' | 'musical';
  name: string;
  description: string;
  color: string;
}

export const intelligenceDescriptions: Record<string, IntelligenceDescription> = {
  kinesthetic: {
    type: 'kinesthetic',
    name: 'Inteligência Corporal-Cinestésica',
    description: 'Habilidade para usar o corpo todo na expressão de ideias e sentimentos, e facilidade no uso das mãos para produzir ou transformar coisas. Inclui coordenação, equilíbrio, destreza, força, flexibilidade e velocidade.',
    color: '#4CAF50' // Green
  },
  spatial: {
    type: 'spatial',
    name: 'Inteligência Espacial',
    description: 'Capacidade de perceber com precisão o mundo visuo-espacial e realizar transformações nas próprias percepções iniciais. Envolve sensibilidade a cores, linhas, formas, espaços e as relações entre esses elementos.',
    color: '#FF9800' // Orange
  },
  interpersonal: {
    type: 'interpersonal',
    name: 'Inteligência Interpessoal',
    description: 'Capacidade de perceber e fazer distinções no humor, intenções, motivações e sentimentos de outras pessoas. Inclui sensibilidade a expressões faciais, voz e gestos, e a capacidade de responder efetivamente a estes sinais.',
    color: '#2196F3' // Blue
  },
  intrapersonal: {
    type: 'intrapersonal',
    name: 'Inteligência Intrapessoal',
    description: 'Autoconhecimento e capacidade de agir adaptativamente com base neste conhecimento. Inclui ter uma imagem precisa de si mesmo, consciência dos estados de humor, intenções, motivações, temperamento e desejos.',
    color: '#673AB7' // Deep Purple
  },
  linguistic: {
    type: 'linguistic',
    name: 'Inteligência Verbal-Linguística',
    description: 'Capacidade de usar as palavras de forma efetiva, seja oralmente ou na escrita. Inclui a habilidade de manipular a sintaxe, a semântica e as dimensões pragmáticas da linguagem.',
    color: '#E91E63' // Pink
  },
  logical: {
    type: 'logical',
    name: 'Inteligência Lógico-Matemática',
    description: 'Habilidade de usar números de forma efetiva e raciocinar bem. Inclui sensibilidade a padrões lógicos, relações, proposições, funções e outras abstrações relacionadas.',
    color: '#3F51B5' // Indigo
  },
  musical: {
    type: 'musical',
    name: 'Inteligência Musical',
    description: 'Capacidade de perceber, discriminar, transformar e expressar formas musicais. Inclui sensibilidade ao ritmo, tom ou melodia e timbre de uma peça musical.',
    color: '#FFC107' // Amber
  }
};

export const multipleIntelligencesStages: IntelligenceStage[] = [
  {
    id: "stage1",
    title: "Etapa 1 - Coisas que mais gosto de fazer",
    statements: [
      { key: 'A', text: "Praticar esportes", intelligence: 'kinesthetic' },
      { key: 'B', text: "Dirigir", intelligence: 'spatial' },
      { key: 'C', text: "Compartilhar atividades", intelligence: 'interpersonal' },
      { key: 'D', text: "Refletir sobre meus sentimentos", intelligence: 'intrapersonal' },
      { key: 'E', text: "Debater ideias", intelligence: 'linguistic' },
      { key: 'F', text: "Ordenar coisas", intelligence: 'logical' },
      { key: 'G', text: "Cantar", intelligence: 'musical' }
    ]
  },
  {
    id: "stage2",
    title: "Etapa 2 - Tenho facilidade em",
    statements: [
      { key: 'A', text: "Aprender novos esportes", intelligence: 'kinesthetic' },
      { key: 'B', text: "Executar tarefas delicadas", intelligence: 'spatial' },
      { key: 'C', text: "Trabalhar em equipe", intelligence: 'interpersonal' },
      { key: 'D', text: "Analisar meus sentimentos", intelligence: 'intrapersonal' },
      { key: 'E', text: "Contar histórias e fatos", intelligence: 'linguistic' },
      { key: 'F', text: "Construir e organizar planilhas", intelligence: 'logical' },
      { key: 'G', text: "Tocar instrumentos", intelligence: 'musical' }
    ]
  },
  {
    id: "stage3",
    title: "Etapa 3 - Quando estou no trabalho ou na escola, prefiro",
    statements: [
      { key: 'A', text: "Levantar e andar periodicamente", intelligence: 'kinesthetic' },
      { key: 'B', text: "Fazer algo funcionar", intelligence: 'spatial' },
      { key: 'C', text: "Trabalhar com pessoas", intelligence: 'interpersonal' },
      { key: 'D', text: "Trabalhar sozinho", intelligence: 'intrapersonal' },
      { key: 'E', text: "Conversar sobre ideias", intelligence: 'linguistic' },
      { key: 'F', text: "Analisar dados", intelligence: 'logical' },
      { key: 'G', text: "Identificar padrões sonoros em equipamentos", intelligence: 'musical' }
    ]
  },
  {
    id: "stage4",
    title: "Etapa 4 - O tipo de pergunta que mais faço é",
    statements: [
      { key: 'A', text: "Onde?", intelligence: 'kinesthetic' },
      { key: 'B', text: "Como?", intelligence: 'spatial' },
      { key: 'C', text: "Quem?", intelligence: 'interpersonal' },
      { key: 'D', text: "Para quê?", intelligence: 'intrapersonal' },
      { key: 'E', text: "Por quê?", intelligence: 'linguistic' },
      { key: 'F', text: "O quê?", intelligence: 'logical' },
      { key: 'G', text: "Quando?", intelligence: 'musical' }
    ]
  },
  {
    id: "stage5",
    title: "Etapa 5 - No tempo livre gosto mais de",
    statements: [
      { key: 'A', text: "Dançar", intelligence: 'kinesthetic' },
      { key: 'B', text: "Fazer um trabalho manual", intelligence: 'spatial' },
      { key: 'C', text: "Sair com os amigos", intelligence: 'interpersonal' },
      { key: 'D', text: "Meditar e refletir", intelligence: 'intrapersonal' },
      { key: 'E', text: "Ler um livro", intelligence: 'linguistic' },
      { key: 'F', text: "Passar o tempo com jogos de estratégia", intelligence: 'logical' },
      { key: 'G', text: "Ouvir música", intelligence: 'musical' }
    ]
  },
  {
    id: "stage6",
    title: "Etapa 6 - Tenho facilidade em",
    statements: [
      { key: 'A', text: "Adquirir habilidades pela prática", intelligence: 'kinesthetic' },
      { key: 'B', text: "Analisar e descobrir formas e detalhes", intelligence: 'spatial' },
      { key: 'C', text: "Ouvir e compartilhar ideias", intelligence: 'interpersonal' },
      { key: 'D', text: "Elaborar teorias", intelligence: 'intrapersonal' },
      { key: 'E', text: "Discutir informações", intelligence: 'linguistic' },
      { key: 'F', text: "Obter e classificar informações", intelligence: 'logical' },
      { key: 'G', text: "Ler ouvindo música", intelligence: 'musical' }
    ]
  },
  {
    id: "stage7",
    title: "Etapa 7 - Em minha casa",
    statements: [
      { key: 'A', text: "Não fico parado/a", intelligence: 'kinesthetic' },
      { key: 'B', text: "Conserto as coisas", intelligence: 'spatial' },
      { key: 'C', text: "Ajudo outros nas tarefas", intelligence: 'interpersonal' },
      { key: 'D', text: "Fico em meu canto", intelligence: 'intrapersonal' },
      { key: 'E', text: "Falo sobre meu dia", intelligence: 'linguistic' },
      { key: 'F', text: "Organizo cada detalhe", intelligence: 'logical' },
      { key: 'G', text: "Sempre escuto música", intelligence: 'musical' }
    ]
  },
  {
    id: "stage8",
    title: "Etapa 8 - As pessoas podem me definir por esta palavra",
    statements: [
      { key: 'A', text: "Esportista", intelligence: 'kinesthetic' },
      { key: 'B', text: "Competente", intelligence: 'spatial' },
      { key: 'C', text: "Perceptivo", intelligence: 'interpersonal' },
      { key: 'D', text: "Analítico", intelligence: 'intrapersonal' },
      { key: 'E', text: "Teórico", intelligence: 'linguistic' },
      { key: 'F', text: "Lógico", intelligence: 'logical' },
      { key: 'G', text: "Artista", intelligence: 'musical' }
    ]
  },
  {
    id: "stage9",
    title: "Etapa 9 - Gosto mais de aprender através de",
    statements: [
      { key: 'A', text: "Demonstrações e experiências", intelligence: 'kinesthetic' },
      { key: 'B', text: "Atividades estruturadas passo a passo", intelligence: 'spatial' },
      { key: 'C', text: "Discussão de casos voltados para pessoas", intelligence: 'interpersonal' },
      { key: 'D', text: "Leitura de livros-textos", intelligence: 'intrapersonal' },
      { key: 'E', text: "Palestras formais", intelligence: 'linguistic' },
      { key: 'F', text: "Exercícios de análise de fatos, dados e números", intelligence: 'logical' },
      { key: 'G', text: "Histórias e música", intelligence: 'musical' }
    ]
  },
  {
    id: "stage10",
    title: "Etapa 10 - Eu me considero",
    statements: [
      { key: 'A', text: "Ágil", intelligence: 'kinesthetic' },
      { key: 'B', text: "Detalhista", intelligence: 'spatial' },
      { key: 'C', text: "Amigo", intelligence: 'interpersonal' },
      { key: 'D', text: "Sensível", intelligence: 'intrapersonal' },
      { key: 'E', text: "Comunicativo", intelligence: 'linguistic' },
      { key: 'F', text: "Racional", intelligence: 'logical' },
      { key: 'G', text: "Musical", intelligence: 'musical' }
    ]
  }
];

export interface IntelligenceResult {
  type: 'kinesthetic' | 'spatial' | 'interpersonal' | 'intrapersonal' | 'linguistic' | 'logical' | 'musical';
  name: string;
  score: number;
  percentage: number;
  description: string;
  color: string;
}

export const calculateMultipleIntelligencesResults = (answers: Record<string, Record<string, number>>): IntelligenceResult[] => {
  const scores = {
    kinesthetic: 0,
    spatial: 0,
    interpersonal: 0,
    intrapersonal: 0,
    linguistic: 0,
    logical: 0,
    musical: 0
  };

  // Count the scores for each intelligence type
  Object.keys(answers).forEach(stageId => {
    const stage = multipleIntelligencesStages.find(s => s.id === stageId);
    if (!stage) return;

    Object.entries(answers[stageId]).forEach(([key, score]) => {
      const statement = stage.statements.find(s => s.key === key);
      if (statement) {
        scores[statement.intelligence] += score;
      }
    });
  });

  // Calculate percentage (max score per intelligence is 70 - 7 points max per stage × 10 stages)
  const maxScorePerType = 70;
  
  // Create results array
  const results: IntelligenceResult[] = Object.keys(scores).map(type => {
    const intelligenceType = type as keyof typeof scores;
    return {
      type: intelligenceType,
      name: intelligenceDescriptions[intelligenceType].name,
      score: scores[intelligenceType],
      percentage: Math.round((scores[intelligenceType] / maxScorePerType) * 100),
      description: intelligenceDescriptions[intelligenceType].description,
      color: intelligenceDescriptions[intelligenceType].color
    };
  });
  
  // Sort by score (highest first)
  return results.sort((a, b) => b.score - a.score);
};

export const getTotalMaxScore = (): number => {
  // 7 intelligence types × 10 stages × 7 points max per statement
  return 7 * 10 * 7; // 490
};

export const validateStageAnswers = (answers: Record<string, number>): boolean => {
  // Check if all 7 statements have answers
  if (Object.keys(answers).length !== 7) {
    return false;
  }
  
  // Check if all numbers 1-7 are used exactly once
  const usedScores = Object.values(answers);
  const requiredScores = [1, 2, 3, 4, 5, 6, 7];
  
  return requiredScores.every(score => usedScores.includes(score)) && 
         usedScores.every(score => requiredScores.includes(score));
};

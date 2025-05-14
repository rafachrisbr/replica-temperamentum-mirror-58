
export interface Option {
  id: string;
  text: string;
  temperament: 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'Quando confrontado com um novo desafio, você geralmente:',
    options: [
      {
        id: 'q1_a',
        text: 'Fica entusiasmado com a novidade e busca a colaboração de outros.',
        temperament: 'sanguine'
      },
      {
        id: 'q1_b',
        text: 'Analisa cuidadosamente todos os detalhes e possíveis obstáculos antes de agir.',
        temperament: 'melancholic'
      },
      {
        id: 'q1_c',
        text: 'Mantém a calma e observa a situação antes de decidir o que fazer.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q1_d',
        text: 'Assume a liderança e age rapidamente para resolvê-lo.',
        temperament: 'choleric'
      }
    ]
  },
  {
    id: 'q2',
    text: 'Em um ambiente social, você se considera mais:',
    options: [
      {
        id: 'q2_a',
        text: 'Comunicativo e extrovertido, gostando de interagir com muitas pessoas.',
        temperament: 'sanguine'
      },
      {
        id: 'q2_b',
        text: 'Direto e assertivo, expressando suas opiniões com firmeza.',
        temperament: 'choleric'
      },
      {
        id: 'q2_c',
        text: 'Reservado e observador, preferindo conversas mais profundas com poucas pessoas.',
        temperament: 'melancholic'
      },
      {
        id: 'q2_d',
        text: 'Tranquilo e pacífico, adaptando-se facilmente ao grupo.',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q3',
    text: 'Como você lida com suas emoções?',
    options: [
      {
        id: 'q3_a',
        text: 'Sente as emoções intensamente e pode reagir de forma explosiva, mas supera rapidamente.',
        temperament: 'choleric'
      },
      {
        id: 'q3_b',
        text: 'Sente profundamente e por longos períodos, podendo tender à tristeza ou introspecção.',
        temperament: 'melancholic'
      },
      {
        id: 'q3_c',
        text: 'Geralmente é calmo e controlado, não se deixando abalar facilmente pelas emoções.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q3_d',
        text: 'Suas emoções são vivas e expressivas, mas podem mudar com facilidade.',
        temperament: 'sanguine'
      }
    ]
  },
  {
    id: 'q4',
    text: 'Ao tomar decisões importantes, você tende a:',
    options: [
      {
        id: 'q4_a',
        text: 'Decidir rapidamente com base na sua intuição e objetivos.',
        temperament: 'choleric'
      },
      {
        id: 'q4_b',
        text: 'Buscar opiniões e se entusiasmar com as possibilidades, às vezes mudando de ideia.',
        temperament: 'sanguine'
      },
      {
        id: 'q4_c',
        text: 'Adiar a decisão se possível, preferindo manter a estabilidade.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q4_d',
        text: 'Ponderar longamente sobre prós e contras, buscando a perfeição.',
        temperament: 'melancholic'
      }
    ]
  },
  {
    id: 'q5',
    text: 'Sua relação com regras e rotinas é:',
    options: [
      {
        id: 'q5_a',
        text: 'Aprecia a ordem e a previsibilidade, seguindo regras meticulosamente.',
        temperament: 'melancholic'
      },
      {
        id: 'q5_b',
        text: 'Adapta-se bem, mas pode se entediar facilmente com muita rotina.',
        temperament: 'sanguine'
      },
      {
        id: 'q5_c',
        text: 'Prefere rotinas estabelecidas e não gosta de mudanças abruptas.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q5_d',
        text: 'Gosta de ter controle e pode desafiar regras que considera ineficientes.',
        temperament: 'choleric'
      }
    ]
  },
  {
    id: 'q6',
    text: 'Diante de uma injustiça, qual sua reação mais comum?',
    options: [
      {
        id: 'q6_a',
        text: 'Lutar ativamente contra ela, defendendo suas convicções.',
        temperament: 'choleric'
      },
      {
        id: 'q6_b',
        text: 'Manter a serenidade e buscar uma solução pacífica e diplomática.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q6_c',
        text: 'Expressar sua indignação e buscar apoio para resolver a situação.',
        temperament: 'sanguine'
      },
      {
        id: 'q6_d',
        text: 'Sentir-se profundamente afetado e refletir sobre as causas e consequências.',
        temperament: 'melancholic'
      }
    ]
  },
  {
    id: 'q7',
    text: 'Como você se sente em relação ao trabalho em equipe?',
    options: [
      {
        id: 'q7_a',
        text: 'É um bom mediador e trabalha bem em equipe, buscando a harmonia.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q7_b',
        text: 'Contribui com análises detalhadas e busca a qualidade, mas pode preferir trabalhar sozinho em certas tarefas.',
        temperament: 'melancholic'
      },
      {
        id: 'q7_c',
        text: 'Gosta de colaborar e trazer entusiasmo ao grupo.',
        temperament: 'sanguine'
      },
      {
        id: 'q7_d',
        text: 'Prefere liderar e delegar tarefas, focando nos resultados.',
        temperament: 'choleric'
      }
    ]
  },
  {
    id: 'q8',
    text: 'Qual sua atitude em relação a riscos?',
    options: [
      {
        id: 'q8_a',
        text: 'Otimista, pode se aventurar em novos projetos com entusiasmo, às vezes sem ponderar todos os riscos.',
        temperament: 'sanguine'
      },
      {
        id: 'q8_b',
        text: 'Cauteloso e hesitante, prefere evitar riscos e analisar tudo minuciosamente.',
        temperament: 'melancholic'
      },
      {
        id: 'q8_c',
        text: 'Disposto a correr riscos calculados para alcançar grandes objetivos.',
        temperament: 'choleric'
      },
      {
        id: 'q8_d',
        text: 'Prefere a segurança e a estabilidade, evitando situações arriscadas.',
        temperament: 'phlegmatic'
      }
    ]
  },
  {
    id: 'q9',
    text: 'Como você lida com críticas?',
    options: [
      {
        id: 'q9_a',
        text: 'Leva as críticas a sério e pode remoê-las por um tempo.',
        temperament: 'melancholic'
      },
      {
        id: 'q9_b',
        text: 'Pode reagir defensivamente no início, mas considera se forem construtivas.',
        temperament: 'choleric'
      },
      {
        id: 'q9_c',
        text: 'Ouve com calma e não se abala facilmente por críticas.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q9_d',
        text: 'Pode se sentir magoado inicialmente, mas geralmente supera com facilidade.',
        temperament: 'sanguine'
      }
    ]
  },
  {
    id: 'q10',
    text: 'Seu nível de energia geralmente é:',
    options: [
      {
        id: 'q10_a',
        text: 'Vibrante e sociável, mas pode se dispersar em muitas atividades.',
        temperament: 'sanguine'
      },
      {
        id: 'q10_b',
        text: 'Variável, com momentos de grande inspiração e outros de recolhimento.',
        temperament: 'melancholic'
      },
      {
        id: 'q10_c',
        text: 'Constante e moderado, preferindo um ritmo tranquilo.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q10_d',
        text: 'Alto e explosivo, com grande capacidade de realização.',
        temperament: 'choleric'
      }
    ]
  },
  {
    id: 'q11',
    text: 'Em relação ao futuro, você é mais:',
    options: [
      {
        id: 'q11_a',
        text: 'Preocupado com possíveis problemas, planejando para evitar imprevistos.',
        temperament: 'melancholic'
      },
      {
        id: 'q11_b',
        text: 'Visionário e determinado a alcançar suas metas ambiciosas.',
        temperament: 'choleric'
      },
      {
        id: 'q11_c',
        text: 'Realista e prático, vivendo um dia de cada vez.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q11_d',
        text: 'Otimista e cheio de esperança, acreditando que coisas boas virão.',
        temperament: 'sanguine'
      }
    ]
  },
  {
    id: 'q12',
    text: 'Qual destas atividades te atrai mais?',
    options: [
      {
        id: 'q12_a',
        text: 'Desfrutar de um momento de paz e tranquilidade em casa ou na natureza.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q12_b',
        text: 'Participar de um evento social animado e conhecer novas pessoas.',
        temperament: 'sanguine'
      },
      {
        id: 'q12_c',
        text: 'Liderar um projeto desafiador e competitivo.',
        temperament: 'choleric'
      },
      {
        id: 'q12_d',
        text: 'Dedicar-se a um estudo profundo ou a uma atividade artística solitária.',
        temperament: 'melancholic'
      }
    ]
  },
  {
    id: 'q13',
    text: 'Qual é sua abordagem ao resolver um conflito com um amigo?',
    options: [
      {
        id: 'q13_a',
        text: 'Tento ouvir e propor um acordo que mantenha a paz entre nós.',
        temperament: 'phlegmatic'
      },
      {
        id: 'q13_b',
        text: 'Penso muito antes de falar, buscando uma solução justa e bem fundamentada.',
        temperament: 'melancholic'
      },
      {
        id: 'q13_c',
        text: 'Sou direto, expresso minha opinião e quero resolver o problema logo.',
        temperament: 'choleric'
      },
      {
        id: 'q13_d',
        text: 'Uso humor ou conversa leve para aliviar a tensão e manter a amizade.',
        temperament: 'sanguine'
      }
    ]
  }
];

export interface TemperamentResult {
  type: 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';
  name: string;
  percentage: number;
  description: string;
  virtues: string[];
  weaknesses: string[];
  careerProfile: string;
  suggestedProfessions: string[];
  saints: string[];
  spiritualTips: string;
}

export const temperamentInfo = {
  sanguine: {
    name: 'Sanguíneo',
    description: 'Comunicativo, otimista, sociável e entusiasta. Reações rápidas e emotivas, inteligência ágil para relações. Coração generoso, ama a vida social e a alegria, mas pode ser volúvel.',
    virtues: ['Alegria', 'Otimismo', 'Sociabilidade', 'Generosidade', 'Compaixão', 'Adaptabilidade', 'Entusiasmo'],
    weaknesses: ['Inconstância', 'Superficialidade', 'Falta de perseverança', 'Vaidade', 'Dificuldade de concentração', 'Ser muito falante'],
    careerProfile: 'O sanguíneo é excelente em lidar com pessoas e criar um ambiente positivo. São comunicativos, persuasivos e gostam de variedade. Tendem a ser bons em vendas, relações públicas, ensino e áreas que envolvam interação social e criatividade.',
    suggestedProfessions: ['Vendedor', 'Relações Públicas', 'Professor', 'Artista', 'Organizador de Eventos', 'Jornalista'],
    saints: ['São Pedro Apóstolo', 'São Filipe Néri'],
    spiritualTips: 'Buscar a perseverança, o autocontrole, a profundidade nos compromissos e a moderação. Pedir aptidão para abstinência, paciência, fé e paz.'
  },
  choleric: {
    name: 'Colérico',
    description: 'Ativo, exuberante, líder nato, prático e determinado. Busca atingir seus fins, por vezes de forma extremada, e pode se irritar facilmente. Possui uma vontade forte e é profundamente sincero.',
    virtues: ['Liderança', 'Determinação', 'Coragem', 'Praticidade', 'Visão', 'Decisão rápida', 'Sinceridade'],
    weaknesses: ['Orgulho', 'Ira', 'Impaciência', 'Intolerância', 'Autoritarismo', 'Dificuldade em perdoar', 'Tendência a dominar'],
    careerProfile: 'No trabalho, o colérico é geralmente o líder, o pioneiro, aquele que toma a frente e busca resultados. São motivados por desafios e têm grande capacidade de execução. Podem se destacar em cargos de gestão, empreendedorismo, militarismo, política ou qualquer área que exija comando e ação rápida.',
    suggestedProfessions: ['CEO/Diretor', 'Empreendedor', 'Gerente de Projetos', 'Militar', 'Político', 'Advogado de Litígio'],
    saints: ['São Paulo Apóstolo', 'Santo Inácio de Loyola'],
    spiritualTips: 'Buscar a humildade, a mansidão, a paciência e a caridade. Aprender a depender de Deus, pedindo amor, bondade e benevolência.'
  },
  melancholic: {
    name: 'Melancólico',
    description: 'Sensível, profundo, analítico, leal e perfeccionista. Intensa sensibilidade afetiva, inteligência profunda, mas vontade por vezes fraca e indecisa. Tende à introspecção e a ver o lado negativo.',
    virtues: ['Profundidade de sentimentos', 'Sensibilidade artística', 'Lealdade', 'Compaixão', 'Capacidade de análise', 'Idealismo', 'Busca pela perfeição'],
    weaknesses: ['Pessimismo', 'Tendência à tristeza', 'Indecisão', 'Egocentrismo', 'Dificuldade em perdoar', 'Isolamento', 'Ser muito crítico'],
    careerProfile: 'O melancólico é detalhista, analítico e busca a perfeição em tudo que faz. São profundos e dedicados, preferindo trabalhos que exijam concentração e qualidade. Podem se destacar em áreas como pesquisa, artes, filosofia, escrita, e qualquer profissão que valorize a atenção aos detalhes e a profundidade.',
    suggestedProfessions: ['Pesquisador', 'Cientista', 'Artista Plástico', 'Músico', 'Escritor', 'Filósofo', 'Analista de Sistemas'],
    saints: ['São João Evangelista', 'Santa Teresinha do Menino Jesus'],
    spiritualTips: 'Buscar a alegria, a esperança e a confiança em Deus e nos outros. Cultivar a ação e a objetividade, pedindo amor, paz, bondade e fé.'
  },
  phlegmatic: {
    name: 'Fleumático',
    description: 'Calmo, pacífico, equilibrado, prático e confiável. Fraca impressionalidade e reação aos estímulos. Inteligência fria e calculista, vontade geralmente fraca para ação, mas perseverante quando interessado. Ama o descanso.',
    virtues: ['Calma', 'Paciência', 'Equilíbrio', 'Diplomacia', 'Constância', 'Prudência', 'Bom humor', 'Objetividade'],
    weaknesses: ['Lentidão', 'Falta de iniciativa', 'Acomodação', 'Indiferença', 'Teimosia passiva', 'Falta de entusiasmo'],
    careerProfile: 'O fleumático é constante, confiável e bom em manter a paz e a ordem. São excelentes em trabalhos que exigem paciência, método e pouca pressão. São bons diplomatas, administradores, professores e em funções que requerem estabilidade e consistência.',
    suggestedProfessions: ['Administrador', 'Diplomata', 'Professor', 'Bibliotecário', 'Funcionário Público', 'Assistente Social'],
    saints: ['São Tomás de Aquino', 'São Francisco de Sales'],
    spiritualTips: 'Buscar o zelo, a diligência e o entusiasmo pelas coisas de Deus. Cultivar a generosidade e a prontidão para servir, pedindo vontade determinada, amor, bondade e docilidade.'
  }
};

export const calculateResults = (answers: Record<string, string>): TemperamentResult[] => {
  const counts = {
    sanguine: 0,
    choleric: 0,
    melancholic: 0,
    phlegmatic: 0
  };
  
  // Count the temperament choices
  Object.values(answers).forEach(answerId => {
    const question = questions.find(q => q.options.some(o => o.id === answerId));
    if (question) {
      const selectedOption = question.options.find(o => o.id === answerId);
      if (selectedOption) {
        counts[selectedOption.temperament]++;
      }
    }
  });
  
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  
  // Create array of temperaments with their counts
  let temperaments = [
    { type: 'sanguine', count: counts.sanguine },
    { type: 'choleric', count: counts.choleric },
    { type: 'melancholic', count: counts.melancholic },
    { type: 'phlegmatic', count: counts.phlegmatic }
  ];
  
  // Check for ties in the top position
  let topCount = Math.max(...temperaments.map(t => t.count));
  let tiedTemps = temperaments.filter(t => t.count === topCount);
  
  // If there's a tie for first place, break it by giving a slight boost to one
  // We'll do this deterministically based on a predefined order so results are consistent
  if (tiedTemps.length > 1) {
    // Predefined order of precedence (arbitrary but consistent)
    const precedenceOrder = ['sanguine', 'choleric', 'melancholic', 'phlegmatic'];
    
    // Find the temperament with highest precedence among the tied ones
    let highestPrecedenceTemp = tiedTemps.reduce((highest, current) => {
      const currentIndex = precedenceOrder.indexOf(current.type);
      const highestIndex = precedenceOrder.indexOf(highest.type);
      
      return currentIndex < highestIndex ? current : highest;
    }, tiedTemps[0]);
    
    // Add a small fractional boost to break the tie
    counts[highestPrecedenceTemp.type as keyof typeof counts] += 0.1;
  }
  
  // Calculate percentages for each temperament
  const results: TemperamentResult[] = [
    {
      type: 'sanguine',
      name: temperamentInfo.sanguine.name,
      percentage: Math.round((counts.sanguine / (total + (tiedTemps.length > 1 ? 0.1 : 0))) * 100),
      description: temperamentInfo.sanguine.description,
      virtues: temperamentInfo.sanguine.virtues,
      weaknesses: temperamentInfo.sanguine.weaknesses,
      careerProfile: temperamentInfo.sanguine.careerProfile,
      suggestedProfessions: temperamentInfo.sanguine.suggestedProfessions,
      saints: temperamentInfo.sanguine.saints,
      spiritualTips: temperamentInfo.sanguine.spiritualTips
    },
    {
      type: 'choleric',
      name: temperamentInfo.choleric.name,
      percentage: Math.round((counts.choleric / (total + (tiedTemps.length > 1 ? 0.1 : 0))) * 100),
      description: temperamentInfo.choleric.description,
      virtues: temperamentInfo.choleric.virtues,
      weaknesses: temperamentInfo.choleric.weaknesses,
      careerProfile: temperamentInfo.choleric.careerProfile,
      suggestedProfessions: temperamentInfo.choleric.suggestedProfessions,
      saints: temperamentInfo.choleric.saints,
      spiritualTips: temperamentInfo.choleric.spiritualTips
    },
    {
      type: 'melancholic',
      name: temperamentInfo.melancholic.name,
      percentage: Math.round((counts.melancholic / (total + (tiedTemps.length > 1 ? 0.1 : 0))) * 100),
      description: temperamentInfo.melancholic.description,
      virtues: temperamentInfo.melancholic.virtues,
      weaknesses: temperamentInfo.melancholic.weaknesses,
      careerProfile: temperamentInfo.melancholic.careerProfile,
      suggestedProfessions: temperamentInfo.melancholic.suggestedProfessions,
      saints: temperamentInfo.melancholic.saints,
      spiritualTips: temperamentInfo.melancholic.spiritualTips
    },
    {
      type: 'phlegmatic',
      name: temperamentInfo.phlegmatic.name,
      percentage: Math.round((counts.phlegmatic / (total + (tiedTemps.length > 1 ? 0.1 : 0))) * 100),
      description: temperamentInfo.phlegmatic.description,
      virtues: temperamentInfo.phlegmatic.virtues,
      weaknesses: temperamentInfo.phlegmatic.weaknesses,
      careerProfile: temperamentInfo.phlegmatic.careerProfile,
      suggestedProfessions: temperamentInfo.phlegmatic.suggestedProfessions,
      saints: temperamentInfo.phlegmatic.saints,
      spiritualTips: temperamentInfo.phlegmatic.spiritualTips
    }
  ];
  
  // Sort by percentage (highest first)
  return results.sort((a, b) => {
    // First sort by percentage
    if (b.percentage !== a.percentage) {
      return b.percentage - a.percentage;
    }
    
    // If percentages are equal (which should be rare now with our tie-breaking),
    // use the predefined order as a secondary sort
    const precedenceOrder = ['sanguine', 'choleric', 'melancholic', 'phlegmatic'];
    return precedenceOrder.indexOf(a.type) - precedenceOrder.indexOf(b.type);
  });
};

/**
 * @file intelligences.ts
 * @description Implementação da lógica do teste de inteligências múltiplas
 * @author Temperamentum
 */

/**
 * @typedef {Object} IntelligenceOption
 * @description Opção de resposta para uma pergunta do teste de inteligências
 * @property {string} id - Identificador único da opção
 * @property {string} text - Texto da opção
 * @property {'linguistic'|'logical'|'spatial'|'musical'|'bodily'|'interpersonal'|'intrapersonal'|'naturalist'} type - Tipo de inteligência associada
 */
export interface IntelligenceOption {
  id: string;
  text: string;
  type: 'linguistic' | 'logical' | 'spatial' | 'musical' | 'bodily' | 'interpersonal' | 'intrapersonal' | 'naturalist';
}

/**
 * @typedef {Object} IntelligenceQuestion
 * @description Pergunta do teste de inteligências múltiplas
 * @property {string} id - Identificador único da pergunta
 * @property {string} text - Texto da pergunta
 * @property {Array<{value: number, text: string}>} options - Opções de resposta com valores numéricos
 * @property {'linguistic'|'logical'|'spatial'|'musical'|'bodily'|'interpersonal'|'intrapersonal'|'naturalist'} type - Tipo de inteligência avaliada
 */
export interface IntelligenceQuestion {
  id: string;
  text: string;
  options: Array<{
    value: number;
    text: string;
  }>;
  type: 'linguistic' | 'logical' | 'spatial' | 'musical' | 'bodily' | 'interpersonal' | 'intrapersonal' | 'naturalist';
}

/**
 * @typedef {Object} IntelligenceResult
 * @description Resultado do teste de inteligências múltiplas
 * @property {'linguistic'|'logical'|'spatial'|'musical'|'bodily'|'interpersonal'|'intrapersonal'|'naturalist'} type - Tipo de inteligência
 * @property {string} name - Nome da inteligência
 * @property {number} percentage - Porcentagem da inteligência no resultado
 * @property {string} description - Descrição da inteligência
 * @property {string[]} strengths - Pontos fortes associados à inteligência
 * @property {string[]} careers - Carreiras compatíveis com a inteligência
 * @property {string[]} activities - Atividades recomendadas para desenvolver a inteligência
 * @property {string} icon - Ícone associado à inteligência
 */
export interface IntelligenceResult {
  type: 'linguistic' | 'logical' | 'spatial' | 'musical' | 'bodily' | 'interpersonal' | 'intrapersonal' | 'naturalist';
  name: string;
  percentage: number;
  description: string;
  strengths: string[];
  careers: string[];
  activities: string[];
  icon: string;
}

/**
 * @constant {IntelligenceQuestion[]} intelligenceQuestions
 * @description Array de perguntas do teste de inteligências múltiplas
 */
export const intelligenceQuestions: IntelligenceQuestion[] = [
  {
    id: 'i1',
    text: 'Gosto de escrever textos, histórias ou poesias.',
    type: 'linguistic',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i2',
    text: 'Tenho facilidade em me expressar verbalmente em debates ou conversas.',
    type: 'linguistic',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i3',
    text: 'Gosto de resolver problemas matemáticos ou quebra-cabeças.',
    type: 'logical',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i4',
    text: 'Prefiro analisar problemas de forma lógica e estruturada.',
    type: 'logical',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i5',
    text: 'Consigo visualizar facilmente mapas ou imagens mentais.',
    type: 'spatial',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i6',
    text: 'Gosto de desenhar, pintar ou criar representações visuais.',
    type: 'spatial',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i7',
    text: 'Identifico rapidamente ritmos ou melodias em músicas.',
    type: 'musical',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i8',
    text: 'Gosto de tocar instrumentos ou criar músicas.',
    type: 'musical',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i9',
    text: 'Me sinto à vontade em atividades que envolvem movimento, como esportes ou dança.',
    type: 'bodily',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i10',
    text: 'Prefiro aprender fazendo algo prático, como construir ou manipular objetos.',
    type: 'bodily',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i11',
    text: 'Tenho facilidade em entender as emoções e motivações das outras pessoas.',
    type: 'interpersonal',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i12',
    text: 'Gosto de trabalhar em equipe e liderar grupos.',
    type: 'interpersonal',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i13',
    text: 'Reflito bastante sobre meus próprios sentimentos e objetivos.',
    type: 'intrapersonal',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i14',
    text: 'Consigo identificar facilmente o que me motiva ou me incomoda.',
    type: 'intrapersonal',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i15',
    text: 'Gosto de observar a natureza, como plantas, animais ou padrões ambientais.',
    type: 'naturalist',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  },
  {
    id: 'i16',
    text: 'Sinto prazer em classificar e colecionar objetos ou informações da natureza.',
    type: 'naturalist',
    options: [
      { value: 1, text: 'Discordo totalmente' },
      { value: 2, text: 'Discordo parcialmente' },
      { value: 3, text: 'Não concordo nem discordo' },
      { value: 4, text: 'Concordo parcialmente' },
      { value: 5, text: 'Concordo totalmente' },
    ]
  }
];

/**
 * @constant {Object} intelligenceInfo
 * @description Informações detalhadas sobre cada tipo de inteligência
 */
export const intelligenceInfo = {
  linguistic: {
    name: 'Inteligência Linguística',
    description: 'Capacidade de usar as palavras de forma efetiva, seja oralmente ou na escrita. Inclui a habilidade de manipular a sintaxe, a semântica e as dimensões pragmáticas da linguagem.',
    strengths: ['Comunicação verbal', 'Escrita', 'Memorização de informações', 'Explicar conceitos', 'Debate e argumentação'],
    careers: ['Escritor', 'Jornalista', 'Professor', 'Advogado', 'Poeta', 'Tradutor', 'Orador'],
    activities: ['Ler diversos gêneros literários', 'Manter um diário ou blog', 'Participar de debates', 'Aprender novos idiomas', 'Fazer jogos de palavras'],
    icon: 'book'
  },
  logical: {
    name: 'Inteligência Lógico-matemática',
    description: 'Habilidade de usar números de forma efetiva e raciocinar bem. Inclui sensibilidade a padrões lógicos, relações, proposições, funções e outras abstrações relacionadas.',
    strengths: ['Análise lógica', 'Resolução de problemas', 'Detecção de padrões', 'Cálculo', 'Pensamento científico'],
    careers: ['Matemático', 'Cientista', 'Engenheiro', 'Programador', 'Contador', 'Estatístico', 'Economista'],
    activities: ['Resolver quebra-cabeças', 'Jogar xadrez ou damas', 'Criar sistemas organizacionais', 'Analisar dados', 'Estudar lógica'],
    icon: 'brain'
  },
  spatial: {
    name: 'Inteligência Espacial',
    description: 'Capacidade de perceber com precisão o mundo visuo-espacial e realizar transformações nas próprias percepções iniciais. Envolve sensibilidade a cores, linhas, formas, espaços e as relações entre esses elementos.',
    strengths: ['Visualização', 'Orientação espacial', 'Criação de imagens mentais', 'Design', 'Senso artístico'],
    careers: ['Artista', 'Arquiteto', 'Designer', 'Piloto', 'Navegador', 'Cirurgião', 'Engenheiro'],
    activities: ['Desenhar ou pintar', 'Montar quebra-cabeças', 'Trabalhar com mapas', 'Praticar fotografia', 'Criar representações visuais'],
    icon: 'compass'
  },
  musical: {
    name: 'Inteligência Musical',
    description: 'Capacidade de perceber, discriminar, transformar e expressar formas musicais. Inclui sensibilidade ao ritmo, tom ou melodia e timbre de uma peça musical.',
    strengths: ['Reconhecimento de padrões sonoros', 'Composição musical', 'Apreciação melódica', 'Sensibilidade a sons', 'Memória musical'],
    careers: ['Músico', 'Compositor', 'Regente', 'Crítico musical', 'Professor de música', 'Engenheiro de som', 'DJ'],
    activities: ['Tocar um instrumento', 'Cantar em coral', 'Compor músicas', 'Estudar teoria musical', 'Criar ritmos'],
    icon: 'lightbulb'
  },
  bodily: {
    name: 'Inteligência Corporal-cinestésica',
    description: 'Habilidade para usar o corpo todo na expressão de ideias e sentimentos, e facilidade no uso das mãos para produzir ou transformar coisas. Inclui coordenação, equilíbrio, destreza, força, flexibilidade e velocidade.',
    strengths: ['Coordenação motora', 'Equilíbrio físico', 'Destreza manual', 'Expressão corporal', 'Consciência corporal'],
    careers: ['Atleta', 'Dançarino', 'Cirurgião', 'Artesão', 'Ator', 'Fisioterapeuta', 'Instrutor físico'],
    activities: ['Praticar esportes', 'Dançar', 'Fazer artesanato', 'Jardinagem', 'Atuar em teatro físico'],
    icon: 'square-pen'
  },
  interpersonal: {
    name: 'Inteligência Interpessoal',
    description: 'Capacidade de perceber e fazer distinções no humor, intenções, motivações e sentimentos de outras pessoas. Inclui sensibilidade a expressões faciais, voz e gestos, e a capacidade de responder efetivamente a estes sinais.',
    strengths: ['Empatia', 'Comunicação social', 'Liderança', 'Resolução de conflitos', 'Trabalho em equipe'],
    careers: ['Psicólogo', 'Assistente social', 'Professor', 'Político', 'Gerente', 'Vendedor', 'Negociador'],
    activities: ['Participar de trabalhos voluntários', 'Mediar conflitos', 'Organizar eventos sociais', 'Mentoria', 'Participar de grupos de debate'],
    icon: 'users'
  },
  intrapersonal: {
    name: 'Inteligência Intrapessoal',
    description: 'Autoconhecimento e capacidade de agir adaptativamente com base neste conhecimento. Inclui ter uma imagem precisa de si mesmo, consciência dos estados de humor, intenções, motivações, temperamento e desejos.',
    strengths: ['Autoconhecimento', 'Regulação emocional', 'Autodisciplina', 'Reflexão', 'Consciência de valores pessoais'],
    careers: ['Filósofo', 'Escritor', 'Pesquisador', 'Psicólogo', 'Conselheiro', 'Teólogo', 'Empreendedor independente'],
    activities: ['Meditação e mindfulness', 'Escrita reflexiva', 'Estabelecer metas pessoais', 'Terapia ou autoajuda', 'Praticar autoavaliação'],
    icon: 'square-x'
  },
  naturalist: {
    name: 'Inteligência Naturalista',
    description: 'Capacidade de reconhecer e classificar espécies da flora e fauna do ambiente, e sensibilidade a outros fenômenos naturais. Inclui sensibilidade a fenômenos naturais e habilidade para distinguir entre seres vivos.',
    strengths: ['Observação da natureza', 'Classificação', 'Padrões ambientais', 'Conexão com o meio ambiente', 'Cuidado com seres vivos'],
    careers: ['Biólogo', 'Naturalista', 'Veterinário', 'Botânico', 'Ambientalista', 'Agricultor', 'Geólogo'],
    activities: ['Jardinar', 'Observar pássaros', 'Coletar amostras naturais', 'Acampar', 'Estudar ecossistemas'],
    icon: 'square-check'
  }
};

/**
 * @function calculateIntelligenceResults
 * @description Calcula os resultados do teste de inteligências múltiplas
 * @param {Record<string, number>} answers - Objeto com as respostas do usuário (id da pergunta -> valor numérico)
 * @returns {IntelligenceResult[]} Array de resultados ordenados por porcentagem (maior para menor)
 */
export const calculateIntelligenceResults = (answers: Record<string, number>): IntelligenceResult[] => {
  const scores = {
    linguistic: 0,
    logical: 0,
    spatial: 0,
    musical: 0,
    bodily: 0,
    interpersonal: 0,
    intrapersonal: 0,
    naturalist: 0
  };
  
  // Count scores for each intelligence type
  Object.entries(answers).forEach(([questionId, score]) => {
    const question = intelligenceQuestions.find(q => q.id === questionId);
    if (question) {
      scores[question.type] += score;
    }
  });
  
  // Calculate maximum possible score per intelligence type
  const maxScorePerType = 10; // 2 questions per type * max score of 5
  
  // Calculate percentages
  const results: IntelligenceResult[] = (Object.keys(scores) as Array<keyof typeof scores>).map(type => {
    return {
      type,
      name: intelligenceInfo[type].name,
      percentage: Math.round((scores[type] / maxScorePerType) * 100),
      description: intelligenceInfo[type].description,
      strengths: intelligenceInfo[type].strengths,
      careers: intelligenceInfo[type].careers,
      activities: intelligenceInfo[type].activities,
      icon: intelligenceInfo[type].icon
    };
  });
  
  // Sort results by percentage (highest first)
  return results.sort((a, b) => b.percentage - a.percentage);
};

/**
 * @function getIntelligenceCorrelations
 * @description Obtém correlações entre temperamento e inteligências
 * @param {string} temperamentType - Tipo de temperamento
 * @param {string[]} topIntelligences - Array com os tipos de inteligências principais
 * @returns {string} Texto descritivo da correlação
 */
export const getIntelligenceCorrelations = (temperamentType: string, topIntelligences: string[]): string => {
  const correlations: Record<string, Record<string, string>> = {
    sanguine: {
      interpersonal: "Como pessoa de temperamento Sanguíneo, sua alta Inteligência Interpessoal potencializa sua sociabilidade natural. Você tem um dom especial para entender e conectar-se com as pessoas, sendo provavelmente muito querido em grupos sociais.",
      linguistic: "Seu temperamento Sanguíneo combinado com a Inteligência Linguística faz de você um comunicador nato. Você provavelmente expressa ideias com entusiasmo e carisma, cativando sua audiência.",
      musical: "A combinação de temperamento Sanguíneo com Inteligência Musical sugere uma expressão artística vibrante e emocional. Você provavelmente comunica sentimentos através da música e aprecia performances expressivas.",
      bodily: "Como Sanguíneo com forte Inteligência Corporal-cinestésica, você provavelmente tem uma expressão física energética e demonstrativa. Essa combinação é excelente para atividades que exigem carisma e movimento."
    },
    choleric: {
      logical: "Seu temperamento Colérico combinado com a Inteligência Lógico-matemática cria uma poderosa capacidade para resolver problemas e tomar decisões. Você tende a ser direto, eficiente e orientado a resultados.",
      interpersonal: "Como Colérico com alta Inteligência Interpessoal, você tem um potencial natural para liderança. Sua determinação combinada com a compreensão das pessoas faz de você um líder persuasivo e eficaz.",
      spatial: "A combinação de temperamento Colérico com Inteligência Espacial potencializa sua visão estratégica. Você provavelmente consegue visualizar soluções e planejar ações com clareza e determinação.",
      bodily: "Seu temperamento Colérico aliado à Inteligência Corporal-cinestésica faz de você alguém determinado em atividades físicas. Você provavelmente aborda esportes e trabalhos manuais com intensidade e competitividade."
    },
    melancholic: {
      intrapersonal: "Como pessoa de temperamento Melancólico com alta Inteligência Intrapessoal, você possui uma profunda consciência de si mesmo. Esta combinação favorece o autoconhecimento, a introspecção e o desenvolvimento espiritual.",
      spatial: "Seu temperamento Melancólico unido à Inteligência Espacial cria uma percepção visual rica e detalhada. Você provavelmente tem talento para artes visuais detalhistas ou projetos que requerem precisão.",
      linguistic: "A combinação de temperamento Melancólico com Inteligência Linguística resulta numa expressão verbal e escrita profunda e reflexiva. Você provavelmente se expressa com nuances emocionais e filosóficas.",
      musical: "Como Melancólico com forte Inteligência Musical, você provavelmente tem uma apreciação profunda por composições emocionais. Esta combinação favorece a expressão artística sensível e introspectiva."
    },
    phlegmatic: {
      naturalist: "Seu temperamento Fleumático combinado com a Inteligência Naturalista cria uma conexão tranquila e observadora com o mundo natural. Você provavelmente tem paciência para observar detalhes sutis dos ambientes e seres vivos.",
      intrapersonal: "Como Fleumático com alta Inteligência Intrapessoal, você possui equilíbrio emocional e autoconhecimento. Esta combinação favorece a mediação de conflitos e o aconselhamento calmo e ponderado.",
      logical: "A combinação de temperamento Fleumático com Inteligência Lógico-matemática resulta numa abordagem metódica e consistente aos problemas. Você provavelmente resolve questões com calma e precisão.",
      musical: "Seu temperamento Fleumático aliado à Inteligência Musical sugere uma apreciação serena e contemplativa da música. Você pode ter talento para composições harmoniosas e relaxantes."
    }
  };

  let result = "";
  
  // Find correlations for top intelligences
  topIntelligences.forEach(intelligence => {
    if (correlations[temperamentType] && correlations[temperamentType][intelligence]) {
      result += correlations[temperamentType][intelligence] + " ";
    }
  });
  
  // If no specific correlations found, provide a generic message
  if (!result) {
    result = `Seu temperamento ${temperamentType.charAt(0).toUpperCase() + temperamentType.slice(1)} e suas inteligências predominantes criam uma combinação única que influencia sua forma de interagir com o mundo e aprender.`;
  }
  
  return result;
};
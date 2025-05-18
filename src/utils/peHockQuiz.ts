
export interface PeHockQuestion {
  id: string;
  text: string;
  temperaments: string[];
  options?: { value: string; text: string }[];
}

// Array of all questions for the Pe. Hock temperament test
export const peHockQuestions: PeHockQuestion[] = [
  {
    id: "q1",
    text: "Fica logo com raiva quando o ofendem, e tende a se vingar e responder com um insulto imediatamente?",
    temperaments: ["choleric"]
  },
  {
    id: "q2",
    text: "Olha a vida sempre do ponto de vista mais sério?",
    temperaments: ["melancholic"]
  },
  {
    id: "q3",
    text: "Perde com facilidade a confiança nas pessoas mais próximas?",
    temperaments: ["melancholic"]
  },
  {
    id: "q4",
    text: "É muito inclinado a adular as pessoas que ama?",
    temperaments: ["sanguine"]
  },
  {
    id: "q5",
    text: "Aceita calmas explicações de razões e motivos, mas fica irritado e resistente quando lhe dão ordens severas?",
    temperaments: ["choleric", "melancholic"]
  },
  {
    id: "q6",
    text: "Gosta de estar acompanhado e dos divertimentos?",
    temperaments: ["sanguine"]
  },
  {
    id: "q7",
    text: "Seu pensamento facilmente se torna reflexivo, o que chega a atormentá-lo interiormente, mas sem deixar que os outros percebam?",
    temperaments: ["melancholic"]
  },
  {
    id: "q8",
    text: "Fica perturbado pela desordem ou pela injustiça?",
    temperaments: ["choleric", "melancholic"]
  },
  {
    id: "q9",
    text: "Tem ou demonstra pouco interesse pelo que se passa consigo mesmo?",
    temperaments: ["phlegmatic"]
  },
  {
    id: "q10",
    text: "Encontra dificuldade em confiar nas pessoas e sempre teme que os outros lhe guardem rancor?",
    temperaments: ["melancholic"]
  },
  {
    id: "q11",
    text: "Não gosta de longas reflexões e se distrai facilmente?",
    temperaments: ["sanguine"]
  },
  {
    id: "q12",
    text: "Geralmente não se abala tanto no momento de uma ofensa, mas se sente muito pior algumas horas depois, ou até mesmo no dia seguinte?",
    temperaments: ["melancholic"]
  },
  {
    id: "q13",
    text: "Encontra dificuldade em negar a si mesmo a sua comida favorita?",
    temperaments: ["sanguine", "melancholic"]
  },
  {
    id: "q14",
    text: "Irrita-se facilmente por uma ofensa, mas pouco tempo depois volta a ser amável?",
    temperaments: ["sanguine"]
  },
  {
    id: "q15",
    text: "É uma pessoa entusiasta, não ficando satisfeito, por exemplo, com o quotidiano, mas aspira as coisas nobres e boas, temporais ou espirituais?",
    temperaments: ["choleric"]
  },
  {
    id: "q16",
    text: "Geralmente não gosta de admitir uma debilidade ou derrota, tentando, como consequência, esconder dos outros, inclusive por meio de mentiras evidentes?",
    temperaments: ["choleric"]
  },
  {
    id: "q17",
    text: "Gosta do silêncio, da solidão e de estar afastado da multidão?",
    temperaments: ["melancholic"]
  },
  {
    id: "q18",
    text: "Fica facilmente com ciúmes, inveja ou torna-se pouco caritativo?",
    temperaments: ["melancholic"]
  },
  {
    id: "q19",
    text: "Sente-se à vontade quando está em uma posição de comando?",
    temperaments: ["choleric"]
  },
  {
    id: "q20",
    text: "Passa muito tempo deliberando, ainda que lhe custe muito tomar decisões?",
    temperaments: ["sanguine", "melancholic"]
  },
  {
    id: "q21",
    text: "Gosta que adulem?",
    temperaments: ["sanguine"]
  },
  {
    id: "q22",
    text: "Queixa-se por indisposições insignificantes e com frequência teme estar gravemente doente?",
    temperaments: ["melancholic"]
  },
  {
    id: "q23",
    text: "Tem grande tendência a relaxar-se, comendo e bebendo?",
    temperaments: ["phlegmatic"]
  },
  {
    id: "q24",
    text: "Facilmente se desanima pelas dificuldades em seus empreendimentos ou intentos?",
    temperaments: ["sanguine", "melancholic"]
  },
  {
    id: "q25",
    text: "Encontra dificuldade em conhecer novas pessoas, falar entre estranhos, encontrar as palavras corretas para expressar seus sentimentos?",
    temperaments: ["melancholic"]
  },
  {
    id: "q26",
    text: "É muito preocupado com a própria aparência e a dos demais, desde o rosto bonito até a roupa elegante e moderna?",
    temperaments: ["sanguine"]
  },
  {
    id: "q27",
    text: "Persevera, mesmo com grandes dificuldades, até conseguir alcançar seu objetivo?",
    temperaments: ["choleric"]
  },
  {
    id: "q28",
    text: "Fica desconfiado e reservado diante de uma palavra rude ou uma expressão facial pouco amistosa?",
    temperaments: ["melancholic"]
  },
  {
    id: "q29",
    text: "Acha difícil guardar os olhos, os ouvidos, a língua e ficar calado?",
    temperaments: ["sanguine"]
  },
  {
    id: "q30",
    text: "Aborrece aparecer em público e ser elogiado?",
    temperaments: ["melancholic"]
  },
  {
    id: "q31",
    text: "Deixa que os outros sejam preferidos, mas ao mesmo tempo se sente diminuído por estar sendo ignorado?",
    temperaments: ["melancholic"]
  },
  {
    id: "q32",
    text: "Desagradam-lhe (e inclusive chega a odiar) as carícias e o sentimentalismo?",
    temperaments: ["choleric"]
  },
  {
    id: "q33",
    text: "Demonstra-se despreocupado (e até mesmo cruel), com respeito ao sofrimento dos demais, chegando a não se importar com o bem-estar dos outros se não pode alcançar de outra maneira suas próprias metas?",
    temperaments: ["choleric"]
  },
  {
    id: "q34",
    text: "É pouco inclinado a trabalhar, preferindo o descanso e o tempo livre?",
    temperaments: ["sanguine", "phlegmatic"]
  },
  {
    id: "q35",
    text: "Não é perseverante, ou perde rapidamente o interesse no que faz?",
    temperaments: ["sanguine", "phlegmatic"]
  },
  {
    id: "q36",
    text: "É inclinado a uma desordenada proximidade a outras pessoas e a ser paquerador?",
    temperaments: ["sanguine"]
  },
  {
    id: "q37",
    text: "Não gosta de corrigir os outros, o que demonstra de duas formas: a) corrige de maneira tão discreta que os outros nem percebem; b) grita com raiva e irritação para corrigir?",
    temperaments: ["melancholic"]
  },
  {
    id: "q38",
    text: "Vê tudo, ouve tudo e fala de tudo?",
    temperaments: ["sanguine"]
  },
  {
    id: "q39",
    text: "Ama o trabalho leve que chama a atenção, no qual não seja necessária reflexão nem muito esforço?",
    temperaments: ["sanguine"]
  },
  {
    id: "q40",
    text: "Considera a si mesmo alguém tão extraordinário que tem sempre razão, de modo que não precisa da ajuda dos demais?",
    temperaments: ["choleric"]
  },
  {
    id: "q41",
    text: "Menospreza ou persegue, inclusive mediante comentários e meios injustos, aos que se atrevem a se lhe opor?",
    temperaments: ["choleric"]
  },
  {
    id: "q42",
    text: "Pode passar rapidamente das lágrimas ao riso e vice-versa?",
    temperaments: ["sanguine"]
  },
  {
    id: "q43",
    text: "Cativa-o facilmente uma nova ideia ou ambiente?",
    temperaments: ["sanguine"]
  },
  {
    id: "q44",
    text: "Gosta de variedade em tudo?",
    temperaments: ["sanguine"]
  },
  {
    id: "q45",
    text: "Mantém-se composto, pensativo, reflexivo, com juízo sensato e prático ao enfrentar o sofrimento, o fracasso ou as ofensas?",
    temperaments: ["phlegmatic"]
  },
  {
    id: "q46",
    text: "Gosta de rir ou tirar sarro dos outros, fazer piadas?",
    temperaments: ["sanguine"]
  },
  {
    id: "q47",
    text: "Surge facilmente uma aversão em seu coração contra uma pessoa que o fez sofrer ou que pisou na bola, aversão às vezes tão forte que o faz não querer lhe falar ou não poder vê-la sem fechar o semblante?",
    temperaments: ["choleric", "melancholic"]
  },
  {
    id: "q48",
    text: "Chateia-se com a oposição, a resistência e as ofensas pessoais e manifesta sua raiva com palavras severas que parecem corteses, mas que podem chegar a ferir a outra pessoa?",
    temperaments: ["choleric"]
  },
  {
    id: "q49",
    text: "Qual destas disposições são as suas? Escolha uma ou duas opções:",
    temperaments: [],
    options: [
      { value: "a", text: "Obstinação, raiva, orgulho" },
      { value: "b", text: "Preguiça, falta de energia" },
      { value: "c", text: "Falta de coragem, evasão do sofrimento" },
      { value: "d", text: "Verborréia, falta de coerência" }
    ]
  },
  {
    id: "q50",
    text: "Qual destas características lhe são naturais? Escolha uma ou duas opções:",
    temperaments: [],
    options: [
      { value: "a", text: "Bom caráter, tranquilo" },
      { value: "b", text: "Empatia com os outros, amor pela solidão e pela oração" },
      { value: "c", text: "Vontade firme, energia, audácia, ambição" },
      { value: "d", text: "Alegria, facilidade para lidar bem com as pessoas difíceis" }
    ]
  }
];

// Function to get temperament description based on type
export const getTemperamentDescription = (type: string): string => {
  switch (type) {
    case 'choleric':
      return "O temperamento Colérico é caracterizado pela energia, determinação e força de vontade. Pessoas coléricas são líderes naturais, decididas e orientadas a objetivos. Tendem a ser independentes, dinâmicas e práticas. Seus pontos fortes incluem produtividade, capacidade de liderança e foco nos resultados. No entanto, podem ser impacientes, dominadoras e, por vezes, insensíveis às necessidades dos outros. O desafio do colérico é equilibrar sua força com sensibilidade e compaixão.";
    
    case 'sanguine':
      return "O temperamento Sanguíneo é extrovertido, comunicativo e sociável. Pessoas sanguíneas são animadas, expressivas e espontâneas. Gostam de estar com outras pessoas, são carismáticas e têm facilidade para fazer amigos. Seus pontos fortes incluem entusiasmo, otimismo e habilidades sociais. Porém, podem ser dispersas, impulsivas e ter dificuldade para manter o foco e concluir tarefas iniciadas. O desafio do sanguíneo é desenvolver autodisciplina e profundidade emocional.";
    
    case 'melancholic':
      return "O temperamento Melancólico é reflexivo, analítico e perfeccionista. Pessoas melancólicas são profundas, pensativas e sensíveis. Valorizam a ordem, a beleza e tendem a ser detalhistas. Seus pontos fortes incluem criatividade, lealdade e capacidade de análise. Contudo, podem ser excessivamente críticas (consigo mesmas e com os outros), pessimistas e propensas à introspecção excessiva. O desafio do melancólico é encontrar equilíbrio entre seu mundo interior rico e as demandas da vida prática.";
    
    case 'phlegmatic':
      return "O temperamento Fleumático é calmo, equilibrado e pacífico. Pessoas fleumáticas são tranquilas, estáveis e diplomáticas. Raramente se irritam e tendem a ser conciliadoras em situações de conflito. Seus pontos fortes incluem paciência, confiabilidade e habilidade para mediar. No entanto, podem ser resistentes a mudanças, passivas e evitar decisões difíceis. O desafio do fleumático é desenvolver mais iniciativa e assertividade, sem perder sua natural serenidade.";
    
    default:
      return "Descrição não disponível para este temperamento.";
  }
};


import React from 'react';

interface TemperamentIntelligenceRelationProps {
  temperamentType: string;
  intelligenceType: string;
}

const TemperamentIntelligenceRelation: React.FC<TemperamentIntelligenceRelationProps> = ({ 
  temperamentType, 
  intelligenceType 
}) => {
  const getRelationText = (): string => {
    const relations: Record<string, Record<string, string>> = {
      choleric: {
        logical: "Pessoas coléricas tendem a ter facilidade para lógica e resolução de problemas, pois são analíticas, objetivas e gostam de desafios intelectuais. São rápidas em tomar decisões e eficientes em situações que exigem raciocínio estratégico.",
        linguistic: "O colérico pode se destacar na comunicação persuasiva, liderança em debates e argumentação, especialmente quando precisa convencer ou motivar. Tem facilidade para discursos motivadores e para expor ideias de forma clara e assertiva.",
        spatial: "Sua visão estratégica e capacidade de planejamento ajudam em tarefas que exigem visualização e organização de espaços ou projetos. Costuma ser eficiente em projetos arquitetônicos, engenharia e design funcional.",
        musical: "Costumam apreciar música enérgica e podem se envolver em atividades musicais que exigem disciplina e performance. Preferem estilos que transmitam força e intensidade.",
        kinesthetic: "O colérico é ativo, gosta de esportes e desafios físicos, sendo competitivo e focado em resultados. Tem facilidade em liderar equipes esportivas e se destaca em atividades que exigem energia e coordenação.",
        bodily: "O colérico é ativo, gosta de esportes e desafios físicos, sendo competitivo e focado em resultados. Tem facilidade em liderar equipes esportivas e se destaca em atividades que exigem energia e coordenação.",
        interpersonal: "Sua liderança natural favorece a coordenação de grupos, mas pode precisar desenvolver mais empatia e escuta. É bom para motivar equipes, mas deve cuidar para não ser autoritário.",
        intrapersonal: "Tem autoconfiança e clareza de objetivos, mas pode trabalhar mais o autoconhecimento para equilibrar impulsividade. A busca pelo autodomínio é fundamental para seu crescimento pessoal."
      },
      sanguine: {
        logical: "O sanguíneo pode não se interessar tanto por lógica abstrata, mas aprende melhor quando há interação e dinamismo. Prefere desafios práticos e jogos em grupo que envolvam raciocínio.",
        linguistic: "Destaca-se em comunicação, narração de histórias, persuasão e criação de textos criativos. Tem facilidade para improvisar e cativar o público com palavras.",
        spatial: "Usa a criatividade para visualizar ideias, criar ambientes e inovar em projetos artísticos. Gosta de ambientes coloridos e de transformar espaços de maneira original.",
        musical: "Geralmente tem facilidade para ritmo, canto e apreciação musical, sendo expressivo e entusiasta. Gosta de música animada e de participar de grupos musicais.",
        kinesthetic: "É espontâneo, expressivo e gosta de atividades físicas em grupo, como dança e esportes coletivos. Tem facilidade para aprender por meio do movimento e da interação.",
        bodily: "É espontâneo, expressivo e gosta de atividades físicas em grupo, como dança e esportes coletivos. Tem facilidade para aprender por meio do movimento e da interação.",
        interpersonal: "Tem grande facilidade para fazer amigos, trabalhar em equipe e motivar pessoas ao redor. É comunicativo, extrovertido e cria redes de contatos com facilidade.",
        intrapersonal: "Costuma ser otimista, mas pode precisar desenvolver mais autoconhecimento e constância emocional. Deve buscar momentos de reflexão para equilibrar entusiasmo e foco."
      },
      melancholic: {
        logical: "Apresenta raciocínio analítico, atenção aos detalhes e busca pela precisão, sendo excelente em tarefas que exigem lógica e planejamento. Prefere ambientes organizados e previsíveis.",
        linguistic: "Tem facilidade para escrita reflexiva, análise de textos e produção literária profunda. Gosta de explorar temas existenciais e filosóficos em suas produções.",
        spatial: "Usa a sensibilidade estética para criar ou apreciar obras visuais detalhadas e harmônicas. Tem olhar apurado para arte, arquitetura e design refinado.",
        musical: "Sensível à música, aprecia melodias profundas e pode se destacar em composição ou interpretação emocional. Prefere músicas introspectivas e com significado profundo.",
        kinesthetic: "Prefere atividades físicas mais controladas e técnicas, como artes marciais, natação ou instrumentos musicais. Valoriza a precisão e o aperfeiçoamento contínuo.",
        bodily: "Prefere atividades físicas mais controladas e técnicas, como artes marciais, natação ou instrumentos musicais. Valoriza a precisão e o aperfeiçoamento contínuo.",
        interpersonal: "É empático e atento, mas pode ser reservado; destaca-se em relações profundas e de confiança. Prefere grupos pequenos e amizades duradouras.",
        intrapersonal: "Tem grande capacidade de autoconhecimento, reflexão e busca constante por sentido e valores. É introspectivo e valoriza o crescimento interior."
      },
      phlegmatic: {
        logical: "Tem pensamento organizado, paciente e metódico, sendo eficiente em tarefas que exigem constância e precisão. Prefere rotinas estáveis e procedimentos claros.",
        linguistic: "Prefere comunicação calma, clara e objetiva, valorizando a escuta e o diálogo equilibrado. É bom em resolver conflitos com palavras e manter a harmonia.",
        spatial: "Usa a percepção tranquila para organizar ambientes e resolver problemas práticos do cotidiano. Gosta de ambientes funcionais e bem distribuídos.",
        musical: "Aprecia música relaxante e pode se envolver em atividades musicais que promovam harmonia e bem-estar. Prefere estilos suaves e melodias tranquilas.",
        kinesthetic: "Gosta de atividades físicas moderadas, que promovam saúde e equilíbrio, como caminhadas ou yoga. Valoriza o bem-estar físico e a regularidade.",
        bodily: "Gosta de atividades físicas moderadas, que promovam saúde e equilíbrio, como caminhadas ou yoga. Valoriza o bem-estar físico e a regularidade.",
        interpersonal: "É diplomático, bom ouvinte e mediador de conflitos, promovendo harmonia nos grupos. É confiável e inspira confiança nos outros.",
        intrapersonal: "Tem autocontrole, paciência e facilidade para manter equilíbrio emocional em situações adversas. Sabe lidar com pressões sem perder a serenidade."
      }
    };

    // Handle the mapping of kinesthetic to bodily
    const mappedIntelligenceType = intelligenceType === 'kinesthetic' ? 'bodily' : intelligenceType;
    
    return relations[temperamentType]?.[mappedIntelligenceType] || 
      "Não há informações específicas sobre essa combinação de temperamento e inteligência.";
  };

  const getIntelligenceName = (): string => {
    const names: Record<string, string> = {
      logical: "Lógico-Matemática",
      linguistic: "Verbal-Linguística",
      spatial: "Espacial",
      musical: "Musical",
      kinesthetic: "Corporal-Cinestésica",
      bodily: "Corporal-Cinestésica",
      interpersonal: "Interpessoal",
      intrapersonal: "Intrapessoal"
    };
    
    return names[intelligenceType] || intelligenceType;
  };

  return (
    <div className="mb-4 last:mb-0">
      <h4 className="text-lg font-medium text-amber-400 mb-1">{getIntelligenceName()}</h4>
      <p className="text-gray-300">{getRelationText()}</p>
    </div>
  );
};

export default TemperamentIntelligenceRelation;

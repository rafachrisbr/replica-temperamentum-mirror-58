
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
        logical: "Pessoas coléricas tendem a ter facilidade para lógica e resolução de problemas, pois são analíticas, objetivas e gostam de desafios intelectuais.",
        linguistic: "O colérico pode se destacar na comunicação persuasiva, liderança em debates e argumentação, especialmente quando precisa convencer ou motivar.",
        spatial: "Sua visão estratégica e capacidade de planejamento ajudam em tarefas que exigem visualização e organização de espaços ou projetos.",
        musical: "Costumam apreciar música enérgica e podem se envolver em atividades musicais que exigem disciplina e performance.",
        kinesthetic: "O colérico é ativo, gosta de esportes e desafios físicos, sendo competitivo e focado em resultados.",
        bodily: "O colérico é ativo, gosta de esportes e desafios físicos, sendo competitivo e focado em resultados.",
        interpersonal: "Sua liderança natural favorece a coordenação de grupos, mas pode precisar desenvolver mais empatia e escuta.",
        intrapersonal: "Tem autoconfiança e clareza de objetivos, mas pode trabalhar mais o autoconhecimento para equilibrar impulsividade."
      },
      sanguine: {
        logical: "O sanguíneo pode não se interessar tanto por lógica abstrata, mas aprende melhor quando há interação e dinamismo.",
        linguistic: "Destaca-se em comunicação, narração de histórias, persuasão e criação de textos criativos.",
        spatial: "Usa a criatividade para visualizar ideias, criar ambientes e inovar em projetos artísticos.",
        musical: "Geralmente tem facilidade para ritmo, canto e apreciação musical, sendo expressivo e entusiasta.",
        kinesthetic: "É espontâneo, expressivo e gosta de atividades físicas em grupo, como dança e esportes coletivos.",
        bodily: "É espontâneo, expressivo e gosta de atividades físicas em grupo, como dança e esportes coletivos.",
        interpersonal: "Tem grande facilidade para fazer amigos, trabalhar em equipe e motivar pessoas ao redor.",
        intrapersonal: "Costuma ser otimista, mas pode precisar desenvolver mais autoconhecimento e constância emocional."
      },
      melancholic: {
        logical: "Apresenta raciocínio analítico, atenção aos detalhes e busca pela precisão, sendo excelente em tarefas que exigem lógica e planejamento.",
        linguistic: "Tem facilidade para escrita reflexiva, análise de textos e produção literária profunda.",
        spatial: "Usa a sensibilidade estética para criar ou apreciar obras visuais detalhadas e harmônicas.",
        musical: "Sensível à música, aprecia melodias profundas e pode se destacar em composição ou interpretação emocional.",
        kinesthetic: "Prefere atividades físicas mais controladas e técnicas, como artes marciais, natação ou instrumentos musicais.",
        bodily: "Prefere atividades físicas mais controladas e técnicas, como artes marciais, natação ou instrumentos musicais.",
        interpersonal: "É empático e atento, mas pode ser reservado; destaca-se em relações profundas e de confiança.",
        intrapersonal: "Tem grande capacidade de autoconhecimento, reflexão e busca constante por sentido e valores."
      },
      phlegmatic: {
        logical: "Tem pensamento organizado, paciente e metódico, sendo eficiente em tarefas que exigem constância e precisão.",
        linguistic: "Prefere comunicação calma, clara e objetiva, valorizando a escuta e o diálogo equilibrado.",
        spatial: "Usa a percepção tranquila para organizar ambientes e resolver problemas práticos do cotidiano.",
        musical: "Aprecia música relaxante e pode se envolver em atividades musicais que promovam harmonia e bem-estar.",
        kinesthetic: "Gosta de atividades físicas moderadas, que promovam saúde e equilíbrio, como caminhadas ou yoga.",
        bodily: "Gosta de atividades físicas moderadas, que promovam saúde e equilíbrio, como caminhadas ou yoga.",
        interpersonal: "É diplomático, bom ouvinte e mediador de conflitos, promovendo harmonia nos grupos.",
        intrapersonal: "Tem autocontrole, paciência e facilidade para manter equilíbrio emocional em situações adversas."
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

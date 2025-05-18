
import React from 'react';

interface DetailedIntelligenceDescriptionProps {
  type: string;
  name: string;
}

const DetailedIntelligenceDescription: React.FC<DetailedIntelligenceDescriptionProps> = ({ type, name }) => {
  const getDetailedDescription = () => {
    switch (type) {
      case 'logical':
        return {
          title: 'Lógico-Matemática',
          description: 'A inteligência lógico-matemática é caracterizada pela habilidade de raciocinar logicamente, identificar padrões, solucionar problemas abstratos e manipular conceitos numéricos com facilidade. Pessoas com essa inteligência desenvolvida tendem a gostar de matemática, ciências, tecnologia e jogos de estratégia. Elas se destacam por sua capacidade de analisar situações de forma objetiva, construir argumentos sólidos e buscar explicações racionais para os fenômenos ao seu redor. Profissionais como cientistas, engenheiros, programadores e analistas costumam apresentar essa inteligência como predominante.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Sternberg, R.J. (2012). Cognitive Psychology.'
        };
      case 'linguistic':
        return {
          title: 'Verbal-Linguística',
          description: 'A inteligência verbal-linguística envolve a sensibilidade para a linguagem falada e escrita, a capacidade de se expressar com clareza, interpretar textos e argumentar de forma persuasiva. Indivíduos com essa inteligência apreciam a leitura, a escrita, a comunicação oral e têm facilidade para aprender idiomas. São criativos com as palavras, gostam de contar histórias, debater ideias e transmitir conhecimento. Escritores, advogados, professores e jornalistas são exemplos de profissionais que frequentemente apresentam essa inteligência como destaque.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Armstrong, T. (2001). Inteligências Múltiplas na Sala de Aula.'
        };
      case 'spatial':
        return {
          title: 'Espacial',
          description: 'A inteligência espacial refere-se à habilidade de perceber, manipular e criar imagens mentais, compreender mapas, gráficos e visualizar objetos em diferentes posições. Pessoas com essa inteligência desenvolvida têm facilidade para desenhar, projetar, montar quebra-cabeças e entender relações espaciais complexas. Artistas, arquitetos, engenheiros civis e designers gráficos são exemplos de profissionais que se beneficiam desse tipo de inteligência.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Campbell, L., Dickinson, D. (2000). Teaching and Learning Through Multiple Intelligences.'
        };
      case 'musical':
        return {
          title: 'Musical',
          description: 'A inteligência musical envolve a sensibilidade para perceber, discriminar, transformar e expressar formas musicais. Pessoas com essa inteligência têm facilidade para identificar ritmos, tons e melodias, além de criar, interpretar e apreciar música. Elas costumam aprender melhor com recursos sonoros e podem se destacar como músicos, compositores, regentes ou apreciadores de música.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Pirfano, Í. (2018). Inteligência Musical.'
        };
      case 'kinesthetic':
      case 'bodily':
        return {
          title: 'Corporal-Cinestésica',
          description: 'A inteligência corporal-cinestésica está relacionada à habilidade de usar o corpo de maneira coordenada, precisa e expressiva para resolver problemas, criar ou se comunicar. Indivíduos com essa inteligência destacam-se em esportes, dança, teatro, artesanato e atividades que exigem destreza manual. Eles aprendem melhor por meio da prática e do movimento, e costumam ter excelente coordenação motora e consciência corporal.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Armstrong, T. (2001). Inteligências Múltiplas na Sala de Aula.'
        };
      case 'interpersonal':
        return {
          title: 'Interpessoal',
          description: 'A inteligência interpessoal refere-se à capacidade de compreender, interagir e se comunicar eficientemente com outras pessoas. Pessoas com essa inteligência são empáticas, sabem trabalhar em equipe, resolver conflitos e motivar os outros. São sensíveis às emoções e intenções alheias, tornando-se bons líderes, mediadores, professores e profissionais de recursos humanos.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Goleman, D. (1995). Inteligência Emocional.'
        };
      case 'intrapersonal':
        return {
          title: 'Intrapessoal',
          description: 'A inteligência intrapessoal diz respeito ao autoconhecimento, à capacidade de reconhecer e compreender as próprias emoções, motivações, desejos e limites. Indivíduos com essa inteligência têm facilidade para refletir sobre si mesmos, tomar decisões alinhadas com seus valores e buscar o desenvolvimento pessoal. Psicólogos, filósofos, líderes espirituais e escritores introspectivos frequentemente apresentam essa inteligência como predominante.',
          references: 'Gardner, H. (2000). Inteligências Múltiplas; Armstrong, T. (2001). Inteligências Múltiplas na Sala de Aula.'
        };
      default:
        return {
          title: name,
          description: 'Descrição detalhada não disponível.',
          references: ''
        };
    }
  };

  const detailedInfo = getDetailedDescription();

  return (
    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-700 mt-4">
      <h3 className="text-xl font-serif text-amber-400 mb-3">{detailedInfo.title}</h3>
      <p className="text-gray-200 mb-4">{detailedInfo.description}</p>
      {detailedInfo.references && (
        <p className="text-sm text-gray-400 italic">{detailedInfo.references}</p>
      )}
    </div>
  );
};

export default DetailedIntelligenceDescription;

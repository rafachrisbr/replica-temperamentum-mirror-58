import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const EducacaoFamiliarArtigo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 pt-12">
        <div className="max-w-3xl w-full space-y-8">
          <Link to="/educacao-familiar">
            <Button variant="outline" className="mb-6 border-gray-700 text-[#D4AF37] hover:bg-gray-900">
              <ChevronLeft size={16} className="mr-2" />
              Voltar para Educação Familiar
            </Button>
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] text-center mb-6">
              A Importância da Educação das Crianças Conforme seu Temperamento
            </h1>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/paisFilhos.jpg" 
                alt="Pais e filhos" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

            <p className="text-gray-300 mb-6">
              A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. Compreender o temperamento único de cada criança é fundamental para uma educação eficaz que respeite sua individualidade enquanto a guia no caminho das virtudes. O temperamento, sendo algo inato no indivíduo, uma "índole natural" que a natureza nos impõe, nunca desaparece inteiramente. No entanto, uma educação oportuna e, sobretudo, a força sobrenatural da graça podem reduzir suas estridências e moldar o caráter da criança.
            </p>

            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Compreendendo os Temperamentos</h2>
            <p className="text-gray-300 mb-6">
              O estudo dos quatro temperamentos desempenha um papel significativo na educação dos filhos, permitindo que os pais compreendam melhor as características individuais de cada criança. Ao reconhecer o temperamento predominante, os pais podem ajustar sua abordagem educacional para atender às necessidades específicas, proporcionando um ambiente mais favorável ao desenvolvimento saudável, promovendo a autoestima, a motivação e a felicidade.
            </p>

            <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
              Como ensina o Papa Pio XII: "A arte da educação é, sob muitos aspectos, a arte de adaptar-se à idade, ao temperamento, ao caráter, à capacidade, às necessidades e às justas aspirações". Esta adaptação não significa ceder a todos os caprichos da criança, mas compreender sua natureza para melhor guiá-la.
            </blockquote>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/criancasTemperamento.jpeg" 
                alt="Crianças e seus temperamentos" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Os Quatro Temperamentos e Estratégias Educativas</h2>
            
            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Temperamento Melancólico</h3>
            <p className="text-gray-300 mb-4">
              As crianças melancólicas tendem à introspecção, solidão e profundidade de pensamentos. Muitas vezes possuem habilidades analíticas, criativas e uma profunda capacidade de empatia. Como Santa Teresinha, que demonstrava características melancólicas desde pequena, preferindo "sentar-se sozinha na relva florida" com "pensamentos muito profundos".
            </p>

            <div className="bg-[#121212] p-4 rounded-lg border border-gray-800 mb-6">
              <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Oferecer um ambiente acolhedor que respeite sua individualidade</li>
                <li>Estimular seu potencial criativo e intelectual</li>
                <li>Combater tendências ao pessimismo e perfeccionismo através das virtudes da esperança, confiança e contentamento</li>
                <li>Encorajar a busca por conhecimento em áreas que despertem seu interesse</li>
              </ul>
            </div>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/padreEducando.png" 
                alt="Educação e formação" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/ARenaissance-style.jpg" 
                alt="Arte renascentista sobre educação" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Temperamento Colérico</h3>
            <p className="text-gray-300 mb-4">
              Crianças coléricas são geralmente determinadas, enérgicas e líderes naturais, mas podem ter dificuldades com raiva, orgulho e tendência a dominar os outros. São Pio X, que "mantinha um absoluto senhorio de si e dominava os impulsos de seu ardente temperamento", demonstra como é possível transformar a energia natural em virtude através do autodomínio.
            </p>

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/criançaColérica.jpg" 
                alt="Criança com temperamento colérico" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
              <p className="text-center text-sm mt-3 text-gray-400">
                Criança com temperamento colérico - determinada e enérgica
              </p>
            </div>

            <div className="bg-[#121212] p-4 rounded-lg border border-gray-800 mb-6">
              <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Ensinar o autocontrole e canalizar sua energia para atividades construtivas</li>
                <li>Cultivar as virtudes da paciência, humildade e compaixão</li>
                <li>Estabelecer limites claros, mas sem sufocar sua iniciativa</li>
                <li>Valorizar sua liderança natural, direcionando-a para o serviço aos outros</li>
              </ul>
            </div>

            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Temperamento Sanguíneo</h3>
            <p className="text-gray-300 mb-4">
              As crianças sanguíneas são geralmente cheias de energia, espevitadas, centro das atenções - e por vezes das confusões. São sociáveis e adaptáveis, mas podem ter dificuldades com impulsividade e falta de autocontrole.
            </p>

            <div className="bg-[#121212] p-4 rounded-lg border border-gray-800 mb-6">
              <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Desenvolver as virtudes do autocontrole e da moderação</li>
                <li>Oferecer estrutura e consistência sem reprimir seu entusiasmo natural</li>
                <li>Ensinar a perseverança em tarefas e compromissos</li>
                <li>Valorizar sua sociabilidade, direcionando-a para relações saudáveis</li>
              </ul>
            </div>

            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Temperamento Fleumático</h3>
            <p className="text-gray-300 mb-4">
              As crianças fleumáticas tendem a ser pacíficas, dóceis e calmas, mas podem apresentar falta de ambição e tendência à complacência. São geralmente quietas, aplicadas, mas lentas para se enturmar.
            </p>

            <div className="bg-[#121212] p-4 rounded-lg border border-gray-800 mb-6">
              <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
              <ul className="list-disc pl-5 text-gray-300 space-y-2">
                <li>Cultivar as virtudes da diligência e da perseverança</li>
                <li>Incentivar a iniciativa e a expressão de opiniões e sentimentos</li>
                <li>Respeitar seu ritmo mais lento, sem pressioná-las excessivamente</li>
                <li>Valorizar sua capacidade de reflexão e estabilidade emocional</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Graça e a Educação dos Temperamentos</h2>
            <p className="text-gray-300 mb-6">
              O Papa Pio XII nos ensina que "a educação cristã da consciência está bem longe de negar a personalidade, mesmo a do jovem e da criança, e de reprimir sua iniciativa. Porque toda sã educação tende pouco a pouco a tornar obsoleto o educador e mais independente o educando, dentro de justos limites". Esta visão equilibrada reconhece tanto a autoridade dos pais quanto a necessidade de desenvolver a autonomia da criança.
            </p>

            <p className="text-gray-300 mb-6">
              A educação deve considerar que "a criança em estado de graça, desde que não peque pessoalmente, está em contato direto com a Santíssima Trindade que nela habita; sua alma é como um diamante, que ainda precisa ser lapidado, mas que praticamente não tem escórias". Esta visão espiritual da infância nos convida a respeitar a dignidade da criança e seu potencial para a virtude.
            </p>

            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Virtudes Cristãs e Temperamento</h2>
            <p className="text-gray-300 mb-6">
              A Igreja Católica ensina que todos são chamados a crescer em virtude e a lutar pela santidade, independentemente do temperamento. As virtudes são hábitos que permitem aos fiéis agirem de forma que agrade a Deus e de acordo com Seus ensinamentos.
            </p>

            <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
              São Pio X, em seu programa de pontificado, declarou ser seu único propósito "instaurare omnia in Christo, ou seja, de recapitular, reconduzir tudo à unidade em Cristo". Este princípio aplica-se perfeitamente à educação das crianças, que deve ter como objetivo final conduzi-las a Cristo.
            </blockquote>

            <p className="text-gray-300 mb-6">
              Como lembra a tradição católica, "Se pois a Lei de Deus manda aos filhos honrar, obedecer e acatar os pais, é também dever e encargo dos pais educar os filhos por princípios e costumes bem". Esta reciprocidade de deveres forma a base da educação cristã.
            </p>

            <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
              O Cardeal Ratzinger (futuro Papa Bento XVI) advertiu que "a fé não é um sentimento vago das realidades transcendentes e inexprimíveis; ela forma sem dúvida o coração do homem, mas da raiz do coração forma também o intelecto e a vontade. A fé exige uma contínua pedagogia da personalidade inteira, a disponibilidade de aprender toda a vida, de permanecer discípulo na escola de Cristo".
            </blockquote>

            <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão</h2>
            <p className="text-gray-300 mb-6">
              Educar os filhos conforme seu temperamento não significa apenas adaptar-se às suas inclinações naturais, mas ajudá-los a crescer em virtude, superando as fraquezas próprias de cada temperamento. Como demonstram os exemplos dos santos, é possível, através da graça e de uma educação adequada, transformar as características naturais em instrumentos de santidade.
            </p>

            <p className="text-gray-300 mb-6">
              São Pio X nos inspira com seu exemplo de equilíbrio entre bondade e firmeza, demonstrando que a educação cristã deve ser ao mesmo tempo amorosa e exigente. Seu legado de "restaurar a pureza da fé e revitalizar a vida litúrgica da Igreja" nos convida a fazer o mesmo na educação de nossos filhos: restaurar neles a imagem de Cristo, ajudando-os a desenvolver as virtudes que os conduzirão à santidade.
            </p>

            <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
              Como nos ensina o Código de Direito Canônico, a verdadeira educação "deve promover a formação integral da pessoa humana, em vista de seu fim último e, ao mesmo tempo, do bem comum da sociedade, as crianças e jovens sejam educados de tal modo que possam desenvolver harmonicamente seus dotes físicos, morais e intelectuais, adquirir senso de responsabilidade mais perfeito e correto uso da liberdade, e sejam formados para uma participação ativa na vida social".
            </blockquote>

            <div className="my-8 text-center border-t border-gray-800 pt-8">
              <p className="text-[#D4AF37] italic text-xl mb-2">Vulnerasti cor meum verbo tuo</p>
              <p className="text-gray-300">Feriste o meu coração com a Tua palavra</p>
            </div>

            <div className="flex justify-center mt-12">
              <Link to="/educacao-familiar">
                <Button variant="outline" className="border-gray-700 text-[#D4AF37] hover:bg-gray-900">
                  <ChevronLeft size={16} className="mr-2" />
                  Voltar para Educação Familiar
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliarArtigo;

export default EducacaoFamiliarArtigo
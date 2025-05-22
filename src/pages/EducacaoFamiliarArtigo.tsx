import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
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

            <p className="text-lg mb-8 text-gray-200">
              A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. Compreender o temperamento único de cada criança é fundamental para uma educação eficaz que respeite sua individualidade enquanto a guia no caminho das virtudes.
            </p>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Compreendendo os Temperamentos</h2>
              <p className="mb-4">
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
                <p className="text-center text-sm mt-3 text-gray-400">
                  Crianças e seus temperamentos
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Os Quatro Temperamentos e Estratégias Educativas</h2>
              
              <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Temperamento Melancólico</h3>
              <p className="mb-4">
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
                <p className="text-center text-sm mt-3 text-gray-400">
                  Educação e formação
                </p>
              </div>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/ARenaissance-style.jpg" 
                  alt="Arte renascentista sobre educação" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md" 
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  Arte renascentista sobre educação
                </p>
              </div>

              <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Temperamento Colérico</h3>
              <p className="mb-4">
                Crianças coléricas são geralmente determinadas, enérgicas e líderes naturais, mas podem ter dificuldades com raiva, orgulho e tendência a dominar os outros. São Pio X, que "mantinha um absoluto senhorio de si e dominava os impulsos de seu ardente temperamento", demonstra como é possível transformar a energia natural em virtude através do autodomínio.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/criancaColerica.png" 
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
              <p className="mb-4">
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
              <p className="mb-4">
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
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Graça e a Educação dos Temperamentos</h2>
              <p className="mb-4">
                O Papa Pio XII nos ensina que "a educação cristã da consciência está bem longe de negar a personalidade, mesmo a do jovem e da criança, e de reprimir sua iniciativa. Porque toda sã educação tende pouco a pouco a tornar obsoleto o educador e mais independente o educando, dentro de justos limites". Esta visão equilibrada reconhece tanto a autoridade dos pais quanto a necessidade de desenvolver a autonomia da criança.
              </p>

              <p className="mb-4">
                A educação deve considerar que "a criança em estado de graça, desde que não peque pessoalmente, está em contato direto com a Santíssima Trindade que nela habita; sua alma é como um diamante, que ainda precisa ser lapidado, mas que praticamente não tem escórias". Esta visão espiritual da infância nos convida a respeitar a dignidade da criança e seu potencial para a virtude.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Virtudes Cristãs e Temperamento</h2>
              <p className="mb-4">
                A Igreja Católica ensina que todos são chamados a crescer em virtude e a lutar pela santidade, independentemente do temperamento. As virtudes são hábitos que permitem aos fiéis agirem de forma que agrade a Deus e de acordo com Seus ensinamentos.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                São Pio X, em seu programa de pontificado, declarou ser seu único propósito "instaurare omnia in Christo, ou seja, de recapitular, reconduzir tudo à unidade em Cristo". Este princípio aplica-se perfeitamente à educação das crianças, que deve ter como objetivo final conduzi-las a Cristo.
              </blockquote>

              <p className="mb-4">
                Como lembra a tradição católica, "Se pois a Lei de Deus manda aos filhos honrar, obedecer e acatar os pais, é também dever e encargo dos pais educar os filhos por princípios e costumes bem". Esta reciprocidade de deveres forma a base da educação cristã.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                O Cardeal Ratzinger (futuro Papa Bento XVI) advertiu que "a fé não é um sentimento vago das realidades transcendentes e inexprimíveis; ela forma sem dúvida o coração do homem, mas da raiz do coração forma também o intelecto e a vontade. A fé exige uma contínua pedagogia da personalidade inteira, a disponibilidade de aprender toda a vida, de permanecer discípulo na escola de Cristo".
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Exercício Prático de Meditação</h2>
              
              <p className="mb-4">Silencie seu coração e coloque-se na presença de Jesus, o Amigo fiel.</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Vós sois meus amigos, se fizerdes o que eu vos mando."
                <br />
                <span className="text-sm">
                  "Vos amici mei estis, si feceritis quae ego praecipio vobis." (João 15,14)
                </span>
              </blockquote>

              <div className="bg-[#121212] p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-medium text-amber-400 mb-4">Pontos para Reflexão:</h3>
                <ul className="space-y-4 text-gray-300">
                  <li>• Tenho vivido a amizade como Cristo ensinou?</li>
                  <li>• Tenho sido paciente, leal, compassivo com meus amigos?</li>
                  <li>• Tenho buscado amar sem esperar retribuição?</li>
                  <li>• Minha amizade com Deus se reflete nas minhas amizades humanas?</li>
                  <li>• Busco comunhão de almas, ou meus relacionamentos são superficiais?</li>
                </ul>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Oração Final</h2>
              <div className="bg-[#121212] p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 italic">
                  Senhor Jesus, Amigo fiel, ensina-me a viver a amizade como comunhão de almas, unidas em Ti. Que eu saiba cativar e ser cativado, cuidar e ser cuidado, amando com generosidade e paciência. Que os santos e meu anjo da guarda me inspirem e acompanhem, e que eu nunca deixe de buscar Tua amizade e a de Maria, nossa Mãe. Amém.
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão</h2>
              <p className="mb-4">
                A amizade é comunhão de almas, dom de Deus, caminho de santidade. Inspirados em Cristo, nos santos, em Maria e nos nossos anjos da guarda, sejamos amigos verdadeiros, responsáveis uns pelos outros, construindo laços que nos conduzam juntos ao Céu.
              </p>

              <div className="my-8 text-center">
                <p className="text-[#D4AF37] italic">Vulnerasti cor meum verbo tuo</p>
                <p className="text-gray-300">Feriste o meu coração com a Tua palavra</p>
              </div>
            </section>

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
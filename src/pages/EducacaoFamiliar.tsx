import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const EducacaoFamiliar = () => {
  const [showFullArticle, setShowFullArticle] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 mt-8 animate-fadeIn">
        <div className="max-w-6xl w-full space-y-8">
          <div className="text-center mb-8 animate-[fadeIn_0.5s_ease-in-out_0.2s] opacity-0 fill-mode-forwards">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Educação Familiar
              </span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Reflexões e orientações sobre a educação familiar à luz dos temperamentos.
            </p>
          </div>

          <Card className="bg-[#121212] border-gray-800 text-white overflow-hidden flex flex-col animate-[fadeIn_0.5s_ease-in-out_0.3s] opacity-0 fill-mode-forwards">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl md:text-2xl font-serif text-[#D4AF37]">
                A Importância da Educação das Crianças Conforme seu Temperamento
              </CardTitle>
              <CardDescription className="text-gray-300">
                Compreenda como o temperamento influencia a educação dos seus filhos
              </CardDescription>
            </CardHeader>
            <div className="relative h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/2fdedce6-694d-49cb-9385-8965e3582984.png" 
                alt="Educação das crianças"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="py-4 flex-grow">
              <p className="text-gray-300 text-sm line-clamp-4">
                A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. Compreender o temperamento único de cada criança é fundamental para uma educação eficaz que respeite sua individualidade enquanto a guia no caminho das virtudes. O temperamento, sendo algo inato no indivíduo, uma "índole natural" que a natureza nos impõe, nunca desaparece inteiramente.
              </p>
              <Button 
                onClick={() => setShowFullArticle(true)}
                className="mt-4 w-full flex items-center justify-center gap-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                variant="outline"
              >
                Ler artigo completo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Full Article Modal */}
        {showFullArticle && (
          <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8">
              <div className="max-w-4xl mx-auto bg-[#121212] rounded-lg border border-gray-800 p-6 md:p-8 relative">
                <Button
                  onClick={() => setShowFullArticle(false)}
                  variant="ghost"
                  className="absolute right-4 top-4 text-gray-400 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </Button>

                <article className="prose prose-invert max-w-none">
                  <h1 className="text-2xl md:text-3xl font-serif text-[#D4AF37] mb-6">
                    A Importância da Educação das Crianças Conforme seu Temperamento
                  </h1>

                  <p className="text-gray-300 mb-6">
                    A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. Compreender o temperamento único de cada criança é fundamental para uma educação eficaz que respeite sua individualidade enquanto a guia no caminho das virtudes. O temperamento, sendo algo inato no indivíduo, uma "índole natural" que a natureza nos impõe, nunca desaparece inteiramente. No entanto, uma educação oportuna e, sobretudo, a força sobrenatural da graça podem reduzir suas estridências e moldar o caráter da criança.
                  </p>

                  <h2 className="text-xl font-serif text-[#D4AF37] mt-8 mb-4">Compreendendo os Temperamentos</h2>
                  <p className="text-gray-300 mb-4">
                    O estudo dos quatro temperamentos desempenha um papel significativo na educação dos filhos, permitindo que os pais compreendam melhor as características individuais de cada criança. Ao reconhecer o temperamento predominante, os pais podem ajustar sua abordagem educacional para atender às necessidades específicas, proporcionando um ambiente mais favorável ao desenvolvimento saudável, promovendo a autoestima, a motivação e a felicidade.
                  </p>

                  <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-400">
                    "A arte da educação é, sob muitos aspectos, a arte de adaptar-se à idade, ao temperamento, ao caráter, à capacidade, às necessidades e às justas aspirações" - Papa Pio XII
                  </blockquote>

                  <h2 className="text-xl font-serif text-[#D4AF37] mt-8 mb-4">Os Quatro Temperamentos e Estratégias Educativas</h2>

                  <h3 className="text-lg font-serif text-[#D4AF37] mt-6 mb-3">Temperamento Melancólico</h3>
                  <p className="text-gray-300 mb-4">
                    As crianças melancólicas tendem à introspecção, solidão e profundidade de pensamentos. Muitas vezes possuem habilidades analíticas, criativas e uma profunda capacidade de empatia. Como Santa Teresinha, que demonstrava características melancólicas desde pequena, preferindo "sentar-se sozinha na relva florida" com "pensamentos muito profundos".
                  </p>

                  <div className="bg-[#0a0a0a] p-4 rounded-lg mb-6">
                    <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Oferecer um ambiente acolhedor que respeite sua individualidade</li>
                      <li>Estimular seu potencial criativo e intelectual</li>
                      <li>Combater tendências ao pessimismo e perfeccionismo através das virtudes da esperança, confiança e contentamento</li>
                      <li>Encorajar a busca por conhecimento em áreas que despertem seu interesse</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-serif text-[#D4AF37] mt-6 mb-3">Temperamento Colérico</h3>
                  <p className="text-gray-300 mb-4">
                    Crianças coléricas são geralmente determinadas, enérgicas e líderes naturais, mas podem ter dificuldades com raiva, orgulho e tendência a dominar os outros. São Pio X, que "mantinha um absoluto senhorio de si e dominava os impulsos de seu ardente temperamento", demonstra como é possível transformar a energia natural em virtude através do autodomínio.
                  </p>

                  <div className="bg-[#0a0a0a] p-4 rounded-lg mb-6">
                    <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Ensinar o autocontrole e canalizar sua energia para atividades construtivas</li>
                      <li>Cultivar as virtudes da paciência, humildade e compaixão</li>
                      <li>Estabelecer limites claros, mas sem sufocar sua iniciativa</li>
                      <li>Valorizar sua liderança natural, direcionando-a para o serviço aos outros</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-serif text-[#D4AF37] mt-6 mb-3">Temperamento Sanguíneo</h3>
                  <p className="text-gray-300 mb-4">
                    As crianças sanguíneas são geralmente cheias de energia, espevitadas, centro das atenções - e por vezes das confusões. São sociáveis e adaptáveis, mas podem ter dificuldades com impulsividade e falta de autocontrole.
                  </p>

                  <div className="bg-[#0a0a0a] p-4 rounded-lg mb-6">
                    <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Desenvolver as virtudes do autocontrole e da moderação</li>
                      <li>Oferecer estrutura e consistência sem reprimir seu entusiasmo natural</li>
                      <li>Ensinar a perseverança em tarefas e compromissos</li>
                      <li>Valorizar sua sociabilidade, direcionando-a para relações saudáveis</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-serif text-[#D4AF37] mt-6 mb-3">Temperamento Fleumático</h3>
                  <p className="text-gray-300 mb-4">
                    As crianças fleumáticas tendem a ser pacíficas, dóceis e calmas, mas podem apresentar falta de ambição e tendência à complacência. São geralmente quietas, aplicadas, mas lentas para se enturmar.
                  </p>

                  <div className="bg-[#0a0a0a] p-4 rounded-lg mb-6">
                    <h4 className="text-[#D4AF37] mb-2">Como os pais podem ajudar:</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-2">
                      <li>Cultivar as virtudes da diligência e da perseverança</li>
                      <li>Incentivar a iniciativa e a expressão de opiniões e sentimentos</li>
                      <li>Respeitar seu ritmo mais lento, sem pressioná-las excessivamente</li>
                      <li>Valorizar sua capacidade de reflexão e estabilidade emocional</li>
                    </ul>
                  </div>

                  <h2 className="text-xl font-serif text-[#D4AF37] mt-8 mb-4">A Graça e a Educação dos Temperamentos</h2>
                  <p className="text-gray-300 mb-4">
                    O Papa Pio XII nos ensina que "a educação cristã da consciência está bem longe de negar a personalidade, mesmo a do jovem e da criança, e de reprimir sua iniciativa. Porque toda sã educação tende pouco a pouco a tornar obsoleto o educador e mais independente o educando, dentro de justos limites". Esta visão equilibrada reconhece tanto a autoridade dos pais quanto a necessidade de desenvolver a autonomia da criança.
                  </p>

                  <h2 className="text-xl font-serif text-[#D4AF37] mt-8 mb-4">Conclusão</h2>
                  <p className="text-gray-300 mb-4">
                    Educar os filhos conforme seu temperamento não significa apenas adaptar-se às suas inclinações naturais, mas ajudá-los a crescer em virtude, superando as fraquezas próprias de cada temperamento. Como demonstram os exemplos dos santos, é possível, através da graça e de uma educação adequada, transformar as características naturais em instrumentos de santidade.
                  </p>

                  <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-400">
                    "A verdadeira educação deve promover a formação integral da pessoa humana, em vista de seu fim último e, ao mesmo tempo, do bem comum da sociedade." - Código de Direito Canônico
                  </blockquote>
                </article>

                <Button
                  onClick={() => setShowFullArticle(false)}
                  className="mt-8 w-full bg-[#D4AF37] text-black hover:bg-[#CFB57C]"
                >
                  Fechar artigo
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliar;
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const EducacaoFamiliar = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-4 md:p-6 mt-8">
        <div className="max-w-4xl w-full space-y-8 animate-fadeIn">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold uppercase tracking-wider mb-4">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Educação Familiar
              </span>
            </h2>
          </div>

          <Card className="bg-[#121212] p-6 rounded-lg border border-gray-800 text-gray-300">
            <h1 className="text-2xl font-serif text-amber-400 mb-6 text-center">
              A Importância da Educação das Crianças Conforme seu Temperamento
            </h1>

            <img 
              src="/lovable-uploads/2fdedce6-694d-49cb-9385-8965e3582984.png" 
              alt="Educação Conforme os Temperamentos das Crianças" 
              className="rounded-lg w-full h-auto mb-8 shadow-lg"
            />

            <div className="prose prose-invert max-w-none">
              <p className="mb-6">
                A educação dos filhos representa um dos maiores desafios e responsabilidades dos pais. 
                Compreender o temperamento único de cada criança é fundamental para uma educação eficaz 
                que respeite sua individualidade enquanto a guia no caminho das virtudes. O temperamento, 
                sendo algo inato no indivíduo, uma "índole natural" que a natureza nos impõe, nunca 
                desaparece inteiramente. No entanto, uma educação oportuna e, sobretudo, a força 
                sobrenatural da graça podem reduzir suas estridências e moldar o caráter da criança.
              </p>

              <h2 className="text-xl font-serif text-amber-400 mt-8 mb-4">Compreendendo os Temperamentos</h2>
              
              <p className="mb-6">
                O estudo dos quatro temperamentos desempenha um papel significativo na educação dos filhos, 
                permitindo que os pais compreendam melhor as características individuais de cada criança. 
                Ao reconhecer o temperamento predominante, os pais podem ajustar sua abordagem educacional 
                para atender às necessidades específicas, proporcionando um ambiente mais favorável ao 
                desenvolvimento saudável, promovendo a autoestima, a motivação e a felicidade.
              </p>

              <img 
                src="/lovable-uploads/f0ebc3e9-90fb-4d0d-955c-c5d7daa737c5.png" 
                alt="Educação Cristã" 
                className="rounded-lg w-full h-auto my-8 shadow-lg"
              />

              <blockquote className="border-l-4 border-amber-400 pl-4 my-6 italic">
                Como ensina o Papa Pio XII: "A arte da educação é, sob muitos aspectos, a arte de adaptar-se 
                à idade, ao temperamento, ao caráter, à capacidade, às necessidades e às justas aspirações". 
                Esta adaptação não significa ceder a todos os caprichos da criança, mas compreender sua 
                natureza para melhor guiá-la.
              </blockquote>

              <h2 className="text-xl font-serif text-amber-400 mt-8 mb-4">Os Quatro Temperamentos e Estratégias Educativas</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-serif text-amber-400 mb-3">Temperamento Melancólico</h3>
                  <p className="mb-4">
                    As crianças melancólicas tendem à introspecção, solidão e profundidade de pensamentos. 
                    Muitas vezes possuem habilidades analíticas, criativas e uma profunda capacidade de empatia.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Oferecer um ambiente acolhedor que respeite sua individualidade</li>
                    <li>Estimular seu potencial criativo e intelectual</li>
                    <li>Combater tendências ao pessimismo e perfeccionismo</li>
                    <li>Encorajar a busca por conhecimento</li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-serif text-amber-400 mb-3">Temperamento Colérico</h3>
                  <p className="mb-4">
                    Crianças coléricas são geralmente determinadas, enérgicas e líderes naturais, mas podem 
                    ter dificuldades com raiva, orgulho e tendência a dominar os outros.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ensinar o autocontrole e canalizar sua energia</li>
                    <li>Cultivar as virtudes da paciência e humildade</li>
                    <li>Estabelecer limites claros</li>
                    <li>Valorizar sua liderança natural</li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-serif text-amber-400 mb-3">Temperamento Sanguíneo</h3>
                  <p className="mb-4">
                    As crianças sanguíneas são geralmente cheias de energia, espevitadas, centro das 
                    atenções - e por vezes das confusões.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Desenvolver as virtudes do autocontrole</li>
                    <li>Oferecer estrutura e consistência</li>
                    <li>Ensinar a perseverança em tarefas</li>
                    <li>Valorizar sua sociabilidade</li>
                  </ul>
                </div>

                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-gray-700">
                  <h3 className="text-lg font-serif text-amber-400 mb-3">Temperamento Fleumático</h3>
                  <p className="mb-4">
                    As crianças fleumáticas tendem a ser pacíficas, dóceis e calmas, mas podem apresentar 
                    falta de ambição e tendência à complacência.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cultivar as virtudes da diligência</li>
                    <li>Incentivar a iniciativa</li>
                    <li>Respeitar seu ritmo mais lento</li>
                    <li>Valorizar sua capacidade de reflexão</li>
                  </ul>
                </div>
              </div>

              <img 
                src="/lovable-uploads/646e1358-960b-4e5c-ad8d-14a8e01ee9fc.png" 
                alt="Educação Familiar Cristã" 
                className="rounded-lg w-full h-auto my-8 shadow-lg"
              />

              <h2 className="text-xl font-serif text-amber-400 mt-8 mb-4">A Graça e a Educação dos Temperamentos</h2>

              <p className="mb-6">
                O Papa Pio XII nos ensina que "a educação cristã da consciência está bem longe de negar 
                a personalidade, mesmo a do jovem e da criança, e de reprimir sua iniciativa. Porque toda 
                sã educação tende pouco a pouco a tornar obsoleto o educador e mais independente o educando, 
                dentro de justos limites".
              </p>

              <div className="bg-[#0a0a0a] p-6 rounded-lg border border-gray-700 my-8">
                <h2 className="text-xl font-serif text-amber-400 mb-4">Conclusão</h2>
                <p>
                  Educar os filhos conforme seu temperamento não significa apenas adaptar-se às suas 
                  inclinações naturais, mas ajudá-los a crescer em virtude, superando as fraquezas próprias 
                  de cada temperamento. Como demonstram os exemplos dos santos, é possível, através da graça 
                  e de uma educação adequada, transformar as características naturais em instrumentos de santidade.
                </p>
              </div>

              <div className="text-sm text-gray-400 border-t border-gray-700 pt-6 mt-8">
                <h3 className="text-amber-400 mb-2">Referências:</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <li key={num} className="text-xs">
                      [{num}] Fonte {num}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliar;
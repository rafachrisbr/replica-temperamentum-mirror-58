import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const EducacaoFamiliarFamilia = () => {
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
              A Importância da Família na Sociedade e no Plano de Deus
            </h1>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Família: Primeira Instituição e Base da Sociedade</h2>
              <p className="mb-4">
                A família é a instituição social mais antiga da humanidade, fundamento de toda sociedade. Desde as origens, a família foi pensada por Deus como o primeiro ambiente de comunhão, proteção, educação e transmissão de valores:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Não é bom que o homem esteja só. Vou fazer para ele uma auxiliar que lhe seja semelhante." (Gênesis 2,18)
                <br />
                <span className="text-sm">
                  "Non est bonum esse hominem solum; faciamus ei adiutricem similem sibi." (Genesis 2,18)
                </span>
              </blockquote>

              <p className="mb-4">
                No plano divino, a família nasce da união entre homem e mulher, tornando-se "uma só carne" (Gênesis 2,24). Essa união é querida por Deus, sendo a célula vital da vida social e o primeiro lugar onde o ser humano aprende o que é bom, justo e verdadeiro.
              </p>

              <p className="mb-4">
                Importante lembrar que os pais não são escolhidos por nós — nascemos deles. Por isso, a família é uma instituição divina, um dom e uma missão que nos precede e nos forma. Já amigos, colegas, esposos e esposas são relações que escolhemos, construídas na liberdade e na reciprocidade.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/familia1.jpg" 
                  alt="Família Católica" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Família: O Primeiro Sacramento de Deus</h2>
              <p className="mb-4">
                Antes mesmo dos sacramentos da Igreja, a família já era sinal visível do amor de Deus. O matrimônio, elevado por Cristo à dignidade de sacramento, faz da família um reflexo do amor de Cristo por sua Igreja (Efésios 5,31-32).
              </p>
              <p className="mb-4">
                A família, portanto, é o "primeiro sacramento" no sentido de ser o sinal primordial do amor, da fidelidade e da aliança de Deus com a humanidade.
              </p>

              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Família: Instituição Divina</h3>
              <p className="mb-4">
                A família não é criação humana, mas divina. Deus a instituiu como lugar de vida, de bênção, de crescimento e de santidade.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Ide e multiplicai-vos" (Gênesis 1,28)
                <br />
                <span className="text-sm">
                  "Crescite et multiplicamini" (Genesis 1,28)
                </span>
              </blockquote>

              <p className="mb-4">
                Deus confiou à família a missão de gerar, educar e formar novas gerações, transmitindo a fé, os valores e o compromisso com o bem.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/familiaCatolica.jpg" 
                  alt="Família Unida" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Função do Pai</h2>
              <p className="mb-4">
                O pai é chamado a ser imagem do próprio Deus Pai: protetor, provedor, educador e guia espiritual. Seu papel é insubstituível, transmitindo segurança, limites, ensinando a fé e dando exemplo de coragem, retidão e amor.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "O pai deve educar os filhos, não apenas gerá-los e alimentá-los. O pai deve ocupar o posto central no processo educativo." (Pe. José Kentenich)
              </blockquote>

              <p className="mb-4">
                A presença amorosa do pai ajuda os filhos a compreenderem o amor do Pai Celestial.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Função da Mãe e a Submissão Respeitosa</h2>
              <p className="mb-4">
                A mulher é chamada a ser submissa ao homem, assim como o homem é submisso a Deus. Essa submissão, porém, não é sinal de inferioridade, mas de respeito transcendente e complementaridade harmoniosa, baseada no amor e na ordem divina.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Vós, mulheres, sujeitai-vos a vossos maridos, como convém no Senhor." (Efésios 5,22)
                <br />
                <span className="text-sm">
                  "Mulieres, subditae estote viris vestris, sicut oportet in Domino." (Ephesios 5,22)
                </span>
              </blockquote>

              <p className="mb-4">
                A mãe é a grande defensora da vida, desde a concepção até a maturidade dos filhos. Ela é a primeira educadora, formando o coração e o caráter dos filhos para Deus e para a sociedade.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Deus quis honrar os pais pelos filhos e, cuidadosamente, fortaleceu a autoridade da mãe sobre eles." (Eclesiástico 3,3)
              </blockquote>

              <p className="mb-4">
                Com paciência e amor, a mãe molda as virtudes dos filhos e é exemplo de doação e ternura.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Função dos Filhos</h2>
              <p className="mb-4">
                Os filhos são chamados a honrar, obedecer e amar seus pais (Efésios 6,1; Provérbios 13,1). Eles são fruto do amor dos pais e devem retribuir com respeito, cuidado e gratidão. A vida familiar é uma escola de virtudes, onde os filhos aprendem a ser trabalhadores, justos e generosos.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/familia2.jpg" 
                  alt="Educação Familiar" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Exemplos de Famílias Santas</h2>
              <p className="mb-4">
                A história da Igreja está repleta de famílias que viveram a santidade no cotidiano, tornando-se exemplos para todos:
              </p>

              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li><strong>Sagrada Família (Jesus, Maria e José):</strong> Modelo perfeito de amor, oração, obediência e humildade.</li>
                <li><strong>Santa Ana e São Joaquim:</strong> Avós de Jesus, pais de Maria, exemplos de fé e perseverança.</li>
                <li><strong>Santa Mônica e Santo Agostinho:</strong> Mãe perseverante na oração e filho convertido, testemunho de esperança e fé.</li>
                <li><strong>São Luís e Santa Zélia Martin:</strong> Pais de Santa Teresinha do Menino Jesus, viveram o matrimônio como caminho de santidade, educando os filhos na fé.</li>
                <li><strong>São Gregório e Santa Nonna:</strong> Pais de três santos, exemplo de educação cristã e oração perseverante.</li>
                <li><strong>Santa Gianna Beretta Molla:</strong> Mãe e médica, deu a vida pelo filho, testemunho de amor sacrificial.</li>
              </ul>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão</h2>
              <p className="mb-4">
                A família é o primeiro lugar onde se aprende a amar, a servir, a rezar e a ser feliz. É escola de virtudes, porto seguro e base da sociedade.
                Cuidar da família é cuidar do futuro da humanidade.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Sem famílias fortes na comunhão e estáveis no compromisso, os povos se enfraquecem." (Catecismo da Igreja Católica, n. 2224)
              </blockquote>

              <p className="mb-4">
                Que as famílias cristãs sejam fiéis ao seu chamado divino, inspiradas pelo exemplo dos santos, e sejam luz para o mundo!
              </p>
            </section>

            <div className="my-8 text-center">
              <p className="text-[#D4AF37] italic">Vulnerasti cor meum verbo tuo</p>
              <p className="text-gray-300">Feriste o meu coração com a Tua palavra</p>
            </div>
          </article>

          <div className="flex justify-center mt-12">
            <Link to="/educacao-familiar">
              <Button variant="outline" className="border-gray-700 text-[#D4AF37] hover:bg-gray-900">
                <ChevronLeft size={16} className="mr-2" />
                Voltar para Educação Familiar
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EducacaoFamiliarFamilia;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const MeditacaoVocacao = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex flex-col items-center p-6 pt-12">
        <div className="max-w-3xl w-full space-y-8">
          <Link to="/meditacoes">
            <Button variant="outline" className="mb-6 border-gray-700 text-[#D4AF37] hover:bg-gray-900">
              <ChevronLeft size={16} className="mr-2" />
              Voltar para Meditações
            </Button>
          </Link>

          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-serif text-[#D4AF37] text-center mb-6">
              A Vocação à Santidade
            </h1>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Introdução</h2>
              <p className="mb-4">
                A vocação à santidade é o chamado mais profundo e universal dirigido por Deus a cada pessoa. 
                Não é privilégio de poucos, mas destino de todos os batizados:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Sede vós, pois, perfeitos, como também vosso Pai celeste é perfeito."
                <br />
                <span className="text-sm">
                  "Estote ergo vos perfecti, sicut et Pater vester caelestis perfectus est." (Mt 5,48)
                </span>
              </blockquote>

              <p className="mb-4">
                Inspirados por Santo Afonso Maria de Ligório, recordamos que, diante de todas as ocupações 
                e preocupações da vida, "só uma coisa é necessária" (cf. Lc 10,42): amar a Jesus Cristo de 
                todo o coração e buscar, acima de tudo, a união com Ele.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/vocatio2.png" 
                  alt="A Vocação à Santidade" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Fundamento Bíblico da Santidade</h2>
              <p className="mb-4">
                Desde o Antigo Testamento, Deus convida seu povo à santidade:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Sede santos, porque eu, o Senhor vosso Deus, sou santo."
                <br />
                <span className="text-sm">
                  "Sancti estote, quoniam ego sanctus sum Dominus Deus vester." (Lv 19,2)
                </span>
              </blockquote>

              <p className="mb-4">
                São Paulo reforça:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Deus não nos chamou para a impureza, mas para a santidade."
                <br />
                <span className="text-sm">
                  "Non enim vocavit nos Deus in immunditiam, sed in sanctificationem." (1Ts 4,7)
                </span>
              </blockquote>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Santidade como Chamado Universal</h2>
              <p className="mb-4">
                O chamado à santidade não é reservado apenas aos religiosos, sacerdotes ou consagrados, 
                mas a todo cristão, em qualquer estado de vida.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/Santo-Afonso-Maria-de-Ligório.jpeg" 
                  alt="Santo Afonso Maria de Ligório" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <p className="mb-4">
                Santo Afonso Maria de Ligório, em A Prática do Amor a Jesus Cristo, ensina que a vida moral 
                e a santidade partem do amor prático a Jesus:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A vida moral parte de um ponto fundamental: o amor a Jesus Cristo. Ou seja, a partir do 
                momento que a pessoa ama a Jesus Cristo e faz obras de amor a Ele, logo a sua prática moral 
                condiz com tal amor."
              </blockquote>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Os Santos: Testemunhas e Mestres da Santidade</h2>
              <p className="mb-4">
                Os santos são exemplos vivos de que a santidade é possível em todas as condições: pais e mães 
                de família (como São Luís e Santa Zélia Martin), jovens (como Santa Maria Goretti), sacerdotes 
                (como São João Maria Vianney), religiosos (como Santa Teresa de Ávila), leigos e consagrados.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/mariaGoretti.jpeg" 
                  alt="Santa Maria Goretti" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Prática da Santidade no Cotidiano</h2>
              <p className="mb-4">
                Santo Afonso, em A Prática do Amor a Jesus Cristo, mostra que a santidade não é coisa 
                extraordinária, mas fidelidade no ordinário.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/santidadeTrabalho.jpg" 
                  alt="Santidade no trabalho cotidiano" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/maoTerço.jpg" 
                  alt="Oração do terço" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão e Exortação</h2>
              <p className="mb-4">
                A vocação à santidade é dom e tarefa. Deus nos chama, e Sua graça nos capacita e sustenta, 
                mas espera nossa resposta livre e amorosa.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/SantoAfonso.png" 
                  alt="Santo Afonso Maria de Ligório" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <div className="my-8 text-center">
                <p className="text-[#D4AF37] italic">Vulnerasti cor meum verbo tuo</p>
                <p className="text-gray-300">Feriste o meu coração com a Tua palavra</p>
              </div>
            </section>

            <div className="flex justify-center mt-12">
              <Link to="/meditacoes">
                <Button variant="outline" className="border-gray-700 text-[#D4AF37] hover:bg-gray-900">
                  <ChevronLeft size={16} className="mr-2" />
                  Voltar para Meditações
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

export default MeditacaoVocacao;
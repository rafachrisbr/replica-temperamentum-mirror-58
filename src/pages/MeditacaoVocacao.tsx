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

            <div className="my-8 flex flex-col items-center">
              <img 
                src="/lovable-uploads/vocatio2.png" 
                alt="A Vocação à Santidade" 
                className="rounded-lg max-h-[400px] object-contain shadow-md"
              />
            </div>

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
              <p className="mb-4">
                Assim, a santidade não é um ideal distante, mas a meta concreta e essencial de todo cristão, 
                realizada no amor prático e fiel a Nosso Senhor.
              </p>
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

              <p className="mb-4">São Paulo reforça:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Deus não nos chamou para a impureza, mas para a santidade."
                <br />
                <span className="text-sm">
                  "Non enim vocavit nos Deus in immunditiam, sed in sanctificationem." (1Ts 4,7)
                </span>
              </blockquote>

              <p className="mb-4">E ainda:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Que nos salvou e chamou com uma santa vocação; não segundo as nossas obras, mas segundo o seu próprio propósito e graça que nos foi dada em Cristo Jesus, antes dos tempos dos séculos."
                <br />
                <span className="text-sm">
                  "Qui nos liberavit et vocavit vocatione sancta, non secundum opera nostra, sed secundum propositum suum et gratiam, quae data est nobis in Christo Iesu ante tempora saecularia." (2Tm 1,9)
                </span>
              </blockquote>

              <p className="mb-4">
                A santidade, portanto, é resposta ao chamado de Deus, que deseja fazer de cada um de nós reflexo de Sua própria vida.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

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
                Santo Afonso Maria de Ligório, em <em>A Prática do Amor a Jesus Cristo</em>, ensina que a vida moral 
                e a santidade partem do amor prático a Jesus:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A vida moral parte de um ponto fundamental: o amor a Jesus Cristo. Ou seja, a partir do 
                momento que a pessoa ama a Jesus Cristo e faz obras de amor a Ele, logo a sua prática moral 
                condiz com tal amor."
              </blockquote>

              <p className="mb-4">
                A santidade se constrói na vida cotidiana, nas pequenas ações feitas por amor a Deus e ao próximo. 
                O Evangelho é a lei maior:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Amai-vos uns aos outros, como eu vos amei."
                <br />
                <span className="text-sm">
                  "Mandatum novum do vobis: ut diligatis invicem, sicut dilexi vos." (Jo 13,34)
                </span>
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Ensinos do Magistério e dos Papas</h2>
              <p className="mb-4">
                Pio XII, na encíclica <em>Mystici Corporis Christi</em> (1943), afirma:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A santidade da Igreja é manifestada em todos os estados de vida, em todos os povos e tempos, 
                e consiste na união vital com Cristo, Cabeça do Corpo Místico."
              </blockquote>

              <p className="mb-4">
                O Papa Leão XIII, em <em>Divinum Illud Munus</em> (1897), ensina que o Espírito Santo é o grande 
                santificador das almas, e que todos os fiéis são chamados a cooperar com a graça para crescer em santidade.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

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

              <p className="mb-4">
                Santo Afonso de Ligório ensina que a tibieza (indiferença nas coisas de Deus) é contrária à santidade:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Aquele que segue a Cristo deve sempre estar do lado dos menos favorecidos, dos esquecidos, 
                ao ponto de amar a Jesus Cristo nestas pessoas. Pela moral, quando amamos o outro, estamos 
                buscando formas de ajudá-lo."
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Prática da Santidade no Cotidiano</h2>
              <p className="mb-4">
                Santo Afonso, em <em>A Prática do Amor a Jesus Cristo</em>, mostra que a santidade não é coisa 
                extraordinária, mas fidelidade no ordinário. Para trilhar este caminho, alguns meios são essenciais:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Amar a Deus sobre todas as coisas.</li>
                <li>Cumprir os deveres de estado com retidão.</li>
                <li>Praticar a caridade com o próximo.</li>
              </ul>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/santidadeTrabalho.jpg" 
                  alt="Santidade no trabalho cotidiano" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Buscar a oração constante e aprofundada: não apenas a oração vocal, mas também a meditação das verdades da fé (oração mental), a leitura orante da Palavra (Lectio Divina) e o colóquio íntimo com Deus.</li>
              </ul>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/maoTerço.jpg" 
                  alt="Oração do terço" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>A recepção frequente dos sacramentos: especialmente a Eucaristia, alimento da alma e penhor da glória futura, sacramento central que nos une vitalmente a Cristo, e o sacramento da Reconciliação, que nos purifica, restaura a graça e nos fortalece na luta contra o pecado.</li>
                <li>O cultivo das virtudes teologais (fé, esperança, caridade) e cardeais (prudência, justiça, fortaleza, temperança), que são o alicerce de uma vida cristã madura.</li>
                <li>Uma sadia ascese e mortificação cristã, que implica a luta contra o pecado e as más inclinações, e a oferta de pequenos sacrifícios cotidianos por amor, unindo-os à Paixão de Cristo para a nossa purificação e para o bem da Igreja.</li>
              </ul>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A vida moral é, em si, a vida prática do cristão, que cotidianamente coloca o Evangelho em prática, 
                mostrando ao mundo, por meio de ações e palavras, que o amor a Jesus é, também, o amor aos irmãos e às irmãs."
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Discernimento e Resposta ao Chamado</h2>
              <p className="mb-4">
                Discernir a vocação exige oração, reta intenção e disposição de servir melhor ao Senhor. 
                O chamado à santidade pode se dar no matrimônio, no sacerdócio, na vida religiosa ou leiga, 
                mas sempre como resposta de amor e serviço.
              </p>

              <p className="mb-4">Como ensina São Paulo:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis o vosso corpo em sacrifício vivo, 
                santo e agradável a Deus, que é o vosso culto racional."
                <br />
                <span className="text-sm">
                  "Obsecro itaque vos fratres per misericordiam Dei, ut exhibeatis corpora vestra hostiam viventem, 
                  sanctam, Deo placentem, rationabile obsequium vestrum." (Rm 12,1)
                </span>
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão e Exortação</h2>
              <p className="mb-4">
                A vocação à santidade é dom e tarefa. Deus nos chama, e Sua graça nos capacita e sustenta, 
                mas espera nossa resposta livre e amorosa. Lembremo-nos que, como ensina Jesus, "sem mim, nada podeis fazer" (Jo 15,5), 
                sublinhando a primazia da graça divina neste caminho.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Em Cristo Ele nos escolheu…para sermos santos e irrepreensíveis diante dele no amor. 
                Ele nos predestinou para sermos seus filhos adotivos por Jesus Cristo."
                <br />
                <span className="text-sm">
                  "Sicut elegit nos in ipso ante mundi constitutionem, ut essemus sancti et immaculati in conspectu eius in caritate; 
                  qui praedestinavit nos in adoptionem filiorum per Iesum Christum in ipsum." (Ef 1,4-5)
                </span>
              </blockquote>

              <p className="mb-4">
                Que, inspirados pelo exemplo dos santos, pela intercessão da Virgem Maria, Mãe e modelo de toda santidade, 
                pela doutrina da Igreja e pelo amor a Jesus Cristo, possamos responder com generosidade ao chamado à santidade, 
                vivendo cada dia para a glória de Deus e a salvação das almas.
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

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Fontes:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-300">
                <li>Santo Afonso Maria de Ligório, <em>A Prática do Amor a Jesus Cristo</em></li>
                <li>Sagrada Escritura (citações em latim e português)</li>
                <li>Pio XII, <em>Mystici Corporis Christi</em></li>
                <li>Leão XIII, <em>Divinum Illud Munus</em></li>
                <li>Diocese de Guarulhos, "Fomos chamados à santidade"</li>
              </ul>
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

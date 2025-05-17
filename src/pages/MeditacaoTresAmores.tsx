
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const MeditacaoTresAmores = () => {
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
              Meditação sobre os Três Amores: Eros, Philia e Ágape – Da Paixão à União Divina
            </h1>

            <p className="text-lg mb-8 text-gray-200">
              A experiência humana se manifesta em diversas dimensões de amor. Ao refletirmos sobre o Eros, a Philia e o Ágape, 
              somos conduzidos a compreender como cada forma – da paixão intensa à amizade verdadeira e ao amor incondicional – nos guia 
              rumo à união com o Divino e ao aperfeiçoamento de nossas relações.
            </p>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">1. Eros: Da Paixão Terrena à Aspiração Mística</h2>
              <p className="mb-4">
                O Eros representa o amor que se manifesta na atração intensa, muitas vezes de caráter físico, passional e romântico, 
                conforme explorado pelos filósofos gregos que o viam como a força impulsionadora que leva o ser humano a buscar a beleza e 
                a união íntima com o outro. Em obras clássicas como O Banquete de Platão, o Eros é celebrado como o desejo de conexão – 
                seja na paixão entre amantes ou na admiração pela beleza ideal – revelando um impulso vital. Na tradição cristã, contudo, 
                esse mesmo desejo foi reinterpretado. Santo Agostinho, em suas Confissões, lembra-nos que o coração humano é inquieto até 
                encontrar repouso em Deus. Ele expressa essa ideia ao afirmar: "Tu nos fizeste para Ti, e inquieto está nosso coração até que descanse 
                em Ti" – <em className="italic">"Tu nos fecisti ad Te, et in Te requiescit cor nostrum"</em> – enfatizando que o anseio originário do Eros 
                se transforma, quando ofertado a Deus, em um desejo místico pela união com o Divino. Da mesma forma, São Bernardo de Claraval 
                ensina que "o amor verdadeiro, purificado da paixão carnal, eleva-se à contemplação divina" – <em className="italic">"amor verus ex 
                carnis passione, purgatus, ad contemplationem divinam tollitur"</em>, indicando que a paixão terrena, redimida pelo amor divino, 
                direciona a alma para uma intimidade que transcende o mero desejo carnal – estendendo-se tanto às relações amorosas entre 
                casais quanto à busca interior pela perfeição divina.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/b6a095d5-b87b-4afe-a8a1-8d78579e7ac5.png" 
                  alt="São Bernardo de Claraval" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  São Bernardo de Claraval - Aparição da Virgem a São Bernardo (Filippino Lippi)
                </p>
              </div>

              <p className="mb-4">
                O Cântico dos Cânticos nos oferece uma bela expressão bíblica deste amor apaixonado que se torna metáfora do amor entre Deus e 
                seu povo: "Põe-me como um selo sobre o teu coração, como um selo sobre o teu braço, porque o amor é forte como a morte" (Ct 8,6). 
                Esta passagem ilustra como o amor conjugal, em sua intensidade, pode refletir o amor divino quando purificado e elevado pela graça.
                Na encíclica Deus Caritas Est, o Papa Bento XVI aborda precisamente esta transformação do Eros: "O amor promete infinidade, eternidade 
                – uma realidade maior e totalmente diferente da nossa existência cotidiana. [...] O Eros necessita de disciplina, de purificação 
                para dar ao homem não o prazer de um instante, mas uma certa amostra do vértice da existência, daquela beatitude para a qual tende todo o nosso ser."
                Assim, o Eros cristão não é negado, mas redimido e elevado à sua verdadeira dignidade.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">2. Philia: O Amor da Amizade e do Companheirismo</h2>
              <p className="mb-4">
                A Philia é o amor que nasce da amizade verdadeira, alicerçado na lealdade, no respeito mútuo e na reciprocidade. Inspirada pelos 
                ensinamentos de Aristóteles na Ética a Nicômaco, ela se expressa entre aqueles que compartilham virtudes e objetivos comuns, 
                fortalecendo os laços interpessoais por meio de um sentimento de igualdade e compromisso. Na reflexão cristã, a Philia é 
                compreendida como complemento à caridade ordenada pelo amor a Deus; de modo que os vínculos de amizade se convertem 
                em reflexos da comunhão espiritual. Amar o próximo, conforme nos ensina a Escritura (Mateus 22:39, <em className="italic">Dilige proximum 
                tuum sicut teipsum</em>), implica cultivar relações sinceras, onde a confiança e o apoio mútuo são essenciais para a construção 
                de uma comunidade verdadeiramente fraterna. São Tomás de Aquino ressalta que "a amizade verdadeira não deseja somente benefícios 
                temporais, mas também a salvação eterna" – <em className="italic">"amicitia vera non solum bonum temporale, sed etiam salutem aeternam 
                optat"</em>, fazendo com que a philia se torne um elo duradouro que reflete a luz divina na convivência humana. 
                O próprio Cristo elevou a Philia a um novo patamar quando disse aos seus discípulos: "Já não vos chamo servos, porque o servo não 
                sabe o que faz o seu senhor; mas chamei-vos amigos, porque tudo quanto ouvi de meu Pai vos dei a conhecer" (Jo 15,15). 
                Esta amizade divina se manifesta na comunhão eclesial, onde os fiéis são chamados a viver como irmãos e irmãs em Cristo.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/f0ebc3e9-90fb-4d0d-955c-c5d7daa737c5.png" 
                  alt="Santa Teresa de Ávila" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  Santa Teresa de Ávila (1630) - Pintor Barroco
                </p>
              </div>

              <p className="mb-4">
                Santa Teresa de Ávila, em sua vida e escritos, exemplifica magnificamente a Philia cristã. Ela cultivava amizades profundas, 
                tanto com religiosos quanto com leigos, sempre orientadas para o crescimento espiritual mútuo. Em seu "Caminho de Perfeição", 
                ela escreve sobre a importância das amizades santas: "É grande bem, para quem serve a Deus, ter amizade com quem faz o mesmo, 
                pois se ajudam mutuamente." Estas amizades, longe de serem exclusivistas, abrem-se à comunidade e ao serviço do Reino.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">3. Ágape: O Amor Incondicional e Transformador</h2>
              <p className="mb-4">
                O Ágape é o amor que se doa sem reservas, exalando compaixão e misericórdia. Este amor incondicional transcende os sentimentos pessoais, 
                manifestando-se em gestos concretos de solidariedade e cuidado para com o outro. Na teologia cristã, o Ágape é compreendido como a 
                expressão máxima do amor divino, aquele que motiva a criação e a redenção, e que nos chama a imitar o exemplo de Cristo. Assim, 
                ao praticarmos o Ágape, transformamos nossas relações e edificamos uma comunidade pautada pela generosidade e pelo serviço ao próximo, 
                permitindo que o amor de Deus se faça presente de forma visível e transformadora. Nesse sentido, São Tomás de Aquino ensina que 
                "o amor divino é o fundamento da criação e da redenção" – <em className="italic">"amor divinum est fundamentum creationis et redemptionis"</em>, 
                destacando que o amor divino é a base de toda a criação e redenção, e que, ao vivenciarmos o Ágape, nos aproximamos da essência 
                de Cristo, que se revelou em atos de misericórdia e compaixão. O Ágape encontra sua expressão mais sublime na Cruz, onde Cristo 
                entrega sua vida pela humanidade: "Ninguém tem maior amor do que aquele que dá a vida pelos seus amigos" (Jo 15,13). Este amor 
                sacrificial é o modelo para todo cristão, como nos lembra São Paulo: "Andai em amor, como também Cristo vos amou e se entregou 
                a si mesmo por nós, como oferta e sacrifício a Deus, em aroma suave" (Ef 5,2).
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/646e1358-960b-4e5c-ad8d-14a8e01ee9fc.png" 
                  alt="São Maximiliano Maria Kolbe" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  São Maximiliano Maria Kolbe
                </p>
              </div>

              <p className="mb-4">
                São Maximiliano Kolbe, que ofereceu sua vida em substituição a um pai de família no campo de concentração de Auschwitz, é um exemplo moderno e 
                comovente do Ágape cristão levado às últimas consequências. Sua entrega total, reflexo do amor de Cristo, demonstra como o Ágape transforma 
                não apenas quem o pratica, mas também aqueles que o testemunham. São Pio X, na Carta Apostólica Notre Charge Apostolique, nos ensina sobre a 
                verdadeira natureza deste amor: "A doutrina católica nos ensina que o primeiro dever da caridade não está na tolerância das convicções errôneas, 
                por sinceras que sejam, nem na indiferença teórica e prática pelo erro ou pelo vício em que vemos mergulhados nossos irmãos, mas no zelo pela sua 
                restauração intelectual e moral, não menos que por seu bem estar material. Esta mesma doutrina católica nos ensina também que a fonte do amor do 
                próximo se acha no amor de Deus, Pai comum e fim comum de toda a família humana, e no amor de Jesus Cristo, do qual somos membros a tal ponto que 
                consolar um infeliz é fazer o bem ao próprio Jesus Cristo."
              </p>

              <p className="mb-4">
                Este amor se concretiza nas obras de misericórdia, tanto corporais quanto espirituais, que a Igreja sempre promoveu como expressão concreta do Ágape. 
                Na Confissão, experimentamos o Ágape divino como misericórdia que restaura e renova nossa alma. Este sacramento, definido pelo Concílio de Trento, 
                manifesta o amor divino através do perdão dos pecados. Quando o sacerdote pronuncia a fórmula da absolvição: "Eu te absolvo dos teus pecados, em nome 
                do Pai e do Filho e do Espírito Santo" – <em className="italic">"Ego te absolvo a peccatis tuis, in nomine Patris, et Filii, et Spiritus Sancti"</em>, o próprio 
                Cristo, por meio de seu ministro, derrama sobre nós o amor misericordioso que flui de seu sacrifício na Cruz. Este amor purificador não apenas 
                remove a mancha do pecado, mas também restaura a dignidade do filho de Deus, permitindo-nos participar novamente da vida divina. Assim, a Confissão 
                torna-se um encontro privilegiado com o Ágape divino, que nos capacita a sermos, por nossa vez, instrumentos de misericórdia para os outros.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão: A Integração dos Três Amores na Jornada da Vida</h2>
              
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/1633b334-1fa7-4520-b9c9-31d93e65a940.png" 
                  alt="Jesus e Maria - Sagrado Coração" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
              
              <p className="mb-4">
                Ao transformar o ardor do Eros em um anseio místico e ao cultivar a Philia como expressão de virtude e igualdade, passamos a viver o Ágape em sua plenitude. 
                Essa integração propõe uma vida em que o desejo humano, redimido e elevado, se converte no reflexo da bondade divina, nos levando, passo a passo, 
                a uma união mais profunda com o Criador e entre nós mesmos. Esta integração dos três amores encontra sua expressão mais perfeita no sacramento do 
                Matrimônio, onde os esposos são chamados a viver o Eros purificado pela graça, a Philia como amizade verdadeira e o Ágape como doação mútua e abertura 
                à vida. Como ensina São João Paulo II na Familiaris Consortio: "O amor conjugal atinge aquela plenitude a que está ordenado interiormente, a caridade 
                conjugal, que é o modo próprio e específico com que os esposos participam e são chamados a viver a mesma caridade de Cristo que se doa na Cruz."
              </p>

              <p className="mb-4">
                Para vivenciar estes três amores no cotidiano cristão, podemos:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Purificar nossos desejos através da oração e dos sacramentos, transformando o Eros em busca autêntica de Deus e do bem do outro.</li>
                <li>Cultivar amizades santas que nos ajudem a crescer na virtude e no serviço, compartilhando a fé e apoiando-nos mutuamente no caminho da santidade.</li>
                <li>Praticar obras de misericórdia concretas, saindo de nós mesmos para ir ao encontro dos necessitados, como expressão do Ágape que recebemos de Deus.</li>
                <li>Participar ativamente da vida sacramental, especialmente da Eucaristia, fonte e ápice de todo amor cristão.</li>
                <li>Meditar nas Escrituras para compreender e imitar o amor de Deus revelado em Jesus Cristo.</li>
              </ul>

              <p className="mb-4">
                Que essa meditação nos inspire a buscar uma transformação interior, onde cada chama do Eros se purifica, cada laço da Philia se fortalece 
                e cada ato de amor incondicional anuncie – viva e verdadeiramente – a presença do Reino de Deus entre nós.
              </p>

              <div className="my-8 text-center">
                <p className="text-[#D4AF37] italic">Vulnerasti cor meum verbo tuo</p>
                <p className="text-gray-300">Feriste o meu coração com a Tua palavra</p>
              </div>

              <div className="my-8 flex justify-center">
                <img 
                  src="/lovable-uploads/054d66e5-7c42-41eb-b1d2-5cc36e20c7a0.png" 
                  alt="Pessoa escrevendo" 
                  className="rounded-lg max-h-[300px] object-contain shadow-md"
                />
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

export default MeditacaoTresAmores;

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const MeditacaoJoao = () => {
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
              Meditação sobre São João Evangelista: O Discípulo Amado e a Profundidade do Temperamento Melancólico
            </h1>

            <p className="text-lg mb-8 text-gray-200">
              Esta meditação busca explorar a figura singular de São João Evangelista, o discípulo a quem Jesus amava, sob a perspectiva de seu temperamento melancólico. 
              Através da análise de passagens bíblicas e da reflexão sobre suas características – sensibilidade, intensidade e profundidade – 
              procuraremos compreender como essa natureza particular moldou sua relação única com o Mestre e influenciou sua jornada espiritual.
              A identificação com João, especialmente para aqueles que compartilham traços melancólicos, pode oferecer um caminho de autoconhecimento e uma apreciação mais profunda do chamado ao amor e à caridade, tão centrais em seus escritos e em sua vida.
            </p>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                O Temperamento Melancólico de João: Sensibilidade, Intensidade e Profundidade
              </h2>
              <p className="mb-4">
                O temperamento melancólico, frequentemente associado a uma rica vida interior, uma percepção aguçada das realidades espirituais e uma capacidade de sentir e amar com grande intensidade, parece encontrar um eco profundo na figura de São João Evangelista.
              </p>
              <p className="mb-4">
                Sua sensibilidade é palpável nos momentos de intimidade com Jesus, como na Última Ceia, onde, reclinado sobre o peito do Senhor, demonstra uma necessidade de proximidade e um carinho que transcendem a simples camaradagem.
                Essa mesma sensibilidade o torna receptivo aos mistérios divinos, permitindo-lhe captar nuances da mensagem de Cristo que talvez passassem despercebidas a outros.
              </p>
              <p className="mb-4">
                A intensidade de suas emoções se manifesta não apenas no amor devotado a Jesus, mas também na sua fidelidade inabalável, permanecendo ao pé da cruz em um momento de desolação e abandono quase universal.
              </p>
              <p className="mb-4">
                A profundidade de seu ser se reflete em seus escritos, especialmente no Evangelho que leva seu nome e no livro do Apocalipse, obras que mergulham nos mistérios da Palavra Encarnada e na consumação dos tempos com uma visão teológica e espiritual de rara penetração.
              </p>
              <p className="mb-4">
                Jesus, conhecendo intimamente a alma de cada um de seus discípulos, certamente percebia essa riqueza interior em João, o que pode ter contribuído para o laço especial que os unia, um laço que o próprio João descreve ao se referir a si mesmo como "o discípulo a quem Jesus amava" (Jo 13:23, <em className="italic">discipulus ille, quem diligebat Iesus</em>).
              </p>
              <p className="mb-4">
                Este amor não era exclusivo, mas certamente reconhecia e valorizava a singularidade da alma melancólica de João, capaz de um amor profundo, leal e contemplativo.
              </p>
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/db06a5d2-ea79-4aa8-9b42-3ec6df3a8830.png" 
                  alt="João Evangelista contemplando" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md" 
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  João Evangelista contemplando
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                A Intimidade na Última Ceia: Confidência e Fidelidade
              </h2>
              <p className="mb-4">
                A Última Ceia, um dos momentos mais sagrados e carregados de significado nos Evangelhos, revela de forma tocante a profundidade da relação entre Jesus e João.
                É neste cenário de despedida e instituição da Eucaristia que a sensibilidade de João se manifesta de maneira singular.
              </p>
              <p className="mb-4">
                O Evangelho narra que "um de seus discípulos, a quem Jesus amava, estava reclinado no seio de Jesus" (Jo 13:23, <em className="italic">unus ex discipulis eius, quem diligebat Iesus, recumbens in sinu Iesu</em>).
                Esta postura não é apenas de proximidade física, mas simboliza uma união de corações, uma confiança mútua que permitia a João um acesso privilegiado aos sentimentos mais íntimos do Mestre.
              </p>
              <p className="mb-4">
                Foi a Pedro que, desejando saber quem era o traidor, fez sinal a João para que o perguntasse a Jesus. E João, "reclinando-se ele sobre o peito de Jesus, disse-lhe: Senhor, quem é?" (Jo 13:25, <em className="italic">Cum ergo recubuisset ille supra pectus Iesu, dicit ei: Domine, quis est?</em>).
                Jesus confia-lhe, ainda que de forma velada, a identidade daquele que o entregaria.
              </p>
              <p className="mb-4">
                Esta confidência, feita em um momento de angústia e solenidade, sublinha a fidelidade e a capacidade de João para guardar os segredos do coração de Cristo, características que podem ser vistas como manifestações de um temperamento melancólico, inclinado à lealdade profunda e à compreensão intuitiva das dores alheias.
              </p>
              <p className="mb-4">
                A sua capacidade de estar presente, de sentir com o outro, de partilhar da tristeza do Mestre, revela uma alma compassiva e profundamente conectada.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                Ao Pé da Cruz: A Força da Lealdade e o Dom de Maria
              </h2>
              <p className="mb-4">
                A cena da crucificação é, talvez, o testemunho mais eloquente da fidelidade e da força interior de São João Evangelista.
                Enquanto muitos discípulos, tomados pelo medo e pela desilusão, se dispersaram, João permaneceu firme ao pé da cruz, junto a Maria, a Mãe de Jesus, e outras poucas mulheres.
              </p>
              <p className="mb-4">
                Sua presença ali não era um ato de bravura impulsiva, mas de uma lealdade nascida do amor profundo e da compaixão que caracterizam sua alma sensível.
                Ele não foi indiferente à agonia de Jesus; ao contrário, compadeceu-se de sua angústia, partilhando do sofrimento do Mestre com uma constância que revela a profundidade de seu vínculo.
              </p>
              <p className="mb-4">
                Foi nesse momento de dor extrema que Jesus, vendo sua mãe e, ao lado dela, o discípulo a quem amava, pronunciou palavras de significado eterno: "Mulher, eis aí o teu filho" (Jo 19:26, <em className="italic">Mulier, ecce filius tuus</em>).
                E, dirigindo-se a João, disse: "Eis aí a tua mãe" (Jo 19:27, <em className="italic">Ecce mater tua</em>).
              </p>
              <p className="mb-4">
                Com estas palavras, Jesus não apenas confiava Maria aos cuidados de João, mas estabelecia uma nova relação de maternidade e filiação espiritual, um dom precioso que João, com sua sensibilidade e capacidade de cuidado, estava singularmente preparado para acolher.
              </p>
              <p className="mb-4">
                A partir daquela hora, o discípulo a acolheu em sua casa (cf. Jo 19:27, <em className="italic">Et ex illa hora accepit eam discipulus in sua</em>).
                Esta responsabilidade, assumida em meio à desolação do Calvário, demonstra a maturidade e a solidez de seu caráter, qualidades que, embora por vezes ocultas sob a aparência introspectiva do melancólico, revelam uma imensa capacidade de amar e servir.
              </p>
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/f205e06a-e3ab-4fcb-af7b-e3b38cb851f6.png" 
                  alt="São João Evangelista escrevendo" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md" 
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  São João Evangelista escrevendo
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                A Corrida ao Túmulo e a Fé que Vê
              </h2>
              <p className="mb-4">
                A manhã da Ressurreição traz outro episódio revelador da personalidade de João e de sua sintonia com os acontecimentos divinos.
                Ao receberem de Maria Madalena a notícia de que a pedra do sepulcro havia sido removida e o corpo do Senhor não estava lá, Pedro e João correram juntos para o túmulo.
              </p>
              <p className="mb-4">
                O Evangelho de João relata que "o outro discípulo correu mais depressa do que Pedro e chegou primeiro ao túmulo" (Jo 20:4, <em className="italic">cucurrit citius Petro et venit primus ad monumentum</em>).
                Embora tenha chegado primeiro, João, talvez por um misto de reverência e daquela ponderação característica do melancólico, não entrou imediatamente.
                Ele se inclinou e viu os panos de linho no chão, mas esperou por Pedro.
              </p>
              <p className="mb-4">
                Quando Pedro entrou e viu os lençóis e o sudário que estivera sobre a cabeça de Jesus, não dobrado com os lençóis, mas enrolado à parte, "então, entrou também o outro discípulo, que chegara primeiro ao sepulcro. Ele viu e creu" (Jo 20:8, <em className="italic">Tunc ergo introivit et ille discipulus, qui venerat primus ad monumentum, et vidit, et credidit</em>).
              </p>
              <p className="mb-4">
                Esta afirmação – "viu e creu" – é de particular importância. Enquanto outros ainda hesitavam ou precisavam de mais provas, a fé de João, alimentada por sua profunda intimidade com Jesus e sua natureza contemplativa, permitiu-lhe perceber, para além das aparências, o significado transcendente do túmulo vazio.
              </p>
              <p className="mb-4">
                Sua sensibilidade espiritual, aguçada pelo amor, o capacitou a ser um dos primeiros a acolher o mistério da Ressurreição, não apenas como um fato, mas como a verdade central da fé.
                Essa prontidão em crer, essa capacidade de "ver" com os olhos da alma, é um dom precioso, muitas vezes presente naqueles que, como João, cultivam uma rica vida interior.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                A Mansidão do Discípulo Amado e a Herança da Terra
              </h2>
              <p className="mb-4">
                O temperamento de João, com sua inclinação ao amor, à caridade, à benevolência e à mansidão, encontra um eco profundo nas palavras de Jesus no Sermão da Montanha: "Bem-aventurados os mansos, porque eles herdarão a terra" (Mt 5:5, <em className="italic">Beati mites, quoniam ipsi possidebunt terram</em>).
              </p>
              <p className="mb-4">
                A mansidão, no contexto bíblico, não é sinônimo de fraqueza ou passividade, mas de uma força interior que se manifesta na gentileza, na paciência e na capacidade de suportar as adversidades sem perder a doçura de espírito.
                João, apesar de ter sido apelidado por Jesus, junto com seu irmão Tiago, de "Boanerges", que significa "Filhos do Trovão" (Mc 3:17), numa possível alusão a um zelo inicial mais impetuoso, demonstrou ao longo de sua vida uma progressiva transformação em direção a essa mansidão evangélica.
              </p>
              <p className="mb-4">
                Seu relacionamento com Jesus o moldou, e o amor que ele tanto pregou em seus escritos tornou-se a marca distintiva de sua vida.
                A "terra" que os mansos herdarão pode ser entendida não apenas em um sentido escatológico, mas também como a paz interior, a fecundidade espiritual e a capacidade de influenciar o mundo através do amor e da bondade.
              </p>
              <p className="mb-4">
                João, com sua vida dedicada ao anúncio do Evangelho do Amor, certamente experimentou essa herança.
                Sua sensibilidade melancólica, quando purificada e elevada pela graça, tornou-se um terreno fértil para o cultivo das virtudes do Espírito Santo, entre as quais a mansidão ocupa um lugar de destaque.
              </p>
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/a32b1f44-0f1a-4ddc-b72d-7b427820a4ac.png" 
                  alt="São João Evangelista com pena" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md" 
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  São João Evangelista com pena
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                O Legado do Amor e uma Morte Serena
              </h2>
              <p className="mb-4">
                Diferentemente de muitos outros apóstolos, que selaram seu testemunho com o martírio, a tradição nos conta que São João Evangelista teve uma morte natural, em idade avançada.
                Este fato, por si só, pode ser visto como um sinal da singularidade de sua missão e da forma particular como Deus conduziu sua vida.
              </p>
              <p className="mb-4">
                Seu "martírio" foi, talvez, o de uma vida inteira dedicada ao amor, à contemplação e ao serviço da Palavra.
                Os seus escritos, especialmente suas cartas, são um hino ao amor fraterno como essência da vida cristã: "Caríssimos, amemo-nos uns aos outros, porque o amor vem de Deus, e todo aquele que ama nasceu de Deus e conhece a Deus" (1 Jo 4:7, <em className="italic">Carissimi, diligamus invicem, quia caritas ex Deo est; et omnis, qui diligit, ex Deo natus est et cognoscit Deum</em>).
              </p>
              <p className="mb-4">
                Este mandamento do amor, que ele aprendeu reclinado sobre o peito de Jesus e testemunhou ao pé da cruz, tornou-se o centro de sua pregação e o legado que deixou à Igreja.
                Sua sensibilidade, intensidade e profundidade melancólicas, longe de serem um obstáculo, foram o canal através do qual o amor divino fluiu abundantemente, transformando-o no "Discípulo Amado" e em uma testemunha perene da ternura e da misericórdia de Cristo.
                Sua morte serena pode ser interpretada como o coroamento de uma vida vivida em profunda união com Aquele que é o Amor.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
                Conclusão: A Beleza de um Coração Melancólico Consagrado
              </h2>
              <p className="mb-4">
                A meditação sobre a vida de São João Evangelista, à luz de seu temperamento melancólico, nos convida a uma profunda reflexão sobre a riqueza e a complexidade da alma humana e sobre as múltiplas formas como Deus nos chama à santidade.
              </p>
              <p className="mb-4">
                A sensibilidade, a intensidade, a profundidade e a inclinação à contemplação, características frequentemente associadas à melancolia, quando vividas em Cristo, podem se tornar instrumentos poderosos de amor, fidelidade e serviço.
                João nos ensina que o carinho singular de Jesus não é reservado a um tipo específico de temperamento, mas se derrama sobre todos aqueles que, com sinceridade de coração, buscam conhecê-Lo e amá-Lo.
              </p>
              <p className="mb-4">
                Para aqueles que se identificam com as nuances da alma joanina, sua vida é um farol de esperança e um convite a abraçar a própria singularidade como um dom a ser consagrado.
                Que, a exemplo de São João, possamos reclinar nossa cabeça sobre o peito do Senhor, ouvir os segredos de Seu coração, permanecer fiéis ao pé da cruz, correr ao encontro do Ressuscitado com fé ardente e, acima de tudo, viver e proclamar o mandamento do Amor, para que um dia possamos herdar a terra prometida aos mansos de coração.
                Que a sua intercessão nos ajude a transformar nossas próprias sensibilidades e profundezas interiores em canais da graça e do amor divino no mundo.
              </p>
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/a1a116ba-8451-4500-a0ee-9655d929d636.png" 
                  alt="São João Evangelista" 
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
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Referências</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Bíblia Sagrada: Evangelho de João, Cartas de João, Apocalipse</li>
                <li>Santo Agostinho, <em>Tractatus in Ioannem</em></li>
                <li>São Tomás de Aquino, <em>Catena Aurea</em> e <em>Suma Teológica</em></li>
                <li>Papa Bento XVI, <em>Jesus de Nazaré</em></li>
                <li>Aliança de Misericórdia: “São João Evangelista, amigo do Senhor”</li>
                <li>O Evangelho de São João – Scribd</li>
                <li>Encíclica Dilexit Nos, Papa Francisco</li>
                <li>Introdução a Santo Tomás de Aquino – Revista Discipulus/PUC-SP</li>
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

export default MeditacaoJoao;

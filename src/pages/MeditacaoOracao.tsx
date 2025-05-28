import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const MeditacaoOracao = () => {
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
              A Oração — União com Deus
            </h1>

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Introdução</h2>
              <p className="mb-4">
                A oração é o respiro da alma, o vínculo mais profundo entre a criatura e o Criador. É por meio dela que nos unimos a Deus, 
                buscamos a Sua vontade, recebemos graças e crescemos na santidade. Santo Afonso Maria de Ligório ensina: "Quem reza se salva, 
                quem não reza se condena". Jesus, em sua vida terrena, não apenas nos ensinou a rezar, mas deu o exemplo, retirando-se 
                frequentemente para estar a sós com o Pai. O Catecismo Romano (de Trento) recorda que a oração não é apenas recomendada, 
                mas um dever, pois "Cristo Senhor declarou: Devemos orar sempre e nunca deixar de fazê-lo".
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/cardOração.png" 
                  alt="Oração - capa" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Oração na Vida de Jesus</h2>
              <p className="mb-4">Jesus nos deixou ensinamentos claros sobre a oração:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Quando orardes, não sejais como os hipócritas, que gostam de orar em pé nas sinagogas e nas esquinas das ruas para serem vistos pelos homens... 
                Mas tu, quando orares, entra no teu quarto, fecha a porta e ora a teu Pai em segredo; e teu Pai, que vê no segredo, te recompensará."
                <br />
                <span className="text-sm">
                  "Cum autem oratis, nolite esse sicut hypocritae... Tu autem cum oraveris, intra in cubiculum tuum, et clauso ostio, ora Patrem tuum in abscondito; 
                  et Pater tuus, qui videt in abscondito, reddet tibi." (Mt 6,5-6)
                </span>
              </blockquote>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/nossoSenhorOrando.png" 
                  alt="Jesus em oração sozinho" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <p className="mb-4">
                Nos momentos decisivos, Jesus buscava o silêncio e a solidão para rezar. No Getsêmani, antes da Paixão, 
                Ele se afastou dos discípulos e prostrou-se em oração, mostrando a necessidade de buscar força e conformidade com a vontade do Pai:
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/Le_Christ_au_Jardin_des_Oliviers_1840.jpg" 
                  alt="Jesus no Getsêmani" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Meu Pai, se é possível, passe de mim este cálice; contudo, não seja como eu quero, mas como tu queres."
                <br />
                <span className="text-sm">
                  "Pater mi, si possibile est, transeat a me calix iste; verumtamen non sicut ego volo, sed sicut tu." (Mt 26,39)
                </span>
              </blockquote>

              <p className="mb-4">E ainda exortou:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Vigiai e orai, para que não entreis em tentação. O espírito está pronto, mas a carne é fraca."
                <br />
                <span className="text-sm">
                  "Vigilate et orate, ut non intretis in tentationem; spiritus quidem promptus est, caro autem infirma." (Mt 26,41)
                </span>
              </blockquote>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/nossoSenhorOrandoApostolos.png" 
                  alt="Jesus orando com os apóstolos" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">O Dever da Oração</h2>
              <p className="mb-4">O Catecismo de Trento ensina que a oração é um dever para todos os cristãos:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A oração é um dever não apenas recomendado como conselho, mas também ordenado como preceito obrigatório. 
                Cristo, o Senhor, declarou: Devemos orar sempre e nunca deixar de fazê-lo."
              </blockquote>

              <p className="mb-4">
                A oração é o caminho pelo qual pedimos a Deus a graça da santidade, o perdão dos pecados, a força para resistir 
                às tentações e todas as graças necessárias para a nossa salvação.
              </p>

              <p className="mb-4">Jesus também nos ensina a pedir:</p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Pedi, e dar-se-vos-á; buscai, e achareis; batei, e abrir-se-vos-á."
                <br />
                <span className="text-sm">
                  "Petite, et dabitur vobis; quaerite, et invenietis; pulsate, et aperietur vobis." (Lc 11,9)
                </span>
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Os Tipos e Formas de Oração</h2>
              <p className="mb-4">
                A tradição católica, fundamentada na Sagrada Escritura e nos santos, reconhece diversos tipos e formas de oração:
              </p>

              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">1. Oração Vocal</h3>
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/paiFilhaRezando.png" 
                  alt="Pai e filha rezando" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
              <p className="mb-4">
                É a oração feita com palavras, seja em voz alta ou mentalmente. Inclui as orações tradicionais (Pai-Nosso, Ave-Maria, Glória, etc.), 
                rezadas individualmente ou em comunidade, como no Rosário e na Santa Missa.
              </p>

              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">2. Meditação</h3>
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/Santo Inácio De Loyola.jfif" 
                  alt="Santo Inácio de Loyola" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
              </div>
              <p className="mb-4">
                É a oração mental, em que refletimos sobre as verdades da fé, a vida de Cristo, os mistérios do Evangelho, 
                buscando aplicar à nossa vida aquilo que meditamos. Santa Teresa de Ávila define:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A oração mental é, a meu ver, nada mais do que um íntimo relacionamento de amizade, estando muitas vezes a sós com quem sabemos que nos ama".
              </blockquote>

              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">3. Contemplação</h3>
              <p className="mb-4">
                É o grau mais elevado de oração, uma simples e amorosa atenção a Deus, um "olhar de fé" que se fixa n'Ele, 
                sem necessidade de muitas palavras. É estar com Deus, em silêncio, adorando-O e amando-O.
              </p>

              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">4. Formas Tradicionais de Oração</h3>
              <p className="mb-4">Além das três formas acima, a Igreja reconhece quatro finalidades principais da oração (ACTS):</p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li><strong>Adoração:</strong> Louvar e reconhecer a grandeza de Deus.</li>
                <li><strong>Contrição:</strong> Pedir perdão pelos pecados.</li>
                <li><strong>Ação de Graças:</strong> Agradecer a Deus por seus dons.</li>
                <li><strong>Súplica/Petição:</strong> Pedir graças para si e para os outros (incluindo intercessão).</li>
              </ul>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Oração e a Santidade</h2>
              <p className="mb-4">
                A oração é o caminho seguro para a santidade. Sem oração, não há perseverança, nem crescimento espiritual. 
                São Pio de Pietrelcina (Padre Pio) dizia:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Quem reza se salva; quem não reza se condena. Quem reza pouco, põe-se em perigo. Quem não reza, se perde. 
                Quem reza muito, se salva e salva os outros."
                <br /><br />
                "A oração é a melhor arma que temos; é a chave do coração de Deus. Você deve falar com Jesus não só com os lábios, 
                mas com o coração. Em certas ocasiões, só deve falar com Ele com o coração."
              </blockquote>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Conclusão</h2>
              <p className="mb-4">
                A oração é dom, dever e necessidade. Ela nos une a Deus, fortalece a fé, purifica o coração e nos conduz à santidade. 
                Que possamos, como Jesus, buscar momentos de recolhimento, confiar na misericórdia do Pai e pedir sempre o dom da oração perseverante. 
                "Orai sem cessar" ("Sine intermissione orate", 1Ts 5,17).
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Oração Final (de São Pio de Pietrelcina)</h2>
              <div className="bg-[#121212] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-serif text-[#D4AF37] mb-4 text-center">Fica comigo, Senhor</h3>
                <p className="text-gray-300 italic">
                  Fica comigo, Senhor, porque preciso de tua presença para não te esquecer.<br />
                  Fica comigo, Senhor, porque sou fraco e preciso da tua força para não cair.<br />
                  Fica comigo, Senhor, porque tu és minha vida, e sem ti perco o fervor.<br />
                  Fica comigo, Senhor, para me mostrar tua vontade.<br />
                  Fica comigo, Senhor, para que eu ouça tua voz e te siga.<br />
                  Fica comigo, Senhor, porque desejo amar-te muito e estar sempre em tua companhia.<br />
                  Fica comigo, Jesus, nesta vida e na eternidade. Amém.
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Referências</h2>
              <ul className="list-disc pl-5 space-y-1 text-gray-300">
                <li>Sagrada Escritura: Mt 6,5-6; Mt 26,39-41; Lc 11,9; 1Ts 5,17</li>
                <li>Catecismo Romano (de Trento): Sobre a oração e o Pai-Nosso</li>
                <li>Frei Luís de Granada, "Tratado de Oração e Meditação"</li>
                <li>Santo Afonso Maria de Ligório, "A Oração: O Grande Meio da Salvação"</li>
                <li>Santa Teresa de Ávila, "Livro da Vida"</li>
                <li>São Pio de Pietrelcina (Padre Pio), "Quem reza se salva"</li>
                <li>Catecismo Maior de São Pio X</li>
                <li>Cathedral of St. Thomas More, "Four Basic Forms of Prayer"</li>
                <li>St. Ann Bethany Beach, "Types of Prayer"</li>
                <li>Prayers of St. Pio of Pietrelcina</li>
              </ul>
            </section>

            <div className="my-8 text-center">
              <p className="text-[#D4AF37] italic">Vulnerasti cor meum verbo tuo</p>
              <p className="text-gray-300">Feriste o meu coração com a Tua palavra</p>
            </div>

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

export default MeditacaoOracao;
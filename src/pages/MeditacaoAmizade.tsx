import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const MeditacaoAmizade = () => {
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
              A Amizade — Comunhão de Almas em Cristo
            </h1>

            <p className="text-lg mb-8 text-gray-200">
              A amizade é um dom precioso, desejado por todos, mas nem sempre compreendido em sua profundidade. Em Cristo, a amizade atinge sua expressão mais sublime: Ele não apenas nos chama amigos, mas entrega a vida por nós, revelando o verdadeiro sentido desse vínculo. Nesta meditação, vamos contemplar a amizade de Jesus com seus apóstolos, refletir com a sabedoria do livro Imitação de Cristo, buscar a luz dos ensinamentos de papas da Igreja, mergulhar nas lições de O Pequeno Príncipe e entender a amizade como comunhão de almas, incluindo nossa relação com os santos, nosso anjo da guarda, Maria e o próprio Jesus.
            </p>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Amizade de Cristo com Seus Apóstolos</h2>
              <p className="mb-4">
                Jesus, o Mestre das relações humanas, viveu intensamente a amizade. Escolheu doze apóstolos para estarem próximos, partilhando com eles a intimidade da missão, das alegrias e das dores. Entre eles, Pedro, Tiago e João desfrutaram de momentos ainda mais próximos, como na Transfiguração e na agonia do Getsêmani.
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Já não vos chamo servos, pois o servo não sabe o que faz o seu senhor. Eu vos chamo amigos, porque vos dei a conhecer tudo o que ouvi de meu Pai."
                <br />
                <span className="text-sm">
                  "Jam non dicam vos servos, quia servus nescit quid faciat dominus eius; vos autem dixi amicos, quia omnia quaecumque audivi a Patre meo, nota feci vobis." (João 15,15)
                </span>
              </blockquote>

              <p className="mb-4">
                Jesus abriu seu coração aos amigos, confiou-lhes seus sentimentos mais profundos e, sobretudo, deu a vida por eles:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Ninguém tem amor maior do que aquele que dá a vida pelos amigos."
                <br />
                <span className="text-sm">
                  "Maiorem hac dilectionem nemo habet, ut animam suam ponat quis pro amicis suis." (João 15,13)
                </span>
              </blockquote>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/jesusAmigos.jpg" 
                  alt="Jesus e seus amigos" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  Jesus com seus amigos
                </p>
              </div>

              <p className="mb-4">
                Além dos apóstolos, Jesus cultivou amizades especiais, como com Lázaro, Marta e Maria, em Betânia, onde encontrava repouso e acolhida. Sua amizade era aberta, compassiva, sensível às necessidades de todos, sem excluir ninguém.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Amizade Segundo a Imitação de Cristo</h2>
              <p className="mb-4">
                O clássico espiritual Imitação de Cristo ensina que a verdadeira amizade se fundamenta em Deus. Sem Ele, nenhuma amizade é duradoura ou pura:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Sem mim não vale nada, nem durará a amizade; nem é puro e verdadeiro o amor que não tem a mim por princípio".
              </blockquote>

              <p className="mb-4">
                O livro também adverte sobre a necessidade de suportar os defeitos dos outros com paciência, reconhecendo que todos temos limitações e que Deus permite essas diferenças para que aprendamos a carregar os fardos uns dos outros:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Deus assim o dispôs para que aprendamos a carregar uns o fardo dos outros; porque ninguém há sem defeito... mas cumpre que uns aos outros nos suportemos, consolemos, auxiliemos, instruamos e aconselhemos".
              </blockquote>

              <p className="mb-4">
                A amizade, segundo a Imitação de Cristo, não é utilitarista ou interesseira, mas gratuita, paciente e voltada à edificação mútua. O verdadeiro amigo é aquele que, mesmo conhecendo nossas fraquezas, permanece ao nosso lado e nos ajuda a crescer na virtude.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Amizade como Comunhão de Almas</h2>
              <p className="mb-4">
                A amizade, para além de um sentimento, é uma verdadeira comunhão de almas. Santo Agostinho expressou de forma belíssima:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Disse muito bem quem definiu o amigo como metade da própria alma. Eu tinha de fato a sensação de que nossas duas almas fossem uma em dois corpos."
              </blockquote>

              <p className="mb-4">
                Santa Teresa d'Ávila também nos recorda:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "A amizade com Deus e a amizade com os outros é uma mesma coisa, não podemos separar uma da outra."
              </blockquote>

              <p className="mb-4">
                Assim, a amizade cristã é uma extensão do nosso relacionamento com Deus, um reflexo do amor divino que se manifesta entre nós.
              </p>

              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/amigos.jpg" 
                  alt="Amizade verdadeira" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  A verdadeira amizade
                </p>
              </div>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Lições de O Pequeno Príncipe sobre Amizade</h2>
              
              <div className="my-8 flex flex-col items-center">
                <img 
                  src="/lovable-uploads/raposaPrincipe.jpg" 
                  alt="O Pequeno Príncipe e a Raposa" 
                  className="rounded-lg max-h-[400px] object-contain shadow-md"
                />
                <p className="text-center text-sm mt-3 text-gray-400">
                  O Pequeno Príncipe e a Raposa - Uma lição sobre amizade
                </p>
              </div>

              <p className="mb-4">
                O clássico O Pequeno Príncipe traz lições profundas sobre amizade, mostrando que ela exige dedicação, tempo e entrega. A raposa ensina ao Pequeno Príncipe:
              </p>

              <blockquote className="border-l-4 border-[#D4AF37] pl-4 my-6 italic text-gray-300">
                "Tu te tornas eternamente responsável por aquilo que cativas."
              </blockquote>

              <p className="mb-4">
                Essa frase, uma das mais marcantes do livro, revela a profundidade e a seriedade da verdadeira amizade. Cativar alguém significa ir além da convivência superficial; é criar laços, envolver-se com a vida do outro, partilhar alegrias e dores. Quando cativamos alguém, assumimos uma responsabilidade: a de cuidar, zelar, estar presente, não abandonar.
              </p>

              <p className="mb-4">
                A responsabilidade não é um peso, mas uma expressão do amor maduro e fiel. O verdadeiro amigo não desaparece nas dificuldades, não é apenas companhia nos bons momentos. Ele permanece, mesmo quando o tempo e as circunstâncias mudam, porque compreende que a amizade é um compromisso de alma para alma.
              </p>

              <p className="mb-4">
                Essa responsabilidade é também uma via de mão dupla: ao cativar, também nos deixamos cativar. O coração do amigo passa a fazer parte do nosso, e sua felicidade, suas dores e esperanças tornam-se, de algum modo, nossas também. Por isso, a amizade exige maturidade, paciência e entrega, pois é um vínculo que atravessa o tempo e não se desfaz facilmente.
              </p>

              <p className="mb-4">
                Outros ensinamentos marcantes do livro:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>"Foi o tempo que dedicaste à tua rosa que a fez tão importante."</li>
                <li>"A gente só conhece bem as coisas que cativou."</li>
                <li>"Se tu vens, por exemplo, às quatro da tarde, desde as três eu começarei a ser feliz."</li>
                <li>"Fiz dele meu amigo e agora ele é único no mundo."</li>
              </ul>

              <p className="mb-4">
                Essas reflexões nos convidam a valorizar o tempo e a entrega nas relações, lembrando que a amizade é um dom a ser cultivado com paciência e amor.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Amizade Verdadeira: Rara e Preciosa</h2>
              <p className="mb-4">
                Ao longo da vida, é comum termos muitos colegas, conhecidos e companheiros de jornada. São pessoas com quem partilhamos momentos, projetos ou interesses. No entanto, amigos verdadeiros — aqueles com quem partilhamos a alma, os sonhos mais profundos, os medos e as esperanças — são raros. Muitas vezes, teremos apenas um ou dois amigos assim durante toda a vida.
              </p>

              <p className="mb-4">
                Os colegas passam; os amigos permanecem. Colegas partilham a mesa, o trabalho, a escola. Amigos partilham o coração. A amizade verdadeira não depende da frequência dos encontros, mas da profundidade do vínculo. Ela resiste ao tempo, à distância e às mudanças da vida.
              </p>

              <p className="mb-4">
                Por isso, quando Deus nos concede um amigo verdadeiro, devemos acolhê-lo como um tesouro, cuidar desse laço com carinho e responsabilidade, conscientes de que, como ensina O Pequeno Príncipe, somos eternamente responsáveis por aquilo que cativamos.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">A Amizade com os Santos, o Anjo da Guarda, Maria e Jesus</h2>
              <p className="mb-4">
                A comunhão dos santos é, por excelência, uma amizade espiritual. Os santos não são apenas exemplos distantes, mas verdadeiros amigos que intercedem por nós e caminham conosco. Ter um santo como amigo é buscar inspiração em sua vida e pedir sua ajuda nas lutas do dia a dia. São João Bosco e São Domingos Sávio, São Francisco e Santa Clara, São Basílio e São Gregório — todos viveram amizades santas, ajudando-se mutuamente a buscar a Deus.
              </p>

              <p className="mb-4">
                Além dos santos, nosso anjo da guarda é um amigo fiel, sempre ao nosso lado, pronto a nos aconselhar, proteger e conduzir ao Céu. Podemos e devemos conversar com ele, pedir sua intercessão e aprender a ser, também nós, anjos para os outros, ajudando-os no caminho da santidade.
              </p>

              <p className="mb-4">
                Jesus é o Amigo por excelência. Ele mesmo nos chama de amigos e deseja essa intimidade conosco. Conversar com Jesus, abrir-lhe o coração, partilhar alegrias e dores, é viver uma amizade que transforma e salva. Maria, Mãe de Jesus, também é nossa amiga e intercessora, sempre pronta a nos acolher e conduzir ao Filho.
              </p>
            </section>

            <Separator className="my-8 bg-gray-800" />

            <section className="mb-12">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Ensinamentos dos Papas sobre a Amizade</h2>
              <p className="mb-4">
                Entre os papas, Leão XIII destacou a importância da amizade social e da caridade como fundamentos da convivência cristã, promovendo a dignidade e o respeito entre as pessoas. Pio XI, em sua atuação histórica, demonstrou como a amizade, quando vivida com verdade e justiça, pode ser instrumento de reconciliação e resistência ao mal, mesmo em tempos difíceis.
              </p>

              <p className="mb-4">
                Esses papas recordam que a amizade cristã não se limita ao círculo íntimo, mas se expande para a sociedade, promovendo a paz, a solidariedade e o bem comum.
              </p>
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

export default MeditacaoAmizade;
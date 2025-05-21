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
                Outros ensinamentos marcantes do livro:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>"Foi o tempo que dedicaste à tua rosa que a fez tão importante."</li>
                <li>"A gente só conhece bem as coisas que cativou."</li>
                <li>"Se tu vens, por exemplo, às quatro da tarde, desde as três eu começarei a ser feliz."</li>
                <li>"Fiz dele meu amigo e agora ele é único no mundo."</li>
              </ul>
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
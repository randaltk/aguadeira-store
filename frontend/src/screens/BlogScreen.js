import { useState } from "react";

import "./BlogScreen.css";
import Footer from "../components/Footer";

import CestaSabonetes from "../assets/images/teste.jpg";
import Laranjas from "../assets/images/oranges.jpg";

import instaPost1 from "../assets/images/AguadeiraLogo.png";
import instaPost2 from "../assets/images/sabonete-solar.jpg";
import instaPost3 from "../assets/images/sabonete-lavanda.jpg";
const BlogScreen = () => {
  const [readMore, setReadMore] = useState(false);

  const extraContent1 = (
    <p className="p__post1">
      de outros cosméticos condicionantes, além da maioria dos sabonetes
      industriais possuir ingredientes de origem animal. O pH dos sabonetes da
      Terra Céu Azul é balanceado, entre 8 e 9, produzidos com matérias primas
      100% de origem vegetal e aproveitando totalmente a glicerina natural do
      processo de saponificação, que auxilia na umectação da pele, em conjunto
      com óleos e manteigas vegetais, proporcionando limpeza suave e hidratação
      para a pele. Os sabonetes são totalmente naturais, livres de parabenos,
      lauril, petrolados, aditivos de origem animal e perfumes sintéticos. Os
      sabonetes da Terra Céu Azul são naturais, veganos, artesanais, livre de
      crueldade, terapêuticos, perfumados naturalmente & biodegradáveis.
    </p>
  );

  const extraContent2 = (
    <p className="p__post1">
      Uma vez captado pelo olfato, o aroma viaja até o cérebro (mais rápido do
      que os estímulos da visão ou da audição). O olfato nos conecta diretamente
      a estados emocionais e comportamentais, muitas vezes armazenados desde a
      infância. É o único dos cinco sentidos físicos que conecta-se diretamente
      ao sistema límbico, muitas vezes referido como nosso centro de controle
      emocional – é através desse sistema cerebral que emoções como ansiedade,
      depressão, medo, raiva e alegria se manifestam fisicamente. . Além das
      emoções, o sistema límbico esta conectado a outras partes do cérebro que
      controlam atividades tais como, pressão arterial, batimentos cardíacos,
      respiração, memória, os níveis de estresse e o equilíbrio hormonal. . É
      importante lembrar que os Óleos Essenciais são luz solar transformada em
      energia bio-disponível. Sendo assim, por trazerem luz à nossa vida
      (através das incríveis e delicadas moléculas aromáticas) esses Óleos são
      nossos aliados de cura bio-espiritual. É o milagre da Luz Perfumada. .
      ✨🌸 Os óleos essenciais são vivos e dinâmicos: ao invés de substâncias
      inertes, eles contêm a força de vida ativa da planta. 🌸✨.
    </p>
  );
  return (
    <>
      <div className="blog__wrapper">
        <h1 className="blog__h1"> Bem vindes ao blog ! </h1>

        <div className="blog__post1">
          <img
            className="img__post1"
            src={CestaSabonetes}
            alt="cesta-sabonetes"
          />

          <p className="p__post1">
            <h3 className="blog__h2">
              {" "}
              Por que optar por sabonetes naturais ?
            </h3>
            Todo sabão é feito da mistura de ácidos graxos (gorduras) e álcali
            (soda cáustica, potassa, ou cinzas), resultando em sais e glicerina.
            Um sabão artesanal em barra bem feito, de fórmula equilibrada, bons
            ingredientes e bom para a pele geralmente possui um ph entre 8 e 10.
            Os sabonetes industrializados, possuem ph próximo de 11, o que
            poderia se considerar como um dos motivos – mas não o único – dos
            sabonetes industrializados irritarem a pele, principalmente as
            sensíveis, os detergentes utilizados nestes sabonetes provocam a
            perda de água das camadas mais profundas da pele, proporcionando o
            ressecamento ou desequilíbrio do PH. Os sabonetes industriais
            possuem vários componentes químicos desnecessários, entre os mais
            comuns estão o lauril éter sulfato de sódio e o propilenoglicol,
            ditos prejudiciais para a pele dentro da linha de produtos naturais,
            são usados para proporcionar mais espuma, transparência, entre
            outras coisas.Estes sabonetes industriais também excluem a glicerina
            de sua composição como sobra do processo de saponificação e vendem
            para a fabricação{readMore ? "" : "..."}
            <p
              className="p__post1"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {" "}
              <p
                style={{ color: "#553521", opacity: "0.9", cursor: "pointer" }}
              >
                {" "}
                {readMore ? "⤴" : "Leia mais"}
              </p>
            </p>
          </p>
        </div>
        <div className="readMoreGrid">
          <p className="p__post1">{readMore && extraContent1}</p>
        </div>
        <h1 className="blog__h1" id="h1__post2">
          Os óleos essenciais e as emoções
        </h1>
        <div className="blog__post1" id="post2">
          <p className="p__post1">
            Os aromas têm um potencial de impacto emocional que pode alcançar
            nossa psique, relaxando a mente e tocando o espírito. Os Óleos
            Essenciais, com sua energia aromática concentrada, influenciam
            profundamente nossa mente e nossas emoções, conseguem ter efeitos
            fisiológicos e psicológicos profundos. Quem já não sentiu um aroma e
            se lembrou de uma situação passada? “Este cheiro me lembra..” Isso
            acontece porque quando sentimos o cheiro de um aroma, ativamos uma
            parte do cérebro, o sistema límbico, que é responsável pelas nossas
            memórias, emoções, criatividade, intuição e impulsos instintivos. .
            Um exemplo disso são os nossos antepassados que tinham um senso
            agudo de cheiro, muito semelhante ao dos cães. Eles sentiam o cheiro
            de perigo, da comida e de seus companheiros, porque suas vidas
            dependiam disso, e o que eles cheiravam causavam sentimentos
            proporcionais de medo, de fome e atração sexual. . . 👃🏼 Estima-se
            que nosso olfato seja até dez mil vezes mais preciso do que os
            demais sentidos{readMore ? "" : "..."}
            <p
              className="p__post1"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {" "}
              <p
                style={{ color: "#553521", opacity: "0.9", cursor: "pointer" }}
              >
                {" "}
                {readMore ? "⤴" : "Leia mais"}
              </p>
            </p>
          </p>

          <img className="img__post1" src={Laranjas} alt="cesta-sabonetes" />
        </div>
        <div className="readMoreGrid" id="readMore2">
          <p className="p__post1">{readMore && extraContent2}</p>
        </div>
        <h1 className="blog__h1" id="insta__h1">
          @aguadeira.atelier
        </h1>

        <div className="instagram__wrapper">
          <img className="img__insta" src={instaPost3} alt="instaPost3" />

          <img className="img__insta" src={instaPost2} alt="instaPost2" />

          <img className="img__insta" src={instaPost1} alt="instaPost3" />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default BlogScreen;

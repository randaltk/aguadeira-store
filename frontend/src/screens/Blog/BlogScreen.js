import { useState } from "react";

import "./BlogScreen.css";
import Footer from "../../components/Footer/Footer";

import CestaSabonetes from "../../assets/images/teste.jpg";

import Planta from "../../assets/images/planta.jpg";

import Footer2 from "../../components/Footer2/Footer2";
import Instagram from "../../components/Instagram/Instagram";
const BlogScreen = () => {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);

  const extraContent1 = (
    <p className="extraContent1">
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
    <p className="extraContent1">
      ❁ Além do uso de óleos essenciais, para interagir com as plantas e seus
      poderes em busca de harmonia e equilíbrio em nossas vidas, podemos
      simplesmente no dia a dia ter plantas por perto, cuidar de um jardim,
      sentir o perfume das ervas, fazer um chá ou acender incensos naturais!
    </p>
  );
  return (
    <>
      <div className="blog__wrapper">
        <h1 className="destaquesh1"> Bem vindes ! </h1>

        <p className="pages__line"></p>

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
            para a fabricação{readMore1 ? "" : "..."}
            <p
              className="p__post1"
              onClick={() => {
                setReadMore1(!readMore1);
              }}
            >
              {" "}
              <p
                style={{ color: "#553521", opacity: "0.9", cursor: "pointer" }}
              >
                {" "}
                {readMore1 ? "⤴" : "Leia mais"}
              </p>
            </p>
          </p>
        </div>
        <div className="readMoreGrid">
          <p>{readMore1 && extraContent1}</p>
        </div>
        {/*                                                                      POST  2                                           */}
        <div className="blog__post1" id="post2">
          <p className="p__post1" id="p2">
            <h3 className="blog__h2"> ❁ ⊱ A Alma das Plantas ⊰ ❁</h3>❁ Óleos
            essenciais são os responsáveis pelo perfume, pela proteção e pela
            reprodução das plantas. Chamados também de “alma das plantas”,
            trazem a força viva de cada uma delas e não podem ser reproduzidos
            sinteticamente. Ao absorvê-los em nosso organismo através de nossa
            inspiração ou através da absorção pela nossa pele, seus princípios
            ativos irão interagir com nosso corpo, mente e espirito, podendo
            apresentar efeitos analgésicos, bactericidas, antifúngicos,
            estimulantes, sedativos, ansiolíticos, antidepressivos e muitos
            outros. Sabendo disso, é importante que, ao comprar óleos essenciais
            ou produtos contendo óleos essenciais, você conheça um pouco sobre
            as propriedades dessas medicinas, sobre suas dosagens, formas de
            aplicação e que conheça suas próprias necessidades do momento. ❁
            Além do uso de óleos essenciais, para interagir com as plantas e
            seus poderes em busca de harmonia e equilíbrio em nossas vidas,
            podemos simplesmente no dia a dia ter plantas por perto, cuidar de
            um jardim, sentir o perfume das ervas, fazer um chá ou acender
            incensos naturais!
          </p>
          <img className="img__post1" src={Planta} alt="cesta-sabonetes" />
        </div>
        <div className="readMoreGrid">
          <p>{readMore2 && extraContent2}</p>
        </div>

        <Instagram />
      </div>
      <Footer2 />
      <Footer />
    </>
  );
};
export default BlogScreen;

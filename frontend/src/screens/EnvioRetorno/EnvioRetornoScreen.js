import React from "react";
import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";

const EnvioRetornoScreen = () => {
  return (
    <>
      <h1>Envio e retornos</h1>
      <h2>Política de envio</h2>

      <p>
        - Após o pagamento da compra ser aprovado, pedimos um prazo de quatro
        dias úteis para o envio da compra, podendo ser enviado antes. - Assim
        que a compra for despachada, o número localizador do pacote é enviado ao
        cliente para acompanhamento da entrega. - Caso o produto não possa ser
        enviado ou ocorra algum erro, devolvemo
      </p>

      <h2>POLÍTICA DE DEVOLUÇÃO E TROCA</h2>
      <p>
        - Não aceitamos trocas e/ou devoluções. - Caso algum produto (comprado
        apenas no site) esteja danificado ou com qualidade inferior a prometida,
        nos envie um e-mail em - lazuli.apotecario@gmail.com - informando sobre
        o problema e iremos avaliar seu caso específico, se constatarmos a
        falha, iremos repor o produto comprado, caso este não esteja disponível,
        um voucher no valor do produto danificado é gerado para o cliente. -
        Falhas em produtos comprados nas nossas lojas parceiras devem ser
        reportados as mesmas.
      </p>

      <Footer2 />
      <Footer />
    </>
  );
};

export default EnvioRetornoScreen;

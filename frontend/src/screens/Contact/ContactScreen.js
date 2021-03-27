import React from "react";
import "./ContactScreen.css";
import Footer from "../../components/Footer/Footer";
export default class ContactScreen extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
        <div className="contact__wrapper">
          <h1 className="contact__h1">
            Estou a disposição para mais informações
          </h1>

          <div className="contact__grid">
            <div className="contact__descs">
              <p className="contact__p">
                Se você tiver dúvidas ou perguntas, entre{" "}
                <div style={{ clear: "both" }}>
                  em contato ou preencha este formulário
                </div>
              </p>
              <p className="contact__p" id="email">
                e-mail:aguadeira.atelier@gmail.com
              </p>
              <p className="contact__p" id="DM">
                DM: @aguadeira.atelier
              </p>
            </div>
            <form
              className="contact__form"
              onSubmit={this.submitForm}
              action="https://formspree.io/f/mqkgrvbj"
              method="POST"
            >
              <div className="wrapper__flex">
                <label>Nome</label>

                <span>*</span>
                <input type="text" name="name" required />

                <label className="labelEmail">Email</label>
                <span>*</span>
                <input type="email" name="email" required />
              </div>
              <br />

              <label className="labelPhone">Telefone</label>
              <input className="inputPhone" type="number" name="phone" />
              <br />
              <div className="contact__buttonMsg">
                <input
                  className="inputMessage"
                  type="text"
                  name="message"
                  placeholder="Escreva sua mensagem"
                />
                {status === "SUCCESS" ? (
                  <p style={{ marginTop: "1rem" }}>
                    Obrigado! Nós entraremos em contato em breve
                  </p>
                ) : (
                  <button>Enviar</button>
                )}
                {status === "ERROR" && <p>Ooops! ocorreu um erro.</p>}
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

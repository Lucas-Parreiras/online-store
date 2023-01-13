import PropTypes from 'prop-types';
import React, { Component } from 'react';
import navegation from '../services/navegation';

export default class CheckOutForm extends Component {
  state = {
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
    error: false,
  };

  handleState = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  emptyCart = () => {
    const { history } = this.props;
    localStorage.setItem('cart', JSON.stringify([]));
    navegation('/', history);
  };

  validationForm = (event) => {
    event.preventDefault();
    const { fullName, email, cpf, phone, cep, address, payment } = this.state;
    const infoArr = [fullName, email, cpf, phone, cep, address, payment];
    const checkInfos = infoArr.includes('');
    if (checkInfos === false) {
      this.emptyCart();
      return;
    }
    this.setState({ error: true });
  };

  render() {
    const { fullName, email, cpf, phone, cep, address, error } = this.state;
    return (
      <div>
        <h2>Informações do comprador:</h2>
        <form>
          <label htmlFor="fullName">
            Nome Completo:
            <input
              onChange={ this.handleState }
              type="text"
              name="fullName"
              value={ fullName }
              id="fullName"
              data-testid="checkout-fullname"
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              onChange={ this.handleState }
              type="email"
              name="email"
              value={ email }
              id="email"
              data-testid="checkout-email"
              required
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              onChange={ this.handleState }
              type="text"
              name="cpf"
              value={ cpf }
              id="cpf"
              data-testid="checkout-cpf"
              required
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              onChange={ this.handleState }
              type="text"
              name="phone"
              value={ phone }
              id="phone"
              data-testid="checkout-phone"
              required
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              onChange={ this.handleState }
              type="text"
              name="cep"
              value={ cep }
              id="cep"
              data-testid="checkout-cep"
              required
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              onChange={ this.handleState }
              type="text"
              name="address"
              value={ address }
              id="address"
              data-testid="checkout-address"
              required
            />
          </label>
          <label htmlFor="payment">
            Método de Pagamento:
            <label htmlFor="ticket">
              Boleto
              <input
                onChange={ this.handleState }
                type="radio"
                id="ticket"
                name="payment"
                value="ticket"
                data-testid="ticket-payment"
              />
            </label>
            <label htmlFor="visa">
              Visa
              <input
                onChange={ this.handleState }
                type="radio"
                id="visa"
                name="payment"
                value="visa"
                data-testid="visa-payment"
              />
            </label>
            <label htmlFor="master">
              MasterCard
              <input
                onChange={ this.handleState }
                type="radio"
                id="master"
                name="payment"
                value="master"
                data-testid="master-payment"
              />
            </label>
            <label htmlFor="elo">
              Elo
              <input
                onChange={ this.handleState }
                type="radio"
                id="elo"
                name="payment"
                value="elo"
                data-testid="elo-payment"
              />
            </label>
          </label>
          <button
            type="submit"
            data-testid="checkout-btn"
            onClick={ this.validationForm }
          >
            Enviar informações
          </button>
        </form>
        <div>
          {
            error === true
          && <p data-testid="error-msg">Campos inválidos</p>
          }
        </div>
      </div>
    );
  }
}

CheckOutForm.propTypes = {
  history: PropTypes.shape().isRequired,
};

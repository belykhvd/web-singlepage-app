import React, {Component} from 'react'
import './style.css'
import AnyBankPaymentData from "./PaymentAnyBank/any_bank_payment_data";
import UserBankPaymentData from "./user_bank_payment_data"
import PaymentInput from "./PaymentInput";

export default class Page extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-header">
                    <div className="page-header-ip-info">
                        <h1>Индивидуальный предприниматель</h1>
                        <h1>Петров Александр Эдуардович</h1>
                        <p>Тел.: <a href="about:blank">+7(900)123-456-78</a></p>
                        <p>Сайт: <a href="about:blank">petrov.alexandr.com</a></p>
                        <p>Email: <a href="about:blank">petrov.alex@gmail.com</a></p>
                        <a href="about:blank">Информация о компании</a>
                    </div>
                    <div className="page-header-ip-photo"/>
                </div>

                <ul>
                    <li>Заплатить</li>
                    <li>Запросить платеж</li>
                </ul>

                {this.props.content}

                {this.renderUserBankPayment()}
                {this.renderRequestPayment()}

                <div className="page-ads">
                    <div className="ad" id="ad0"/>
                    <div className="ad" id="ad1"/>
                    <div className="ad" id="ad2"/>
                </div>

                <div className="page-footer">
                    2018 Bank ©
                </div>
            </div>
        )
    }

    renderUserBankPayment() {
        let inputs = {};
        UserBankPaymentData.forEach((value, index, array) => {
            inputs[value._reactInputName] = <PaymentInput key={value.key} props={value}/>
        });

        return (
            <div className="payment-user-bank">
                {inputs.userBankPayerInn}
                {inputs.userBankPayerBic}
                {inputs.userBankVat}
                {inputs.userBankTransactionAmount}
            </div>
        );
    }

    renderRequestPayment() {
        let inputs = {};
        UserBankPaymentData.forEach((value, index, array) => {
            inputs[value._reactInputName] = <PaymentInput key={value.key} props={value}/>
        });

        return (
            <div className="payment-request">
                {inputs.userBankPayerInn}
                {inputs.userBankPayerBic}
                {inputs.userBankVat}
                {inputs.userBankTransactionAmount}
            </div>
        );
    }
}
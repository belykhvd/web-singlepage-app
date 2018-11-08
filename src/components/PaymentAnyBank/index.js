import React, {Component} from 'react'
import AnyBankPaymentData from "./any_bank_payment_data";
import Page from '../Page'
import PaymentInput from '../PaymentInput'
import './style.css'


export default class PaymentAnyBank extends Component {
    state = {
        inputs: this.buildInputs()
    };

    render() {
        const content = (
            <div className="payment-any-bank">
                <form>
                    <div className="payment-form-card">
                        {this.state.inputs.cardNumber}
                        {this.state.inputs.cardExpiration}
                        {this.state.inputs.cardCvc}
                    </div>
                    <div className="payment-form-details">
                        {this.state.inputs.transactionAmount}
                        {this.state.inputs.transactionComment}
                        {this.state.inputs.userEmail}
                        <input type="submit" value="Заплатить"/>
                    </div>
                </form>
            </div>
        );

        return <Page content = {content}/>
    }

    buildInputs() {
        let inputs = {};
        AnyBankPaymentData.forEach((value, index, array) => {
            inputs[value._reactInputName] = <PaymentInput key={value.key} props={value}/>
        });
        return inputs;
    }
}
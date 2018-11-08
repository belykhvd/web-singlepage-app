import React, {Component} from 'react'
import './style.css'

export default class PaymentInput extends Component {
    render() {
        const {props} = this.props;
        return (
            <div className="payment-input">
                <label htmlFor={props.inputId} className="payment-input__label">{props.labelText}</label>
                <input type="text"
                       id={props.inputId}
                       className="payment-input__input"
                       placeholder={props.inputPlaceholder}
                       pattern={props.inputPattern}
                       maxLength={props.inputMaxLength}
                       required={props.inputRequired}
                       autoComplete="off"
                />
            </div>
        );
    }
}
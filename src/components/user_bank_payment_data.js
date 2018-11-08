export default [
    {
        "_reactInputName": "userBankPayerInn",
        "key": "59a1a5c6-8f59-4cf3-9054-a116140b3170",
        "inputId": "user_bank_payer_inn",
        "labelText": "От кого (ИНН)",
        "inputPlaceholder": "",
        "inputPattern": "\\d{10}|\\d{12}",
        "inputMaxLength": "12",
        "inputFormatHint": "10 или 12 цифр",
        "inputRequired": true
    },
    {
        "_reactInputName": "userBankPayerBic",
        "key": "59a1a5c6-8f59-4cf3-9054-a116140b3171",
        "inputId": "user_bank_payer_bic",
        "labelText": "БИК",
        "inputPlaceholder": "",
        "inputPattern": "\\d{9}",
        "inputMaxLength": "9",
        "inputFormatHint": "9 цифр",
        "inputRequired": true
    },
    {
        "_reactInputName": "userBankVat",
        "key": "59a1a5c6-8f59-4cf3-9054-a116140b3172",
        "inputId": "user_bank_vat",
        "labelText": "За что",
        "inputPlaceholder": "",
        "inputPattern": "",
        "inputMaxLength": "",
        "inputFormatHint": "",
        "inputRequired": true
    },
    {
        "_reactInputName": "userBankTransactionAmount",
        "key": "59a1a5c6-8f59-4cf3-9054-a116140b3173",
        "inputId": "user_bank_transaction_amount",
        "labelText": "Сколько",
        "inputPlaceholder": "От 1000 до 75000 ₽",
        "inputPattern": "\\d+",
        "inputMaxLength": "5",
        "inputFormatHint": "",
        "inputRequired": true
    }
]
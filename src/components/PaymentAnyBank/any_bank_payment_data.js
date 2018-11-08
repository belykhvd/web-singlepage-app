export default [
    {
        "_reactInputName": "cardNumber",
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd50",
        "inputId": "card_number",
        "labelText": "Номер карты",
        "inputPlaceholder": "Номер карты",
        "inputPattern": "\\d{16}",
        "inputMaxLength": "16",
        "inputFormatHint": "Ровно 16 цифр",
        "inputRequired": true
    },
    {
        "_reactInputName": "transactionAmount",
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd51",
        "inputId": "transaction_amount",
        "labelText": "Сумма перевода",
        "inputPlaceholder": "От 1000 до 75000 ₽",
        "inputPattern": "\\d+",
        "inputMaxLength": "5",
        "inputFormatHint": "От 1000 до 75000",
        "inputRequired": true
    },
    {
        "_reactInputName": "cardExpiration",
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd52",
        "inputId": "card_expiration_date",
        "labelText": "Месяц/год окончания действия карты",
        "inputPlaceholder": "ММ/ГГ",
        "inputPattern": "\\d\\d/\\d\\d",
        "inputMaxLength": "5",
        "inputFormatHint": "ММ/ГГ",
        "inputRequired": true
    },
    {
        "_reactInputName": "cardCvc",
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd53",
        "inputId": "card_cvc",
        "labelText": "CVC",
        "inputPlaceholder": "CVC",
        "inputPattern": "\\d{3}",
        "inputMaxLength": "3",
        "inputFormatHint": "Ровно три цифры",
        "inputRequired": true
    },
    {
        "_reactInputName": "transactionComment",
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd54",
        "inputId": "transaction_comment",
        "labelText": "Комментарий",
        "inputPlaceholder": "До 150 символов",
        "inputMaxLength": "150",
        "inputFormatHint": "Максимум 150 символов",
        "inputRequired": false
    },
    {
        "_reactInputName": "userEmail",
        "key": "b9a082c9-ce7c-4277-9d95-6c6b9ccdcd55",
        "inputId": "user_email",
        "labelText": "Почта",
        "inputPlaceholder": "Для квитанций об оплате",
        "inputPattern": ".+@.+\\..+",
        "inputFormatHint": "example@site.com",
        "inputRequired": false
    }
]
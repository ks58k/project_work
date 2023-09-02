import './lenta.scss'
import Handlebars from 'handlebars';

export { default as Lenta } from './lenta.hbs?raw';

Handlebars.registerHelper('messages', () => {
    return [
        {senderClass: 'send_from', dateMessage: "12.02.2023 11:55:55", message: 'Последний текст текст текст текст текст текст текст '},
        {senderClass: 'send_to', dateMessage: "11.02.2023 12:55:55", message: 'Последний текст2'},
        {senderClass: 'send_from', dateMessage: "12.02.2023 13:55:55", message: 'Последний текст текст текст текст текст текст текст '},
        {senderClass: 'send_from', dateMessage: "12.02.2023 14:55:55", message: 'Последний текст текст текст текст текст текст текст '},
        {senderClass: 'send_to', dateMessage: "11.02.2023 15:05:55", message: 'Последний текст2 222 text '},
    ]
})
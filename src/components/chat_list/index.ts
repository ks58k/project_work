import './chat_list.scss'
import Handlebars from 'handlebars';
import img1 from '../../assets/01.jpg'
import img2 from '../../assets/02.jpg'
import img3 from '../../assets/03.jpg'

export { default as ChatList } from './chat_list.hbs?raw';

Handlebars.registerHelper('chats', () => {
    return [
        {name: 'Вася', ava: img1, last_text: 'Последний текст', active: true},
        {name: 'Петя', ava: img2, last_text: 'Последний текст'},
        {name: 'Федя', ava: img3, last_text: 'Последний текст'},
    ]
})
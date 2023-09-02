import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';


const pages = {
  'login': [ Pages.LoginPage ],
  'registration': [Pages.RegistrationPage],
  'chats': [Pages.ChatsPage],
  'page404': [Pages.Page404],
  'page500': [Pages.Page500],
  'profile': [Pages.ProfilePage],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

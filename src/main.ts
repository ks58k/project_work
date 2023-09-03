import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';


type PageArray = Array<typeof Pages.StartPage | typeof Pages.LoginPage | typeof Pages.RegistrationPage | typeof Pages.ChatsPage | typeof Pages.Page404 | typeof Pages.Page500 | typeof Pages.ProfilePage>;

type Pages = {
  [key: string]: PageArray;
  start: PageArray;
  login: PageArray;
  registration: PageArray;
  chats: PageArray;
  page404: PageArray;
  page500: PageArray;
  profile: PageArray;
}

const pages: Pages = {
  'start': [Pages.StartPage],
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

document.addEventListener('DOMContentLoaded', () => navigate('start'));

document.addEventListener('click', e => {
   const target = e.target as HTMLElement;
   const page = target.getAttribute('page');
  //const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

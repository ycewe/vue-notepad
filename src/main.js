import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Auth from './data/Auth';
import NotesPage from './components/pages/Notes';
import AuthPage from './components/pages/Auth';

Vue.use(VueRouter);

const app = Vue.extend({
  components: { App },
});

const router = new VueRouter();

router.map({
  '/notes': {
    name: 'notes',
    component: NotesPage,
    auth: true,
  },
  '/auth': {
    name: 'auth',
    component: AuthPage,
  },
});

router.alias({
  '/': '/notes',
});

router.beforeEach((transition) => {
  if (transition.to.auth && !Auth.getAuth()) {
    transition.redirect('/auth');
  } else {
    transition.next();
  }
});

router.start(app, 'body');

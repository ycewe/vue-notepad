import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
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
  },
  '/auth': {
    name: 'auth',
    component: AuthPage,
  },
});

router.alias({
  '/': '/notes',
});

router.start(app, 'body');

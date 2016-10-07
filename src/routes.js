import App from 'container/App';

function errorLoading(err) {
  console.log('Page failed to load: ', err); // eslint-disable-line
}

function loadRoute(cb) {
  return ({ default: module} ) => cb(null, module);
}

export default {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    {
      path: 'home',
      getComponent(location, cb) {
        System.import('containers/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'todo',
      getComponent(location, cb) {
        System.import('containers/Todo')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: 'counter',
      getComponent(location, cb) {
        System.import('containers/Counter')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('containers/NotFound')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};

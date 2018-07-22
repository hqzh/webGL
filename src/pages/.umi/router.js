import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/admin",
        "exact": true,
        "component": require('../admin.js').default
      },
      {
        "path": "/delay",
        "exact": true,
        "component": require('../delay.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index/index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login.js').default
      },
      {
        "path": "/list",
        "exact": false,
        "component": require('../list/_layout.js').default,
        "routes": [
          {
            "path": "/list",
            "exact": true,
            "component": require('../list/index.js').default
          },
          {
            "path": "/list/list",
            "exact": true,
            "component": require('../list/list.js').default
          },
          {
            "path": "/list/search",
            "exact": true,
            "component": require('../list/search/index.js').default
          },
          {
            "component": () => React.createElement(require('C:/Users/Administrator/Desktop/webGL/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/admin","exact":true,"component":"./src/pages/admin.js"},{"path":"/delay","exact":true,"component":"./src/pages/delay.js"},{"path":"/index/components/Count","exact":true,"component":"./src/pages/index/components/Count.js"},{"path":"/","exact":true,"component":"./src/pages/index/index.js"},{"path":"/index/model","exact":true,"component":"./src/pages/index/model.js"},{"path":"/login","exact":true,"component":"./src/pages/login.js"},{"path":"/list","exact":false,"component":"./src/pages/list/_layout.js","routes":[{"path":"/list","exact":true,"component":"./src/pages/list/index.js"},{"path":"/list/list","exact":true,"component":"./src/pages/list/list.js"},{"path":"/list/models/a","exact":true,"component":"./src/pages/list/models/a.js"},{"path":"/list/models/b","exact":true,"component":"./src/pages/list/models/b.js"},{"path":"/list/search","exact":true,"component":"./src/pages/list/search/index.js"},{"path":"/list/search/model","exact":true,"component":"./src/pages/list/search/model.js"}]}]}]' })
          }
        ]
      },
      {
        "component": () => React.createElement(require('C:/Users/Administrator/Desktop/webGL/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src\\\\layouts\\\\index.js","routes":[{"path":"/admin","exact":true,"component":"./src/pages/admin.js"},{"path":"/delay","exact":true,"component":"./src/pages/delay.js"},{"path":"/index/components/Count","exact":true,"component":"./src/pages/index/components/Count.js"},{"path":"/","exact":true,"component":"./src/pages/index/index.js"},{"path":"/index/model","exact":true,"component":"./src/pages/index/model.js"},{"path":"/login","exact":true,"component":"./src/pages/login.js"},{"path":"/list","exact":false,"component":"./src/pages/list/_layout.js","routes":[{"path":"/list","exact":true,"component":"./src/pages/list/index.js"},{"path":"/list/list","exact":true,"component":"./src/pages/list/list.js"},{"path":"/list/models/a","exact":true,"component":"./src/pages/list/models/a.js"},{"path":"/list/models/b","exact":true,"component":"./src/pages/list/models/b.js"},{"path":"/list/search","exact":true,"component":"./src/pages/list/search/index.js"},{"path":"/list/search/model","exact":true,"component":"./src/pages/list/search/model.js"}]}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}

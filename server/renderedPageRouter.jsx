import React from 'react';
import { renderToString } from 'react-dom/server';
import Router from 'express';

import HelloWorld from '../src/HelloWorld.jsx';
import template from './template.js';

const renderedPageRouter = new Router();

renderedPageRouter.get('*', (req, res) => {
  const html = renderToString(<HelloWorld />);
  res.send(template(html));
});

export default renderedPageRouter;

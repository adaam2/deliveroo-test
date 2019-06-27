import React from 'react';
import express from "express";
import { StaticRouter } from "react-router";
import { renderToString } from 'react-dom/server';

import App from '../../App';
import apiRoutes from "./api";

const router = express.Router();
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

router.use(express.static(process.env.RAZZLE_PUBLIC_DIR))

router.use('/api', apiRoutes);

router.get('/*', (req, res) => {
    const context: { url?: string; } = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
          <html lang="en">
          <head>
              <link rel="preload" href="//consumer-component-library.roocdn.com/13.13.0/static/fonts/IBMPlexSans-Regular.dc16f54ea33a9556b9035a9b05e96711.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
              <link rel="preload" href="//consumer-component-library.roocdn.com/13.13.0/static/fonts/stratos-semibold.b00ca2148f03da7f28865214a97c568e.woff2" as="font" type="font/woff2" crossorigin="anonymous">
              <link rel="preload" href="//consumer-component-library.roocdn.com/13.13.0/static/fonts/IBMPlexSans-Bold.1920d19939b703c6610b0e6c197e3fce.woff2" as="font" type="font/woff2" crossorigin="anonymous" class="next-head">
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Deliveroo</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
          </head>
          <body>
              <div id="root">${markup}</div>
          </body>
        </html>`
      );
    }
  });

export default router;

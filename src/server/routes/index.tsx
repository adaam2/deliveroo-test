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
            <html lang="">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <title>Welcome to Razzle</title>
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

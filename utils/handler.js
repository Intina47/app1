// rate limiter
import rateLimit from 'express-rate-limit';

const express = require('express');

const app = express();

const apiLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 10,
    message: 'Too many requests from this IP, please try again in a minute',
});
// create handler
app.use(apiLimiter);
export function createHandler() {
    const handlers = {};

    const handler = async (req, res) => {
      try {
        const method = req.method?.toLowerCase();
        if (method && handlers[method]) {
          await handlers[method](req, res);
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      } catch (error) {
        console.error(error);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    };

    ['get', 'post', 'put', 'delete'].forEach((method) => {
      handler[method] = (fn) => {
        handlers[method] = fn;
        return handler;
      };
    });

    return handler;
  }

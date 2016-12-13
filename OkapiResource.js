import RESTResource from './RESTResource';
// TODO: pass in config externally, perhaps returning curried functions
// ...the OKAPI_URL via webpack.DefinePlugin is an interim measure to enable
// standalone components.
let system;

/* global OKAPI_URL */
if (OKAPI_URL) {
  system = { okapi: { url: OKAPI_URL } };
} else {
  system = require('stripes-loader!');
}

const defaults = {
  root: system.okapi.url,
  pk: 'id',
  clientGeneratePk: true,
  fetch: true,
  headers: {
    'X-Okapi-Tenant': system.okapi.tenant,
    'Authorization': 'x',
  },
  POST: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  },
  DELETE: {
    headers: {
      'Accept': 'text/plain',
    },
  },
  GET: {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  },
  PUT: {
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'application/json',
    },
  },
};

export default class OkapiResource extends RESTResource {
  constructor(name, query = {}, module = null) {
    super(name, query, module, defaults);
  }
}
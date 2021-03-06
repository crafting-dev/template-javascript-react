# Javascript/React template for Crafting Sandbox

This is a Javascript/[React](https://reactjs.org/) template, configured for quick development setup in [Crafting Sandbox](https://docs.sandboxes.cloud/docs).

## Specifications

This template contains a single [`Ping`](src/Ping.js) component:

```js
<React.StrictMode>
  <Ping />
</React.StrictMode>
```

This component consists of a form with a single input and a button.

Once form is submitted, a GET request is made to some backend server that exposes a `/ping` api. This Ping component then renders the api response data.

```js
<code>
  {JSON.stringify(
    {
      ping: pong.ping,
      received_at: new Date(pong.received_at).toLocaleString(),
    },
    null,
    2
  )}
</code>
```

To run the app, you can do:

```bash
PORT=3001 npm start
```

## App Definition

The following [App Definition](https://docs.sandboxes.cloud/docs/app-definition) was used to create this template:

```yaml
endpoints:
- name: app
  http:
    routes:
    - pathPrefix: "/"
      backend:
        target: js-react
        port: app
    authProxy:
      disabled: true
workspaces:
- name: js-react
  description: Template frontend using Js/React
  ports:
  - name: app
    port: 3001
    protocol: HTTP/TCP
  checkouts:
  - path: frontend
    repo:
      git: https://github.com/crafting-dev/template-javascript-react
  packages:
  - name: nodejs
    version: 16.12.0
```

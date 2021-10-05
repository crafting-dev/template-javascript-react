# Javascript React template for Cloud Sandbox

This is a template React app, written in Javascript, and bootstrapped with [`create-react-app`](https://create-react-app.dev/), for quick front-end development startup in Cloud Sandbox.

## Specifications

The following `App Configuration` was used when creating this template:

```yarn
spec:
  endpoints:
  - http:
      routes:
      - backend:
          port: web
          target: js-react
        path_prefix: /
    name: app
  services:
  - description: Javascript/React template
    name: js-react
    workspace:
      checkouts:
      - path: template-javascript-react
        repo:
          git: https://github.com/crafting-dev/template-javascript-react.git
      packages:
      - name: nodejs
        version: ~16
      ports:
      - name: web
        port: 3000
        protocol: HTTP/TCP
```
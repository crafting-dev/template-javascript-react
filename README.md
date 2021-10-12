# Javascript React template for Cloud Sandbox

This is a Javascript React template, bootstrapped using [`create-react-app`](https://create-react-app.dev/), for quick development setup in Cloud Sandbox.

## Specifications

The following `App Configuration` was used when creating this template:

```yarn
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
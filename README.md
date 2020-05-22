# Proxy Server

## Installation

```bash
# yarn
$ yarn global add @arthur791004/proxy-server

# npm
$ npm install --global @arthur791004/proxy-server
```

## Usage

Provide a `proxy.config.json` at current working directory

```json
{
  "port": "number",
  "proxy": {
    "<route>": "<http-proxy-options>"
  }
}
```

Run as follow

```bash
$ proxy-server
```

## Options

- port - the port which proxy listen on
- proxy
  - key - route path
  - value - http proxy options and you could see documents at [here](https://github.com/http-party/node-http-proxy#options)

<h1 align="center">
    <img src="https://raw.githubusercontent.com/shinigamilib/shinigami-py/main/assets/shinigami_logo.png" />
</h1>

Shinigami is an open source TypeScript/JavaScript library allowing the user to generate Dockerfiles during runtime.

This library is currently not maintained and is missing a lot of the features of its counterparts. I may eventually come back and update it if the necessity arises, but currently, I have no use for this library in any other projects.

If someone else is interested in helping maintain the TypeScript port, feel free to submit a PR! :)

This code was originally created as an open source Python module, converted to TypeScript/JavaScript for availability. If you're interested in using the Python version, check it out [here](https://github.com/shinigamilib/shinigami-py).

## Install

Shinigami is currently in the npm registry, so it should be pretty straightforward to install

```bash
npm i shinigami
```

## Usage

Getting started is easy, all you have to do is import the library and call a single function

Here's an example:
```typescript
import { shinigami } from "shinigami"

// Generates a Dockerfile using the Python 3.9 template
const generateDockerfile = () => {
    shinigami("python", "3.9")
}
```

You can find all available Dockerfiles here: [DockDB](https://github.com/shinigamilib/DockDB)

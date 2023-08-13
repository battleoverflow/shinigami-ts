<h1 align="center">
    <img src="https://raw.githubusercontent.com/azazelm3dj3d/shinigami/main/assets/shinigami_logo.png" />
</h1>

Shinigami is an open source TypeScript/JavaScript library allowing the user to generate Dockerfiles during runtime.

This library is currently not maintained and is missing some of the features of its counterparts. For now, the project is archived.

This code was originally created as an open source Python module, converted to TypeScript/JavaScript for availability. If you're interested in using the Python version, check it out [here](https://github.com/azazelm3dj3d/shinigami).

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

You can find all available Dockerfiles here: [DockDB](https://github.com/azazelm3dj3d/DockDB)

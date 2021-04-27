# FOE Tools

<div align="center">

[![GitHub release][img-version-badge]][repo] [![Code of Conduct][coc-badge]][coc] [![GitHub license][license-badge]][license] [![All Contributors][all-contributors-badge]](#contributors) [![PRs Welcome][prs-badge]][prs]

[![codecov][codecov-badge]][codecov]

</div>

This repo is the [website](https://foe-tools.github.io/) of FOE Tools, a set of tools for [Forge of Empires](https://forgeofempires.com).

## Install

Using npm:

```bash
npm install
```

Copy `sample.env` to `.env`. For development, you do not need to edit this file.

## Start the server

Using npm:

```bash
npm start
```

## Start in development mode

Using npm:

```bash
npm run dev
```

## Build a static site

Build the project in production mode:

Using npm:

```bash
npm run build
```

The generated static site will be placed in `dist/`.

Generate all files for production (or test for production):

```bash
npm run generate:gh
```

> _**Note**: You need an HTTP server to test with generated. You can use [http-serve](https://www.npmjs.com/package/http-serve)._

## Tests

To run all test just execute this command:

```bash
npm run test
```

### Unit test

You can run unit test with:

```bash
npm run test:unit
```

If you want to run in watch mode just add `:watch`:

```bash
npm run test:unit:watch
```

### End-to-end

You can run unit test with:

```bash
npm run test:e2e
```

## TODO

See [issues](https://github.com/FOE-Tools/FOE-Tools.github.io/issues).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Code of Conduct

This project adheres to the [Contributor Covenant](https://www.contributor-covenant.org/). By participating in this project you agree to abide by its terms.

## Contributors

See [CONTRIBUTORS.md](./CONTRIBUTORS.md)

## License

MIT

<div align="center">

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FFOE-Tools%2FFOE-Tools.github.io.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FFOE-Tools%2FFOE-Tools.github.io?ref=badge_large)

</div>

<!--
Repo References
-->

[repo]: https://github.com/FOE-Tools/FOE-Tools.github.io
[coc]: ./CODE_OF_CONDUCT.md "Contributor Covenant Code of Conduct"
[license]: ./LICENSE "License"

<!--
Badge References
-->

[img-version-badge]: https://img.shields.io/badge/dynamic/json.svg?label=version&url=https%3A%2F%2Fraw.githubusercontent.com%2FFOE-Tools%2FFOE-Tools.github.io%2Fproduction%2Fpackage.json&query=%24.version&colorB=brightgreen&style=for-the-badge
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-3488db.svg?style=for-the-badge
[license-badge]: https://img.shields.io/github/license/FOE-Tools/FOE-Tools.github.io.svg?style=for-the-badge
[all-contributors-badge]: https://img.shields.io/badge/dynamic/json.svg?label=ALL%20CONTRIBUTORS&url=https%3A%2F%2Fraw.githubusercontent.com%2FFOE-Tools%2FFOE-Tools.github.io%2Fproduction%2Fall-contributorsrc.json&query=%24.contributors.length&colorB=brightorange&style=for-the-badge
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJzdmcyIiB3aWR0aD0iNjQ1IiBoZWlnaHQ9IjU4NSIgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPiA8ZyBpZD0ibGF5ZXIxIj4gIDxwYXRoIGlkPSJwYXRoMjQxNyIgZD0ibTI5Ny4zIDU1MC44N2MtMTMuNzc1LTE1LjQzNi00OC4xNzEtNDUuNTMtNzYuNDM1LTY2Ljg3NC04My43NDQtNjMuMjQyLTk1LjE0Mi03Mi4zOTQtMTI5LjE0LTEwMy43LTYyLjY4NS01Ny43Mi04OS4zMDYtMTE1LjcxLTg5LjIxNC0xOTQuMzQgMC4wNDQ1MTItMzguMzg0IDIuNjYwOC01My4xNzIgMTMuNDEtNzUuNzk3IDE4LjIzNy0zOC4zODYgNDUuMS02Ni45MDkgNzkuNDQ1LTg0LjM1NSAyNC4zMjUtMTIuMzU2IDM2LjMyMy0xNy44NDUgNzYuOTQ0LTE4LjA3IDQyLjQ5My0wLjIzNDgzIDUxLjQzOSA0LjcxOTcgNzYuNDM1IDE4LjQ1MiAzMC40MjUgMTYuNzE0IDYxLjc0IDUyLjQzNiA2OC4yMTMgNzcuODExbDMuOTk4MSAxNS42NzIgOS44NTk2LTIxLjU4NWM1NS43MTYtMTIxLjk3IDIzMy42LTEyMC4xNSAyOTUuNSAzLjAzMTYgMTkuNjM4IDM5LjA3NiAyMS43OTQgMTIyLjUxIDQuMzgwMSAxNjkuNTEtMjIuNzE1IDYxLjMwOS02NS4zOCAxMDguMDUtMTY0LjAxIDE3OS42OC02NC42ODEgNDYuOTc0LTEzNy44OCAxMTguMDUtMTQyLjk4IDEyOC4wMy01LjkxNTUgMTEuNTg4LTAuMjgyMTYgMS44MTU5LTI2LjQwOC0yNy40NjF6IiBmaWxsPSIjZGQ1MDRmIi8%2BIDwvZz48L3N2Zz4%3D
[codecov-badge]: https://codecov.io/gh/FOE-Tools/FOE-Tools.github.io/branch/develop/graph/badge.svg?style=flat-square

<!--
Link References
-->

[dependency]: https://david-dm.org/FOE-Tools/FOE-Tools.github.io/
[devdependency]: https://david-dm.org/FOE-Tools/FOE-Tools.github.io/?type=dev
[prs]: http://makeapullrequest.com "Make a Pull Request (external link) ➶"
[codecov]: https://codecov.io/gh/FOE-Tools/FOE-Tools.github.io

## Powered By

[![](./static/vercel-dark.svg)](https://vercel.com/?utm_source=foe-tools&utm_campaign=oss)

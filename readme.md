# is-origami-flat [![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](#licence)

This package is a command-line program which reports whether a project is using mulitple versions of any Origami Component. E.G. Detecting that `@financial-times/o-table@6` and `@financial-times/o-table@7` are both in the dependency tree. This is needed because Origami Components do not support multiple versions of themselves in a single project.

- [Install](#install)
- [Contact](#contact)
- [Licence](#licence)

## Install

The best way to use this package is to install it as a dependency and have it run automatically whenever dependencies are installed.

1. Install the package from npm. - `npm install is-origami-flat`
1. Add a `postshrinkwrap` [npm run-script](https://docs.npmjs.com/misc/scripts) which runs `is-origami-flat`. `"postshrinkwrap": "is-origami-flat"`

---

## Contact

If you have any questions or comments about this package, or need help using it, please either [raise an issue](https://github.com/Financial-Times/is-origami-flat/issues), visit [#origami-support](https://financialtimes.slack.com/messages/origami-support/) or email [Origami Support](mailto:origami-support@ft.com).

---

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).

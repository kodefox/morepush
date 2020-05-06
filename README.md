# morepush · ![](https://github.com/kodefox/morepush/workflows/Unit%20Test/badge.svg) · ![npm](https://img.shields.io/npm/v/morepush)
A library for monorepo pre-push hooks to test changed project only.

## Installation

```shell
yarn add -D morepush
```

## Usage

```
yarn morepush <PARENT_DIR_NAME>
```

For example, if you have monorepo tree that goes like this:
```
infra
  - packages
    - eslint-config-kodefox
    - exoflex
    - flexhip
```

You can use `infra/packages` as the `PARENT_DIR_NAME`.

```shell
$ yarn morepush infra/packages
```

### Options

You can also exclude one or more project directory by using `--exclude`.

```shell
$ yarn morepush infra/packages --exclude eslint-config-kodefox exoflex
```

# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [unreleased]
### Added
### Changed
### Fixed
### Removed
### Breaking Changes

# [4.0.0-beta.6] (2022-01-23)

### Fix

- Fix stylelint and remove internal packages

# [4.0.0-beta.5] (2022-01-23)

### Changed

- Changed the front-linter internals

# [4.0.0-beta.4] (2022-01-22)

### Changed (Not working)
- Updated dependencies to make typescript work 

# [4.0.0-beta.3] (2021-06-11)

- Replaced stylelint deprecated package 

# [4.0.0-beta.2] (2021-06-09)

- Update dependencies


# [4.0.0-beta.1] (2021-03-27)

### Added

- Typescript as peerDependency
- Update Readme

# [4.0.0-beta.0] (2021-03-27)

## Breaking Changes

- Introduce overrrides api
- Change exposed configurations


# [3.0.0-beta.10] 2021-03-27

## Changed

- Updated packages


# [3.0.0-beta.9] - 2021-02-04

## Added

- React perf plugin

## Fixed

- Fixed unit-blacklist deprecated rule


## [3.0.0-beta.8] - 2020-12-05

## Fixed

- Fixed typescript with react no-undef for namespaces

## [3.0.0-beta.7] - 2020-11-08

## Changed

- Updated to last eslint packages

## [3.0.0-beta.6] - 2020-08-11

## Added
- no-const-assign rule is added to prevent errors reassigning variables

## Changed
- react/react-in-jsx-scope rule is now off

## [3.0.0-beta.5] - 2020-07-14
## Fixed
- Fixed broken stylelint

## [3.0.0-beta.4] - 2020-07-14
## Add
  - Add peerDependency to eslint-import-resolver-typescript for typescript preset

## [3.0.0-beta.3] - 2020-07-11
## Fixed
  - False positive react/prop-types

## [3.0.0-beta.2] - 2020-07-11
## Added
  - Ban default exports
  - Consistency in fragments

## Updated
  - Packages

## Fixed
  - Typescript configuration

## [3.0.0-beta.1] - 2020-06-13
## Fixed
  - Fixed ban-ts-ignore

## [3.0.0-beta.0] - 2020-06-13

## Changed
  - Updated prettier 2.0
  - Updated to eslint 7

## [2.5.1] - 2019-12-25

## Changed
  - Ban ts-ignore
  - Unused vars should be warning
  - Presets should only lint their own files

## [2.5.0] - 2019-12-06

## Changed
  - New typescript plugins for eslint dropping some internal packages to make it work
  - Update prettier packages

## [2.4.0] - 2019-08-17

### Added

- Added plugin eslint-import 

### Changed

- Update the eslint-react-hooks package

## [2.3.1] - 2019-06-26
### Added
- Fix jest environment

## [2.3.0] - 2019-06-25
### Added
- Add no-undef rule and declare environments

## [2.2.0] - 2019-05-08
### Added
- Update prettier to last version
- Add react settings to eslint with the detect feature

## [2.1.0] - 2019-04-18
### Added
- Typescript default config

### Changed
- Update prettier
- Change quotes-props as consistent

### Fixed
- Extensions to lint

## [2.0.1] - 2019-04-08
### Fixed
- Remove stylelint rules

## [2.0.0] - 2019-04-08
### Added
- Documentation
- Release the final version

## [2.0.0-beta.3] - 2019-03-09
### Added
- Added eslint-plugin-jsx-a11y for accesibility
- Added rule for no duplicated props

## [2.0.0-beta.2] - 2019-03-09
### Fixed
- Fixed error with typescript preset

## [2.0.0-beta.1] - 2019-03-09
### Fixed
- Fixed error in extends

## [2.0.0-beta.0] - 2019-03-09
### Added
- Added presets

## [1.3.0] - 2019-03-08
### Added
- Added rule for stylelint no-extra-semicolons
### Changed
- Update eslint-react-hooks to be in sync with react team

## [1.2.0] - 2019-03-02
### Changed
- Update eslint-react-hooks to be in sync with react team

## [1.1.0] - 2019-02-22
### Added
- Added exhaustive-deps rules react-hooks

## [1.0.0] - 2019-02-17
### Added

- Added Readme docs

## [1.0.0-beta.4] - 2019-02-16
### Added

- Fix linting for typescript

## [1.0.0-beta.3] - 2019-02-16
### Added

- Added typescript support

## [1.0.0-beta.2] - 2019-02-16
### Added

- Added eslint react-hooks

## [1.0.0-beta.1] - 2019-01-20
### Fixed

- Fixed some readme typos
- Lint all scss files not only in src

## [1.0.0-beta.0] - 2019-01-20
### Added
- Forked from https://github.com/SUI-Components/sui/blob/master/packages/sui-lint, version 2.20.0
- Add self linter. Add pre-commit hook.
- Read previous changes in https://github.com/SUI-Components/sui/blob/master/packages/sui-lint/CHANGELOG.md

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## 1.0.0 (2026-03-17)


### Features

* GitHub Project & Repo Standardization (Plan 1) ([11d5599](https://github.com/AzureLocal/azurelocal.github.io/commit/11d5599ae895013f61d05c7a50c353c37d00b266))
* migrate Azure Local Anywhere docs into Docusaurus site ([1df5264](https://github.com/AzureLocal/azurelocal.github.io/commit/1df5264bc863d4ae97018232d2ef8a63821bcbcf)), closes [#11](https://github.com/AzureLocal/azurelocal.github.io/issues/11)


### Bug Fixes

* format custom.css for Prettier CI check ([252c131](https://github.com/AzureLocal/azurelocal.github.io/commit/252c1312c6e51b9c125d8f207c4e563fc9f8f85f))
* make Vale non-blocking with continue-on-error during transition ([d3a7f78](https://github.com/AzureLocal/azurelocal.github.io/commit/d3a7f78704b68e63a10e34cfd1e61338d17870ed))
* scope Vale linting to docs/blog/src, exclude project_management ([33c6aa7](https://github.com/AzureLocal/azurelocal.github.io/commit/33c6aa7ff77b5c335f786076a900d6e0c5e6b923))
* scope Vale to docs/ directory only, fix vale-action config ([6695f87](https://github.com/AzureLocal/azurelocal.github.io/commit/6695f87b90561967d0f575508da68f13b3a7d268))
* update footer credit to Hybrid Cloud Solutions ([1b2cba8](https://github.com/AzureLocal/azurelocal.github.io/commit/1b2cba8125299dc6b072afadfe59af9fcd65eac4))
* update Solution field option IDs after Toolkit option added to Project [#3](https://github.com/AzureLocal/azurelocal.github.io/issues/3) ([8ae4725](https://github.com/AzureLocal/azurelocal.github.io/commit/8ae4725451b7eebbd9d4044804ce9184053fb06a))

## [Unreleased]

### Features

- Docusaurus 3.7.0 community portal at azurelocal.cloud
- Blog engine with authors and tags
- Versioned documentation (1.0.0, 2.0.0)
- Project management hub for cross-repo planning

### Infrastructure

- GitHub Pages deployment via GitHub Actions
- Vale linting with Microsoft style rules
- Add issue and PR templates
- Add CONTRIBUTING.md and LICENSE

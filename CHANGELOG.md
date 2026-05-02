# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2604.1.0](https://github.com/AzureLocal/azurelocal.github.io/compare/v2604.0.1...v2604.1.0) (2026-05-02)


### Features

* add -AssociateNsg switch to logical network scripts for opt-in NSG association ([f9f3bbb](https://github.com/AzureLocal/azurelocal.github.io/commit/f9f3bbb1366e28f1b524dc6b907b2fefcb62549e))
* add Azure Local Surveyor to Solutions nav dropdown ([a62c648](https://github.com/AzureLocal/azurelocal.github.io/commit/a62c64864fb3ccdca6f77dbde55d7655917a2946))
* add Migration section to Solutions dropdown (VMware Migration, VM Conversion) ([ad6d920](https://github.com/AzureLocal/azurelocal.github.io/commit/ad6d9200b33cf40b8c6ecf338de06ef57ad4e1aa))
* add NSG configuration task (Task 07), renumber logical networks and verification tasks, update naming standards, repurpose op-foundations NSG doc as Day 2 management ([1173903](https://github.com/AzureLocal/azurelocal.github.io/commit/1173903347da6913ed5fa3a0ddaa7d37b2598a6b))
* add Nutanix Migration link to Solutions dropdown ([a922a69](https://github.com/AzureLocal/azurelocal.github.io/commit/a922a6979243cfe3cbac77e3dcbc1940239df0ee))
* add unique project ID field automation (DOCS-N prefix) ([7ba6416](https://github.com/AzureLocal/azurelocal.github.io/commit/7ba641624ecaf006c45e5e28edc5638a204cf0e1))
* **docs:** add Azure Local 2604 features — Simplified Provisioning, SAN deployment, Local Identity GA ([406154f](https://github.com/AzureLocal/azurelocal.github.io/commit/406154f134b8714833b0ef9de2589ea84c578d9e))
* **docs:** Add Azure Local 2604 features — Simplified Provisioning, SAN deployment, Local Identity GA ([16a66ac](https://github.com/AzureLocal/azurelocal.github.io/commit/16a66ac5807e438cc12f46741504ab1a35441795))
* enrich Azure Services pages with service details, repo info, and links ([c5bc520](https://github.com/AzureLocal/azurelocal.github.io/commit/c5bc520f780b0c412e31d1b4a2c5878171959e07))
* GitHub Project & Repo Standardization (Plan 1) ([11d5599](https://github.com/AzureLocal/azurelocal.github.io/commit/11d5599ae895013f61d05c7a50c353c37d00b266))
* migrate Azure Local Anywhere docs into Docusaurus site ([1df5264](https://github.com/AzureLocal/azurelocal.github.io/commit/1df5264bc863d4ae97018232d2ef8a63821bcbcf)), closes [#11](https://github.com/AzureLocal/azurelocal.github.io/issues/11)
* migrate to reusable org workflows and add new-repo-setup runbook ([5116786](https://github.com/AzureLocal/azurelocal.github.io/commit/51167862483b5bb404938386793858f2dfca1154))
* **nav:** add Azure Local Ranger and S2D Cartographer to Solutions dropdown ([bbc36a7](https://github.com/AzureLocal/azurelocal.github.io/commit/bbc36a7bb4d59e4b7a04df51c5d4ae5ea27693e6))
* **nav:** restructure Solutions dropdown and footer into grouped categories with 10 new repos ([8ac4c8c](https://github.com/AzureLocal/azurelocal.github.io/commit/8ac4c8cdd197ec8f3cb0b7346e0aa6957458b37f))
* **pages:** create More navbar pages (About, Contact, FAQ, Links, Resources) ([ccdb357](https://github.com/AzureLocal/azurelocal.github.io/commit/ccdb357121399f513ab15ca3b7b5e1a5a0134e9e)), closes [#28](https://github.com/AzureLocal/azurelocal.github.io/issues/28)
* **san:** add SAN disaggregated deployment path (Phase 03 + planning + structure) ([1e759a0](https://github.com/AzureLocal/azurelocal.github.io/commit/1e759a0affc25a01a23e8703a6adedaa15c078a3))
* **san:** add SAN runbooks, post-deployment tasks, and FC appendices ([83762af](https://github.com/AzureLocal/azurelocal.github.io/commit/83762af57015d97dc00c042f8f1bddc7fb7cfc4c))
* **standards:** add scheduled sync workflow from AzureLocal/platform ([#42](https://github.com/AzureLocal/azurelocal.github.io/issues/42)) ([7c44e19](https://github.com/AzureLocal/azurelocal.github.io/commit/7c44e19a6631df1dc5c1f3b5b76229eafe5e27a4))
* **versioning:** align doc versions with Azure Local build numbering ([7fbdd7b](https://github.com/AzureLocal/azurelocal.github.io/commit/7fbdd7b7c4518494a926f3c7ded5aa8b5233d092))


### Bug Fixes

* add index and reference docs to manual sidebar ([a0c7694](https://github.com/AzureLocal/azurelocal.github.io/commit/a0c7694ee051c163280434a8018938795a275fff))
* add reopened trigger to add-to-project workflow ([5b5b849](https://github.com/AzureLocal/azurelocal.github.io/commit/5b5b849767dfd003ec476d2fc8dd7724f71331f7))
* align naming standards with IIC example company ([da72451](https://github.com/AzureLocal/azurelocal.github.io/commit/da72451358e221f3dee8170aacef3c1af3864004))
* automation section landing page - link category to index doc ([502812e](https://github.com/AzureLocal/azurelocal.github.io/commit/502812e8a4d63cdfdf55e0bf505caecf145831fe))
* **ci:** document platform tag format in sync workflow dispatch input ([9264ac5](https://github.com/AzureLocal/azurelocal.github.io/commit/9264ac55069cc6e2b9f35dc9d34c7f24b2789277))
* **ci:** update sync source path from standards/ to docs/standards/ ([1a87368](https://github.com/AzureLocal/azurelocal.github.io/commit/1a873680cbdf826dfb9ca436137ada9b7aafb87d))
* **ci:** use git status --porcelain to detect new/deleted standards files ([93b6738](https://github.com/AzureLocal/azurelocal.github.io/commit/93b6738ff66b4292e7fe4c70d33ca57630907e2d))
* correct Azure Virtual Desktop link in docusaurus.config.js ([5a9bf9f](https://github.com/AzureLocal/azurelocal.github.io/commit/5a9bf9fef9d6a117c421360b9f8a3a5147c06173))
* correct azurelocal-avd workspace path typo ([de08bcf](https://github.com/AzureLocal/azurelocal.github.io/commit/de08bcf34954d9db8128592cb9e8ac6ee3c25bcb))
* **docs:** replace 'Azure Local Cloudnology Team' with 'Azure Local Cloud' in all docs ([20f313f](https://github.com/AzureLocal/azurelocal.github.io/commit/20f313f06ea1ea65368b5034c13fddd57c979aca)), closes [#29](https://github.com/AzureLocal/azurelocal.github.io/issues/29)
* explicit category wrappers restore proper sidebar grouping ([70336b4](https://github.com/AzureLocal/azurelocal.github.io/commit/70336b4e19ba5cfb18b4d7fde4072a221e57a804))
* format custom.css for Prettier CI check ([252c131](https://github.com/AzureLocal/azurelocal.github.io/commit/252c1312c6e51b9c125d8f207c4e563fc9f8f85f))
* format custom.css with Prettier ([f1362f6](https://github.com/AzureLocal/azurelocal.github.io/commit/f1362f6613ea28963773c6adb08f8c2de96ee771))
* hide index.mdx from sidebar to remove duplicate entry ([0c8a052](https://github.com/AzureLocal/azurelocal.github.io/commit/0c8a0525c991727bb7b3df5af4bbf9ed8e0dccf2))
* **links:** correct two broken relative paths in SAN content ([b2c9d5a](https://github.com/AzureLocal/azurelocal.github.io/commit/b2c9d5a6318e2e1cc0e5eb7b0777e706e01e641f))
* make set-fields resilient to add-to-project failures ([e7ebe7b](https://github.com/AzureLocal/azurelocal.github.io/commit/e7ebe7b7380da4719e0951aa5118fc8faf8a3e1c))
* make Vale non-blocking with continue-on-error during transition ([d3a7f78](https://github.com/AzureLocal/azurelocal.github.io/commit/d3a7f78704b68e63a10e34cfd1e61338d17870ed))
* manual sidebar excluding assets, Training as top-level link ([5c15b33](https://github.com/AzureLocal/azurelocal.github.io/commit/5c15b33d519abd998df381e1a25573d8ceec99a6))
* merge intro.md into index.mdx and remove stale versioned docs ([#23](https://github.com/AzureLocal/azurelocal.github.io/issues/23)) ([bd3f322](https://github.com/AzureLocal/azurelocal.github.io/commit/bd3f322a9e8a13124ec9e731b736f99331bcbe45)), closes [#19](https://github.com/AzureLocal/azurelocal.github.io/issues/19)
* merge landing page content, fix broken anchors, remove vendor-specific refs ([baa66d4](https://github.com/AzureLocal/azurelocal.github.io/commit/baa66d4f9c7d922c33f56390b1164a5f1eafc441)), closes [#19](https://github.com/AzureLocal/azurelocal.github.io/issues/19)
* **nav:** correct S2D Cartographer link casing in solutions menu ([1f778d1](https://github.com/AzureLocal/azurelocal.github.io/commit/1f778d1e96518752031445565e57d5666a8fde77))
* point all training links to azurelocal-training subsite, remove local training section ([bd9957e](https://github.com/AzureLocal/azurelocal.github.io/commit/bd9957eb0a4e889471560da861ad51e282145fa2))
* prettier format index.js ([6b49d7b](https://github.com/AzureLocal/azurelocal.github.io/commit/6b49d7b57fef0c5cb422f28040df04da7197a0f2))
* prettier formatting on index.js ([3ac06c2](https://github.com/AzureLocal/azurelocal.github.io/commit/3ac06c2442f78b58fff58be880daabfe0e22bdad))
* remove Assets from sidebar, put Training under Operations ([e79b484](https://github.com/AzureLocal/azurelocal.github.io/commit/e79b48484d171b489b15d15d05890ef74cfdf1d9))
* remove Azure Local Anywhere legacy branding and fix cross-references ([#21](https://github.com/AzureLocal/azurelocal.github.io/issues/21)) ([25423bc](https://github.com/AzureLocal/azurelocal.github.io/commit/25423bcc6ad17a002975fb286ca7edef0b9890d5)), closes [#19](https://github.com/AzureLocal/azurelocal.github.io/issues/19)
* remove broken footer links not present in versioned docs ([87b2c9c](https://github.com/AzureLocal/azurelocal.github.io/commit/87b2c9c3c49ff5372915f51dc4232edb380ea0ff))
* remove broken links causing Docusaurus build failure ([ddf6185](https://github.com/AzureLocal/azurelocal.github.io/commit/ddf6185e5ed8d824ea87b37d34ee27a4006c6977))
* remove custom version path to fix broken tag links ([4976a14](https://github.com/AzureLocal/azurelocal.github.io/commit/4976a14297c8a2c0b1f7127b7abfc11fd385ded0))
* remove doc metadata files from assets folders, exclude drawio from docs processing ([0955407](https://github.com/AzureLocal/azurelocal.github.io/commit/09554072301090791acb66b3ac8ce4967e0195c1))
* remove duplicate H1 heading on docs landing page ([65c38ae](https://github.com/AzureLocal/azurelocal.github.io/commit/65c38ae3ad78cee4260bd67902d2131b1185682a))
* remove eoc-support and implementations from training ([fc728ea](https://github.com/AzureLocal/azurelocal.github.io/commit/fc728ea3652703bfa7d94c3e795f875486380471))
* remove invalid sitemap plugin, move gtag to preset options ([3c69859](https://github.com/AzureLocal/azurelocal.github.io/commit/3c698596831eb13859518381755a6f610cfb7349))
* remove Toolkit from Solutions dropdown and Operations page; add missing Azure Services to dropdown ([807b3bb](https://github.com/AzureLocal/azurelocal.github.io/commit/807b3bb6dc8daa57177f34772613ecd063113baa))
* remove toolkit-on-azure-local.md from operations docs ([43f4b89](https://github.com/AzureLocal/azurelocal.github.io/commit/43f4b896b6a4ccd9d3b92e6e9b6a97eef89cb139))
* rename client-training.mdx to training.mdx ([da0887b](https://github.com/AzureLocal/azurelocal.github.io/commit/da0887b45b8e2bf3ac9f62645e836058cd509f8e))
* repair docs repo workflows ([946fcd1](https://github.com/AzureLocal/azurelocal.github.io/commit/946fcd1a94beb173d34c7f72109753a78188fe0c))
* replace broken /docs/intro links with /docs/ in navbar and footer ([3ea9e39](https://github.com/AzureLocal/azurelocal.github.io/commit/3ea9e39bf9f238ca41a9823ee1b5432a19103043))
* replace invalid MDX arrow syntax with Unicode arrows ([01557b1](https://github.com/AzureLocal/azurelocal.github.io/commit/01557b1bd023a8a5780549c2205610a23238f35d))
* resolve all broken links - homepage, assets refs in index pages ([dd18abd](https://github.com/AzureLocal/azurelocal.github.io/commit/dd18abd8009c8f38d775b8debbfa315a8b0121a0))
* resolve docs sidebar category index duplication and hide assets ([ab05aff](https://github.com/AzureLocal/azurelocal.github.io/commit/ab05aff0e63c95fc64e496b3db031cebbcfdfc05))
* restore docs version dropdown and versioned docs removed in [#23](https://github.com/AzureLocal/azurelocal.github.io/issues/23) ([f270839](https://github.com/AzureLocal/azurelocal.github.io/commit/f2708394e7bb5d7e2fc071785e7cd5d8adbe5eb9))
* restore full autogenerated sidebar with Training page under Operations ([4de844b](https://github.com/AzureLocal/azurelocal.github.io/commit/4de844b547de052e2dd195fdec344f9be60d3ff4))
* restore Training to left sidebar as external link to subsite ([f85505d](https://github.com/AzureLocal/azurelocal.github.io/commit/f85505d340046c10996c8b3064e1947d22bf250a))
* restore version dropdown and fix docs links ([1adb78b](https://github.com/AzureLocal/azurelocal.github.io/commit/1adb78b26bdcdc44d39320a8d9add6a9a477a968))
* scope Vale linting to docs/blog/src, exclude project_management ([33c6aa7](https://github.com/AzureLocal/azurelocal.github.io/commit/33c6aa7ff77b5c335f786076a900d6e0c5e6b923))
* scope Vale to docs/ directory only, fix vale-action config ([6695f87](https://github.com/AzureLocal/azurelocal.github.io/commit/6695f87b90561967d0f575508da68f13b3a7d268))
* **security:** address review feedback on credentials and Defender exclusions ([06dc10c](https://github.com/AzureLocal/azurelocal.github.io/commit/06dc10ccebdde0864ac4101a7540fa380f9edfdf))
* sidebar position and restore standards ([0d0ab92](https://github.com/AzureLocal/azurelocal.github.io/commit/0d0ab92e9a7588eec5dce99541ac08c079880ee9))
* simplify training page - remove EOC links, badges, corporate framing ([b1578ac](https://github.com/AzureLocal/azurelocal.github.io/commit/b1578acfaf0d23359c8259ded5f920f511bb775a))
* surveyor nav link to azurelocal.github.io/azurelocal-surveyor/ ([f149282](https://github.com/AzureLocal/azurelocal.github.io/commit/f1492820a3d7f54acb05d3599dfc2094af1b2d6a))
* surveyor nav URL to azurelocal.cloud ([cf57e67](https://github.com/AzureLocal/azurelocal.github.io/commit/cf57e67401a635cd9df1fb4c2cf5c38db3278042))
* update footer credit to Hybrid Cloud Solutions ([1b2cba8](https://github.com/AzureLocal/azurelocal.github.io/commit/1b2cba8125299dc6b072afadfe59af9fcd65eac4))
* update references from client-training to training ([b7c50d9](https://github.com/AzureLocal/azurelocal.github.io/commit/b7c50d961faf96e8fa83cd282cfcccd98336d37b))
* update Solution field option IDs after Toolkit option added to Project [#3](https://github.com/AzureLocal/azurelocal.github.io/issues/3) ([8ae4725](https://github.com/AzureLocal/azurelocal.github.io/commit/8ae4725451b7eebbd9d4044804ce9184053fb06a))
* update training link in operations index to external subsite ([f2664d4](https://github.com/AzureLocal/azurelocal.github.io/commit/f2664d4341815bbb9946f69df586da0ac29d10ce))
* use action output for item ID, remove find-item step ([f28975a](https://github.com/AzureLocal/azurelocal.github.io/commit/f28975aa3bd02972db0d802168b9e3413328937e))
* **versioning:** restore 2604 as Preview/Draft in version dropdown ([de0a58f](https://github.com/AzureLocal/azurelocal.github.io/commit/de0a58f70e5d603fb4e045e5d2670c1a0748807f))

## [1.0.1](https://github.com/AzureLocal/azurelocal.github.io/compare/v1.0.0...v1.0.1) (2026-03-18)


### Bug Fixes

* correct azurelocal-avd workspace path typo ([de08bcf](https://github.com/AzureLocal/azurelocal.github.io/commit/de08bcf34954d9db8128592cb9e8ac6ee3c25bcb))

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

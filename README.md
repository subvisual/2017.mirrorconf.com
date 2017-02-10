[trello]: https://trello.com/b/rvqW3JsZ/website-2017
[production]: https://mirrorconf.com

MirrorConf
============

* [Trello][trello]

Landing page for MirrorConf

**Table of Contents**

* [Setup](#setup)
* [Development](#development)
* [Deployment](#deployment)
* [Contribution Guidelines](#contribution-guidelines)
* [Resources](#resources)
* [Contacts](#contacts)

Setup
-----

Prerequisites:

- Node 6.9.1
- Yarn

First, clone & setup the repository:

```
git clone git@github.com:subvisual/2017.mirrorconf.com.git
cd 2017.mirrorconf.com
yarn
```

Development
-----------

To start your development environment run:

```
npm run develop
```

This will start the node application, Redis, and Gulp.
ProjectName uses Gulp to watch and compile frontend assets.
To build the assets only once, not watching for changes, run:

```
npm run build
```

Deployment
----------

To deploy the app run `npm run deploy`

Contribution Guidelines
-----------------------

Contributions must follow [Subvisual's guides](https://github.com/subvisual/guides).

Resources
---------

* [Zeplin]()
* [Marvel]()

About
-----

ProjectName is maintained by [Subvisual](http://subvisual.co).

[![Subvisual](https://raw.githubusercontent.com/subvisual/guides/master/github/templates/subvisual_logo_with_name.png)](http://subvisual.co)

If you need to contact the maintainer use [this](https://trello.com/b/svB6ZSce/areas-of-responsability-dris) trello board, or <a href="mailto:contact@subvisual.co">reach out to us</a> if you don't have access.

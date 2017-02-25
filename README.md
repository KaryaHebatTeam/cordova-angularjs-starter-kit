#
Cordova AngularJS Starter Kit

![](https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit/content/assets/home.png)

![](https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit/content/assets/friend-list.png)

**Repository**
[https://github.com/KaryaHebatTeam/cordova-angularjs-starter-kit](https://github.com/KaryaHebatTeam/cordova-angularjs-starter-kit)

**Documentation \(Indonesia\)**
[https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit/](https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit/content/)

**Documentation \(English\)**
[https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit-english](https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit-english)

**cordova-angularjs-starter-kit** is an example project to explain about folder structure best practices while using AngularJS, LESS/CSS, and et cetera.

You can see the structure folder inside **www** containing resources below

![](https://karya-hebat-team.gitbooks.io/cordova-angularjs-starter-kit/content/assets/1.png)

#### index.html
Main file which call all Javascript resources like init, library, controller, and others.

#### assets
Folder which used to save all styling resources like image, CSS, LESS, Javascript, and others.

#### assets/css
Using LESS as CSS Preprocessor and style.less import all needed partial stylesheet.

#### assets/fonts
Folder which containing all fonts.

#### assets/img
Folder which containing all images.

#### assets/img/photo
Folder which containing all uploaded photo by user.

#### assets/js/app/config
Folder which containing Angular JS configuration like routes and init.

#### assets/js/app/controllers
Folder which containing all controllers and you should use one view one controller.

#### node\_modules
Folder which containing all needed modules and you can get from \(You need to install NodeJS and NPM before\) :

```
npm install
```

#### view
Folder which containing all view templates and loaded by angular-route.

# tyesite
personal website

https://github.com/facebook/create-react-app#creating-an-app caused difficulty with which version of react I was using

Therefore made with ionic instead

ionic start photo-gallery tabs --type=react --capacitor
ionic serve
ionic build

Couldn't get http://react-responsive-carousel.js.org/#demos to work

useful https://www.smashingmagazine.com/2020/05/introduction-react-ionic/

Had to learn about Yarn to get specific deps to get other people's components to work
To get ionic to work with Yarn: https://github.com/ionic-team/ionic-framework/issues/10647

ran into this problem importing 'react-image-gallery' https://stackoverflow.com/questions/44043492/override-typescript-types-in-v2-2-2-downloaded-from-npm-types/44046969#44046969
But the workaround runs into another bug where the paths is deleted:
https://github.com/angular/angular-cli/issues/3837
solved the problem by using require instead of import:
https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam


couldn't get const ImageGallery = require('react-image-gallery'); to work, kept giving this error Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

Works in regular react, not with typescript/ionic

simple-react-lightbox appears too complicated

correct way to make a typescript project (contrary to some info online):
npx create-react-app tsxapp --template typescript

have to create typing file for untyped modules: https://stackoverflow.com/a/53786892/8245018

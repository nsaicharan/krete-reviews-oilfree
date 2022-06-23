
 ---- INTRO ----

This is basically just an exported version of the main wrapper of our website so you can develop in an environment approximating that website. An explanation of each file/folder is below.

 ---- FILE / FOLDERS EXPLAINED ----

- assets [folder] - This is a copied folder of the assets currently in the website. Do not edit or add anything to this folder.
- newassets [folder] - This is where you can add assets while developing your HTML/CSS. By adding new assets in a separate folder from old assets I know exactly what needs to be newly added into the site when I integrate your new stuff.
- styles [folder] - This is where preexisting site SCSS is located. You do NOT need to be compiling anything in this folder as you develop, it's here for reference only. The compiled CSS for these preexisting styles is already in the assets folder.
- newmarkup.html - this is the file you'd open in the browser to see the existing website wrapper, and where you'll add your new HTML (there are comments inside showing where to add markup).
- newstyles.css - this is where the SCSS you write should get compiled to (method of compiling up to you). You should not directly edit this file.
- newstyles.css.map - same as above, this is the compiled CSS map (method of compiling up to you).
- newstyles.scss - the SCSS file where you write out your new styles for the components you are building. Compile to the "newstyles.css" file.
- prepros.config - As a convenience to you this is a config file in case you want to use the https://prepros.io/ compiler for the SCSS. Completely optional, use a command line compiler if you prefer, as long as your SCSS is in "newstyles.scss" and your CSS and map are compiling to "newstyles.css" and "newstyles.css.map".

 ---- NAMING CONVENTION ----

In shopify we have to have a lot of assets in 1 folder with no structure. Therefore we try to keep a basic naming structure to assets so they are at least a little bit organized.

This is mostly relevant to visual assets, and we do it using prefixes.
example: instead of an image named "watch-stock.jpg" for a stock image of a watch, it's "img-watch-stock.jpg" so that all images are grouped together when assets are viewed alphabetically.

Currently we have 3 prefixes as follows:

"img-" - usually photo assets or larger graphical assets.
"icon-" - small reusable icon assets.
"graphic-" - more complex, but still small vector art that is between an icon and image.

There's some personal judgement involved in which is which (especially icon vs graphic) so just make a judgment call based on what you see in the assets folder, or just ask for my opinion.

 ---- SCSS VARIABLES ----
 
The website has 3 main colors (an off-white cream, a green, and a very dark blue). SCSS variable names are included as $cream, $green, and $dark respectively. They also have standard interaction hover colors of the same name with "hover" at the end.

Also we have standardized breakpoints for the CSS. These are $medium-large, $medium, $medium-small, and $small.
When convenient stick to these breakpoints for most responsive styling. However if something needs its own specific pixel breakpoints do what you need to do.

 ---- SUMMARY ----
 
- open newmarkup.html to view the development page changes, refresh to see your changes.
- add markup where the comments tell you to in newmarkup.html
- add SCSS to newstyles.scss, compile SCSS to the CSS/map files however you wish.
- add new assets in the newassets folder
- if you need to add basic JS just add a script tag at the end of your markup, nothing we give you right now will involve complex JS which needs modularity or anything like that

# Quick overview
### Comments
```javascript
~ Hello Htmls ~
```
- comments also appear in the console
#
### Elements
```css
# Hello World! *tag
```
* write text between `#` and `*`, to write a star use `<*>`
* `tag` takes classic tag names like `p` or `div`
* add `!` before `#` to read all the spaces in text
#
### Classes
```javascript
# An example div *div .className
```
* add `.className` and element will have class attribute set to name
* exclude spaces from your class name
* one element may have any number of classes
#
### Styles
```javascript
style bordered "border: 2px solid"
style block "width: 100px; height: 100px"
```
```javascript
# *div @bordered @block
```
* styles are defined with the `style` keyword, followed by style's name and the actual style in 
* styles have names, so they can be reused
* element may have any number of styles
> Good practice is defining styles in the beginning of the script file!
#   
### Attributes 
```javascript
 # *img { src "example.png" } { id "image" }
```
* attributes are specified between brackets `{` and `}` 
* id and value are separated with `space` 
* element may have any number of attributes 
#
### Nodes
```javascript
# *div .header
- # *div .firstChild
-- # *div .secondChild
```
* to specify a child node, begin command with `-` 
* the element appends to the first node which has one dash less than itself
* any number of spaces can be used between `-` symbols
#
### Groups
```javascript
  # *div .square [margin aspect quantity] .container
```
#### Between brackets `[` and `]` mark following conditions, separate arguments with `space`:
|condition name|meaning|default value|
|:-------------|:------|:------------|
|`margin`|Inherit margin from parent border|`0`|
|`aspect`|Element aspect ratio - width / height|`1`|
|`quantity`|How many elements there are in a group|`1`|

* class before `[` is related to a single element
* class after `]` is related to a container
#
### External files
To connect an external file, use `import` keyword <br>
File action is defined automatically by its extension, <br>
While target of file defined by argument <br>

```javascript
 import "root/style.css"
 import module "modules/example.js"
 import now "root/defines.js"
 import later "scripts/analitics.js"
 import chain "scripts/preload.js"
 import chain "scripts/content.js"
```
`.css` files become styles, while `.js` become sctipts. 
#### Here are some parameters which can be assigned to a `.js` file:
* `now` keyword stops build while the script is being loaded
* `later` keyword is the opposite of `now`
* `module` keyword loads `.js` or `.mjs` module
* `chain` keyword means to load scripts at the same time, but execute one after another (*beta functionality*)

## Setup
```HTML
<head layout="fullscreen">
  <script type="text/htmls" fetch="root/site.json"></script>
</head>
```
#
### `layout`
Resize plan of your site, css grids and other. <br>
Currently support three layouts:
* static `number`<br>
number shows width of content in pixels.
* relative `number`<br>
number shows screen percentage occupied by content.
* fullscreen <br>
 Means content occupies all the screen and not scrolling. <br>
 Attribute related to `<head>` <br>
 By default set to `relative 0.6`
 ```html
<!-- layout example --!>
<head layout="relative 0.6"></head>
```
#
### `image`
Attribute takes a url and indicates the background-image of your page. <br>
background-image also comes from style, but `image` is visible only after load. <br>
Attribute related to `<body>` <br>
By default not set <br>
 ```html
<!-- image example --!>
<body image="background.png"></body>
```
#
### `fetch`
Specific attribute related to `htmls code` <br>
Fetch contains a link to code, if you would like to store it separately. <br>
Code from fetch builds elements like any other htmls code. <br>
Attribute related to `<script>` <br>
By default not set <br>
 ```html
<!-- fetch example --!>
<script fetch="index.json"></script>
```
#
### `theme`
Attribute defines text of preload. You can put any message including emoji. <br>
Attribute related to `<head>` <br>
By default, it is set to `Loading..` <br>
 ```html
<!-- theme example --!>
<head theme="loading website"></head>
```
#

## Styles
### Main container
Available with `.paper` css command
#
```css
.paper {
  background-color: white;
  border: 1px solid orange;
}
```
#
### Loading string 
Available with `.loading` css command
#
```css
.loading {
  color: pink;
  font-size: 14px;
}
```
#

> And finally 
## Congratulations!
You finished a short study. We are happy to help you create websites. <br>
Give the project a `star`, if you like the project!
#

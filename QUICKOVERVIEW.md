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

## Styles
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
To connect an external file, use `import` keyword. <br>
File action is defined automatically by its extension, <br>
while target of file is defined by argument <br>

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

## Setup a loading page
```HTML
<head layout="<template> <argument>">
  <script type="text/htmls" fetch="root/site.json"></script>
</head>
```
#
### `layout`
>Sizing plan of your site, css grids and other. <br>
>Currently three layouts are supported:

|layout name|layout functionality|argument|
|:----------|:-------------------|:-------|
|`static`|content occupies screen with given width|content width (in pixels)|
|`relative`|content occupies screen with given width (relative)|content width (in percents)|
|`fullscreen`|content occupies the whole screen|none|

 * Attribute must be applied to `<head>`. <br>
 * Default value is `relative 0.6`.
 ```html
<!-- layout example --!>
<head layout="relative 0.6"></head>
```
#
### `image`
>This attribute takes a url and indicates the background-image of your page. <br>
>background-image also comes from style, but `image` is visible only after load. <br>
* Attribute must be applied to `<body>` <br>
* No default value <br>
 ```html
<!-- image example --!>
<body image="background.png"></body>
```
#
### `fetch`
>Fetch contains a link to code, if you would like to store it separately. <br>
>Code from fetch builds elements like any other htmls code. <br>

* Specific attribute related to `htmls code` <br>
* Attribute must be applied to `<script>` <br>
* No default value <br>
 ```html
<!-- fetch example --!>
<script fetch="index.json"></script>
```
#
### `theme`
>This attribute defines text of preload. You can put any message including emoji. <br>
* Attribute must be applied to `<head>` <br>
* Default value is `Loading..` <br>
 ```html
<!-- theme example --!>
<head theme="loading website"></head>
```

## Styles
### Main container style
Available with `.paper` css class
```css
.paper {
  background-color: white;
  border: 1px solid orange;
}
```
#
### Loading string style 
Available with `.loading` css class
```css
.loading {
  color: pink;
  font-size: 14px;
}
```

## Congratulations!
You've finished this brief quick start guide. We are happy to help you in your HTMLS journey. <br>
#### Give this project a ⭐`star`, if you like it!

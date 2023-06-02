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
To connect an external file, init source with `import` keyword <br>
File action defined automatically by its extension, <br>
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

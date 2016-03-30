# MeeInk v1.0.0

MeeInk is a jQuery plugin which allows you to easily add **material design** ink effect to elements when you click them.

Plugin is based on CSS animation what give you good performance including mobile devices.

## Demo

Check out demo page [here][demo].

[demo]: http://inferusvv.github.io/meeink/index.html

## Setup

### Install with Bower

```sh
bower install MeeInk --save
```

### Install with NPM

```sh
npm install meeink --save
```

### Include scripts

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="jquery.mee-ink.js"></script>
```

### Include styles

```html
<link rel="stylesheet" href="mee-ink.css">
```

### Initialize plugin

```javascript
$(document).ready(function() {
    $('.btn').meeInk({
        // options
    });
});
```

## Documentation

Plugin have several number of options which allows you to customize it as you want.

#### animationClass

```javascript
animationClass: 'mee-ink-animated mee-ink-animation'
```

Class which triggers to start CSS animation.

#### elementClass

```javascript
elementClass: 'mee-ink-el'
```

Class that is added to initialized element.

#### inkClass

```javascript
inkClass: 'mee-ink'
```

Class for ink inside element with styles.

#### overflowHiddenClass

```javascript
overflowHiddenClass: 'mee-ink-overflow-hidden'
```

Class will be added if your element don't have ```overflow: hidden```.

#### positionRelativeClass

```javascript
positionRelativeClass: 'mee-ink-pos-relative'
```

Class will be added if your element have ```position: static```, because ink inside element positioned absolutely relative to element.

## Issues

Found an issue? You are welcome [here][issues].

[issues]: https://github.com/inferusvv/MeeInk/issues

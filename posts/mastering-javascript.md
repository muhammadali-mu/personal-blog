---
title: Mastering JavaScript
excerpt: JavaScript is the most important programming language for web development. You probably don't know it well enough!
image: mastering-js-thumb.png
isFeatured: true
date: "2021-10-30"
---

JavaScript powers the web - it's **the** most important programming language you need to know as a web developer.

For example, you should understand code like this:

```js
import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

class Expire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: props.children };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        component: null,
      });
    }, this.props.time || this.props.seconds * 1000);
  }
  render() {
    return this.state.component;
  }
}

export default uniquePropHOC(["time", "seconds"])(Expire);
```

Learn more about it [here](https://academind.com).

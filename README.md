directory structure:

```
/app
  /elements
    my-element-1/ -> contains all the files of your polymer element (css, html, js...)
    elements.html -> contains all the imports (this is *this* file that will be vulcanized). e.g:
      <link rel="import" href="../../bower_components/core-item/core-item.html">
      <link rel="import" href="yo-greeting/yo-greeting.html">
  /images -> will be imagemin'ed
  /scripts
    app.js -> contains your main polymer app code
  /styles
  /test -> put your tests here (web-component-tester)
  index.html
```

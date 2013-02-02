<h1>Grunts</h1>
<p>Useful grunt tasks.</p>
<p>&copy; 2013 <a href=http://www.haraldrudell.com>Harald Rudell</a> wrote this for node in January, 2013 MIT License</p>
<h2>How to Use</h2>
Add to your Gruntfile.js:
```js
grunt.loadNpmTasks('grunts')
```
Add the project dependency to your project:
```
npm install grunts --save-dev
```
This inserts grunts into the devDependencies section of package.json
Test the plugin:
```
$ grunt exports
Running "exports" task
>> No exports

Done, without errors.
```
<h2>Task Reference</h2>
<h3>grunt exports</h3>
<p>Lists the exports if your module is a library.</p>
<h3>grunt bump</h3>
<p>Increases the third digit of the project's version number in package.json.</p>
<p>also: grunt bump major, grunt bump minor</p>
<h3>grunt test</h3>
<p>Runs tests provided by the mochawrapper module.</p>
<h2>Notes</h2>
<p>&copy; 2013 <a href=http://www.haraldrudell.com>Harald Rudell</a> wrote this for node in January, 2013 MIT License</p>
<p>Please suggest better ways, new features, and possible difficulties on <a  href=https://github.com/haraldrudell/grunts>github</a></p>

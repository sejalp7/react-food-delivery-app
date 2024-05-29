# npm commands
npm init => Inception using npm creates a package.json file that holds the dependencies and config for the project
npm i -D parcel => Installing a bundler for our app (other bundlers like webpack or vite can also be used)
Install react and react dom dependencies
npx parcel build index.html -command that creats production build

# dependencies jargon
transitive dependencies get installed when installing any other package, all these sit inside the node_modules folder
gitignore file helps to eliminate the unwanted files to be pushed to the git repository e.g. node_modules

# parcel
npx parcel - executes the parcel package
Parcel provides Hot module replacement (HMR), used a file watching algorithm
dev build
gives a local server
caches for faster build
minification
image optimization
bundling
compressing the build file
consistent hashing
code spliting
differential bundling - supports old browser (backward compatibility)
diagnostics & error handling
allows to use HTTP/HTTPS
Tree Shaking - remove unused code 
different dev and prod build
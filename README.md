# TrXplorer

A *react*-based web explorer for the *Tron* blockchain licensed under 
*Affero GPL*.

# Dependencies

To install dependencies on *Manjaro* :

	#pamac install nvm

Here, you may need to enter some command manually 
(`. /usr/share/nvm/init-nvm.sh` for example) to make nvm runnable, then :

	nvm install node
	
Now you can install project dependencies :

	npm install

# Running

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## API documentation

To generate API documentation :

	npm run doc
	
then open *out/index.html*.

## Troubleshooting

### Querystring issue

Open `node_modules/react-scripts/config/webpack.config.js`, and in the 
**resolve** object, add this line :

	fallback: { "querystring": require.resolve("querystring-es3") },

Or apply the provided patch :

	patch -p0 < patches/tronweb-cryptofallback.patch

This issue actually makes *unit tests* fail. The patch fixes this.

### GENERATE_SOURCEMAP envvar

To avoid 60+ warnings when starting server,  `GENERATE_SOURCEMAP=false` has 
been added to the start script rule in the *package.json* file.

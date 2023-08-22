const { execSync } = require(`child_process`);
const bundleFilename = `create-mfe-app-1.0.js`;


var os = require(`os`);


if (os.type() === `Windows_NT`) {
  const srcPath = `dist\\create-mfe-app\\`;
  const desPath = `dist\\create-mfe-app\\${bundleFilename}`;


  execSync(`type ${srcPath}runtime.js > ${desPath} && echo. >> ${desPath}`);
  execSync(`type ${srcPath}polyfills.js >> ${desPath} && echo. >> ${desPath}`);
  execSync(`type ${srcPath}main.js >> ${desPath} && echo. >> ${desPath}`);
} else {
  const srcPath = `dist/create-mfe-app/`;
  const desPath = `dist/create-mfe-app/${bundleFilename}`;


  execSync(`cat ${srcPath}runtime.js > ${desPath} && echo ; >>${desPath}`);
  execSync(`cat ${srcPath}polyfills.js >>${desPath} && echo ; >>${desPath}`);
  execSync(`cat ${srcPath}main.js >>${desPath} && echo ; >>${desPath}`);
}
console.log('Bundling process done');






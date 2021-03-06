const path = require('path');
const util = require('util');
const webpack = require('webpack');
const fs = require('fs');
const config = require('./webpack.config');

const webpackAsync = util.promisify(webpack);
const readFile = util.promisify(fs.readFile);

// Each subdirectory of 'scripts' corresponds to a database container
const dirs = fs
    .readdirSync(path.join(__dirname, 'scripts'), { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);

for (const dir of dirs) {
    console.log(`Handling scripts in ${dir}...`);

    // Search only for filenames with typescript extension
    const scripts = fs
        .readdirSync(path.join(__dirname, 'scripts', dir), { withFileTypes: true })
        .filter(entry => entry.isFile())
        .map(entry => path.basename(entry.name, '.ts'));

    // Compile scripts contained in each 'scripts' subdirectory to javascript using webpack
    // Compilation output is placed in corresponding 'output' subdirectory
    const tasks = [];
    for (const script of scripts) {
        tasks.push(
            webpackAsync({
                ...config,
                entry: path.resolve(__dirname, 'scripts', dir, `${script}.ts`),
                output: {
                    path: path.resolve(__dirname, 'output', dir),
                    filename: `${script}.js`,
                },
            })
                .then(() => console.log(`${script} compiled!`))
                .catch(err => console.log(err))
        );
    }
}

const pkg = require('./package.json');

const currentYear = (new Date()).getFullYear();
const releaseYear = 2022;
const bannerData = [
    `${pkg.name}`,
    `v${pkg.version}`,
    `${pkg.homepage}`,
    `(c) ${releaseYear}${currentYear === releaseYear ? '' : '-' + currentYear} ${pkg.author}`,
    `${pkg.license} license`
].join('\n');

module.exports = {
    map: 'inline',
    plugins: [
        require('postcss-import')({
            filter: url => /\.\.|\.user\./.test(url) === false
        }),
        require('postcss-discard-comments')(),
        require('postcss-banner')({
            banner: bannerData,
            important: true
        }),
    ],
}

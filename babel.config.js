// babel.config.js
const presetEnv = [
	'@babel/preset-env',
	{
		targets: { node: 'current'}
	},
];

const presetTypescript = '@babel/preset-typescript';


module.exports = {
	presets: [
		presetEnv,
		presetTypescript,
	],
};

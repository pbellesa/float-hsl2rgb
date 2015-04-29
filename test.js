var hsl2rgb = require('./index.js');	
var test = require('tape');

// console.log('is a function yes?', typeof hsl2rgb === 'function');

// var rgb1 = hsl2rgb([0.5, 0.25, 0.75]);

// console.log('returns array of 3 values?', rgb1.length === 3);

// var redHSL = [0 / 360, 1, 0.5];
// var redRGB = [1, 0, 0];

// var rgb2 = hsl2rgb(redHSL);

// console.log('actual:', rgb2, 'expected:', redRGB);

test('converts [H,S,L] to [R,G,B]', function (t)  {
	t.equal(typeof hsl2rgb, 'function', 'is a function');
	t.equal(hsl2rgb([0,0,0]).length, 3, 'returns array of 3 values');
	t.deepEqual(hsl2rgb([0 / 360, 1, 0.5]), [1, 0, 0], 'converts red');
	t.end();
});
function hsl2rgb(hsl) {
	// var h = hsl[0];
	// var s = hsl[1];
	// var l = hsl[2];

	// var r, g, b;

	// if(s == 0){
 //        r = g = b = l; // achromatic
 //    }else{
 //        var hue2rgb = function hue2rgb(p, q, t){
 //            if(t < 0) t += 1;
 //            if(t > 1) t -= 1;
 //            if(t < 1/6) return p + (q - p) * 6 * t;
 //            if(t < 1/2) return q;
 //            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
 //            return p;
 //        }

 //        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
 //        var p = 2 * l - q;
 //        r = Math.round(hue2rgb(p, q, h + 1/3) * 255);
 //        g = Math.round(hue2rgb(p, q, h) * 255);
 //        b = Math.round(hue2rgb(p, q, h - 1/3) * 255);
 //    }


	// return [ r, g, b ];

	var h = hsl[0],
    s = hsl[1],
    l = hsl[2],
    t1, t2, t3, rgb, val

  if (s === 0) {
    val = l
    return [val, val, val]
  }

  if (l < 0.5) {
    t2 = l * (1 + s)
  } else {
    t2 = l + s - l * s
  }
  t1 = 2 * l - t2

  rgb = [0, 0, 0]
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * -(i - 1)
    if (t3 < 0) {
      t3++
    }
    if (t3 > 1) {
      t3--
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3
    } else if (2 * t3 < 1) {
      val = t2
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
    } else {
      val = t1
    }

    rgb[i] = val
  }

  return rgb
}

module.exports = hsl2rgb;
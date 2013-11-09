function rand (n)	// Generate random number from 0 to n (exclusive)
{
  return ( Math.floor ( Math.random()*0.9999999999999999* n) );
}

function gen_img() {

var con= ['martini','mug','ridged','short','straight'];
var col = ['blue','green','orange','red','turquoise'];

var x = rand(con.length);
var filename = con[x];

if (filename == 'short' || filename == 'mug') {
	y = rand(2);
	if (y == 1)
		filename = filename + '-orange';
	else
		filename = filename + '-red'
}

}

//IV. display the image 

document.write('<img alt="random image" src="' + randompic[x] + '"/>')
}
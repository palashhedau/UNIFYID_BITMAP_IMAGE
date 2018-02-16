console.log("Palash")

var url1 = 'https://www.random.org/integers/?num=10000&min=0&max=16384&col=1&base=10&format=plain&rnd=new';
var url2 = 'https://www.random.org/integers/?num=6384&min=0&max=16384&col=1&base=10&format=plain&rnd=new';

fetch(url1)
  .then(resp1 => resp1.text())
  .then(resp1 => {
    return fetch(url2)
      .then(resp2 => resp2.text())
      .then(resp2 => resp1 + resp2)
      .then(result => result.trim().split('\n'))
  })
  .then(function (result) {
		  const canvas = document.getElementById('canvas_image');
		  const context = canvas.getContext('2d');

		  
		  var c_height = 128 ;
		  var c_width = 128 ;
		  var clamped_array = new Uint8ClampedArray(c_height * c_width * 4);

		  for (height = 0; height < c_height; height++) {
		    for (width = 0; width < c_width; width++) {
		      index = (( c_width * height ) + width) * 4;
		      for (i = 0; i < 4; i++) {
		        clamped_array[index + i] = Math.floor(result[height*width]/(i+1)) % 256;
		      }
		    }
		  }
		  console.log("clamped_array " + clamped_array);
		  var image_data = context.createImageData(c_height, c_width);
		  image_data.data.set(clamped_array);
		  context.putImageData(image_data, 0, 0);
		  console.log("Done")
   })
   .catch(console.log)



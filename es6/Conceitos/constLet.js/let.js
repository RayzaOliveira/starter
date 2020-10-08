//Let

function teste(x) {
  let y = 2; 

  if (x > 5) {

  // reabribuir o valor de let nesse segundo escopo
  let y = 5;

  console.log(x,y);
  }
}

teste(10);

// escolpo e tudo ente {} no JS
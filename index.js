// fetch chucknorris jokes

fetch("https://api.chucknorris.io/jokes/random")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.value);

    //display the jokes on the screen//
    alert(JSON.stringify(data.value));

  });



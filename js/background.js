function changeBackground() {
    const width = 1920; // desired width of the image
    const height = 1080; // desired height of the image
    const query = "cyberpunk-2077";
    const randomImage = `https://source.unsplash.com/random/${width}x${height}/?${query}`;
    document.body.style.backgroundImage = `url(${randomImage})`;
  }  





// var images = [
//     "/images/wall0.jpg", "/images/wall1.jpg", "/images/wall2.jpg", "/images/wall4.jpg", "/images/wall5.jpg", "/images/wall7.jpg", "/images/wall8.jpg", "/images/wall9.jpg", "/images/wall10.jpg", "/images/wall11.jpg", "/images/wall12.jpg", "/images/wall13.jpg", "/images/wall14.jpg", "/images/wall16.jpg", "/images/wall17.jpg", "/images/wall18.jpg", "/images/wall20.jpg"];      // 3, 6/ 15/ 19

// function changeBackground() {
//     var randomImage = images[Math.floor(Math.random() * images.length)];
//     document.body.style.backgroundImage = "url('" + randomImage + "')";
// }

// // setInterval(changeBackground, 900000);      // 15 Minutes






// function changeBackground() {
//     const query = "cyberpunk";
//     const apiUrl = `https://api.unsplash.com/search/photos/?query=${query}&client_id=YOUR_API_KEY`;
    
//     fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => {
//         const results = data.results;
//         const randomImage = results[Math.floor(Math.random() * results.length)];
//         document.body.style.backgroundImage = `url(${randomImage.urls.regular})`;
//       })
//       .catch(error => {
//         console.error("Error fetching image:", error);
//       });
//   }  
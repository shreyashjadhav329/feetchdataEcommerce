const form=document.querySelector('form');
form.addEventListener('submit',function(e){
e.preventDefault();
})



let displayData = document.getElementById("displayData");
let product_details =  ""
async function fetchdata() {
  try {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();

     product_details = data.products;
    localStorage.setItem("allproduct", JSON.stringify(product_details));
console.log(product_details);

 productCards(product_details)
    let input = "";
  //   product_details.forEach((val) => {
  //     let {
  //       id,
  //       price,
  //       discountPercentage,
  //       rating,
  //       description,
  //       images,
  //       brand,
  //     } = val;
  //   //  input=+`<h1>hii</h1>`
  //   input += `
  //   <div class="card">
  //     <img src="${images[0]}" alt="Product Image"/>
  //     <p class="brand">${brand}</p>
  //     <p class="description">${description}</p>
  //     <p class="price">$${price} <span class="discount">(${discountPercentage}% off)</span></p>
  //     <p class="rating">Rating: ${rating}</p>
  //     <a href="product.html" target="_blank">
  //       <button onclick="setId(${id})">View More</button>
  //     </a>
  //     <button onclick="addToCart(${id})">Add to Cart</button>
  //   </div>
  // `
  //   });
  //   displayData.innerHTML = input;

  } catch (err) {
    console.error(err);
  }
}
fetchdata()

function setId(id) {
  localStorage.setItem("productId", id);
}

// Add to Cart Logic


let searchcnt=document.getElementById("searchcnt")
console.log(searchcnt);
searchcnt.addEventListener("input",(e)=>{
console.log(e);
let unvalue=e.target.value.toLowerCase();
console.log(unvalue);
let filterData=product_details.filter((val)=>{
return val.title.toLowerCase().includes(unvalue);
})
console.log(filterData);

// // repeat the same method
// let input= ""
// filterData.forEach((val) => {
//   let {
//     id,
//     price,
//     discountPercentage,
//     rating,
//     description,
//     images,
//     brand,
//   } = val;
// //  input=+`<h1>hii</h1>`
// input += `
// <div class="card">
//   <img src="${images[0]}" alt="Product Image"/>
//   <p class="brand">${brand}</p>
//   <p class="description">${description}</p>
//   <p class="price">$${price} <span class="discount">(${discountPercentage}% off)</span></p>
//   <p class="rating">Rating: ${rating}</p>
//   <a href="product.html" target="_blank">
//     <button onclick="setId(${id})">View More</button>
//   </a>
//   <button onclick="addToCart(${id})">Add to Cart</button>
// </div>
// `
// });

// displayData.innerHTML = input
productCards(filterData)

})

 function productCards(p){
  let input = ""
    p.forEach((val) => {
      let {
        id,
        price,
        discountPercentage,
        rating,
        description,
        images,
        brand,
      } = val;
    //  input=+`<h1>hii</h1>`
    input += `
    <div class="card">
      <img src="${images[0]}" alt="Product Image"/>
      <p class="brand">${brand}</p>
     
      <p class="price">$${price} <span class="discount">(${discountPercentage}% off)</span></p>
      <p class="rating">Rating: ${rating}*</p>
      <a href="product.html" target="_blank">
        <button onclick="setId(${id})">View More</button>
      </a>
     
    </div>
  `
    });
    displayData.innerHTML = input
 }
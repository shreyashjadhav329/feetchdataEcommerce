function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

let userDataCnt = document.getElementById("productData");

let jsonData = localStorage.getItem("allproduct");
let userObj = JSON.parse(jsonData);

let id = localStorage.getItem("productId");
console.log(id);

let unique_obj_data = userObj.find((val) => {
  return val.id == id;
});
console.log(unique_obj_data);

userDataCnt.innerHTML = `
<div class="cards" id="imgCnt">
<img src=${unique_obj_data.images[0]}  alt="product images" />
</div>
<div class="cards" id="descCnt">
<p>${unique_obj_data.brand}  </p>
<p >${unique_obj_data.description}</p>
<br>
  <p> ${"Avaiblity:"+unique_obj_data.availabilityStatus}</p>
<p class="descript">${"$" + unique_obj_data.price} <span class="discount" >${
  "(" + unique_obj_data.discount + "%" + "off" + ")"
}</span></p>
 <p >${"Rating = " + unique_obj_data.rating}</p>
 <p>${"Shipping Information:"+unique_obj_data.shippingInformation }
<p>${"Warrenty Information:"+unique_obj_data.warrantyInformation}</p>
</div>

`;

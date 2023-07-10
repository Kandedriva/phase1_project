const imageInfo = document.getElementById("imageInfo");
const orderForm = document.getElementById("orderForm");
const list = document.getElementById("followers");
const form = document.getElementById("follow");
// const newOrderName = document.getElementById("uName");
// const newOrderEmail = document.getElementById("uEmail");
const button = document.getElementById("button");
const checkOutButton = document.getElementById("checkOutButton");
const customerFName = document.getElementById("fName");
const customerLName = document.getElementById("lName");
const customerEamil = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipCode = document.getElementById("zip");
const country = document.getElementById("country");
const quantity = document.getElementById("quantity");



orderForm.style.visibility = "hidden";

// Funsction to Create New Orders
function createAnOrder(order){
    const firstName = document.createElement("p");
        const lastName = document.createElement("p");
        const email = document.createElement("p");
        const street = document.createElement("p");
        const city = document.createElement("p");
        const state = document.createElement("p");
        const country = document.createElement("p");
        const zipCode = document.createElement("p");
        const quantity = document.createElement("p");
        const orderPlaced = document.getElementById("orderPlaced");
        const address = document.createElement("div");
        const eachOrderContainer = document.createElement("div");
        eachOrderContainer.setAttribute("class", "eachOrder");
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Order completed";
        deleteButton.setAttribute("class", "bttn")

        firstName.textContent = (" First Name: " + order.name);
        lastName.textContent = (" Last Name: " + order.lastName);
        email.textContent = ("Email: " + order.newOrderEmail);
        street.textContent = ("Street: " + order.newOrderStreet);
        city.textContent = ("City: " + order.newOrderCity);
        state.textContent = ("State: " + order.newOrderState);
        country.textContent = ("Country: " + order.newOrderCountry);
        zipCode.textContent = ("Zip code: " + order.newOrderZipCode);
        quantity.textContent = ("Quantity: " + order.newOrderQuantity);

        address.appendChild(street);
        address.appendChild(city)
        address.appendChild(state);
        address.appendChild(country);
        address.appendChild(zipCode)

        eachOrderContainer.appendChild(firstName);
        eachOrderContainer.appendChild(lastName);
        eachOrderContainer.appendChild(email);
        eachOrderContainer.appendChild(address);
        eachOrderContainer.appendChild(quantity);
        eachOrderContainer.appendChild(deleteButton);

            orderPlaced.appendChild(eachOrderContainer);
            deleteButton.addEventListener("click", event=>{
                eachOrderContainer.remove();
                fetch(`http://localhost:3000/orders/${order.id}`, {method: "DELETE"})
                 .then(response=>response.json())
                  .then(data=>console.log(data))
               
            })


}



// Get request to render the products
fetch(" http://localhost:3000/products")
.then(response =>response.json())
.then(products=>{
    console.log(products);
    products.forEach(product=>{
        const eachProductContainer = document.createElement("div");
        const productName = document.createElement("h5");
        const productImage = document.createElement("img");
        const productDescription = document.createElement("p");
        const price = document.createElement("p");
        const productsContainer = document.getElementById("products");

        eachProductContainer.setAttribute("class", "eachProdcut")


        productImage.setAttribute("src", product.image);
        // productDescription.style.paddingRight = "2px"
        productName.textContent = product.name;
        productDescription.textContent = product.description;
        price.textContent = product.price;
        eachProductContainer.appendChild(productImage);
        eachProductContainer.appendChild(productName);
        eachProductContainer.appendChild(productDescription);
        eachProductContainer.appendChild(price);
        productsContainer.appendChild(eachProductContainer);

        eachProductContainer.addEventListener("click", (event)=>{

            imageInfo.innerHTML = "";
    
            const imageDescription = document.createElement("p");
            const imageDescriptionName = document.createElement("h5");
            const imageDescriptionPrice = document.createElement("p");
            const img = document.createElement("img");
            const btn1 = document.createElement("button");
            const btn2 = document.createElement("button");

        img.setAttribute("src", product.image);
        imageDescription.textContent = product.description;
        imageDescriptionName.textContent = product.name;
        imageDescriptionPrice.textContent = product.price;
        btn1.textContent = "Add to your car";
        btn2.textContent = "Buy now.";
        btn1.setAttribute("class", "bttn btn btn-success");
        btn2.setAttribute("class", "bttn btn btn-success");
    
        imageInfo.appendChild(img);
        imageInfo.appendChild(imageDescriptionName)
        imageInfo.appendChild(imageDescription);
        imageInfo.appendChild(imageDescriptionPrice)

        imageInfo.appendChild(btn1);
        imageInfo.appendChild(btn2);
    
        btn1.addEventListener("click", (event)=>{
            alert("Added to your Cart")
        });
        btn2.addEventListener("click", ()=>{
            orderForm.style.visibility = "visible";
            form.style.display = "none";    
        });
   
    });

    })
    
});

// Get Resquest for Orders
fetch("http://localhost:3000/orders")
.then(response=>response.json())
.then(orders=>{
    console.log(orders);

    orders.forEach(createAnOrder)

});

// Create New Orders
orderForm.addEventListener("submit", event=>{
    event.preventDefault();

// Create new Order
const newOrders = {
    name: customerFName.value,
    lastName: customerLName.value,
    newOrderEmail: customerEamil.value,
    newOrderStreet: street.value,
    newOrderCity: city.value,
    newOrderState: state.value,
    newOrderZipCode: zipCode.value,
    newOrderCountry: country.value,
    newOrderQuantity: quantity.value
}

// Post resquest for New Orders
fetch("http://localhost:3000/orders", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newOrders),
  })
.then(response=>response.json())
.then(orders=>{
    console.log(orders);
    createAnOrder(orders)  
})
orderForm.reset();
orderForm.style.visibility = "hidden";
});

// Fetch for subscribers
fetch("http://localhost:3000/subscribers")
.then(response => response.json())
.then(subscribers =>{
    console.log(subscribers);
    subscribers.forEach(subscriber=>{
        const liName = document.createElement("li");
    const liEmail = document.createElement("p");

liName.textContent = subscriber.userName;
liEmail.textContent = subscriber.email;
list.appendChild(liName);
list.appendChild(liEmail);

    })
})



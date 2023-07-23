
// Global Variables
const productsContainer = document.getElementById("products");
const orderPlaced = document.getElementById("orderPlaced");
const eachSubscriber = document.getElementById("eachSubscriber");
const itemContainer = document.getElementById("itemContainer");
const orderForm = document.getElementById("orderForm");
const subscribersContainer = document.getElementById("followers");
const followers = document.getElementById("follow");
const newOrderName = document.getElementById("uName");
const newOrderEmail = document.getElementById("uEmail");
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
const ProductName = document.getElementById("product-name");


orderForm.style.display = "none";

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

        eachProductContainer.setAttribute("class", "eachProdcut")

        productImage.setAttribute("src", product.image);
        productName.textContent = product.name;
        productDescription.textContent = product.description;
        price.textContent = product.price;
        eachProductContainer.appendChild(productImage);
        eachProductContainer.appendChild(productName);
        eachProductContainer.appendChild(productDescription);
        eachProductContainer.appendChild(price);
        productsContainer.appendChild(eachProductContainer);

        eachProductContainer.addEventListener("click", (event)=>{
            itemContainer.innerHTML = "";
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
        btn1.textContent = "Add to your Cart";
        btn2.textContent = "Buy Now.";
        btn1.setAttribute("class", "bttn btn btn-success");
        btn2.setAttribute("class", "bttn btn btn-success");
    
        itemContainer.appendChild(img);
        itemContainer.appendChild(imageDescriptionName)
        itemContainer.appendChild(imageDescription);
        itemContainer.appendChild(imageDescriptionPrice)
        itemContainer.appendChild(btn1);
        itemContainer.appendChild(btn2);
    
        btn1.addEventListener("click", (event)=>{
            alert("Added to your Cart")
        });
        btn2.addEventListener("click", ()=>{
            // Change the visibility of the forms
            orderForm.style.display = "";
            productsContainer.style.display = "none";
            followers.style.display ="none";
            orderPlaced.style.display = "none";
            eachSubscriber.style.display = "none"
        });
   
    });

    })
    
});

// Function to Create New Orders

function createAnOrder(order){
    const orderId = document.createElement("P")
    const firstName = document.createElement("p");
        const lastName = document.createElement("p");
        const email = document.createElement("p");
        const street = document.createElement("p");
        const city = document.createElement("p");
        const state = document.createElement("p");
        const country = document.createElement("p");
        const zipCode = document.createElement("p");
        const quantity = document.createElement("p");
        const address = document.createElement("div");
        const eachOrderContainer = document.createElement("div");
        eachOrderContainer.setAttribute("class", "eachOrder");
        const deleteButton = document.createElement("button");
        const item = document.createElement("h6");

        deleteButton.textContent = "Order completed";
        deleteButton.setAttribute("class", "bttn btn btn-outline-danger");
        orderId.textContent = ("Order Number: " + order.id);
        firstName.textContent = (" First Name: " + order.name);
        lastName.textContent = (" Last Name: " + order.lastName);
        email.textContent = ("Email: " + order.newOrderEmail);
        street.textContent = ("Street: " + order.newOrderStreet);
        city.textContent = ("City: " + order.newOrderCity);
        state.textContent = ("State: " + order.newOrderState);
        country.textContent = ("Country: " + order.newOrderCountry);
        zipCode.textContent = ("Zip code: " + order.newOrderZipCode);
        quantity.textContent = ("Quantity: " + order.newOrderQuantity);
        item.textContent = ("Item: " + order.itemName);

        address.appendChild(street);
        address.appendChild(city)
        address.appendChild(state);
        address.appendChild(country);
        address.appendChild(zipCode)

        eachOrderContainer.appendChild(orderId);
        eachOrderContainer.appendChild(item);
        eachOrderContainer.appendChild(firstName);
        eachOrderContainer.appendChild(lastName);
        eachOrderContainer.appendChild(email);
        eachOrderContainer.appendChild(address);
        eachOrderContainer.appendChild(quantity);
        eachOrderContainer.appendChild(item);
        eachOrderContainer.appendChild(deleteButton);

// Delete Request to delete an order
            orderPlaced.appendChild(eachOrderContainer);
            deleteButton.addEventListener("click", event=>{
                eachOrderContainer.remove();
                fetch(`http://localhost:3000/orders/${order.id}`, {method: "DELETE"})
                 .then(response=>response.json())
                  .then(data=>console.log(data))
               
            })
}

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
    itemName: ProductName.value,
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

// Change back the visibility of the forms
orderForm.style.display = "none";
productsContainer.style.display = "";
            followers.style.display ="";
            orderPlaced.style.display = "";
            eachSubscriber.style.display = ""

});

// Fetch for subscribers

//the fuction to create a subscriber
function newSubscriber(subscriber){
    const liName = document.createElement("li");
    const liEmail = document.createElement("p");
    const removeAFollower = document.createElement("button");
    const followerList = document.createElement("div");
    removeAFollower.textContent = "delete";

    followerList.setAttribute("class", "followerList");
    removeAFollower.setAttribute("class", "bttn btn btn-outline-danger")
    followerList.appendChild(liName);
    followerList.appendChild(liEmail);
    followerList.appendChild(removeAFollower);
liName.textContent = subscriber.userName;
liEmail.textContent = subscriber.email;
subscribersContainer.appendChild(followerList);

//DELETE request for the subscribers
removeAFollower.addEventListener("click", event=>{
    followerList.remove();
    fetch(`http://localhost:3000/subscribers/${subscriber.id}`, {method: "DELETE"})
    .then(response=>response.json())
    .then(data=>console.log(data));
});

}

// GET request for subscribers
fetch("http://localhost:3000/subscribers")
.then(response => response.json())
.then(subscribers =>{
    console.log(subscribers);
    subscribers.forEach(newSubscriber);
});

followers.addEventListener("submit", event=>{
    event.preventDefault();
    console.log(event);

// Create a subscriber
   const subscriber = {
    userName: newOrderName.value,
    email: newOrderEmail.value
    }

    // POST resquest for subscribers
fetch("http://localhost:3000/subscribers", {
    method: "POST",
    headers: {
       "content-type": "application/json"
    },
    body:JSON.stringify(subscriber)
})
.then(response=>response.json())
.then(newFollower=>{
    console.log(newFollower);
    newSubscriber(newFollower)
})
followers.reset();

});
document.addEventListener("DOMContentLoaded", function(){
    let currentYear = new Date().getFullYear();
    let copyRight = document.getElementById("copyRight");
    copyRight.textContent = currentYear;
})



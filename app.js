const imageInfo = document.getElementById("imageInfo");
const orderForm = document.getElementById("orderForm");

orderForm.style.visibility = "hidden";

function createAnOrder(){

}

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
        productDescription.style.paddingRight = "2px"
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
            productContainer.style.display = "none"
    
        });
    
       
    
    
    });

    })
   
    
});

fetch("http://localhost:3000/orders")
.then(response=>response.json())
.then(orders=>{
    console.log(orders);

    orders.forEach(order=>{
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

        firstName.textContent = (" First Name: " + order.fName );
        lastName.textContent = (" Last Name: " + order.lName);
        email.textContent = ("Email: " + order.email);
        street.textContent = ("Street: " + order.street);
        city.textContent = ("City: " + order.cityName);
        state.textContent = ("State: " + order.state);
        country.textContent = ("Country: " + order.country);
        zipCode.textContent = ("Zip code: " + order.zipCode);
        quantity.textContent = ("Quantity: " + order.quantity);

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

        orderPlaced.appendChild(eachOrderContainer);




















    })

})


const imageInfo = document.getElementById("imageInfo");

fetch(" http://localhost:3000/products")
.then(response =>response.json())
.then(products=>{
    console.log(products);
    products.forEach(product=>{
        const productName = document.createElement("h5");
        const productImage = document.createElement("img");
        const productDescription = document.createElement("p");
        const price = document.createElement("p");
        const productsContainer = document.getElementById("products");

        productsContainer.style.display = "inline-block"

        productImage.setAttribute("src", product.image)
        productName.textContent = product.name;
        productDescription.textContent = product.description;
        price.textContent = product.price;
        productsContainer.appendChild(productImage);
        productsContainer.appendChild(productName);
        productsContainer.appendChild(productDescription);
        productsContainer.appendChild(price);

        productImage.addEventListener("click", (event)=>{

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
    
        // imageInfo.style.display = "block";
    
        // if(displayedImage !==null){
        //     displayedImage.style.display = "none";
    
        // }
        // displayedImage = productImage;
    
    
    
    });

    })
   
    
})
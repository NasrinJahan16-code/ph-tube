// fetch load and show catagories in html
const loadCategories = () =>{
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then((res) => res.json())
   .then((data) =>displaycatg(data.categories))
   .catch((error) =>console.log(error));
};

const displaycatg =(categories) =>{
    const buttons = document.getElementById("categories")
    categories.forEach((item) => {
        console.log(item);  


        // create button
        const button =document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        buttons.append(button);

    });
    
}
loadCategories();
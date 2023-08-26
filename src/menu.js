function createMenu(){
    const heading = document.createElement("h2");
    heading.textContent = "Our menu includes:";

    const list = document.createElement("ul");

    const items = ["Burgers", "Pizza", "Spaghetti", "Lasagna", "Ramen", "Pancakes", "Grilled Chicken", "and more..."];
    items.forEach(item=>{
        const it = document.createElement("li");
        it.textContent=item;
        list.appendChild(it);
    })

    return [heading, list];
}

export default createMenu;
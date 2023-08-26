import Gordon from './gordon.webp';

function createHome(){
    const para1 = document.createElement("p");
    para1.textContent = "Lorem ipsum dolor sit amet consectetur.";
    const para2 = document.createElement("p");
    para2.textContent = "Serving since 2077."
    const image = new Image();
    image.src = Gordon;
    const para3 = document.createElement("p");
    para3.textContent = "Order now!"
    return [para1, para2, image, para3];
}

export default createHome;
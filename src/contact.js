function createContact(){
    const heading1 = document.createElement("h2");
    heading1.textContent = "Address";
    const para1 = document.createElement("p");
    para1.textContent = "Some place on earth!"

    const heading2 = document.createElement("h2");
    heading2.textContent="E-mail";
    const para2 = document.createElement("p");
    para2.textContent = "info@website.com"

    const heading3 = document.createElement("h2");
    heading3.textContent="Phone";
    const para3 = document.createElement("p");
    para3.textContent = "+91-XXXXX-XXXXX";

    return [heading1, para1, heading2, para2, heading3, para3];
}

export default createContact;
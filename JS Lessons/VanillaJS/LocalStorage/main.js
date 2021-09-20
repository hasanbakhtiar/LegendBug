// localStorage.setItem("name","JavaScript");
// localStorage.setItem("id","1");

// localStorage.removeItem("id");

const light = document.querySelector('h4').attributes[0].value; 
const dark = document.querySelector('h5').attributes[0].value; 

if(light == '1')
    localStorage.setItem("id","1");
else if(dark == '2')
    localStorage.setItem('id', "2");
else 
    localStorage.setItem("id","1");


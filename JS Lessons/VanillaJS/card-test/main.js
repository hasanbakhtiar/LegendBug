
const data = {
    // j1:'JavaScript1',
    // j2:'JavaScript2',
    // j3:'JavaScript3',
    // j4:'JavaScript4',
    // j5:'JavaScript5'

    product1:{
        name: 'a1',
        price: '100',
        photo: 'url(_)'
    },

    product2:{
        name: 'a2',
        price: '200',
        photo: 'url(_)'
    },

    product3:{
        name: 'a3',
        price: '300',
        photo: 'url(_)'
    }

}


const mySelector={
    name: document.querySelector('.btn'),
    
}

const go=()=>{
    const mySelector1 = document.querySelector('.text1');
    const mySelector2 = document.querySelector('.text2');
    const mySelector3 = document.querySelector('.text3');
    const mySelector4 = document.querySelector('.text4');
    const mySelector5 = document.querySelector('.text5');


    mySelector1.innerHTML=data.j1;
    mySelector2.innerHTML=data.j2;
    mySelector3.innerHTML=data.j3;
    mySelector4.innerHTML=data.j4;
    mySelector5.innerHTML=data.j5;
}

document.querySelector('button').addEventListener('click',go);

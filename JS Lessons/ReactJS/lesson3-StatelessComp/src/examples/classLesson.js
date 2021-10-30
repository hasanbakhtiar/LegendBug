const root = document.querySelector('#root');


// #########################################################################################
// class infoData{
//     sayHi(){
//         return "Hello";
//     }
// }

// class schoolData extends infoData{
//     goTo(){
//         return "Go to School";
//     }
// }

// const myData = new infoData();
// const mySchool = new schoolData();
// --------------------------------
// console.log(myData.sayHi());
// console.log(mySchool.sayHi());





// ########################################################################

// class educationData {
//     sayBye(){
//         return 'bye'
//     }
// }

// class publicData extends educationData{
//         sayHi(){
//             return 'hello'
//         }
// }


// const eduInfo = new publicData();
// console.log(eduInfo.sayBye());

class infoData{
    constructor(name, year){
            this.addName = name;
            this.addYear = year;
    }

    calculateAge(){
            let yearCall = new Date().getFullYear() - this.addYear;
            let nameCall = this.addName;
            return nameCall + yearCall ;
    }

    sayHi(item){
        return `Hello ${item}, My name is ${this.addName}`
    }
}

const myData = new infoData('Metanet ', 1998);
console.log(myData.calculateAge());
console.log(myData.sayHi('My friend'));








ReactDOM.render(temp, root);
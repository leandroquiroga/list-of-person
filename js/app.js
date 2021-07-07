const arrayPerson = [];
const obtenerID = (id) => {
    return document.getElementById(id);
}

const showPerson = (arrayPerson) => {
    let text = '';
    let showList = obtenerID('list');
    for(let person of arrayPerson){
        text += `<div class="card mt-2">
                    <div class="card-body"> 
                        <p>${person.name} ${person.lastName}<p> 
                    </div>
                 </div>`
    }
    showList.innerHTML = text;
}

const addListPerson = () =>{
    let boton = obtenerID('addPerson');
    let form = obtenerID('form');

    boton.addEventListener('click', (e) => {
        let name = form['validationName'].value;
        let lastName = form['validationLastName'].value;
        let person = new Person(name,lastName);
        arrayPerson.push(person);
        showPerson(arrayPerson);
        e.preventDefault()
    });
}

const init = () => addListPerson();

init()
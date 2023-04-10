
function getTasks(){

    return JSON.parse(localStorage.getItem('@Gotasks')) || [];

}

function setTasks(tasks){

   localStorage.setItem('@Gotasks', JSON.stringify(tasks));
}
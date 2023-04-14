
const modal = document.getElementById('modal');
const alertElement = document.getElementById('alert');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');

function createTask(e){
    e.preventDefault();

    if(!inputDescription.value || !inputDate.value){
        alertElement.style.display = 'block';
        closeAlert(); 
        return;
    }

    // const newTask = {
    //     description : inputDescription.value,
    //     date: new Date(inputDate.value).toLocaleDateString('pt-BR', { timeZone: 'UTC'}),
    //     id:Math.floor(Math.random() * 10000)
    // }



    // const allTasks = getTasks();

    //   setTasks([...allTasks, newTask]);

    postData({
        descricao: inputDescription.value,
        data: inputDate.value
    })
   
   reload(); 
   toggleModal();
   clearFields();
}

function toggleModal(){
    modal.classList.toggle('modal-visible');
}

function clearFields(){
    inputDate.value ='';
    inputDescription.value = '';  
}

function closeAlert(){
    setTimeout(() =>{
    
        alertElement.style.display = 'none';

    }, 3000);
}

btnCreateTask.addEventListener('click', createTask);

async function postData(data) {
    // Default options are marked with *
    const response = await fetch('https://flask-production-0081.up.railway.app/tarefa', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
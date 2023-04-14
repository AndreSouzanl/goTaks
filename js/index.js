const API_URL = 'https://flask-production-0081.up.railway.app'
const table = document.getElementById('table-body');
const loadingMenssage = document.getElementById('loading-message');
const countTask = document.getElementById('count-task');

// function updateCountTasks() {
//     const allTasks = getTasks();
//     countTask.innerHTML = allTasks.length;
// }

// function fillTable() {
//     const allTasks = getTasks();

//     allTasks.forEach(addTask);

//     if (allTasks.length === 0) {
//         loadingMenssage.innerHTML = 'Você não tem nenhuma tarefa!';
//     } else {
//         loadingMenssage.innerHTML = ''
//     }

//     updateCountTasks();

// }

function addTask(task) {
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTask(task);

    table.appendChild(tr);
}

function innerHTMLTask(task) {
    const html = `
      <td>${task.description}</td>
      <td>${task.date}</td>
      <td>
           <a href="" onclick="removeTask(${task.id})">
           <i class="fas fa-trash"></i>
           </a>
      </td>
    
    `

    return html;
}

function removeTask(id) {
    // const allTasks = getTasks();
    // const taskFiltered = allTasks.filter(task => task.id !== id);

    fetch(`https://flask-production-0081.up.railway.app/tarefa/${id}`, {
        method: 'DELETE'
    })

    // setTasks(taskFiltered);
    // reload();
}

// function reload() {
//     table.innerHTML = '';
//     fillTable();
// }

function getTasks() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/tarefa`)
    .then(data => data.json().then(res => {
      resolve(res)
    }).catch(err => reject(err)))
  })
} 

getTasks().then(res => {
    console.log(res)
    res.forEach(task => {
        addTask({description: task.descricao , date: task.data, id: task.id})
    })

})
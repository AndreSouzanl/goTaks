const API_URL = 'https://flask-production-0081.up.railway.app'

export function getTasks() {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/tarefa`)
    .then(data => data.json().then(res => {
      resolve(res)
    }).catch(err => reject(err)))
  })
} 
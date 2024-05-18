// Fungsi untuk menambahkan tugas baru ke dalam daftar
function addTask(taskText) {
  // Buat elemen <li> baru untuk tugas
  const li = document.createElement("li");
  li.className = "task-item";

  // Tambahkan teks tugas ke elemen <li>
  li.textContent = taskText;

  // Buat tombol "Complete" untuk menandai tugas sebagai selesai
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Buat tombol "Delete" untuk menghapus tugas
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Tambahkan tombol "Complete" dan "Delete" ke elemen <li>
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // Tambahkan elemen <li> ke dalam daftar tugas
  taskList.appendChild(li);
}

// Contoh penggunaan async/await dengan fetch untuk mendapatkan data dari API (opsional)
async function fetchTasksFromAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const tasks = await response.json();

    // Tambahkan beberapa tugas dari API ke dalam daftar
    tasks.slice(0, 5).forEach((task) => addTask(task.title));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

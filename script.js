function addTask() {
  const input = document.getElementById('tf-input').value.trim();
  if (input === '') {
    alert('Task cannot be empty');
    return;
  }

  const task = document.createElement('li');
  task.textContent = input;
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add('list-item');

  // Edit Button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', () => {
    editTask(task.id);
  });

  // Delete Button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });

  task.appendChild(editButton);
  task.appendChild(deleteButton);
  document.getElementById('task-container').appendChild(task);
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id) {
  const task = document.getElementById(id);
  const originalText = task.childNodes[0].textContent; // Get the original task text

  // Create input for editing
  const input = document.createElement('input');
  input.type = 'text';
  input.value = originalText;
  input.classList.add('edit-input');

  // Save Button
  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save Task';
  saveButton.classList.add('save-button');
  saveButton.addEventListener('click', () => {
    const updatedText = input.value.trim();
    if (updatedText === '') {
      alert('Task cannot be empty');
      return;
    }

    // Update task text
    task.textContent = updatedText;
    task.appendChild(editButton);
    task.appendChild(deleteButton);
  });

  // Replace task content with input and save button
  const editButton = task.querySelector('.edit-button');
  const deleteButton = task.querySelector('.delete-button');
  task.textContent = ''; // Clear current task content
  task.appendChild(input);
  task.appendChild(saveButton);
}
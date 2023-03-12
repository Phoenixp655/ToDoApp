document.addEventListener('DOMContentLoaded', function () {
  loadTask();
});

const addTask = async () => {
  const inputTask = document.getElementById('input-task').value;
  await fetch('/api/todo/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: inputTask }),
  })
    .then((data) => data.json())
    .then((data) => {
      createTask(data);
    })
    .catch((e) => console.log(e));
};

const createTask = async (data) => {
  new Promise((res, rej) => {
    res(
      data.forEach((e) => {
        document.getElementById('task-content').insertAdjacentHTML(
          'afterbegin',
            // // `<div class="flex flex-row items-center relative h-9 rounded p-4 mx-1 bg-white drop-shadow-lg hover:bg-gray-200" data-id="${e._id}">
            // //     <label class="swap">
            // //         <input type="checkbox">
            // //         <i class="w-5 h-5 swap-off" data-feather="circle" width="20" height="20" color="rgb(124, 124, 124)"></i>
            // //         <i class="w-5 h-5 swap-on" data-feather="check-circle" width="20" height="20" color="rgb(34, 139, 34)"></i>
            // //     </label>
            // //     <p class="ml-3">${e.name}</p>
            // // </div>`
            `<li class="h-full rounded w-full bg-white drop-shadow-lg hover:bg-gray-200" data-id="${e._id}">${e.name}</li>`
        );
      })
    );
  }).then(feather.replace());
};

const loadTask = async () => {
  await fetch('/api/todo/')
    .then((data) => data.json())
    .then((data) => {
      createTask(data.data);
    })
    .catch((e) => console.log(e));
};

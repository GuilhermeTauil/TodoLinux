let ListElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let btnElement = document.querySelector('#app Button');

let todos = JSON.parse(localStorage.getItem('list_todos'))|| [];

function RenderTodos() {
    ListElement.innerHTML = '';

    for (todo of todos) {

        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement('button');
        let linkText = document.createTextNode('Excluir');

        linkElement.setAttribute("href", "#");

        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        ListElement.appendChild(todoElement);

    }
}
RenderTodos();

function addTodo() {
    todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    RenderTodos();
    saveStorage();

}
btnElement.onclick = addTodo;


function deleteTodo(pos) {
    todos.splice(pos, 1);
    RenderTodos();
    saveStorage();
}

function saveStorage() {

    localStorage.setItem('list_todos', JSON.stringify(todos))
}


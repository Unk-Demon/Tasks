let tasks = [];

const button = document.getElementById("btnAdd");

button.onclick = function(){
    addTask();
};

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach(function(task){
            addFromStorage(task.name, task.completed);
        });
    }
});

function addFromStorage(name, completed){
    let lista = document.getElementById("lista");

    let li = document.createElement("li");
    li.innerHTML = name;

    if(completed){
        li.classList.toggle("tachado")
    }

    li.onclick = function(){
        li.classList.toggle("tachado");
        completed = !completed;
        /*tasks.forEach(function(item){
            if(item.name == name){
                item.completed = !item.completed;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                return;
            }
        });*/
        for(let i = 0; i<=tasks.length; i++){
            if(tasks[i].name == name){
                tasks[i].completed = !tasks[i].completed;
                localStorage.setItem("tasks", JSON.stringify(tasks));
                return;
            }
        };
        console.log(tasks);
    }

    const btnDelete = document.createElement("button");
        btnDelete.textContent = "Eliminar";
        btnDelete.classList.add("btn", "btn-danger");
        btnDelete.onclick = function(){
            lista.removeChild(li).closest;
            //tasks.splice(closest(li.innerHTML));
            //localStorage.removeItem("tasks").closest();
            tasks = tasks.filter(function (item){
                return item.name !== name;
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));

            console.log(tasks);
        }

    lista.appendChild(li);
    li.appendChild(btnDelete);
}

function addTask(){
    const task = document.getElementById("task").value;

    if(task === ""){
        alert("Add a Task");
    }else{

        tasks.push({name: task, completed: false});

        let lista = document.getElementById("lista");

        let li = document.createElement("li");
        li.innerHTML = task;
        li.onclick = function(){
            li.classList.toggle("tachado");
            /*tasks.forEach(function(item){
                if(item.name == task){
                    item.completed = !item.completed;
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                    return;
                }
            });*/
            for(let i = 0; i<=tasks.length; i++){
                if(tasks[i].name == task){
                    tasks[i].completed = !tasks[i].completed;
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                    return;
                }
            };
            console.log(tasks);
        }

        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Eliminar";
        btnDelete.classList.add("btn", "btn-danger");
        btnDelete.onclick = function(){
            lista.removeChild(li).closest;
            //tasks.splice(closest(li.innerHTML));
            //localStorage.removeItem("tasks").closest();
            tasks = tasks.filter(function (item){
                return item.name !== task;
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));

            console.log(tasks);
        }

        lista.appendChild(li);
        li.appendChild(btnDelete);

        document.getElementById("task").value = "";

        console.log(tasks);

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
};
let getForm=document.querySelector('#Forms');
getForm.addEventListener('submit',function(){

    let inputElement=document.querySelector('#inputs');
    let task=inputElement.value.trim();

    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    taskList.push(task);

    localStorage.setItem('tasks',JSON.stringify(taskList));

    displayTasks();
});

let displayTasks=()=>{
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    if(taskList!==0){
        let taskRows='';
        for(task of taskList){
            taskRows+=`<li class="list-group-item list-group-item-primary list-group-item-action">
                    ${task}
                    <span>
                        <i class="fa fa-times"></i>
                    </span>
                </li>`
        }
        document.querySelector('#Task').innerHTML=taskRows;
    }
};
displayTasks();

let removeTasks=document.querySelector('#Task');
removeTasks.addEventListener('click',function(event){

    let targetElement=event.target;
    if(targetElement.classList.contains('fa-times')){
        let actualElement=targetElement.parentElement.parentElement;
        let selectElement=actualElement.innerText;

        let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
        taskList=taskList.filter(function(task){
            return task.trim()!==selectElement.trim();    
        });
        localStorage.setItem('tasks',JSON.stringify(taskList));
        displayTasks();
    }
});

let removeAllTasks=document.querySelector('#removes');
removeAllTasks.addEventListener('click',function(){
    localStorage.removeItem('tasks');
    displayTasks();
});
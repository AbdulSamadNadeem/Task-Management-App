function nextpage(){

   window.location.href = `login.html`;

}

function login(){
    
let email = document.getElementById('email').value
console.log(email)
// email= email.value
let pass= document.getElementById('password').value
console.log(pass)
// pass= pass.value
let error1= document.getElementById('error1')
let error2= document.getElementById('error2')

let dummyemail = "example123gmail.com"
let dummypassword = 12345;


if(email == ""){

error1.innerText=`Please Enter Email`

}
if(pass == ""){

error2.innerText=`Please Enter Password`

}

else if(email !== dummyemail || pass !== dummypassword){


    error2.innerText=`Invalid Username Or Password `

}

if(email == dummyemail && pass == dummypassword){

    error2.innerText= dashboard()

}

function dashboard(){
    window.location.href= `./dashboard.html`
}

}
let todos=[]
let title= document.getElementById('title')
let description= document.getElementById('descr')
let DOM= document.querySelector('.tasks') 
function userInp(){
    
    let tasks ={
        TaskTitle : title.value,
        Taskdiscrip : description.value,
    }
    todos.push(tasks)
    

    console.log(todos)
    
    
    document.getElementById('title').value= ''
    document.getElementById('descr').value= ''
    
    print()
    
}

function print(){

    DOM.innerHTML=''
    for(let i =0 ; i<todos.length ; i++){

        DOM.innerHTML += `<h1 id="task-title">${i}: ${todos[i].TaskTitle}</h1> 
                                <p id="task-descrip">${todos[i].Taskdiscrip}</p>
                                <button  onclick= "edit(${i})">Edit</button>
                                <button onclick= "Delete(${i})">Delete</button>`     
}


}

function Delete(index){

    todos.splice(index,1)

    print()
}

function edit(index){

    let title_edit= prompt("do you want to edit title yes or no").toLocaleLowerCase()
    let discrip_edit= prompt("do you want to edit Description yes or no").toLowerCase()

    if(title_edit === "yes"){

        let new_title = prompt("enter new title")

        todos[index].TaskTitle=new_title
    }
    if(discrip_edit === "yes"){

        let new_descrip= prompt("enter new description")

        todos[index].Taskdiscrip =new_descrip
    }


    print()

}






let index=0;
let btn1=document.getElementById("btn");
if(btn1.addEventListener("click",()=>{
    index++;
    let inputbox1=document.querySelector("#inputbox");
    let inputtxt=inputbox1.value;
    if(inputtxt===''){
      alert("Add task");
       
      return;
    }
    
   
    console.log(inputtxt);
    let newel=document.createElement("div");
    newel.setAttribute("id",`div${index}`);

    let addtasks=document.querySelector(".main");
    addtasks.append(newel);
    newel.classList.add("div1");

    let newdiv=document.createElement("div");
    newdiv.setAttribute("id","divel");
    newdiv.innerText=inputtxt;
    newdiv.classList.add("divel");
    newel.append(newdiv);
    
    

    let newcheckbox=document.createElement("input");
    newcheckbox.setAttribute("id",`${index}`);
    newcheckbox.type='checkbox';
    newcheckbox.classList.add("checkbox1");
    newel.append(newcheckbox);

    let deletediv=document.createElement("button");
    deletediv.setAttribute("id",`${index}`);
    deletediv.innerHTML="&#10060";
    deletediv.classList.add("deldiv");
    newel.append(deletediv);
    console.log(inputtxt);

    

    const onClickcheck = function() {
        let elementcomplete=document.getElementById(`div${this.id}`);
        elementcomplete.innerHTML="Completed";
        elementcomplete.style.color="white";
        elementcomplete.style.backgroundColor="green";
        let newbtn=document.createElement("button");
        newbtn.innerHTML="&#10003";
        newbtn.setAttribute("id",`btn${this.id}`);
        newbtn.classList.add("checkbox1");
        elementcomplete.append(newbtn);


      }

    newcheckbox.onclick=onClickcheck;




    const onClick = function() {
        let element=document.getElementById(`div${this.id}`);
        element.remove();
    
      }

    deletediv.onclick=onClick;
    
    
    

    


    
}));

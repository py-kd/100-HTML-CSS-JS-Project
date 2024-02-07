// alert("adb");

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove", (event)=>{
    // event.pageX --> across
    // event.pageY --> up and down
    console.log("pageX", event.pageX);
    console.log("page", event.pageY);
    console.log(event);
    moveCursor(event.pageX, event.pageY)
})

const moveCursor=(pageX, pageY)=>{
    cursor.style.left=pageX+10+'px';
    cursor.style.top=pageY+20+'px';
}


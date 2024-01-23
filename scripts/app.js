//global variables
let iconImportant = false;
function saveTask(){
    console.log("Saving task");
}
function changeIcon(){
    console.log("Changing icon");
    const nonImportant = "fa-solid fa-phone";
    const isImportant = "fa-solid fa-bars";
    if (iconImportant) { 

    $("#iImportant").removeClass(isImportant)("#nonImportant").addClass(nonImportant);
    iconImportant = false;
    }
    else{
    $("#iImportant").removeClass(nonImportant)("#nonImportant").addClass(isImportant);
    iconImportant = true;
    }
    $("#iconImportant")
    //please try to restore the icon
}

function init(){
console.log("this is the parent of everything")
//load data

//hook events
$("#btnSave").click(saveTask);
$("#iImportant").click(changeIcon);
//document.getelementbyid("btnSave").click(saveTask)
}


window.onload = init;

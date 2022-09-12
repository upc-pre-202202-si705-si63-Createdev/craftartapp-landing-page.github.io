$.get("_header.html",contentToInject => {
    $("#header-placeholder").replaceWith(contentToInject);
});

$.get("_footer.html",contentToInject =>{
    $("#footer-placeholder").replaceWith(contentToInject);
});


var lista_menu = document.getElementById("lista_menu");
lista_menu.style.maxHeight="0px";

function togglemenu(){
    if(lista_menu.style.maxHeight == "0px"){
        lista_menu.style.maxHeight = "130px";
    }
    else{
        lista_menu.style.maxHeight = "0px";
    }
}


var check = document.querySelector(".check");
check.addEventListener('click',language);

function language() {
    let id=check.checked;
    if(id==true)
    {
        location.href="index_es.html"
    }else {
        location.href="index.html"
    }
}

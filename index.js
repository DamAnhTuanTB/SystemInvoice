
window.onscroll = function () {
    var els = document.getElementsByClassName("title");
    var sidebar_elm = document.getElementsByClassName('sidebar-sub');
    for (var i = 0; i < sidebar_elm.length; i++) {
        sidebar_elm[i].classList.remove("active-scroll");
    }
    for (var i = 0; i < els.length; i++) {
        var parent_elm = els[i].parentElement;
        if ((parent_elm.offsetTop - 75) <= window.pageYOffset && parent_elm.offsetTop + parent_elm.scrollHeight - 75 >= window.pageYOffset) {
            var id_sidebar = parent_elm.id;
            var sidebar_elm = document.querySelector(`a[href="#${id_sidebar}"]`);
            sidebar_elm.classList.add("active-scroll");
        }
    }
}

let idElement = location.hash.substring(1);
if(idElement){
    if(document.getElementById(idElement) !== null){
        let offset_top = document.getElementById(idElement).offsetTop;
        $("html, body").animate({ scrollTop: offset_top - 32 }, "0");
    }
   
}else{
    localStorage.clear();
}



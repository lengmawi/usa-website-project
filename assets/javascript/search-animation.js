// search animation
var magnifier = document.querySelector(".magnifier"),
    searchInput = document.querySelector("#searchInput");
magnifier.addEventListener("click", () => {
     document.querySelector(".search-form").classList.toggle("close");
});
sortList(document.querySelector("#states")[0]);
function sortList(ul) {
    var new_ul = ul.cloneNode(false);
    // Add all lis to an array
    var lis = [];
    for(var i = ul.childNodes.length; i--;){
        if(ul.childNodes[i].nodeName === 'LI')
            lis.push(ul.childNodes[i]);
    }
    // Sort the lis in descending order
    lis.sort(function(a, b){
       return parseInt(a.childNodes[0].data , 10) - 
              parseInt(b.childNodes[0].data , 10);
    });
    // Add them into the ul in order
    for(var i = 0; i < lis.length; i++)
        new_ul.appendChild(lis[i]);
    ul.parentNode.replaceChild(new_ul, ul);
}
function searchForm() {
    var query = searchInput.value,
        filter = query.toUpperCase(),
        set = document.querySelector("#states"),
        elements = document.querySelectorAll("#states li"),
        closeSearchForm = document.querySelector(".close.search-form"),
        body = document.body;
    let status = query;
    if (status === "") {
        status = "none";
    } else {
        status = "block";
    }
    set.style.display = status;
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        if (el.innerText.indexOf(filter) > -1) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    }
    body.addEventListener("click", event => {
        set.style.display = "none";
        searchInput.value = "";
    });
}
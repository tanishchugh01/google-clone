function clearSearchBar() {
    document.getElementById("search-bar").value = "";
    bigBar();
}

document.getElementById("search-bar").onkeyup = function () {
    if (document.getElementById("search-bar").value == "") {
        // alert("empty");
        bigBar();
    } else {
        smallBar();
    }
};

function bigBar() {
    var cross = document.getElementById("cross-button");
    document.getElementById("search-bar").style.width = "151mm";
    cross.style.display = "none";
    document.getElementById("vertical").style.display = "none";
}

function smallBar() {
    var cross = document.getElementById("cross-button");
    document.getElementById("search-bar").style.width = "138mm";
    cross.style.display = "";
    document.getElementById("vertical").style.display = "";
}
// function myfun() {
// var searchText=document.getElementById('search-bar');
// searchText.value=searchText.value.toUpperCase();
// }

// document.getElementById("search-bar").onkeyup = function() {myFunction()};

//                 function myFunction() {
//                   var x = document.getElementById("search-bar");
//                   x.value = x.value.toUpperCase();
//                 }

var username = "";
var namee = "";

function getUserDetails() {
    namee = prompt("Enter your name");
    username = prompt("Enter your username");

    var newTitle = "Google Account\n" + namee + "\n" + username;

    if (namee != null && username != null) {
        document.getElementById("account").title = newTitle;
    }
}

function doSearch() {
    var searchedText = document.getElementById("search-bar").value;
    if (searchedText != "") {
        // alert('You searched for : "' + searchedText + '"');
        document.title = searchedText + " - Google Search";

        open("https://www.google.com/search?q=" + searchedText, "result");
    }
}

var searchedText = document.getElementById("search-bar");

searchedText.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        // event.preventDefault();
        document.getElementById("search-button").click();

        // document.getElementById("search-button").focus();
    }
});

function dropSettingContents() {
    document.getElementById("settingDrop").classList.toggle("show");
    // alert("working");
};

// window.onclick = function (event) {
//     if (!event.target.matches(".settingButton")) {
//         var dropdown = document.getElementsByClassName("dropDownContent");

//         for (var ind = 0; ind < dropdown.length; ind++) {
//             if (dropdown[ind].classList.contains("show")) {
//                 dropdown[ind].classList.remove("show");
//             }

//             // var openDropdown = dropdown[ind];
//             // if (openDropdown.classList.contains('show')) {
//             //     openDropdown.classList.remove('show');
//             // alert("nice");
//             // }
//         }
//     }
// };

function dropOptionContents() {
    document.getElementById("optionDrop").classList.toggle("show");
    // alert("working");
}

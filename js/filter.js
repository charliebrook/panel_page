//filterSelection("all")

//TODO define some global variables for re-use

//$('.sidebar').hide().delay(400).slideDown(1000);

$('#content-wrapper').hide().delay(1000).fadeIn(1500);

function filterSelection(c) {
  document.getElementById("search-box").value = "";
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  $("#no-results").css({ "display": "none"});
  $('.filterDiv').attr("style","");//clear any inline css added by live search bar
  
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
	removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// add active css to current nav-link selected
var btnContainer = document.getElementById("side-nav");
var btns = btnContainer.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav-link-active");
    current[0].className = current[0].className.replace(" nav-link-active", "");
    this.className += " nav-link-active";
  });
}


//add "icontains" function to jquery. A modification of "contains" made to be case insensitive
jQuery.expr[':'].icontains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

//TODO put search action into one function then action it on 2 event listeners: keyup of search box and click or button
//case insensitive search
function searchCards(){
	$('#search-box').on('keyup', function () {
		
	$('.filterDiv').show();
	var filter = $(this).val().trim(); // get the value of the input, which we filter on
	$('.card-container').find(".card-body:not(:icontains(" + filter + "))").closest('.filterDiv').css('display','none');
	var hidden = $('.card-container').find(".card-body:not(:icontains(" + filter + "))");
	var all = document.getElementsByClassName("filterDiv");
	
	if(hidden.length === all.length){
		$("#no-results").css({ "display": "block"});
	} else {
		$("#no-results").css({"display": "none"});
	}
	});
	
	
}

searchCards();
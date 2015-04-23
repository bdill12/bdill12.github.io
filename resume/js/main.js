$(function(){
	var i = document.createElement("input");
	i.setAttribute("type", "date");
	if (i.type == "text") {
		console.log('To Do: Choose a Date Picker');
  } else {
  	i.setAttribute("class", "date");
  	i.setAttribute("name", "from");
  	var x = document.createElement("input");
  	x.setAttribute("class", "date");
  	x.setAttribute("type", "date");
  	x.setAttribute("name", "to");
  	var h = document.createElement("label");
  	h.setAttribute("for", "from");
  	h.innerHTML = "From";
  	var w = document.createElement("label");
  	w.setAttribute("for", "to");
  	w.innerHTML = "To";
  	$('.fromDate').append(h, i);
  	$('.fromDate').append(w, x);
  }
});
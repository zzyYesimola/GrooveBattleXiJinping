var dynatxt = document.getElementById("dynamic_text")
function aa() {
	setTimeout("ba()",500,)
	dynatxt.style = "color:#FF0000"
}
function ba() {
	setTimeout("ca()",500,)
	dynatxt.style = "color:#00FF00"
}
function ca() {
	setTimeout("da()",500,)
	dynatxt.style = "color:#0000FF"
}
function da() {
	setTimeout("ea()",500,)
	dynatxt.style = "color:#AFAF00"
}
function ea() {
	setTimeout("aa()",500,)
	dynatxt.style = "color:#00FFFF"
}

aa()
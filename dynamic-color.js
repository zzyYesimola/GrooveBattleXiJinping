var dynatxt = document.getElementById("dynamic_text")
function a() {
	setTimeout("b()",500,)
	dynatxt.style = "color:#FF0000"
}
function b() {
	setTimeout("c()",500,)
	dynatxt.style = "color:#00FF00"
}
function c() {
	setTimeout("d()",500,)
	dynatxt.style = "color:#0000FF"
}
function d() {
	setTimeout("e()",500,)
	dynatxt.style = "color:#AFAF00"
}
function e() {
	setTimeout("a()",500,)
	dynatxt.style = "color:#00FFFF"
}

a()
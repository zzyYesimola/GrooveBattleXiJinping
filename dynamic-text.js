var dynatxt = document.getElementById("dynamic_text")
function a() {
	dynatxt.innerHTML = "轻关易道,通商宽衣"
	setTimeout("b()",3000,)
	document.title = "轻关易道,通商宽衣"
}
function b() {
	dynatxt.innerHTML = "精甚,细腻的工笔画"
	setTimeout("c()",3000,)
	document.title = "精甚,细腻的工笔画"
}
function c() {
	dynatxt.innerHTML = "天行健,君子以不强自自强不息"
	setTimeout("d()",3000,)
	document.title = "天行健,君子以不强自自强不息"
}
function d() {
	dynatxt.innerHTML = "一突开啊,就溅的我满脸喷粪啊满脸是粪"
	setTimeout("a()",3000,)
	document.title = "一突开啊,就溅的我满脸喷粪啊满脸是粪"
}

a()
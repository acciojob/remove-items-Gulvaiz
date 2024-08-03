//your JS code here. If required
let btn = document.getElementById("remove")

btn.addEventListener("click", () => {
	 let select = document.getElementById("colorSelect")
	select.remove(select.index)
})
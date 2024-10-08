// write js code if required
const flip = document.querySelector("#flip")

const initialimage = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg"
const hoverimage = "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg"

flip.addEventListener("mouseenter",() => {
	flip.src =  hoverimage
})
flip.addEventListener("mouseleave",() => {
	flip.src =  initialimage
})
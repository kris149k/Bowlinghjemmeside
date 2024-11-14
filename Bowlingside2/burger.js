
function openSidebar() {
  document.querySelector('.burger-sidebar').classList.add('burger-sidebar-active');
  document.querySelector('#bg-overlay').classList.add('active');
  document.body.classList.add("no-scroll")

  const sidebarUlElement = document.querySelector(".sidebar-nav ul")
  sidebarUlElement.classList.add("sidebar-animate")
}

function closeSidebar() {
  document.querySelector('.burger-sidebar').classList.remove('burger-sidebar-active');
  document.querySelector('#bg-overlay').classList.remove('active');
  document.body.classList.remove("no-scroll")

  setTimeout(() => {document.querySelector(".sidebar-nav ul").classList.remove("sidebar-animate")}, 350)
}

// Slider scroll

let scrollContainer = document.querySelector(".section3-scroller")
let backBtn = document.querySelector(".back-btn")
let nextBtn = document.querySelector(".next-btn")

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = 'smooth'
  scrollContainer.scrollLeft += 1200
})

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = 'smooth'
  scrollContainer.scrollLeft -= 1200 
})


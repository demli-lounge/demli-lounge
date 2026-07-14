const modal = document.getElementById("menuModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.getElementById("modalClose");

function openModal(src, title){
  modalImage.src = src;
  modalTitle.textContent = title;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".menu-card").forEach(card=>{
  card.addEventListener("click",()=>openModal(card.dataset.image, card.dataset.title));
});

document.getElementById("openFullMenu").addEventListener("click",()=>openModal("assets/menu-full.jpg","Tam menyu"));
closeBtn.addEventListener("click",closeModal);
modal.addEventListener("click",(e)=>{ if(e.target===modal) closeModal(); });
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeModal(); });
document.getElementById("year").textContent = new Date().getFullYear();

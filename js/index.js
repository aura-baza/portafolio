// creando un evento de interfaz cuando carga el documento.
document.addEventListener("DOMContentLoaded", () => {
  const itemNav = [...document.querySelectorAll(".items__link")];
  const itemElementBefore = [...document.querySelectorAll(".element_before")];
  const input_menu = document.querySelector(".input__hamburguesa");

  itemNav.map((item) => {
  //activando cada item del nav mediante le scroll.
  let heightSection = window.innerHeight/3*2;
  // alert(heightSection);
  const activeItem=()=>{
    listSection.map((item)=>{
   if (item.getBoundingClientRect().top<heightSection) {
     itemElementBefore.map((span)=>{
       span.classList.remove("item_a_active");
       itemElementBefore[parseInt(item.dataset.id)].classList.add("item_a_active");
     });
   }
  });
 }
  const listSection = [...document.querySelectorAll(".container__section")];
  window.addEventListener("scroll", () => {
    activeItem();
  });
  //creando slider de palabbras mediante la funcion setTimeout.
  const ocupacion = document.querySelector(".ocupaciones");
  const slider_word = () => {
    setTimeout(() => {
      ocupacion.style.color = "black";
      ocupacion.textContent = "Ingeniera.";
    }, 0);
    setTimeout(() => {
      ocupacion.style.color = "blue";
      ocupacion.textContent = "Programadora.";
    }, 4000);
    setTimeout(() => {
      ocupacion.style.color = "red";
      ocupacion.textContent = "Creativa.";
    }, 8000);
  };
   slider_word();
   setInterval(slider_word, 12000);
    item.addEventListener("click", (e) => {
      //cuando agregamos la propiedad data-id desde el html, ésta automaticamente se guarda en el objeto dataSet
      itemElementBefore.map((itemB) => {
        itemB.classList.remove("item_a_active");
      });
      itemElementBefore[parseInt(item.dataset.id)].classList.add(
        "item_a_active"
      );
      if (input_menu.checked) {
        input_menu.checked = false;
      }
    });
  });
});

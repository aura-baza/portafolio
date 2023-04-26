import { projects } from "./data.js";
// creando un evento de interfaz cuando carga el documento.
document.addEventListener("DOMContentLoaded", () => {
  const itemNav = [...document.querySelectorAll(".items__link")];
  const itemElementBefore = [...document.querySelectorAll(".element_before")];
  const inputMenu = document.querySelector(".input__hamburguesa");
  const containerCardProjects = document.querySelector(
    ".container__card__projects"
  );
  const btnsProjects = [...document.querySelectorAll(".item__filtro")];

  itemNav.map((item) => {
    //activando cada item del nav mediante le scroll.
    let heightSection = (window.innerHeight / 3) * 2;
    // alert(heightSection);
    const activeItem = () => {
      listSection.map((item) => {
        if (item.getBoundingClientRect().top < heightSection) {
          itemElementBefore.map((span) => {
            span.classList.remove("item_a_active");
            itemElementBefore[parseInt(item.dataset.id)].classList.add(
              "item_a_active"
            );
          });
        }
      });
    };
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
    //  slider_word();
    //  setInterval(slider_word, 12000);
    item.addEventListener("click", (e) => {
      //cuando agregamos la propiedad data-id desde el html, ésta automaticamente se guarda en el objeto dataSet
      itemElementBefore.map((itemB) => {
        itemB.classList.remove("item_a_active");
      });
      itemElementBefore[parseInt(item.dataset.id)].classList.add(
        "item_a_active"
      );
      if (inputMenu.checked) {
        inputMenu.checked = false;
      }
    });
  });

  function showProjects(array) {
    if (array.length === 0) {
      containerCardProjects.innerText = "No hay proyectos para mostrar";
    } else {
      containerCardProjects.innerHTML = "";
      for (let i = 0; i < array.length; i++) {
        const card = document.createElement("DIV");
        card.innerHTML = `<div class="card__project">
        <img src=${array[i].image} alt="" class="card__img">
        <h3 class="card__titulo__proyect">${array[i].name}</h3>
        <div class="container__info">
          <p class="descripcion__card">${array[i].description}</p>
          <button  href=${array[i].link} class="btn__ver">Ver Proyecto</button>
        </div>
      </div>
        `;
        containerCardProjects.appendChild(card);
      }
    }
  }
  showProjects(projects);

  for (let i = 0; i < btnsProjects.length; i++) {
    let btn=btnsProjects[i];
    btn.addEventListener("click", (e) => {
      if (e.target.textContent.toLowerCase()==="todos".toLowerCase()) {
        showProjects(projects);
      }else{
        let array_filter= projects.filter((project) =>project.category.toLowerCase()===e.target.innerText.toLowerCase());
        showProjects(array_filter);
      }
    });
  }
});

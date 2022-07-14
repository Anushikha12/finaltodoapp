//access add list button 
const addList = document.getElementById("addList");
const popup = document.querySelector(".wrapper");

addList.addEventListener("click", () => {
  //upfront(popup)-
  const upfront = document.createElement("div");
  const upfront_heading = document.createElement("p");
  const upfront_input = document.createElement("input");
  const add_btn = document.createElement("div");
  const close_btn = document.createElement("div");

  //when we press add of upfront,it blurs the background
  document.querySelector(".parent").classList.add("blur");
  popup.appendChild(upfront);
  upfront.className = "upfront";
  upfront_heading.innerText = "Add new List";
    upfront_input.type = "text";
  upfront_input.style.textAlign= 'center';
  add_btn.className = "button";
  close_btn.className = "button";
  add_btn.innerText = "Add";
  close_btn.innerText = "Close";

  upfront.appendChild(upfront_heading);
  upfront.appendChild(upfront_input);
  upfront.appendChild(add_btn);
  upfront.appendChild(close_btn);

  add_btn.addEventListener("click", () => {
      document.getElementById("lower-text").style.display="none";
      //create div elements here
      const element = document.createElement("div");
      const boxHeading = document.createElement("span");
      const add = document.createElement("i");
      const delete_btn = document.createElement("i");
      const btnContainer = document.createElement("div");
      btnContainer.className = "button-container";
      add.className = "fa-solid fa-circle-plus";
      delete_btn.className = "fa-solid fa-trash-can";
      boxHeading.id="box-heading";
      element.className = "child";
      const lowerContainer=document.querySelector(".lower-container");

      lowerContainer.appendChild(element);
      element.appendChild(boxHeading);
      element.appendChild(btnContainer);
      btnContainer.appendChild(add);
      btnContainer.appendChild(delete_btn);
      boxHeading.innerText = upfront_input.value;
      //create new page so that when we clicks on heading on one div element,it opens in new page
      boxHeading.addEventListener('click',()=>{
        const heading=document.getElementById("heading");
        heading.innerText=boxHeading.innerText;
        const parent=document.querySelector(".parent");
        const nextPage=document.querySelector(".next-page");
        //only new page will show here
        parent.style.visibility="hidden";
        nextPage.style.visibility="visible";
        const backBtn=document.getElementById("btn");
        //append div elements to new page
        nextPage.appendChild(element);
        delete_btn.addEventListener('click',()=>{
          nextPage.removeChild(element);
          parent.style.visibility="visible";
          nextPage.style.visibility="hidden";
        })
        backBtn.addEventListener('click',()=>{
          nextPage.removeChild(element);//line 73
          lowerContainer.appendChild(element);
          parent.style.visibility="visible";
          nextPage.style.visibility="hidden";
        })
      })
      

      popup.removeChild(upfront);
      document.querySelector('.parent').classList.remove("blur");
      delete_btn.addEventListener("click", () => {
        lowerContainer.removeChild(element);
        if(lowerContainer.innerText===""){
          document.querySelector("#lower-text").style.display="block";
        }
      });

      //new upfront here for add icon of div element
      add.addEventListener("click", () => {
        const popupbox = document.createElement("div");
        const popHeading = document.createElement("p");
        const popInput = document.createElement("input");
        const addBtn = document.createElement("div");
        const closeBtn = document.createElement("div");
        popup.appendChild(popupbox);
        popupbox.className = "popup-box";
        popHeading.innerText = "Add new Items";
        popInput.type = "text";
        popInput.style.textAlign = "center";
        addBtn.className = "popup-box-button";
        closeBtn.className = "popup-box-button";
        addBtn.innerText = "Add";
        closeBtn.innerText = "Close";
        document.querySelector('.parent').classList.add("blur");
        popupbox.appendChild(popHeading);
        popupbox.appendChild(popInput);
        popupbox.appendChild(addBtn);
        popupbox.appendChild(closeBtn);
       
        addBtn.addEventListener("click", () => {

        //when our input value field is empty
          if (popInput.value !== "") {
            //create the div to append the items here
            const list = document.createElement("div");
            const list_item = document.createElement("span");
            const mark_done = document.createElement("button");
            list_item.className = "task-text";
            mark_done.className = "done-button";
            list.className = "task";
            list_item.innerText = popInput.value;
            mark_done.innerText = "mark done";
            document.querySelector(".parent").classList.remove("blur");
            element.appendChild(list);
            list.appendChild(list_item);
            list.appendChild(mark_done);
            popup.removeChild(popupbox);
            mark_done.addEventListener("click", () => {
              list_item.style.textDecoration = "line-through";
              list.removeChild(mark_done);
            });
          }
        });
        closeBtn.addEventListener("click", () => {
          popup.removeChild(popupbox);
        document.querySelector('.parent').classList.remove("blur");
        });
      });
  });
  close_btn.addEventListener("click", () => {
    popup.removeChild(upfront);
    document.querySelector('.parent').classList.remove("blur");
  });
});
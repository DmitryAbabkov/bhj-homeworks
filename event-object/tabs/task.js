// const tabs = document.querySelectorAll(".tab"),
//   tabContent = document.querySelectorAll(".tab__content");

// function hideTab() {
//   tabs.forEach((tab) => {
//     tab.classList.remove("tab_active");
//   });
// }

// function showContent(i) {
//   let arr = Array.from(tabContent);
//   arr.forEach((item) => {
//     item.classList.remove("tab__content_active");
//   });
//   arr[i].classList.toggle("tab__content_active");
// }

// tabs.forEach((item, i) => {
//   item.addEventListener("click", () => {
//     hideTab();
//     item.classList.add("tab_active");
//     showContent(i);
//   });
// });

// document.addEventListener("keydown", (e) => {
//   if (e.code === "KeyW") {
//     for (let i = 0; i < 6; i++) {
//       showContent(i);
//     }
//   }
// });

const tabs = Array.from(document.querySelectorAll(".tab")),
  tabContent = Array.from(document.querySelectorAll(".tab__content"));

function hideTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("tab_active");
  });
}

function showContent(i) {
  tabContent.forEach((item) => {
    item.classList.remove("tab__content_active");
  });
  tabContent[i].classList.add("tab__content_active");
}

tabs.forEach((item, i) => {
  item.addEventListener("click", () => {
    hideTab();
    item.classList.add("tab_active");
    showContent(i);
  });
});

let counter = 0;

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyW") {
    if (counter <= tabs.length) {
      tabs[counter].classList.remove("tab_active");
      tabContent[counter].classList.remove("tab__content_active");
      ++counter;
      tabs[counter].classList.add("tab_active");
      tabContent[counter].classList.add("tab__content_active");
      console.log(counter);
    } else {
      return (counter = 0);
    }
  }
});

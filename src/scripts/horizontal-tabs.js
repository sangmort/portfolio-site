// Horizontal Tabs
document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      openTab(this.dataset.tab);
      updateActiveTabStyle(this);
    });
  });

  // First tab clicked by default
  tabs[0].click();
});

function openTab(tabName) {
  let i, tabContent;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Style the tab if they are active
function updateActiveTabStyle(clickedTab) {
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.classList.remove('active-tab');
  });

  clickedTab.classList.add('active-tab');
}
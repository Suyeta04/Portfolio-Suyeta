//console.log("Script running...")
/*document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.hamburger').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.hamburger').style.display='none'
        setTimeout(() =>{ 
            document.querySelector('.cross').style.display='inline'
        },300);
    }
});

const menuOpenBtn = document.getElementById('menu-open-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const sidebar = document.getElementById('sidebar');

    menuOpenBtn.addEventListener('click', () => {
      sidebar.classList.add('active');  // Open sidebar
    });

    menuCloseBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');  // Close sidebar
    });*/

    const hamburgerButton = document.querySelector('.hamburger-button');
    const menuOptions = document.querySelector('.sidebar');

    hamburgerButton.addEventListener('click', () => {
      menuOptions.classList.toggle('open');
      
      const hamburgerIcon = hamburgerButton.querySelector('.hamburger-icon');
      hamburgerIcon.classList.toggle('open');
    });
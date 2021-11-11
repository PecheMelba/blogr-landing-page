/*------------------Media querry changed state---------------*/
const mediaQuery = window.matchMedia('(min-width: 900px)');
let isDesktopMode = false;

function handleTabletChange(e) 
{
  // Check if the media query is true
  if (e.matches) //if viewports at least 950px wide
  { 
    isDesktopMode = true; 
  }
  else//if viewports less than 950px wide
  {     
    isDesktopMode = false;
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery)


// ------------------------Mobile menu--------------------
document.getElementById('menu-hamburger').addEventListener("click", () => 
{
    if(!isDesktopMode)
    {
        document.getElementById("menu").style.display = "inline";
        document.getElementById("menu-hamburger").style.display = "none";
        document.getElementById("menu-close-button").style.display = "inline";
    }
});

document.getElementById('menu-close-button').addEventListener("click", () => 
{
    if(!isDesktopMode)
    {
        document.getElementById("menu").style.display = "none";
        document.getElementById("menu-hamburger").style.display = "inline";
        document.getElementById("menu-close-button").style.display = "none";
    }
});


let MenuCategoryRefs = document.getElementsByClassName("menu-category");
let subMenuRefs = document.getElementsByClassName("sub-menu");

for(currentMenu in MenuCategoryRefs)
{ 
  MenuCategoryRefs[currentMenu].addEventListener("click", function() 
  {
      // if the sub menu is not visible
      if(this.nextElementSibling.style.display != "block")
      {
        //we hide all the sub menu to have the clicked one showing
        for (var currentSubMenu = 0; currentSubMenu < subMenuRefs.length; currentSubMenu++)
          subMenuRefs[currentSubMenu].style.display = 'none';

        // we reinit all the arrows too
        for (var i = 0; i < MenuCategoryRefs.length; i++)
          MenuCategoryRefs[i].children[1].style.transform = "rotate(0deg)";

        this.nextElementSibling.style.display = "block";
        this.children[1].style.transform = "rotate(180deg)";
      }
      else 
      {
        this.nextElementSibling.style.display = "none";           
        this.children[1].style.transform = "rotate(0deg)";
      }
  });
}
// ----------------------------------
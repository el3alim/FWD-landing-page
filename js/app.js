// Placing the navigation ul container in a variable
const navbarList = document.getElementById('navbar__list');
// Placing the sections in a variable as a node list array
const sectionList = document.querySelectorAll('section');

// The following function will loop over the section elements to:
function createNavBarMenu () {
    // Create a temporary document fragement
    let fragment = document.createDocumentFragment();
    sectionList.forEach(function(section){
        // - Create an li for every section
        let navbarItem = document.createElement('li');
        // - Create an anchor tag for every li
        let navbarLink = document.createElement('a');
        // - Assign the designated CSS class for the anchor tag
        navbarLink.classList.add('menu__link');
        // - Assign an href for every anchor tag to go to the targetted section tag
        navbarLink.href = `#${section.id}`;
        // - Assign a inner text for the anchor tag
        navbarLink.innerHTML = section.getAttribute('data-nav');
        // Create a smooth transition to section
        navbarLink.addEventListener('click', function (event){
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth"});
        });
        // - Append the created anchor tag as a child to the created li tag
        navbarItem.appendChild(navbarLink);
        // - Append the created li tag as a child to a document fragment
        fragment.appendChild(navbarItem);
    });
    // - Append the document fragment as a child to the ul container
    navbarList.appendChild(fragment);
};
// Calling the previous function
createNavBarMenu();

// The following function hides the navbar when scrolling past the page top
function handleNavbar(){
    let bodyPosition = document.body.getBoundingClientRect().y;
    if (bodyPosition <= 224 && bodyPosition > 0){
        document.querySelector('#navbar__list').style.display = 'block';
    }else{
        document.querySelector('#navbar__list').style.display = 'block';
        setTimeout(function hideNavbar(){
            document.querySelector('#navbar__list').style.display = 'none';
        }, 3000);
    }
}

// Calliing the navbar hiding function upon a mouse movement event
document.addEventListener("mousemove", handleNavbar);
// Calliing the navbar hiding function upon a scroll event
document.addEventListener("scroll", handleNavbar);

// Alternating section and anchor tags activation classes based on viewport
document.addEventListener("scroll", function activateSection (){ 
    sectionList.forEach(function (section){
        let anchorLinks = document.querySelectorAll('a.menu__link');
        let sectionPosition = section.getBoundingClientRect().y;
        if (sectionPosition < 258 && sectionPosition > -440){
            section.classList.add('active');
            for (let i = 0; i < anchorLinks.length; i++){
                if (anchorLinks[i].innerHTML === section.dataset.nav){
                    anchorLinks[i].classList.add('activeAnchor');
                } else {
                    anchorLinks[i].classList.remove('activeAnchor');
                }
            }
        } else {
            section.classList.remove('active');
        }
    });
});

// End of JS code
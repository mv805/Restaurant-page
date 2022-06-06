import './style.css';
import './home-component.js';
//build base format --index
//      build-header --index
//      build footer --index
//build main page --main
//      splash image --main
//      about us --main
//      services --main
//cleanup/remove components --index

class NavBar {

    navBar;
    navTabsTitleList = ['Home', 'Menu', 'Contact'];
    tabSelected = 'Home';
    navTabsTitle;
    navTabContainers;


    constructor() {

        this.navBar = document.createElement('nav');
        document.body.appendChild(this.navBar);
        this.#generateTabs();
        this.navTabsTitle = document.querySelectorAll('.tab-nav > div');
        this.navTabContainers = document.querySelectorAll('nav > div');
        this.#selectTab('Home');
    }

    #generateTabs() {

        this.navTabsTitleList.forEach(title => {
            let tabContainer = document.createElement('div');
            let content = document.createElement('div');
            content.textContent = `${title}`;
            tabContainer.appendChild(content);
            tabContainer.classList.add('tab-nav');
            this.navBar.appendChild(tabContainer);
        });
    }

    #selectTab(tabToSelect) {
        this.#deselectTabs();
        Array.from(this.navTabContainers).forEach(tab => {
            if (tab.textContent === tabToSelect) {
                tab.classList.add('tab-nav-selected');
            }
        });
    }

    #deselectTabs() {
        Array.from(this.navTabContainers).forEach(tab => {
            tab.classList.remove('tab-nav-selected');
        });
    }
    // <nav>
    //         <div class="tab-nav tab-nav-selected">
    //             <div>Home</div>
    //         </div>
    //         <div class="tab-nav">
    //             <div>Menu</div>
    //         </div>
    //         <div class="tab-nav">
    //             <div>Contact</div>
    //         </div>
    //     </nav>
}

function addFooter() {
    let footer = document.createElement('footer');
    document.body.appendChild(footer);
}

function cleanupChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const navBar = new NavBar();
addFooter();


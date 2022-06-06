

//build base format --index
//      build-header --index
//      build footer --index
//build main page --main
//      splash image --main
//      about us --main
//      services --main
//cleanup/remove components --index

export function homeSplashTitle() {
    // <div class="sushi-main-splash">
    //         <div>OSAKA SUSHI</div>
    //         <div>間が専制</div>
    //     </div>
    let container = document.createElement('div');
    let title = document.createElement('div');
    let nameInJapanese = document.createElement('div');
    container.classList.add('sushi-main-splash');
    container.appendChild(title);
    container.appendChild(nameInJapanese);

    return container;
}
let modalWindow = document.getElementById('modalWindow');

let addBtn = document.getElementById('addButton');

addBtn.addEventListener('click', () => {
    modalWindow.classList.add('modalWindowActive');
})

let label = document.getElementsByClassName('labelForRadioInput');

let labelValues = Object.values(label);

let radioInput = document.getElementsByClassName('radioInput');

let radioInputValues = Object.values(radioInput);

let continueBtn = document.getElementById('continueBtn');

let productItem = document.getElementsByClassName('productItem');

let productsBox = document.getElementById('productsBox');

let productNumber = document.getElementById('productNumber');

let price = document.getElementById('price');

let submitAndPayBtn = document.getElementById('submitAndPayBtn');

let modalWindowSucces = document.getElementById('modalWindowSucces');

let modalWindowFailed = document.getElementById('modalWindowFailed');

let object = {payment : true};

submitAndPayBtn.addEventListener('click', () => {
    if(object.payment === true) {
        modalWindowSucces.classList.add('modalWindowActive');
    }else {
        modalWindowFailed.classList.add('modalWindowActive');
    }
})

labelValues.forEach( element => {
    element.style.backgroundColor = '#fff';

    element.addEventListener('click', () => {
        let labelIndex = labelValues.indexOf(element);

        labelValues[labelIndex].style.backgroundColor = '#E1E3EE';
        
    });
})

radioInputValues.forEach( element => {
    element.addEventListener('click', () => {
        let inputIndex = radioInputValues.indexOf(element);
        
        let inputValue = Number(radioInputValues[inputIndex].value);
        console.log(inputValue)

            if(inputValue === 4) {
                price.innerText = '80';
            }else if (inputValue === 3){
                price.innerText = '72';
            }else if (inputValue === 2){
                price.innerText = '60';
            }else if (inputValue === 1){
                price.innerText = '44';
            }

        continueBtn.addEventListener('click', () => {
            modalWindow.classList.remove('modalWindowActive');
            for (inputValue; inputValue > 0; inputValue--) {
                console.log('bla')
                let productItemClons = productItem[0].cloneNode(true);
                productsBox.appendChild(productItemClons);
            }
            productsBox.style.overflowY = 'scroll';

            
        });
    });
});
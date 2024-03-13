/**
 *
 * @param {integer} i
 * @param {integer} j
 * @returns the Html you need to render the basket
 */

function renderBasketHtml(i, j) {
  const myBasket = basket[j];
  return /*html*/ `
    <div class="filledBasket">
                <span>
                    ${amounts[j]}
                    ${myBasket.title}
                </span>
                <span>
                    ${myBasket.priceString}
                </span> 
            </div>
            <div id="order${j}">
                <div class="changeBasket">
                    <a onclick="toggleTextarea(${j})" href="#">Anmerkung hinzufügen</a>
                    <img onclick="reduceMeal(${j})" class="fp-icons" src="img/flaticon.png" alt="flaticon">
                    <img onclick="increaseMeal(${
                      (i, j)
                    })"class="fp-icons" src="img/plusicon.png" alt="plusicon">  
                </div>
                <div id="changeBasket${j}" class="d-none">
                    <textarea type="text" name="Comment" id="textArea${j}" cols="33" rows="3"></textarea>
                    <a href="#" onclick="getRemark(${j})">hinzufügen</a>
                    <a href="#" onclick="toggleTextarea(${j})">abbrechen</a>
                </div>
            </div>
       
        <div class="border"></div> `;
}

/**
 * this function loads the content to show the default empty basket
 */

function emptyBasketHtml() {
  let loadBasket = document.getElementById("orderdItemsContainer");
  loadBasket.innerHTML = /*html*/ ` 
    <p>
    <img class="basketIcon" src="img/basketicon.png" alt="basket">
    <h2>Befülle deinen Warenkorb</h2>
    Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
    </p>`;
}

function emptyRespBasketHtml() {
  let loadRespBasket = document.getElementById("respBasket");

  loadRespBasket.innerHTML = /*html*/ `      
        
             <div class="emptyRespBasket">
                <p>
                    <img class="basketIcon" src="img/basketicon.png" alt="basket">
                    <h2>Befülle deinen Warenkorb</h2>
                    Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
                </p>
            </div>`;
}
/**
 * this function loads the content to show the default empty responsive basket
 */

function emptyRespBasketHtml() {
  let loadRespBasket = document.getElementById("respBasket");

  loadRespBasket.innerHTML = /*html*/ `      
    
         <div class="emptyRespBasket">
            <p>
                <img class="basketIcon" src="img/basketicon.png" alt="basket">
                <h2>Befülle deinen Warenkorb</h2>
                Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
            </p>
        </div>`;
}

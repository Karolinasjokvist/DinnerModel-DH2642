function DetailsView(props) {
    return (console.log(props),
        <div class="detailsView">

            <div class="alignView">
                <div>
                    <img class="imageView" src={props.dish.image}></img>
                </div>

                <div>
                    <h1 class="titleView">{props.dish.title}</h1>
                    <p class="dishTypeView">{dishType(props.dish)}</p>
                    <div class="infoView">
                        <table class="infoView1">
                            <tbody>
                                <tr>
                                    <td>{props.dish.vegetarian ? '✔️' : '❌'} Vegetarian</td>
                                    <td>{props.dish.vegan ? '✔️' : '❌'} Vegan</td>
                                </tr>
                                <tr>
                                    <td>{props.dish.glutenFree ? '✔️' : '❌'} Gluten Free</td>
                                    <td>{props.dish.dairyFree ? '✔️' : '❌'} Dairy Free</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br></br>People per serving: {props.dish.servings}</p>
                        <p>Price per serving: {props.dish.pricePerServing} kr</p>
                        <p>Total price: {roundOff(props.dish.pricePerServing * props.people)} kr</p>
                        <p>Ready in {props.dish.readyInMinutes} min</p>
                        <button class="buttonView" disabled={props.isDishInMenu != undefined} onClick={() => { props.dishAdded(props.dish); window.location.hash = "#search" }}>Add to menu</button>
                        <button class="buttonView" onClick={() => window.location.hash = "#search"}>Cancel</button>
                    </div>
                </div>
            </div>

            <div class="recipeView">

                <table class="ingredientView">
                    <thead>
                        <th>Ingredients:</th>
                    </thead>
                    <tbody>
                        {[...props.dish.extendedIngredients].map(dish =>
                            <tr>
                                <td>{roundOff(dish.amount)}{" "}{dish.unit}</td>
                                <td>{dish.nameClean}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <table class="instructionsView">
                    <thead>
                        <th>Instructions:</th>
                    </thead>
                    <tbody>
                        {divide(props.dish.instructions).map(dish =>
                            <tr>
                                <td>{dish}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

function divide(string) {
    let a = string.split('');
    for (var i = 0; i < a.length; i++) {
        for (var j = 48; j < 58; j++) {
            if (a[i] == String.fromCharCode(j) && a[i + 1] == String.fromCharCode(46)) {
                a[i] = "ღ";
                a[i + 1] = String.fromCharCode(j);
                a[i + 2] = ". ";
                i += 2;
            }

        }
    }
    string = a.join('');
    return string.split('ღ');
}

function roundOff(amount) {
    if (amount % 1 != 0) {
        return amount.toFixed(2);
    }
    return amount;
}





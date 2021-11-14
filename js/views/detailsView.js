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
                        <table class="tableView">
                            <tbody>
                                <tr>
                                    <td>{props.dish.vegetarian ? '☑' : '☒'} Vegetarian</td>
                                    <td>{props.dish.vegan ? '☑' : '☒'} Vegan</td>
                                </tr>
                                <tr>
                                    <td>{props.dish.glutenFree ? '☑' : '☒'} Gluten Free</td>
                                    <td>{props.dish.dairyFree ? '☑' : '☒'} Dairy Free</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br></br>People per serving: {props.dish.servings}</p>
                        <p>Price per serving: {props.dish.pricePerServing} kr</p>
                        <p>Ready in {props.dish.readyInMinutes} min</p>
                        <button class = "buttonView" disabled={props.isDishInMenu == true} onClick={props.dishAdded}>Add to menu</button>
                        <button class = "buttonView">Cancel</button>
                    </div>
                </div>
            </div>

            <div class="ingredientView">
                <table>
                    <thead>
                        <th>Ingredients:</th>
                    </thead>
                    <tbody>
                        {[...props.dish.extendedIngredients].map(dish =>
                            <tr>
                                <td>{dish.amount}{" "}{dish.unit}</td>
                                <td>{" "}</td>
                                <td>{" "}</td>
                                <td>{" "}</td>
                                <td>{dish.nameClean}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div class="instructionsView">
                {divide(props.dish.instructions).map(dish =>
                    <p><br></br>{dish}</p>
                )}
            </div>
        </div>
    );
}

function divide(string) {
    let a = string.split('');
    for (var i = 0; i < a.length; i++) {
        for (var j = 48; j < 58; j++) {
            if (a[i] == String.fromCharCode(j) && a[i+1] == String.fromCharCode(46)) {
                a[i] = "/";
                a[i + 1] = String.fromCharCode(j);
                a[i + 2] = ". ";
                i += 2;
            }

        }
    }
    string = a.join('');
    return string.split('/');
}





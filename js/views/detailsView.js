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
                        <table class = "tableView">
                            <tbody>
                                <tr class = "tr">
                                    <td>{props.dish.vegetarian ? '☑' : '☒'} Vegetarian</td>
                                    <td>{props.dish.vegan ? '☑' : '☒'} Vegan</td>
                                </tr>
                                <tr class = "tr">
                                    <td>{props.dish.glutenFree ? '☑' : '☒'} Gluten Free</td>
                                    <td>{props.dish.dairyFree ? '☑' : '☒'} Dairy Free</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><br></br>People per serving: {props.dish.servings}</p>
                        <p>Price per serving: {props.dish.pricePerServing} kr</p>
                        <p>Ready in {props.dish.readyInMinutes} min</p>
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

            <div>
                {props.dish.instructions}
            </div>
        </div>
    );
}
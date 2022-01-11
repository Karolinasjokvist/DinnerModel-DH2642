function SidebarView(props) {
    return (console.log(props),  // a lonely return on a line returns undefined. Parentheses needed
        <div class = "sideBarView">
            <button disabled={props.guests <= 1} onClick={event => props.setGuests(props.guests - 1)} class="deleteButtonView">-</button>
            {' '}<span title="guests">{props.guests}</span>{' '}
            <button onClick={event => props.setGuests(props.guests + 1)} class="deleteButtonView">+</button>
            <table>
                <tbody>
                    {[...props.dishes].sort(compareDishes).map(dish => 
                    <tr id = {dish.id}>
                        <td><button onClick={() => props.removeDish(dish.id)} class="deleteButtonView">❌</button></td>
                        <td><a href="" onClick={e=> {e.preventDefault(); 
                            props.dishChoice(dish.id); window.location.hash="#details";} } 
                            >{dish.title}</a>
                        </td>
                        <td>{dishType(dish)}</td>
                        <td>{(dish.pricePerServing*props.guests).toFixed(2)}</td>
                    </tr>)}

                    <tr class="showTotalPrice">
                        <td></td>
                        <td>Total:</td>
                        <td></td>
                        <td class="totalPrice">{(props.dishes.reduce((accumulator, value) => 
                        accumulator + value.pricePerServing * props.guests, 0)).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => window.location.hash = "#summary" }class = "summaryButton" >Summary of ingredients</button>
        </div>
    );
}

const types=["starter", "main course", "dessert"];
function dishType(dish){
    if(dish.dishTypes){
        const tp= dish.dishTypes.filter(value => types.includes(value));
        if(tp.length)
        return tp[0];
    }
    return "";
}
 
function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b)); 
    if(ai<bi) return -1;
    if(ai>bi) return 1;
    if(ai===bi) return 0;
}
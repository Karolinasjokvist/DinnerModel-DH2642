function SummaryView(props) {
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <div>
                Summary for <span title="nr. guests">{props.persons}</span> guests:
            </div>

            <div>
                <table class="tableView">
                    <thead>
                        <th>Ingredient</th>
                        <th>Aisle</th>
                        <th>Quantity</th>
                    </thead>
                    <tbody>
                        {[...props.ingredients].sort(compareIngredients).map(i =>
                            <tr id={i.id}>
                                <td>
                                    {i.name}
                                </td>
                                <td>
                                    {i.aisle}
                                </td>
                                <td>
                                    {(parseFloat(i.amount.toFixed(2)))*props.persons} {" "} {i.unit}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

function roundOff(amount) {
    if (typeof (amount) !== "number") {
        return amount.toFixed(2);
    }
    return amount;
}

function compareIngredients(a, b) {
    if (a.aisle < b.aisle)
        return -1;

    if (a.aisle > b.aisle) {
        return 1;
    }

    if (a.name < b.name)
        return -1;

    if (a.name > b.name) {
        return 1;
    }

    throw "error";
}




function eventPrinter(evt) { console.log(evt); }

function SearchFormView(props) {
    return (
        <div>
            <button onClick={event => props.onSearch()} >Search</button>
            <input onChange={e => props.onText(e.target.value)} />

            <select onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {props.options.map(
                    function (opt) { return <option >{opt}</option> })}
            </select>

        </div>

    );
}

function SearchResultsView(props) {
    return (
        <div>
            {props.searchResults.map(dish =>
                <span class="searchResult" key={dish.id}onClick={e=>props.dishChosen(e=dish.id)}   >
                    <img src = {"https://spoonacular.com/recipeImages/" + dish.image} height="100"></img>
                    <div>{dish.title}</div>   
                </span>,
            )}
        </div>
    )
}
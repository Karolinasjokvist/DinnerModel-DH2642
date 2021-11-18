function eventPrinter(evt) { console.log(evt); }

function SearchFormView(props) {
    return (
        <div class = "search">

            <select class = "optionsMenu" onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {props.options.map(
                    function (opt) { return <option >{opt}</option> })}
            </select>

            <input onChange={e => props.onText(e.target.value)} class = "searchBar" />
            <button onClick={() => props.onSearch()}class="searchButton" >🔍</button>
            <button onClick={() => window.location.hash = "#summary" }class = "summaryButton" >Summary</button>

        </div>

    );
}

function SearchResultsView(props) {
    return (
        <div>
            {props.searchResults.map(dish =>
                <span class="searchResult" key={dish.id} onClick={e => { props.dishChosen(e = dish.id); window.location.hash = "#details" }}   >
                    <img src={"https://spoonacular.com/recipeImages/" + dish.image} class="dishImgView"></img>
                    <div>{dish.title}</div>
                </span>,
            )}
        </div>
    )
}
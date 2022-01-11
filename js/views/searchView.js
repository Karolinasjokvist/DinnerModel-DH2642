function eventPrinter(evt) { console.log(evt); }

function SearchFormView(props) {
    return (
        <div class = "search">

            <select class = "optionsMenu" onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {props.options.map(
                    function (opt) { return <option >{opt}</option> })}
            </select>

            <input id="search" onChange={e => debounce(props.onSearch(e.target.value),1000)} class = "searchBar" />
            <button onClick={() => props.onSearch()}class="searchButton" >🔍</button>

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



var search = document.getElementById("search");
const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
} 
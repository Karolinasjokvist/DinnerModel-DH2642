let render = 12;
console.log(render)
let stop = false;
function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [search, setSearch] = React.useState(null);
    const [dishType, setDishType] = React.useState("");
    const [moreResults, setMoreResults] = React.useState(null);
    const [hashState, setHashState] = React.useState(window.location.hash);

    React.useEffect(() => {
        setPromise(DishSource.searchDishes({ number: render })
            .then((data) => setData(data))
            .catch((error) => setError(error)));
        const obs = () => {
            setMoreResults(props.model.moreResults)
        }
        props.model.addObserver(obs);

        const listener = function () { setHashState(window.location.hash); }
        window.addEventListener("hashchange", listener); //Subscribe

        return function () { window.removeEventListener("hashchange", listener), props.model.removeObserver(obs) }

    }, []);

    function infiniteScroll(search) {
        console.log("infinite")
        render += 4;
        let params = search != null ? { number: render, query: search, type: dishType } : { number: render };
        setPromise(DishSource.searchDishes(params)
            .then((data) => setData(data))
            .catch((error) => setError(error)));
        setMoreResults(false);
    }


    return (
        <div>
            {!moreResults || hashState !== "#search" || infiniteScroll(search)}
            <SearchFormView
                options={["starter", "main course", "dessert"]}
                // onText={(search) => (setSearch(search))}
                onSearch={(search) => {
                    render = 12;
                    setSearch(search);
                    setData(null);
                    setError(null);
                    setPromise(DishSource.searchDishes({
                        number: render,
                        query: search,
                        type: dishType,
                    })
                        .then((data) => setData(data))
                        .catch((error) => setError(error)));
                }}
                onDishType={(dishType) => (setDishType(dishType))}
            />
            {promiseNoData(promise, data, error) || (
                <SearchResultsView
                    searchResults={data}
                    dishChosen={(id) => props.model.setCurrentDish(id)}
                />
            )}
        </div>
    );

}

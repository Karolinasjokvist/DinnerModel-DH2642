function promiseNoData(promise, data, error) {
    console.log("2");
    if (promise === null || promise === undefined) {
        return ( <span>no data</span>)
    } else if (data == undefined) {
        return ( <img class="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    } else if (error != null /* && error !== undefined */) {
        return ( <span>{error}</span>)
    }
    return false;
}

const searchPromise = DishSource.searchDishes({type:"main course", query:"pasta" });
function SearchTest() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(function() {
        searchPromise.then(dt => setData(dt))
        .catch(er => setError(er))
    }, []);
    return promiseNoData(searchPromise, data, error) || <SearchResultsView searchResults = {data}
                                                        dishChosen = {console.log}/>
}

const detailsPromise = DishSource.getDishDetails(523145);
function DetailsTest() {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(function() {
        detailsPromise.then(dt => setData(dt))
        .catch(er => setError(er))
    }, []);
    return promiseNoData(detailsPromise, data, error) || <DetailsView dish = {data}
                                                        people = {4}
                                                        isDishInMenu = {true}
                                                        dishAdded = {console.log}/>
}
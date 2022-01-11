
const SearchPresenter = {
    data() {
        return {
            promise: null,
            data: null,
            error: null,
            search: "",
            dishType: "",
            moreResults: false
        };
    },

    props: ["model"],

    created() {
        this.promise = DishSource.searchDishes({})
            .then((data) => (this.data = data))
            .catch((error) => (this.error = error));

    },

    render() {
        return (
            <div>
                <SearchFormView
                    options={["starter", "main course", "dessert"]}
                    onText={(search) => (this.search = search)}
                    onSearch={() => {
                        this.data = null;
                        this.error = null;
                        this.promise = DishSource.searchDishes({
                            query: this.search,
                            type: this.dishType,
                        })
                            .then((data) => (this.data = data))
                            .catch((error) => (this.error = error));
                    }}
                    onDishType={(dishType) => (this.dishType = dishType)}
                />
                {promiseNoData(this.promise, this.data, this.error) || (
                    console.log(this.data),
                    <SearchResultsView
                        searchResults={this.data}
                        dishChosen={(id) => this.model.setCurrentDish(id)}
                    />
                )}
            </div>
        );
    },
};



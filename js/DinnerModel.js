class DinnerModel {
    constructor(guests = 2, dishes = [], currentDish = null) {
        this.observers = [];
        this.setNumberOfGuests(guests);
        this.dishes = dishes;
        this.currentDish = currentDish;
    }

    setNumberOfGuests(x) {
        if (x === this.numberOfGuests) {
            return;
        }

        if (x <= 0 || typeof (x) !== "number") {
            throw "error";
        } else {
            this.numberOfGuests = x;
            this.notifyObservers();
        }

    }

    addedToMenu(dish) {
        if (this.dishes.some(d => d.id === dish)) {
            return true;
        }
        return false;
    }

    addToMenu(dish) {
        if (this.addedToMenu(dish)) {
            return;
        }
        this.dishes = [...this.dishes, dish];
        this.notifyObservers();
    }

    removeFromMenu(dishData) {
        if (!this.addedToMenu(dishData)) {
            return;
        }
        console.log("hej")
        this.dishes = this.dishes.filter((dish) => dish.id !== dishData);
        this.notifyObservers();
    }

    setCurrentDish(id) {
        if (this.currentDish === id) {
            return;
        }

        this.currentDish = id;
        this.notifyObservers();
    }

    addObserver(callback) {
        this.observers = [... this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }

    notifyObservers() {
        this.observers.forEach(cb => {
            try { cb() } catch (e) { console.log(e) }
        });
    }

    setCurrentDish(id) {
        if (this.currentDish === id) {
            return;
        }

        this.currentDish = id;
        this.notifyObservers();
    }

    setCurrentDish(id) {
        if (this.currentDish === id) {
            return;
        }

        this.currentDish = id;

        this.currentDishDetails = null;
        this.currentDishError = null;
        this.notifyObservers();

        if (this.currentDish) {
            DishSource.getDishDetails(this.currentDish)
                .then(data => {
                    if(this.currentDish === id){
                        this.currentDishDetails = data
                        this.notifyObservers()
                    }
                })
                .catch(error => {
                    if(this.currentDish === id){
                        this.currentDishError = error
                        this.notifyObservers()
                    }
                });
        }
    }

}

function getIngredients(dishArr) {
    const result = {}; // object used as mapping
    dishArr.forEach(d => d.extendedIngredients.forEach(i => {
        if (!result[i.id])
            // ingredient not taken into account yet
            // associate the ingredient with the ID
            // {...i } is a *copy* of the ingredient (spread syntax)
            // we copy just in case, as we’ll change the object below
            result[i.id] = { ...i };
        else { result[i.id].amount += i.amount }
    }))
    return Object.values(result);
}
class DinnerModel {
    constructor(guests = 2, dishes = [], currentDish = null) {
        this.observers = [];
        this.setNumberOfGuests(guests);
        this.dishes = dishes;
        this.currentDish = currentDish;
    }

    setNumberOfGuests(x) {
        if (x != this.numberOfGuests) {
            this.notifyObservers();
        }

        if (x <= 0 || typeof (x) !== "number") {
            throw "error";
        } else {
            this.numberOfGuests = x;
        }

    }

    addedToMenu(dish) {
        this.dishes.forEach(addedDish => {
            if (addedDish === dish) {
                return true;
            }
        });

        return false;
    }

    addToMenu(dish) {
        if (!this.addedToMenu(dish)) {
            this.notifyObservers();
        }
        this.dishes = [... this.dishes, dish];
        this.currentDish = dish;
    }

    removeFromMenu(dishData) {
        if(!this.addedToMenu(dishData)){
            this.notifyObservers();
        }
        this.dishes = this.dishes.filter(dish => dish.id !== dishData);
    }

    setCurrentDish(id) {
        if(this.currentDish.id != id){
            this.notifyObservers();
        }
        this.currentDish.id = id;
    }

    addObserver(callback) {
        this.observers = [... this.observers, callback];
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }

    notifyObservers() {
        this.observers.forEach(cb => {
            try { cb() } catch { }
        });
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
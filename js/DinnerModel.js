class DinnerModel {
    constructor(guests = 2) {
        this.setNumberOfGuests(guests);
    }

    setNumberOfGuests(x) {
        if (x <= 0 || typeof (x) !== "number") {
            throw "error";
        } else {
            this.numberOfGuests = x;
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


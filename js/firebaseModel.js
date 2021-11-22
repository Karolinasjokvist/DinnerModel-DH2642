
function persistModel(model) {
    let loadingFromFirebase = false;
    model.addObserver(function () {
        if (!loadingFromFirebase) {
            firebase.database().ref("dinnerModel").set({
                guests: model.numberOfGuests,
                dishes: model.dishes,
                currentDish: model.currentDish
            })
        }
    }

    );
    firebase.database().ref("dinnerModel").on("value", function (data) {
        loadingFromFirebase= true;
        try {
            if (data.val()) {
             model.setNumberOfGuests(data.val().guests);
             model.setDishes(data.val().dishes);
             model.setCurrentDish(data.val().currentDish);
            }
        } catch (e) {
            console.log("Error: " + e)
        }
        finally {loadingFromFirebase= false;}
    });
}


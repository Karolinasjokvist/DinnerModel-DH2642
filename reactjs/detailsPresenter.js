function DetailsPresenter(props) {
    const [promise, setPromise] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const obs = () => {
            setPromise(props.model.currentDish)
            setData(props.model.currentDishDetails)
            setError(props.model.currentDishError)

        }
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return (
        promiseNoData(promise, data, error) ||
        <DetailsView isDishInMenu={props.model.dishes.find(d => d.id === props.model.currentDish)}
            people={props.model.numberOfGuests}
            dish={props.model.currentDishDetails}
            dishAdded={dish => props.model.addToMenu(dish)}
        />
    )
}

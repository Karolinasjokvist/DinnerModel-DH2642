function SidebarPresenter(props) {
    const [guests, setGuests] = React.useState(props.model.numberOfGuests);
    const [dishes, setDishes] = React.useState(props.model.dishes);

    React.useEffect(() => {
        const obs = () => {
            setGuests(props.model.numberOfGuests)
            setDishes(props.model.dishes)
        }
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, []);

    return <SidebarView guests={guests}
                        dishes={dishes}
        setGuests={e => props.model.setNumberOfGuests(e)}
        removeDish={d => props.model.removeFromMenu(d)}
        dishChoice={f => props.model.setCurrentDish(f)}
    />
}

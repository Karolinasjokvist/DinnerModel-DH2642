function SidebarPresenter(props) {
    return <SidebarView guests={props.model.numberOfGuests}
                        dishes={props.model.dishes}
        setGuests={e => props.model.setNumberOfGuests(e)}
    />
}

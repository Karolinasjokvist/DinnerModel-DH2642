function DetailsView(props){
    return (console.log(props),
        <div class="detailsView">
            <img class="imageView" src={props.dish.image}></img>
            <h1 class="titleView">{props.dish.title}</h1>
        </div>
    );
}
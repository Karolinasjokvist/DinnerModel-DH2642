const App = (props) =>
     <div class="flexParent">
          {defaultRoute()}
          {startView(props)}
          {moreResults(props)}
          <div class="sidebar debug"><SidebarPresenter model={props.model} /></div>
          <Show hash="#details" class="mainContent debug"><DetailsPresenter model={props.model} /></Show>
          <Show hash="#search" class="mainContent debug"><SearchPresenter model={props.model} /></Show>
          <Show hash="#summary" class="mainContent debug"><SummaryPresenter model={props.model} /></Show>
     </div>;


function defaultRoute() {
     if (!(["#search", "#summary", "#details"]
          .find((knownRoute) => window.location.hash === knownRoute))) window.location.hash = "#search";
}
function startView(props) {
     if (window.location.hash === "#details" && props.model.currentDish == null) window.location.hash = "#search";
}

function moreResults(props) {
     console.log(props.model)
     let stop = false;
     window.onscroll = function (ev) {
          let scroll = window.innerHeight + window.pageYOffset;
          let atBottom = document.body.offsetHeight;
          
          if(!stop && scroll >= atBottom){
               console.log("load")
               props.model.loadMoreResults();
               stop = true;
          }
          if(stop && scroll < atBottom - 20){
               stop = false;
          }

     };
}

window.addEventListener("hashchange", defaultRoute);




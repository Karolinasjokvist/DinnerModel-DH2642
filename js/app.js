const App = (props) =>
     <div class="flexParent">
          {defaultRoute()}
          {startView(props)}
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

window.addEventListener("hashchange", defaultRoute);
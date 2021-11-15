const App = (props) =>
     <div class="flexParent">
          <div class="sidebar debug"><SidebarPresenter model={props.model}/></div>
          <div class="mainContent debug"><SummaryPresenter model={props.model}/></div>
     </div>;
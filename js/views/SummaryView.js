function SummaryView(props){
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            Summary for <span title="nr. guests">{props.guests}</span> guests:
       </div>
    );
}

function Ingredients(dishArr){
    const result={}; // object used as mapping
    dishArr.forEach(d=> d.extendedIngredients.forEach(i=>{
         if(!result[i.id])
            // ingredient not taken into account yet
            // associate the ingredient with the ID
            // {...i } is a *copy* of the ingredient (spread syntax)
         // we copy just in case, as we’ll change the object below
         result[i.id]={...i};
        else
          {/*TODO: add i.amount to the amount of result[i.id]*/}
    }))
   return Object.values(result);
 }
 
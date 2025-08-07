
function List(){
    // const fruits=["apple","banana","kiwi","orange"];
    // const listitems=fruits.map(fr=><li>{fr}</li>)
    
    const fruit_deets=[ {name:"apple", taste:"sweet"},
                        {name:"kiwi", taste:"sour"},
                        {name:"banana", taste:"sweet"},
                        {name:"guava", taste:"sweet"},
                        {name:"pineapple", taste:"sour"}];

    const sweet_fruits=fruit_deets.filter(fr=>fr.taste==="sweet");
    const sour_fruits=fruit_deets.filter(fr=>fr.taste==="sour");
    
    const fruitslist=fruit_deets.map((fruit, index) => (
                                                        <li key={index}>
                                                        {fruit.name} - {fruit.taste}
                                                        </li>
                                                    ));
                                                    
    const sweetfruitslist=sweet_fruits.map((fruit, index) => (
                                                        <li key={index}>
                                                        {fruit.name}
                                                        </li>
                                                    ));
    const sourfruitslist=sour_fruits.map((fruit, index) => (
                                                        <li key={index}>
                                                        {fruit.name}
                                                        </li>
                                                    ));
    return(
        // <ol>{listitems}</ol>
        <div>
            <h3>list of all fruits along with their tastes</h3>
            <ol>{fruitslist}</ol>
            <h3>list of sweet fruits</h3>
            <ul>{sweetfruitslist}</ul>
            <h3>list of sour fruits</h3>
            <ol>{sourfruitslist}</ol>
        </div>
    );
}

export default List;
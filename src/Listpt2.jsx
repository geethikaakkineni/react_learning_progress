function Listpt2(){
    const data=[{ id:1 , name:"pineapple" , taste:"sour" , cal:37},
                { id:2 , name:"apple" , taste:"sweet" , cal:95},
                { id:3 , name:"banana" , taste:"sweet" , cal:105},
                { id:4 , name:"coconut" , taste:"sweet" , cal:159},
                { id:5 , name:"orange" , taste:"sour" , cal:45}];

    const fruits=data.map(fr=><p>{fr.name}-{fr.cal}</p>);

    const highcal=data.filter(fr=>fr.cal>100);
    const highcallist=highcal.map(l=><li>{l.name}</li>)

    const lowcal=data.filter(fr=>fr.cal<100);
    const lowcallist=lowcal.map(l=><li>{l.name}</li>)

    data.sort((a,b)=>a.name.localeCompare(b.name));
    const sorted=data.map(items=> <li>{items.name}</li>)

    data.sort((a,b)=>b.name.localeCompare(a.name));
    const revsorted=data.map(items=> <li>{items.name}</li>)

    data.sort((a,b)=>a.cal - b.cal);
    const sortedcal=data.map(items=><li>{items.name}-{items.cal}</li>)

    data.sort((a,b)=>b.cal - a.cal);
    const revsortedcal=data.map(items=><li>{items.name}-{items.cal}</li>)


    return (
    <>
        <h3>list of fruits</h3>
        {fruits}
        <h3>high cal</h3>
        {highcallist}
        <h3>low cal</h3>
        {lowcallist}
        <h3>sorted</h3>
        {sorted}
        <h3>reverse sorted</h3>
        {revsorted}
        <h3>cal sorted</h3>
        {sortedcal}
        <h3>cal reverse sorted</h3>
        {revsortedcal}
        
    </>
    );
}
export default Listpt2
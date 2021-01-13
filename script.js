// console.log('hello vikas')
function fetchData(){
    fetch("https://fakestoreapi.com/products")
    .then( res =>{
        return res.json()})
    .then(data => {
        abc(data)
    
    })
    .catch(error =>{
        console.log(error)
    })
    
}
fetchData()

function abc(data){

    for(let i =0 ; i<8 ;i++)
    {
        document.querySelector('.first'+i.toString()).setAttribute("src",data[i].image);
        document.querySelector('.price'+i.toString()).innerHTML=data[i].price;
    };


}
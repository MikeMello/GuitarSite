

const CreateGuitars =(()=>{
  //guitar data
const guitars=[];
//guitar class

class Guitar{
  constructor(brand,model,img,special,price,type,body,strings){
    this.brand=brand;
    this.model=model;
    this.img=img;
    this.special=special;
    this.price=price;
    this.type=type;
    this.body=body;
    this.strings=strings;
  }
}
//guitar creation function
function makeGuitar(brand,model='new model',img,special = true,price=10000,type='electric', body="Solid", strings = '6'){
  const guitar = new Guitar(brand,model,img,special,price,type,body,strings);
  guitars.push(guitar);
}
//produce guitars
function produceGuitars(){
  makeGuitar('Epiphone','Les Paul','Images/Epiphone-LesPaul-499.00.png',false,499.00,'electric',"Solid",'6' );
  makeGuitar('Ibanez', 'RGAT62','Images/Ibanez-RGAT62-599.99.png',true,599.99,'electric',"Solid",'6');
  makeGuitar('Alvarez','AD30','Images/Alvarez-ad30-259.99.png',true,259.00,'acoustic','Hollow','6');
  makeGuitar('GretschElectromatic','Center Block Jr','Images/GretschElectromatic-CenterBlockJr-899.99.png',true,499.99,'electric',"Semi-Hollow",'6');
  makeGuitar('Ibanez','RG752','Images/Ibanez-RG752-7string-1599.99.png',true,1599.99,'electric',"solid",'6');
  makeGuitar('LTD','EC401','Images/LTD-EC401-699.00.png',true,699.00,'electric',"solid",'6');
  makeGuitar('Schecter','TSH-1B','Images/Schecter-TSH-1b-899.00.png',false,499.99,'electric',"Semi-Hollow",'6');
  makeGuitar('Taylor','100 Series','Images/Taylor-100series-899.00.png',false, 899.00,'acoustic','Hollow','6');
  makeGuitar('Marshall','DSL 40W','Images/Marshall-DSL-40W-749.99.png',false,749.99,'amp','Tube','40W');
  makeGuitar('Orange','PPC 60W','Images/orange-PPC-60W-379.00.png',false,749.99,'amp','Tube','40W');
}
produceGuitars();
//console.log(guitars);
//special guitars
const specialGuitars = guitars.filter(x => x.special === true)
  //  console.log(specialGuitars);

return{
  guitars,
  specialGuitars
}


})();

const DisplaySpecialGuitars = ((CreateGuitars)=>{
const SpecialGuitars = CreateGuitars.specialGuitars;
//console.log(SpecialGuitars);

const info = document.querySelector('.featured-info');

//documentloaded event
document.addEventListener('DOMContentLoaded', () => {
  info.innerHTML='';

  let data = '';

  SpecialGuitars.forEach(item => {
data += `<!--single item-->
<div class ="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
<span data-img="${item.img}" class="featured-icon mr-2">
<i class="fas fa-guitar"></i></span>
<h5 class="font-weight-bold mx-1">${item.brand}></h5>
<h5 class="mx-1">${item.model}</h5>
</div>
<!--end of single item -->`

})
  info.innerHTML=data;
})

//change img
info.addEventListener('click', (event)=>{
if(event.target.parentElement.classList.contains('featured-icon')){
  const img = event.target.parentElement.dataset.img;
  document.querySelector('.featured-photo').src = img;
}
})


})(CreateGuitars);

const DisplayGuitars = ((CreateGuitars) =>{
  //all guitars/amps
const guitars = CreateGuitars.guitars;
const inventory = document.querySelector('.inventory-container');

//content loaded event listener
document.addEventListener('DOMContentLoaded', () =>{
inventory.innerHTML = '';

let output = '';
guitars.forEach((guitar) =>{
  output += `<!--single guitar/amp-->
  <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-guitar ${guitar.type}">
    <div class="card guitar-card">
      <img src="${guitar.img}" class="card-img-top guitar-img" alt="">
      <!--card body-->
      <div class="card-body">
        <div class="guitar-info d-flex justify-content-between">
          <!--first flex child-->
  <div class="guitar-text text-uppercase">
    <h6 class="font-weight-bold">${guitar.brand}</h6>
    <h6 class="">${guitar.model}</h6>
  </div>
          <!--second flex child-->
          <h5 class="guitar-value align-self-center py-2 px-3">$
            <span class="guitar-price">${guitar.price}</span></h5>
        </div>
      </div>
      <!--end of card-->
      <div class="card-footer text-capailize d-flex justify-content-between">
        <p><span><i class="fas fa-guitar"></i></span>${guitar.type}</p>
        <p><span><i class="fas fa-thermometer-full"></i></span>${guitar.body}</p>
        <p><span><i class="fas fa-grip-lines-vertical"></i></span>${guitar.strings}</p>
    </div>
  </div>
</div>`
})

inventory.innerHTML = output;


})

})(CreateGuitars)

//filter guitars
const FilterGuitars = (() => {
const filter = document.querySelectorAll(".filter-btn");

filter.forEach((btn) =>{
  btn.addEventListener('click', (event) => {
    const value = event.target.dataset.filter;
    const singleGuitar = document.querySelectorAll('.single-guitar');
    
    singleGuitar.forEach((guitar) =>{
      if(value=='all'){
        guitar.style.display = "block";
      }
      else{
        (!guitar.classList.contains(value))?guitar.style.display = "none":guitar.style.display="block"
      }
    })
    
  })
})

})();
//show model
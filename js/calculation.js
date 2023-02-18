
function getArea(baseValueId, heightValueId){
    // for base value
    const baseValue= document.getElementById(baseValueId);
    const baseValueString= baseValue.value;
    const baseValueNumber= parseFloat(baseValueString);
    baseValue.value="";
   
    // for height value
    const heightValue= document.getElementById(heightValueId);
    const heightValueString= heightValue.value;
    const heightValueNumber= parseFloat(heightValueString);
    heightValue.value= "";
    
    // base and height multiplication
    const areaCalTotal= 0.5 * baseValueNumber * heightValueNumber;
    return areaCalTotal;
   }
   
   
   function getAreaValues(valueBaseId, valueHeightId){
    // for base value
    const baseValue= document.getElementById(valueBaseId);
    const baseValueString= baseValue.value;
    const baseValueNumber= parseFloat(baseValueString);
    baseValue.value=""; 
   
    // for height value
    const heightValue= document.getElementById(valueHeightId);
    const heightValueString= heightValue.value;
    const heightValueNumber= parseFloat(heightValueString);
    heightValue.value= "";
   
    // base and height multiplication
    const areaCalculation= baseValueNumber * heightValueNumber;
    return areaCalculation;
   }
   
   let countNo = 0;
function displayData(nameOfGeometry, calculateValue,){
    countNo += 1;
    const parent = document.getElementById('content-container');
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${countNo}</td>
<td>${nameOfGeometry}</td>
<td>${calculateValue} cm<sup>2</sup></td>
`;

parent.appendChild(tr);
}
   
   document.getElementById("triangle-calculate-btn").addEventListener("click", function(){
       
       const triangleTotal= getArea("triangle-base-value", "triangle-height-value")
       //  show the value in area calculation
       displayData('Triangle', triangleTotal)
   })
   
   document.getElementById("rhombus-calculate-btn").addEventListener("click", function(){
   
    const  rhombusTotal= getArea("rhombus-base-value", "rhombus-height-value")
    //  show the value in area calculation
    displayData('Rhombus', rhombusTotal)
})


document.getElementById("pentagon-calculate-btn").addEventListener("click", function(){

    const  pentagonTotal= getArea("pentagon-base-value", "pentagon-height-value")
    //  show the value in area calculation
    displayData('Pentagon', pentagonTotal)
})
 
   
   
   document.getElementById("rectangle-calculate-btn").addEventListener("click", function(){
   
       const  rectangleTotal= getAreaValues("rectangle-base-value", "rectangle-height-value")
       //  show the value in area calculation
       displayData('Rectangle', rectangleTotal)
   
   })
   
   document.getElementById("parallelogram-calculate-btn").addEventListener("click", function(){
   
       const  parallelogramTotal= getAreaValues("parallelogram-base-value", "parallelogram-height-value")
       //  show the value in area calculation
       displayData('parallelogram', parallelogramTotal)
   })
   
  

   // for ellipse
document.getElementById("ellipse-calculate-btn").addEventListener("click", function(){

    // for base value
  const baseValue= document.getElementById("ellipse-base-value");
  const baseValueString= baseValue.value;
  const baseValueNumber= parseFloat(baseValueString);
  baseValue.value="";
 
  // for height value
  const heightValue= document.getElementById("ellipse-height-value");
  const heightValueString= heightValue.value;
  const heightValueNumber= parseFloat(heightValueString);
  heightValue.value= "";
  
  // base and height multiplication
  const ellipseTotal= 3.14 * baseValueNumber * heightValueNumber;
 
  //  show the value in area calculation
  displayData('Ellipse', ellipseTotal)
 
 })
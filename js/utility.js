

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
       const areaCalTotalString= (0.5 * baseValueNumber * heightValueNumber).toFixed(2);
       const areaCalTotal = parseFloat(areaCalTotalString);
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
    const areaCalculationString= (baseValueNumber * heightValueNumber).toFixed(2);
    const areaCalculation= parseFloat(areaCalculationString);
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
<td><button class="btn btn-primary fs-6 ">Convert m<sup>2</sup></button ></td>
`;

parent.appendChild(tr);
}








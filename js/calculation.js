

   document.getElementById("triangle-calculate-btn").addEventListener("click", function(){
   
       const triangleTotal= getArea("triangle-base-value", "triangle-height-value")
   
    //   show validation
       const v = triangleTotal;
       if(v < 0 || isNaN(v) === true || v == ''){
        alert('Enter valid Number')
        return v;
       }
        //  show the value in area calculation
       displayData('Triangle', triangleTotal)
       
   })
   
   document.getElementById("rhombus-calculate-btn").addEventListener("click", function(){
   
    const  rhombusTotal= getArea("rhombus-base-value", "rhombus-height-value")

    //   show validation
    const valid = rhombusTotal;
    if(valid < 0 || isNaN(valid) === true || valid == ''){
     alert('Enter valid Number')
     return v;
    }
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
    
    //   show validation
    const validation = rectangleTotal;
    if(validation < 0 || isNaN(validation) === true || validation == ''){
     alert('Enter valid Number')
     return validation;
    }
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
  const ellipseCalTotalString= (3.14 * baseValueNumber * heightValueNumber).toFixed(2);
 const ellipseTotal= parseFloat(ellipseCalTotalString);
 
  //  show the value in area calculation
  displayData('Ellipse', ellipseTotal)
 
 })

//  for Query section
document.getElementById("blog-btn").addEventListener("click", function(){
    window.location.href="Query.html"
  })
  
  
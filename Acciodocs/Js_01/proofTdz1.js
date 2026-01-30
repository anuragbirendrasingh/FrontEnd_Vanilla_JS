console.log("Testing TDZ time period");


setTimeout(()=>{
    console.log("Before Time PEriod");
    
   console.log(a);
   console.log("After Time Period");
      
},3000)

let a  = 10 ;

// 👉 Agar TDZ permanent hota → ye bhi fail karta
// 👉 Par time ke baad kaam kar gaya
// 💥 = TDZ is temporary


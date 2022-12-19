import React from 'react'
import './Registration.css'
export default function Time() {
    var DateDiff = {
                    
        inDays: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
           return parseInt((t1-t2)/(24*3600*1000));
        },
       
        inWeeks: function(d1, d2) {
            var t2 = d2.getTime();
            var t1 = d1.getTime();
     
            return parseInt((t1-t2)/(24*3600*1000*7));
        },
        inHours:function(d1,d2){
          var t2 = d2.getTime();
            var t1 = d1.getTime();
          return parseInt((t1-t2)/(3600*1000)%24);
        },
          inMinutes:function(d1,d2){
          var t2 = d2.getTime();
            var t1 = d1.getTime();
         
            return parseInt((t1-t2)/(1000*60)%60);
        },
        inSeconds:function(d1,d2){
          var t2 = d2.getTime();
            var t1 = d1.getTime();
         
            return parseInt((t1-t2)/(60)%60);
        },
    
        inMonths: function(d1, d2) {
            var d1Y = d1.getFullYear();
            var d2Y = d2.getFullYear();
            var d1M = d1.getMonth();
            var d2M = d2.getMonth();
     
            return (d1M+12*d1Y)-(d2M+12*d2Y);
        },
     
        inYears: function(d1, d2) {
            return d1.getFullYear()-d2.getFullYear();
        }
    }
     
    var dString = "jan, 04, 2023";
     
    var d1 = new Date(dString);
    var d2 = new Date();
  return (
      
    <div className='div_dd'>
        <div className='div_mar'>
            <h3>Years</h3>
            <h4>{DateDiff.inYears(d1, d2)}</h4>
            </div>
         <div className='div_mar'> 
             <h3>Months</h3>
             <h4>{DateDiff.inMonths(d1, d2)}</h4>
         </div>
       <div className='div_mar'>
           <h3>Days</h3>
           <h4>{DateDiff.inDays(d1, d2)}</h4>
       </div>
      <div className='div_mar'>
          <h3>Weeks</h3>
          <h4>{DateDiff.inWeeks(d1, d2)}</h4>
      </div>
      <div className='div_mar'>
          <h3>Hours</h3>
          <h4>{DateDiff.inHours(d1, d2)}</h4>
      </div>
      <div className='div_mar'>
          <h3>Minutes</h3>
          <h4>{DateDiff.inMinutes(d1, d2)}</h4>
      </div>
      <div className='div_mar'>
          <h3>seconds</h3>
          <h4>{DateDiff.inSeconds(d1, d2)}</h4>
      </div>
    
        
    
    </div>
  )
}


 
//  document.write(" <b>months:</b>   "+DateDiff.inMonths(d1, d2));
// document.write(" <b>days</b>:  "+DateDiff.inDays(d1, d2));
// document.write(" <b>weeks</b>: "+DateDiff.inWeeks(d1, d2));

// document.write(" <b>hours</b>: "+DateDiff.inHours(d1, d2));
// document.write(" <b>minutes</b>:  "+DateDiff.inMinutes(d1, d2));


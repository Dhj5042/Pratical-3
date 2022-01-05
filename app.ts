interface Resource{
    btn:any,
    temp:any,
    output:any,
    item :any;
    btntext:string;
}
//called interface
var res = <Resource>{}; 
res.btn=document.querySelectorAll('.bn');
res.temp=document.getElementById('temp')! as HTMLInputElement;
res.output=document.getElementById('screen')! as HTMLInputElement;
//display button value when user press button
for(res.item of res.btn)
{
    res.item.addEventListener('click',(e:any)=>{
        res.btntext= e.target.innerText;
        if(res.btntext =='×')
        {   
            firstdigit('*')
        }
        if(res.btntext=='÷')
        {
            firstdigit('/')
        }
        if(res.btntext=='+')
        {
            firstdigit('+')
        }
        if(res.btntext=='-')
        {
            firstdigit('-')
        }
        if(res.btntext=='mode')
        {
            console.log('mode');
            firstdigit('%')
        }
        if(res.btntext=='.')
        {
            console.log('dot');
            firstdigit('.')
        }
        res.output.value += res.btntext;
       
    });
}
//check first element is number or not 
let firstdigit=(op:string)=>{
    if(!res.output.value){
        console.log("screeen value:-", +res.output.value);
        res.btntext=""
    }else{
        res.btntext=op;
        //check for multipal occurrence
        duplication();
    }
}

//this is functon check for oprators occurrence
function duplication(){
    var len:any=res.output.value.substr(res.output.value.length-1,1);
    var lastchar=res.output.value.length-1;
    if(!isNaN(len)){      
        console.log("not a number")      
    }else{
        console.log("number")   
        if(!(len.charAt(lastchar)== '+' || len.charAt(lastchar)== '-' || len.charAt(lastchar)== '*' || len.charAt(lastchar)== '/' || len.charAt(lastchar)== '%'|| len.charAt(lastchar)== '(' || len.charAt(lastchar)== ')')){
           console.log('inner');
            var len1=res.output.value.substr(0,res.output.value.length-1);
            res.output.value=len1;    
      }        
    }
}
//opeartion perform when user click equal butoon
let equal=()=>{
    res.temp.innerText=res.output.value;
    console.log(res.temp.innerHTML);
    res.output.value=eval(res.output.value);
}
//this is function which is indicates that when user press any key
function keycode(e:any){
    //the e.key==13 which is enter key value 
    if(e.keyCode == 13){
        res.temp.innerText=res.output.value;
        console.log(res.temp.innerText);
        res.output.value=eval(res.output.value)
    }
    //the e.key==08 which is backspace key value 
    if(e.keyCode == 08){
        res.output.value=res.output.value.substr(0,res.output.value.length-1);
        res.temp.innerText="";
    }
    if(e.keyCode >=33 && e.keyCode <= 47 || e.keyCode == 59){
        console.log('block'); 
        e.preventDefault();
    } 
     if(e.keyCode >=64 && e.keyCode <=122){
        console.log(`${e.keyCode} Is not valid`);
        e.preventDefault();
   } 
 }
function backspc()
{
    res.output.value=res.output.value.substr(0,res.output.value.length-1);
    res.temp.innerText="";
}
// if you are click on body anywhere the focus is only on textbox
let foc = ()=>{ return res.output.focus()};


//pi function
let pi=()=>{ return res.output.value= 3.14159265359};

//e function
let e=()=>{ return res.output.value=2.71828182845};

//fact function
let fac=()=>{
    var i,number,f;
    f=1
    number=res.output.value;
    for(i=1; i<=number; i++){
        f=f*i;
    }
    i=i-1;
    res.output.value=f;
}
//ln function
let ln=()=>{ return res.output.value=Math.log(res.output.value) }
//log function
let log =()=>{return res.output.value=Math.log(res.output.value*10)}

//root function
let root=()=>{ return res.output.value=Math.sqrt(res.output.value)}

//sqrt function
let sqrt=()=>res.output.value=(res.output.value*res.output.value)

//power function 10 to x
let powe=()=> res.output.value=Math.pow(10,res.output.value)

//power function x to y
let pow=()=> res.output.value=Math.pow(res.output.value,res.output.value)

//mod function 
let mod=()=> res.output.value=`${res.output.value}%`

//exp function
let exp=()=> res.output.value=Math.exp(res.output.value)

//1/x function
let divide=()=>res.output.value=`1/${res.output.value}`

//abs function
let abs = ()=> res.output.value=Math.abs(res.output.value)
var flag=0;
//neg+positive operations
let posneg=()=>{

    if(flag==0){
        if(res.output.value==0){console.log('null value')}else{
            res.output.value=`-${res.output.value}`
            console.log('-');
            flag=1;
        }
    }else{
        res.output.value=`${res.output.value.substr(1,res.output.value.length-1)}`
            console.log('+');
            flag=0;
    }

}

//sin function
let sin=()=>{
    var deg = res.output.value * Math.PI / 180;
    console.log(deg);
    res.output.value=Math.sin(deg);
}

//cos function
let cos=()=> {
    var deg = res.output.value * Math.PI / 180;
    res.output.value=Math.cos(deg);
}

//tan function
let tan=()=>{
    var deg = res.output.value * Math.PI / 180;
    res.output.value=Math.tan(deg);
} 

//sec function
let sec=()=>{
    var deg = res.output.value * Math.PI / 180;
    console.log(deg);
    res.output.value=(1/(Math.sin(deg)));
}

//csc function
let csc=()=>{
    var deg = res.output.value * Math.PI / 180;
    console.log(deg);
    res.output.value=(1/(Math.cos(deg)));
}
//csc function
let cot=()=>{
    var deg = res.output.value * Math.PI / 180;
    console.log(deg);
    res.output.value=(1/(Math.cos(deg)));
}

//random function
let rand=()=> res.output.value=Math.random()

//ceil function
let ceil=()=> res.output.value=Math.ceil(res.output.value)

//floor function
let floor=()=> res.output.value=Math.floor(res.output.value)

//memory function
interface memories{
    memory:string[],
    m_value:number,
    ms_remove:number,
    btnmc:any,
    btnmr:any,
    i:number;
}
//access interface throught fun
var resmemory=<memories>{};
resmemory.m_value=0;
resmemory.ms_remove=0;
resmemory.btnmc=document.getElementById('btnmc');
resmemory.btnmr=document.getElementById('btnmr');

//this is memory store function which is store a value in array
let ms=(val:string) => {
    resmemory.btnmc.disabled =false;
    resmemory.btnmr.disabled=false;
    resmemory.memory.push(val);
    for(resmemory.i=0; resmemory.i<resmemory.memory.length; resmemory.i++){
       // m_value =+ memory[i];
       console.log(resmemory.memory[resmemory.i]);
    }
   
}
//this is memory add function which is added a value in array
let madd=(val:string)=>{
    resmemory.memory.push(val);
    for(resmemory.i=0; resmemory.i<resmemory.memory.length; resmemory.i++){
        //m_value += memory[i];
         console.log(resmemory.memory[resmemory.i]);
    }
   
}
//sum()
let sum=()=>{
    for(resmemory.i=0; resmemory.i<resmemory.memory.length; resmemory.i++){
        resmemory.m_value +=parseInt(resmemory.memory[resmemory.i]);
    }
    return resmemory.m_value;
}
//this is memory remove function which is remove a value in array from last
let mrev=(val:string)=>{
    console.log(val);
    sum();
    resmemory.ms_remove=((resmemory.m_value) - (parseInt(val)));
}
//this is memory recall function which is display a number from array
let mrecall=()=>{
    res.output.value='';
    sum();
    console.log(resmemory.ms_remove);
    if(resmemory.ms_remove){
        res.output.value=resmemory.ms_remove
        resmemory.ms_remove=0;
    }
    else
        res.output.value=resmemory.m_value
}
//this is memory clear function
let mclear=()=>{
    res.output.value='';
    resmemory.btnmc.disabled =true;
    resmemory.btnmr.disabled=true;
    resmemory.memory=[];
    console.log(resmemory.memory)
}
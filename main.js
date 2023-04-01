
let phoneelement =document.getElementById("phoneelement")
let phoneerror=document.getElementById("phoneerror")

phoneelement.addEventListener("blur",function(){
    var regex2=  /0[0-9]{9}/
    if(regex2.test(phoneelement.value)==true){
      phoneerror.classList.replace("d-block","d-none")
      
      console.log(regex2.test(phoneelement.value));
    }
    else{
        phoneerror.classList.replace("d-none","d-block")
      console.log('noo');

    }
  })

let passwordelement=document.getElementById("passwordelement")
let passworderror=document.getElementById("passworderror")

passwordelement.addEventListener("blur",function(){
    var regexpass= /^(?=.*\d).{4,8}$/
    if(regexpass.test(passwordelement.value)==true){
        passworderror.classList.replace("d-block","d-none")
      
      console.log(regexpass.test(passwordelement.value));
    }
    else{
        passworderror.classList.replace("d-none","d-block")
      console.log('noo');

    }
  })

  let passwordelement2=document.getElementById("passwordelement2")
  let passworderror2=document.getElementById("passworderror2")
  
  passwordelement2.addEventListener("blur",function(){
      var regexpass2= /^(?=.*\d).{4,8}$/
      if(regexpass2.test(passwordelement2.value)==true){
          passworderror2.classList.replace("d-block","d-none")
        
        console.log(regexpass2.test(passwordelement.value));
      }
      else{
          passworderror2.classList.replace("d-none","d-block")
        console.log('noo');
  
      }
    })

    let emailelement=document.getElementById("emailelement")
    let emailerror=document.getElementById("emailerror")

    emailelement.addEventListener("blur",function(){
      var regexemail= /^(.+)@(.+)$/
      if(regexemail.test(emailelement.value)==true){
        emailerror.classList.replace("d-block","d-none")
 
      }
      else{
        emailerror.classList.replace("d-none","d-block")
        console.log('noo');
  
      }
    })


    let ageelement=document.getElementById("ageelement")
    let ageerror=document.getElementById("ageerror")

    ageelement.addEventListener("blur",function(){
        var regexage=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/

        if(regexage.test(ageelement.value)==true){
            ageerror.classList.replace("d-block","d-none")
   
        }
        else{
            ageerror.classList.replace("d-none","d-block")
          console.log('noo');
    
        }
      })
getNowPlaying()
let datalist=[]
async function getNowPlaying(){
    let result= await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data= await result.json()
    datalist=data.results
   //console.log("data list length inside"+datalist.length)
  // console.log(datalist[1].strCategory)
   console.log(datalist);
   display()
  }  
  async function getPopular(){
    let result= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data= await result.json()
    datalist=data.results
   //console.log("data list length inside"+datalist.length)
  // console.log(datalist[1].strCategory)
   console.log(datalist);
   display()
  }  
  
  async function getTopRated(){
    let result= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data= await result.json()
    datalist=data.results
   //console.log("data list length inside"+datalist.length)
  // console.log(datalist[1].strCategory)
   console.log(datalist);
   display()
  }  
  
  async function getTrending(){
    let result= await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data= await result.json()
    datalist=data.results
   //console.log("data list length inside"+datalist.length)
  // console.log(datalist[1].strCategory)
   console.log(datalist);
   display()
  }  
  async function getUpcoming(){
    let result= await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let data= await result.json()
    datalist=data.results

   console.log(datalist);
   display()
  }  
  async function Search(value){
    let result= await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`)
    let data= await result.json()
    datalist=data.results

   console.log(datalist);
   display()
  }  
  search=document.getElementById("searchfeild")
  search.addEventListener("keyup",function(){
  Search(search.value)
})
  var imgPath="https://image.tmdb.org/t/p/w500";

  function display(){
    temp=""
    datalist.forEach(el=>{
        
        temp+=`   <div class="item col-md-4 g-3">
        <img class="w-100 rounded" src="${imgPath+el.poster_path}" alt="" />
        <div
          class="layer h-100 "
        >
        <div class="layer-content text-white text-center">
        <h2>${el.original_title}</h2>
        <p>
        ${el.overview}  
        </p>
        <p> rate : ${el.vote_average} </p>
        <p>${el.release_date}</p>
        </div>

      </div>
      </div>`

    });
    document.getElementById("myrow").innerHTML=temp
  }
 
  $(".open").addClass("d-none")
  $(".toggle").click(function(){
    
    let width= $(".navbar-content").outerWidth(true)
    let left=$(".navbar").css("left")
    console.log(left);
    //this closes
    if(left=="0px"){
        $(".navbar").animate({left:-` ${width}`},1000)
        $(".close").addClass("d-none")
        $(".open").removeClass("d-none")
        
    }
     else if(left==`-${width}px`){
         $(".navbar").animate({left:0},1000)
         $(".close").removeClass("d-none")
         $(".open").addClass("d-none")
    

     }

   
  })

  let navlinks= document.querySelectorAll(".links")
  console.log(navlinks);
  navlinks.forEach(el=>{
    el.addEventListener("click",function(){
        let page= this.innerHTML
        console.log(this.innerHTML)
        if(page=="Now playing"){
            getNowPlaying()
        }
        else if(page=="Popular"){
            getPopular()
        }
        else if(page=="Top rated"){
            getTopRated()
        }
       
        else if(page=="Trending"){
            getTrending()
        }
        else if(page=="Upcoming"){
            getUpcoming()
        }
   
    } )
  })  

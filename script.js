
let h1=document.createElement('h1')
h1.style.textAlign="center"
h1.style.marginTop="200px"
document.body.appendChild(h1)

setTimeout(()=>{
    h1.innerHTML="10"
    setTimeout(()=>{
        h1.innerHTML="09"
        setTimeout(()=>{
            h1.innerHTML="08"
            setTimeout(()=>{
                h1.innerHTML="07"
                setTimeout(()=>{
                    h1.innerHTML="06"
                    setTimeout(()=>{
                        h1.innerHTML="05"
                        setTimeout(()=>{
                            h1.innerHTML="04"
                            setTimeout(()=>{
                                h1.innerHTML="03"
                                setTimeout(()=>{
                                    h1.innerHTML="02"
                                    setTimeout(()=>{
                                        h1.innerHTML="01"
                                        setTimeout(()=>{
                                            h1.innerHTML="Happy Independence Day"
                                            h1.style.color="red"
                                        },2000)
                                    },2000)
                                },2000)
                            },2000)
                        },2000)
                    },2000)
                },2000)
            },2000)
        },2000)
    },2000)
},2000)

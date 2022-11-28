let title =  document.getElementById("title")
let descrip = document.getElementById('desc')
let cont = document.getElementById('noteCard')

const add = () => {

    if(title.value === ""  || descrip.value === ""){
        alert('Please! Enter your notes....\nFields cant be empty..')
    }
    else{
        let card = document.createElement('div')
        card.setAttribute("class" , 'card')

        let h1 = document.createElement('h1')
        let h1txt = document.createTextNode(title.value)
        h1.setAttribute('class' , "h1txtt")
        h1.appendChild(h1txt)
    
        let p = document.createElement('p')
        let ptxt = document.createTextNode(descrip.value)
        p.setAttribute('class' , "ptxtt")
        p.appendChild(ptxt)

        let btn = document.createElement('button')
        let btntxt = document.createTextNode('Edit')
        btn.setAttribute('class' , "btntxtt")
        btn.setAttribute('onclick' , 'edit(this)' )
        btn.appendChild(btntxt)

        let btn1 = document.createElement('button')
        let btn1txt = document.createTextNode('Delete')
        btn1.setAttribute('class' , "btn1txtt")
        btn1.setAttribute('onclick' , "del(this)")
        btn1.appendChild(btn1txt)

    
        cont.appendChild(card)
        card.appendChild(h1)
        card.appendChild(p)
        card.appendChild(btn)
        card.appendChild(btn1)
      
        title.value = '';
        descrip.value = '';
    }
}

const edit = (e) => {

    
    let head = e.parentNode.firstChild.innerHTML;
    let descrippp = e.parentNode.childNodes[1].innerHTML;
    
    // console.log(head , descrippp)
    
    let titlee = prompt('Enter your title...', head )
    let descripp = prompt('Edit your description..' , descrippp)

    e.parentNode.firstChild.innerHTML = titlee ;
    e.parentNode.childNodes[1].innerHTML = descripp
    // descrippp = descripp     
}
const delAll = () => {
    cont.innerHTML = ''
}
const del = (e) => {
    e.parentNode.remove()
}






// animation
// const ltext = document.querySelector('.lt');
// const bgg = document.querySelector('.bgg');

// let load = 0
// let int = setInterval(blurring, 30)
//  function blurring(){
//      load++
//      if(load > 99){
//          clearInterval(int)
//      }
//      ltext.innerText = `${load}%`
//      ltext.style.opacity = scale(load, 0 , 100, 1 , 0)
//      bgg.style.filter = `blur(${scale(load, 0 , 100, 30 , 0)}px)`
//  }
//  const scale = (num - in_min, in_max, out_min, out_max ) => {
//  (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
// }
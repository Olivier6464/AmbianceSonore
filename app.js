// const playSound = (event) => {
//        console.log(event)
//        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
//        if (!audio) return
//        audio.play()
// }

const joue = (e) => {
       console.log(e.target)
       const audio = document.querySelector(`audio[name="${e.target.name}"]`)
       if (!audio) return
       audio.play()

}
  

// window.addEventListener('keydown', playSound)

elems = document.getElementsByTagName('button')
tab = Array.from(elems)
tab.forEach( elem =>  {
       elem.addEventListener('click', joue)
})


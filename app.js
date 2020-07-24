// const playSound = (event) => {
//        console.log(event)
//        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
//        if (!audio) return
//        audio.play()
// }
<script>
var audio = new Audio("https://raw.githubusercontent.com/USERNAME/REPOSITORY/BRANCH/Audio.mp3")
audio.play()
</script>

const joue = (e) => {
       console.log(e.target)
       const audio = document.querySelector(`audio[src="${e.target.src}"]`)
       if (!audio) return
       audio.play()

}
  

// window.addEventListener('keydown', playSound)

elems = document.getElementsByTagName('button')
tab = Array.from(elems)
tab.forEach( elem =>  {
       elem.addEventListener('click', joue)
})


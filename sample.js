const firut = []
firut.push("mango", 2, 4)

firut[5] = "Apple"
console.log(firut[1]+firut[2])
// console.log(firut.length)
// console.log(Object.keys(firut))

firut.reverse() // reverse value 
firut.forEach((index, item)=>{
   console.log(`${item} : ${index}` )
})

for(let i = 0; i < 3; i++){
   setTimeout(() =>{
  console.log(i)
   }, 100)
}
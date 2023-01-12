
export default function UpdateArrays(){
    let a = [2,3,4,5]
    
    a.push(6)
    a.unshift(1)
    a.pop()
    a.shift()
    console.log(a)

    a.splice(1,1)
    console.log(a)

    const b = a.slice(1,2)
    console.log(b)

    let c = [1,2,3,12,10,100,19]

    c.sort((a,b) => a-b);
    console.log(c)

    let d = [1,2]
    let e = [4,5]
    let f = d.concat(e)
    console.log(f)

    console.log(c.filter(el => el > 5))
    return(
        <div>
            <p>Arrays</p>
        </div>
    )
}
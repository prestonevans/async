async function test(a,b) {
    console.log('calling')
    let num = await addNumber(a,b);
    const result = num * 2
    console.log(result);
    num = await addNumber(result, b)
    console.log(num)
}

async function addNumber(a,b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        },2000)
    })
}

test(2,4)
function sum(array)
{
    let temp=0;
    for(let i=0;i<array.length;i++)
    {
        temp=temp+array[i]
    }
    return temp
}
console.log(sum([12,21,31,42,5]))
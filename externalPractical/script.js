function checkPrime()
{
    let n = Number(document.getElementById("num").value);
    let prime = true;

    if(n <= 1)
    {
        prime = false;
    }

    for(let i = 2; i < n; i++)
    {
        if(n % i == 0)
        {
            prime = false;
            break;
        }
    }

    if(prime)
    {
        document.getElementById("result").innerHTML =
        n + " is a Prime Number";
    }
    else
    {
        document.getElementById("result").innerHTML =
        n + " is Not a Prime Number";
    }
}
let a=7;let count=0;
for(let i=2;i<a/2;i++)
{
  if(a%i===0)
 {
   count=1;
   break;
  }
}
if(count===0)
{
console.log("It is prime number");
}
else
{
	console.log("It is not a prime number");
}

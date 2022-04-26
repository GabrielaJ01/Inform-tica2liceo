do{
    numero = prompt()
}
while (condition);

function fb(n){
    if (n==1 || n==0){
        return 1 
    } else {
        return fb(n-1) + fb(n-2);
    }
}
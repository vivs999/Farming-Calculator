function calculate(){
    side_length = document.getElementById("side").value;
    area = Math.pow(side_length, 2);
    perimeter = side_length*4;

    document.getElementById("area").innerHTML = area;
    document.getElementById("perimeter").innerHTML = perimeter;
    console.log(area);
    console.log(perimeter);
}
/* Sorry If the code is messy to read

Also I did this in VS Code and not in codepen */ 

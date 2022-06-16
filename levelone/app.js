
// var alphabets = ["karachi","islamabad","lahore","hyderabad"]
// var x = Math.floor(Math.random() * alphabets.length);
// var random = alphabets[x]
function save() {
    var input = document.getElementById("user");
    var value = input.value;
    if(value === "Hassan"){
        var score = 0; 
        alert("Bingo Correct"+" "+"Score = 1");
        if (window.confirm("Go to Next Level")) {
              window.location.href = "./leveltwo.html"
            }
    }else if(value !== "Hassan"){
        document.getElementById("sample2").innerText = "Wrong answer"
    }else{
        document.getElementById("sample2").innerText = ""    
    }
   
}


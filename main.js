function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kLU3CLWbK/', modelReady);
}   

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }

    else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
         
        document.getElementById("name").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("number").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(3)+" %";
        document.getElementById("name").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("number").style.color = "rgb("+r+","+g+","+b+")";
    
        img = document.getElementById("Cow");
        img1 = document.getElementById("Horse");
        img2 = document.getElementById("Chicken");
        img3 = document.getElementById("Goat");

        if (results[0].label =="Cow"){
            img.src = "Cow2.png";
            img1.src = "Horse.png";
            img2.src = "Chicken.png";
            img3.src = "Goat.png";
        }

        else if (results[0].label == "Horse"){
            img.src = "Cow.png";
            img1.src = "Horse2.jpg";
            img2.src = "Chicken.png";
            img3.src = "Goat.png";
        }

        else if (results[0].label == "Chicken"){
            img.src = "Cow.png";
            img1.src = "Horse.png";
            img2.src = "Chicken2.jng";
            img3.src = "Goat.png";
        }

        else {
            img.src = "Cow.png";
            img1.src = "Horse.png";
            img2.src = "Chicken.png";
            img3.src = "Goat2.jpg";
        }
    }
}
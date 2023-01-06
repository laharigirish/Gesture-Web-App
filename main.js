prediction="";


Webcam.set({
    width:350,
    height: 300,
    image_format :'png',
    image_quality:90

});

camera= document.getElementById("camera");
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='captured_image' src='"+ data_uri +"'>";
    });
} 

console.log(ml5.version);
Classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D4ycVTHoV/model.json', modelloaded);

function modelloaded(){
    console.log("Model Loaded");
}

function speak(){
    var Synth= window.speechSynthesis;
    speak_1= "The prediction is" + prediction;
    var utter_this= new SpeechSynthesisUtterance(speak_1);


}
function Result() {
    img = document.getElementById("captured_image");
    Classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        prediction = results[0].label;
       



        if (results[0].label == 'Best') {
            document.getElementById("update_emoji").innerHTML = '&#128077';
        }
        if (results[0].label == 'Amazing') {
            document.getElementById("update_emoji").innerHTML = '&#128076';
        }
        if (results[0].label == 'Victory') {
            document.getElementById("update_emoji").innerHTML = '&#9996';
        }

    
    }
}
function startClassification()
{
    navigator.mediaDevices.getUserMedia( { audio: true } );
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rc2zAliON/model.json', modelReady);
}
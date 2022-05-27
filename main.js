function preload()
{

}

function modelLoaded()
{
    console.log("PoseNet Is working");

}

function gotPoses(results)
{
  if(results.length>0)
  {
      console.log(results);
      leftWristx=results[0].pose.leftWrist.x;
      rightWristx=results[0].pose.rightWrist.x;
      difference=floor(leftWristx-rightWristx);
  }
}

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(565,150);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
   background("#969A97");
   textSize(difference);
   fill("cyan");
   text("Krishna",50,400);
}
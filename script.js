let i=0
let a=0
let b=0
const music= new Audio('caves-of-dawn-10376.mp3')
const next = () => {
    i++   
}
const one = () => {
    music.play();
    i++
    if(i==1)
    {
        a=1
    }
    else if(i==2)
    {
        b=1
    }
    if(a==1&&b==0)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://media.istockphoto.com/photos/stairs-with-obstacle-picture-id149210316'>"
        document.querySelector(".text").innerHTML ="people up stair block the stair";
        document.querySelector(".b1").innerHTML ="remove the obstacle";
        document.querySelector(".b2").innerHTML ="run back";
        document.querySelector(".b3").innerHTML ="take some stick or book to fight back";   
    }
    else if(a==1&&b==1)
    {
        
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://variety.teenee.com/foodforbrain/img3/143836.jpg'>"
        document.querySelector(".text").innerHTML ="the zomie chace on and bite you";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();   
    
    }
    else if(a==2&&b==1) 
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://img.ebcbuzz.com/images/2/1954/F_m.jpg'>"
        document.querySelector(".text").innerHTML ="the zombie bump in and bite you";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();  
    }
    else if(a==3&&b==1)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://i.imgur.com/PYIrbzM.jpg'>"
        document.querySelector(".text").innerHTML ="you kill some of the zombie but you get some scratch from them";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();  
    }
   
}
const two = () => {
    music.play();
    i++
    if(i==1)
    {
        a=2
    }
    else if(i==2)
    {
        b=2
    }
    if(a==2&&b==0)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://cdn-res.keymedia.com/cms/images/au/130/0314_637269086154300500.jpg'>"
        document.querySelector(".text").innerHTML ="you get into the classroom";
        document.querySelector(".b1").innerHTML ="lock the door and stay still";
        document.querySelector(".b2").innerHTML ="use table and chair to block the door";
        document.querySelector(".b3").innerHTML ="go out from the window";   
    }
    else if(a==1&&b==2)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='http://3.bp.blogspot.com/-933_-CbTsck/To8tJ0ruWJI/AAAAAAAAIqs/Wgi9HcBLTE4/s1600/prip1.jpg'>"
        document.querySelector(".text").innerHTML ="you bump into a zombie";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();   
    }
    else if(a==2&&b==2)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://cc.tvbs.com.tw/img/program/upload/2018/09/03/20180903125611-b37262e5.jpg'>"
        document.querySelector(".text").innerHTML ="when a zombie bumping the door a desk fall and hit your head";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();   
    }
    else if(a==3&&b==2)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='http://3.bp.blogspot.com/-933_-CbTsck/To8tJ0ruWJI/AAAAAAAAIqs/Wgi9HcBLTE4/s1600/prip1.jpg'>"
        document.querySelector(".text").innerHTML ="you bump into a zombie";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();   
    }
}
const three = () => {
    music.play();
    i++
    if(i==1)
    {
        a=3
    }
    else if(i==2)
    {
        b=3
    }
    else if(i==3)
    {
        c=3
    }
    if(a==3&&b==0)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://funnyp.co/uploads/201805/11/1051_qNsAY.jpg'>"
        document.querySelector(".text").innerHTML ="you run down stair and saw lot of zombies";
        document.querySelector(".b1").innerHTML ="fight with them";
        document.querySelector(".b2").innerHTML ="run back";
        document.querySelector(".b3").innerHTML ="raise a white flag";   
    }
    else if(a==1&&b==3)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://i.imgur.com/PYIrbzM.jpg'>"
        document.querySelector(".text").innerHTML ="you kill some of the zombie but you get some scratch from them";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();  
    }
    else if(a==2&&b==3)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://previews.123rf.com/images/luislouro/luislouro1202/luislouro120200058/12306206-businessman-falling-from-a-tall-building.jpg'>"
        document.querySelector(".text").innerHTML ="you are trying to climbing down but you slip and fall";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();  
    }
    else if(a==3&&b==3)
    {
        document.querySelector(".picture").innerHTML = "<img class='picture' src='https://static.wikia.nocookie.net/marveldatabase/images/4/41/Survive%21_Vol_1_1_Logo.png/revision/latest?cb=20200903040037'>"
        document.querySelector(".text").innerHTML ="zombies saw the flag and left";
        document.querySelector(".b1").remove();
        document.querySelector(".b2").remove();
        document.querySelector(".b3").remove();  
    }
}

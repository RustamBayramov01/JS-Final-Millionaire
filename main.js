$(document).ready(function () {

    var i;
    var loop;
    var logoIndex;
    var Count = 30;
    var Mp3Size = 0;
    var quiz = [];
    var other = 0;
    var questionIndex;
    var jokerSound = 0;
    var telefonJoker = 0;
    var zamanNull = 0;
    var loserTimer = 0;
    var reset = 0;
    var logo = [];
    var imageChoice;
    
    var mainDiv = document.querySelector('#mainDiv');
    mainDiv.style.display = "none"

    var audioTime = document.getElementById('audio');
    
    lohoBuild();
    quizBuild();

    i = 1;
    loop = 0;


    
    

    one.onclick=function(){

        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("quizAnswer").disabled = true;
        document.getElementById("quizAnswer2").disabled = true;
        document.getElementById("quizAnswer3").disabled = true;
        document.getElementById("quizAnswer4").disabled = true;

        clearInterval(intervalTimer);
        one.style.display = "none"
        audioTime.pause();

        var audio = document.getElementById('audio');
        audio = new Audio("pics/joker.mp3");
        audio.play();
        jokerSoundd = setInterval(jokerSoundTime, 1000);
    }

    two.onclick=function(){

        document.getElementById("one").disabled = true;
        document.getElementById("three").disabled = true;
        document.getElementById("quizAnswer").disabled = true;
        document.getElementById("quizAnswer2").disabled = true;
        document.getElementById("quizAnswer3").disabled = true;
        document.getElementById("quizAnswer4").disabled = true;

        clearInterval(intervalTimer);
        two.style.display = "none"
        audioTime.pause();

        var audio = document.getElementById('audio');
        audio = new Audio("pics/yariyariya_joker.mp3");
        audio.play();
        jokerSoundd = setInterval(joker5050, 1000);
    }


    three.onclick=function(){

        document.getElementById("two").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("quizAnswer").disabled = true;
        document.getElementById("quizAnswer2").disabled = true;
        document.getElementById("quizAnswer3").disabled = true;
        document.getElementById("quizAnswer4").disabled = true;

        clearInterval(intervalTimer);
        three.style.display = "none"
        audioTime.pause();

        var audio = document.getElementById('audio');
        audio = new Audio("pics/telefon_joker.mp3");
        audio.play();
        telefonJokerr = setInterval(telefon, 1000);
    }


    btn.onclick=function(){
        
        let videoPlayer = document.querySelector('#videoPlayer');
        let btn = document.querySelector('#btn');
        videoPlayer.remove();
        btn.remove();
        mainDiv.style.display = 'inline'

        logoIndex = 1;
        imageChoice = logoInsert();
        $("#friends").show();
        $("#friends").html(imageChoice);

        logoIndex = 2;
        imageChoice = logoInsert();
        $("#Phone").show();
        $("#Phone").html(imageChoice);



        document.getElementById("quizAnswer").disabled = true;
        document.getElementById("quizAnswer2").disabled = true;
        document.getElementById("quizAnswer3").disabled = true;
        document.getElementById("quizAnswer4").disabled = true;
        document.getElementById("one").disabled = true;
        document.getElementById("two").disabled = true;
        document.getElementById("three").disabled = true;

        quizWrite();

    }


    function telefon(){


        if(telefonJoker == 3){

            document.getElementById("one").disabled = false;
            document.getElementById("two").disabled = false;
            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;


            if(loop == 1){

                $("#quizAnswer").css("background-color", "orange");

                telefonJoker = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(telefonJokerr);
            }
            else if(loop == 2){

                $("#quizAnswer").css("background-color", "orange");

                telefonJoker = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(telefonJokerr);
            }
            else if(loop == 3){

                $("#quizAnswer4").css("background-color", "orange");

                telefonJoker = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(telefonJokerr);
            }
            else if(loop == 4){

                $("#quizAnswer3").css("background-color", "orange");

                telefonJoker = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(telefonJokerr);
            }
            else if(loop == 5){

                $("#quizAnswer2").css("background-color", "orange");

                telefonJoker = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(telefonJokerr);
            }
        }


        telefonJoker++;
    }



    function joker5050(){

        if(jokerSound == 5){

            document.getElementById("one").disabled = false;
            document.getElementById("three").disabled = false;
            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;

            if(loop == 1){

                var element1 = document.getElementById("quizAnswer2");
                var element2 = document.getElementById("quizAnswer3");
                
                element1.style.display = "none";
                element2.style.display = "none"

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 2){

                var element1 = document.getElementById("quizAnswer2");
                var element2 = document.getElementById("quizAnswer4");
                
                element1.style.display = "none";
                element2.style.display = "none"

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 3){

                var element1 = document.getElementById("quizAnswer2");
                var element2 = document.getElementById("quizAnswer3");
                
                element1.style.display = "none";
                element2.style.display = "none"

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 4){

                var element1 = document.getElementById("quizAnswer");
                var element2 = document.getElementById("quizAnswer4");
                
                element1.style.display = "none";
                element2.style.display = "none"

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 5){

                var element1 = document.getElementById("quizAnswer");
                var element2 = document.getElementById("quizAnswer4");
                
                element1.style.display = "none";
                element2.style.display = "none"

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
        }
        
        jokerSound++;

    }

    function jokerSoundTime(){

        if(jokerSound == 4){

            document.getElementById("two").disabled = false;
            document.getElementById("three").disabled = false;
            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;


            if(loop == 1){
                $("#answ1").html("A : " + quiz[i].answ1 + " [ 50% ]");
                $("#answ2").html("B : " + quiz[i].answ2 + " [ 20% ]");
                $("#answ3").html("C : " + quiz[i].answ3 + " [ 20% ]");
                $("#answ4").html("D : " + quiz[i].answ4 + " [ 10% ]");

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 2){

                $("#answ1").html("A : " + quiz[i].answ1 + " [ 30% ]");
                $("#answ2").html("B : " + quiz[i].answ2 + " [ 20% ]");
                $("#answ3").html("C : " + quiz[i].answ3 + " [ 20% ]");
                $("#answ4").html("D : " + quiz[i].answ4 + " [ 30% ]");

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 3){

                $("#answ1").html("A : " + quiz[i].answ1 + " [ 20% ]");
                $("#answ2").html("B : " + quiz[i].answ2 + " [ 20% ]");
                $("#answ3").html("C : " + quiz[i].answ3 + " [ 10% ]");
                $("#answ4").html("D : " + quiz[i].answ4 + " [ 50% ]");

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 4){

                $("#answ1").html("A : " + quiz[i].answ1 + " [ 10% ]");
                $("#answ2").html("B : " + quiz[i].answ2 + " [ 10% ]");
                $("#answ3").html("C : " + quiz[i].answ3 + " [ 60% ]");
                $("#answ4").html("D : " + quiz[i].answ4 + " [ 20% ]");

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
            else if(loop == 5){

                $("#answ1").html("A : " + quiz[i].answ1 + " [ 25% ]");
                $("#answ2").html("B : " + quiz[i].answ2 + " [ 25% ]");
                $("#answ3").html("C : " + quiz[i].answ3 + " [ 25% ]");
                $("#answ4").html("D : " + quiz[i].answ4 + " [ 25% ]");

                jokerSound = 0;
            
                audioTime.play();
                intervalTimer = setInterval(countDown, 1000);
                clearInterval(jokerSoundd);
            }
        }
        
        jokerSound++;

    }

    function timer(){
        
        Mp3Size++;

        if(loop == 1 && Mp3Size == 13){
           
            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;
            document.getElementById("one").disabled =  false;
            document.getElementById("two").disabled =  false;
            document.getElementById("three").disabled =  false;

            $("#answ1").html("A : " + quiz[i].answ1);
            $("#answ2").html("B : " + quiz[i].answ2);
            $("#answ3").html("C : " + quiz[i].answ3);
            $("#answ4").html("D : " + quiz[i].answ4);
            
    
            audioTime = new Audio("pics/sure.mp3");
            audioTime.play();

            Count = 30;
            intervalTimer = setInterval(countDown, 1000);
       
        }
        else if(loop == 2 && Mp3Size == 44){
            
            var element1 = document.getElementById("quizAnswer");
            var element2 = document.getElementById("quizAnswer2");
            var element3 = document.getElementById("quizAnswer3");
            var element4 = document.getElementById("quizAnswer4");
            
            element1.style.display = "inline";
            element2.style.display = "inline"
            element3.style.display = "inline";
            element4.style.display = "inline"


            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;
            document.getElementById("one").disabled =  false;
            document.getElementById("two").disabled =  false;
            document.getElementById("three").disabled =  false;

            $("#answ1").html("A : " + quiz[i].answ1);
            $("#answ2").html("B : " + quiz[i].answ2);
            $("#answ3").html("C : " + quiz[i].answ3);
            $("#answ4").html("D : " + quiz[i].answ4);
                    
            audioTime = new Audio("pics/sure.mp3");
            audioTime.play();

            Count = 30;
            intervalTimer = setInterval(countDown, 1000);
       
        }
        else if(loop == 3 && Mp3Size == 52){
            
            var element1 = document.getElementById("quizAnswer");
            var element2 = document.getElementById("quizAnswer2");
            var element3 = document.getElementById("quizAnswer3");
            var element4 = document.getElementById("quizAnswer4");
            
            element1.style.display = "inline";
            element2.style.display = "inline"
            element3.style.display = "inline";
            element4.style.display = "inline"


            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;
            document.getElementById("one").disabled =  false;
            document.getElementById("two").disabled =  false;
            document.getElementById("three").disabled =  false;

            $("#answ1").html("A : " + quiz[i].answ1);
            $("#answ2").html("B : " + quiz[i].answ2);
            $("#answ3").html("C : " + quiz[i].answ3);
            $("#answ4").html("D : " + quiz[i].answ4);
                    
            audioTime = new Audio("pics/sure.mp3");
            audioTime.play();

            Count = 30;
            intervalTimer = setInterval(countDown, 1000);
       
        }
        else if(loop == 4 && Mp3Size == 53){
            
            var element1 = document.getElementById("quizAnswer");
            var element2 = document.getElementById("quizAnswer2");
            var element3 = document.getElementById("quizAnswer3");
            var element4 = document.getElementById("quizAnswer4");
            
            element1.style.display = "inline";
            element2.style.display = "inline"
            element3.style.display = "inline";
            element4.style.display = "inline"


            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;
            document.getElementById("one").disabled =  false;
            document.getElementById("two").disabled =  false;
            document.getElementById("three").disabled =  false;

            $("#answ1").html("A : " + quiz[i].answ1);
            $("#answ2").html("B : " + quiz[i].answ2);
            $("#answ3").html("C : " + quiz[i].answ3);
            $("#answ4").html("D : " + quiz[i].answ4);
                    
            audioTime = new Audio("pics/sure.mp3");
            audioTime.play();

            Count = 30;
            intervalTimer = setInterval(countDown, 1000);
       
        }
        else if(loop == 5 && Mp3Size == 115){
            
            var element1 = document.getElementById("quizAnswer");
            var element2 = document.getElementById("quizAnswer2");
            var element3 = document.getElementById("quizAnswer3");
            var element4 = document.getElementById("quizAnswer4");
            
            element1.style.display = "inline";
            element2.style.display = "inline"
            element3.style.display = "inline";
            element4.style.display = "inline"


            document.getElementById("quizAnswer").disabled = false;
            document.getElementById("quizAnswer2").disabled = false;
            document.getElementById("quizAnswer3").disabled = false;
            document.getElementById("quizAnswer4").disabled = false;
            document.getElementById("one").disabled =  false;
            document.getElementById("two").disabled =  false;
            document.getElementById("three").disabled =  false;

            $("#answ1").html("A : " + quiz[i].answ1);
            $("#answ2").html("B : " + quiz[i].answ2);
            $("#answ3").html("C : " + quiz[i].answ3);
            $("#answ4").html("D : " + quiz[i].answ4);
                    
            audioTime = new Audio("pics/sure.mp3");
            audioTime.play();

            Count = 30;
            intervalTimer = setInterval(countDown, 1000);
       
        }
    }


    function countDown() {


        if(Count == 0){

            
            document.getElementById("quizAnswer").disabled = true;
            document.getElementById("quizAnswer2").disabled = true;
            document.getElementById("quizAnswer3").disabled = true;
            document.getElementById("quizAnswer4").disabled = true;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;


            Mp3Size = 0;
            i++;
            
            
            if (loop == 1) {
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer2").css("background-color", "red");
                $("#quizAnswer3").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "red");
            }
            else if (loop == 2) {
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer2").css("background-color", "red");
                $("#quizAnswer3").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "red");
            }
            else if (loop == 3) {
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "red");
                $("#quizAnswer2").css("background-color", "red");
                $("#quizAnswer3").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "green");
            }
            else if (loop == 4) {
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "red");
                $("#quizAnswer2").css("background-color", "red");
                $("#quizAnswer3").css("background-color", "green");
                $("#quizAnswer4").css("background-color", "red");
            }
            else if (loop == 5) {
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "red");
                $("#quizAnswer2").css("background-color", "green");
                $("#quizAnswer3").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "red");
            }


            var audio = document.getElementById('audio');
            audio = new Audio("pics/zaman.mp3");
            audio.play();

            zamanFunction = setInterval(zaman,1000);
            clearInterval(intervalTimer);
            
        }else{
          
            $("#time").html(Count)
    
        }

        Count -= 1;

    }
    

    function quizWrite() {

        loop++;
        clear();
        textClear();

        $("#questionOther").html("" + quiz[i].question);

        var audio = document.getElementById('audio');
        audio = new Audio(quiz[i].imageURL);
        audio.play();

      
        intervalTimer = setInterval(timer, 1000);
        

    }



    function quizConstructor(question, answ1, answ2, answ3, answ4, ans, imageURL, attempted, videoURL) {
        this.question = question;
        this.answ1 = answ1;
        this.answ2 = answ2;
        this.answ3 = answ3;
        this.answ4 = answ4;
        this.ans = ans;
        this.imageURL = imageURL;
        this.attempted = attempted;
        this.videoURL = videoURL;
    }

    function logoConstructor(frends){
        this.frends = frends;
    }


    function RestartFucn(){

        reset++;

        if(reset == 2){
            window.location.reload();
        }


    }

    function quizBuild() {

        quiz[1] = new quizConstructor('1` den buyuk bir tam sayiyi kendisiyle carparsaniz onun nesini bulursunuz ? ', 'Karesini', 'Kupunu', 'Karekokunu', 'Kupkokunu', 1, "pics/1.mp3" , false);
        quiz[2] = new quizConstructor('Asil adi Marie-Henri Beyle olan, 17 yasinda Napolyon Bonapart`in ordusuna katilan ne Napolyon`un Rusya seferine de giden, "Kizil ile Kara" adli romani yazan yazar kimdir ?', 'Stendhal', 'Voltaire', 'Balzac', 'Gogol', 2, "pics/2.mp3" , false);
        quiz[3] = new quizConstructor('X isinlarini kesfeden ve 1901`de ilk "Nobel Fizik Odulu"nu kazanan bilim insani kimdir ?', 'Ernest X', 'Albert Einstein', 'Marie Curie', 'Wilhelm Rontgen', 3, "pics/3.mp3" , false);
        quiz[4] = new quizConstructor('"Hosa giden" anlamin gelen kelimenin dogru yazilisi nasildir ?', 'Eylenceli', 'Eğilenceli', 'Eğlenceli', 'Eyilenceli', 4, "pics/4.mp3" , false);
        quiz[5] = new quizConstructor('"Arilarin Dansi" adli bestenin denlediginiz versiyonunda piyanoya hangi enstruman eslik etmektedir ?', 'Keman', 'Flut', 'Darbuka', 'Basgitar', 5, "pics/5.mp3" , false);
        return quiz

    }



    function clear(){

        $("#quizAnswer").css("background-color", "#1D283E");
        $("#quizAnswer2").css("background-color", "#1D283E");
        $("#quizAnswer3").css("background-color", "#1D283E");
        $("#quizAnswer4").css("background-color", "#1D283E");

    }



    function textClear(){

        $("#time").html("∞");
                
        $("#answ1").html("∞");
                
        $("#answ2").html("∞");
                
        $("#answ3").html("∞");
                
        $("#answ4").html("∞");

    }


    function zaman(){

        zamanNull++;

        if(zamanNull == 3){
            
            zamanNull = 0;
            clearInterval(zamanFunction);
            quizWrite();

        }

    }

    function selectTime(){

        other++;
       
        if(questionIndex == 1 && other == 10){
            $("#quizAnswer").css("background-color", "green");
        }
        else if(questionIndex == 2 && other == 10){
            $("#quizAnswer2").css("background-color", "green");
        }
        else if(questionIndex == 3 && other == 10){
            $("#quizAnswer3").css("background-color", "green");
        }
        else if(questionIndex == 4 && other == 10){
            $("#quizAnswer4").css("background-color", "green");
        }

        if(other == 18){

            other = 0;
            Mp3Size = 0;
            i++;
            
            clearInterval(selectTimerr);
            quizWrite();
        
        }


    }


    function loser(){

        loserTimer++;;

        if (1 == quiz[i].ans){

            if(questionIndex == 1 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer").css("background-color", "red");
            }
            else if(questionIndex == 2 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer2").css("background-color", "red");
                rt = setInterval(RestartFucn, 1000);
            }
            else if(questionIndex == 3 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer3").css("background-color", "red");
                rt = setInterval(RestartFucn, 1000);
            }
            else if(questionIndex == 4 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer4").css("background-color", "red");
                rt = setInterval(RestartFucn, 1000);
            }

            
        }
        else if(2 == quiz[i].ans){
            if(questionIndex == 1 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer").css("background-color", "red");
            }
            else if(questionIndex == 2 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer2").css("background-color", "red");
                rt = setInterval(RestartFucn, 1000);
            }
            else if(questionIndex == 3 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer3").css("background-color", "red");
                rt = setInterval(RestartFucn, 1000);
            }
            else if(questionIndex == 4 && loserTimer == 15){
                $("#quizAnswer").css("background-color", "green");
                $("#quizAnswer4").css("background-color", "red");
                rt = setInterval(RestartFucn, 1000);
            }
            
        }
        else if(3 == quiz[i].ans){
            if(questionIndex == 1 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "green");
            }
            else if(questionIndex == 2 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer2").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "green");
            }
            else if(questionIndex == 3 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer3").css("background-color", "red");
                $("#quizAnswer4").css("background-color", "green");
            }
            else if(questionIndex == 4 && loserTimer == 15){
                $("#quizAnswer4").css("background-color", "green");
                $("#quizAnswer4").css("background-color", "green");
            }
            
        }
        else if(4 == quiz[i].ans){
            if(questionIndex == 1 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "red");
                $("#quizAnswer3").css("background-color", "green");
            }
            else if(questionIndex == 2 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer2").css("background-color", "red");
                $("#quizAnswer3").css("background-color", "green");
            }
            else if(questionIndex == 3 && loserTimer == 15){
                $("#quizAnswer3").css("background-color", "green");
                $("#quizAnswer3").css("background-color", "green");
            }
            else if(questionIndex == 4 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer3").css("background-color", "green");
                $("#quizAnswer4").css("background-color", "red");
            }
            
        }
        else if(5 == quiz[i].ans){
            if(questionIndex == 1 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer").css("background-color", "red");
                $("#quizAnswer2").css("background-color", "green");
            }
            else if(questionIndex == 2 && loserTimer == 15){
                $("#quizAnswer2").css("background-color", "green");
                $("#quizAnswer2").css("background-color", "green");
            }
            else if(questionIndex == 3 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer2").css("background-color", "green");
                $("#quizAnswer3").css("background-color", "red");
            }
            else if(questionIndex == 4 && loserTimer == 15){
                rt = setInterval(RestartFucn, 1000);
                $("#quizAnswer2").css("background-color", "green");
                $("#quizAnswer4").css("background-color", "red");
            }
            
        }

        if(loserTimer == 17){

            loserTimer = 0;
            Mp3Size = 0;
            i++;
            
            clearInterval(selectLoserTimer);
            quizWrite();
        
        

        }

    }


    function AllLoop(index){

        questionIndex = index;
        audioTime.pause();

        document.getElementById("one").disabled =  true;
        document.getElementById("two").disabled =  true;
        document.getElementById("three").disabled =  true;

        document.getElementById("quizAnswer").disabled = true;
        document.getElementById("quizAnswer2").disabled = true;
        document.getElementById("quizAnswer3").disabled = true;
        document.getElementById("quizAnswer4").disabled = true;

        if(index == 2){
            $("#quizAnswer2").css("background-color", "yellow");
        }
        else if(index == 3){
            $("#quizAnswer3").css("background-color", "yellow");
        }
        else if (index == 4){
            $("#quizAnswer4").css("background-color", "yellow");
        }
        else{
            $("#quizAnswer").css("background-color", "yellow");
        }
        

        if (1 == quiz[i].ans) {
   
            if(index == 1){
                var audio = document.getElementById('audio');
                audio = new Audio("pics/dogru.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectTimerr = setInterval(selectTime, 1000);
            }
            else{
                
                var audio = document.getElementById('audio');
                audio = new Audio("pics/yanliw.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectLoserTimer = setInterval(loser,1000);
            }
        }
        else if(2 == quiz[i].ans){
            if(index == 1){
                var audio = document.getElementById('audio');
                audio = new Audio("pics/dogru.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectTimerr = setInterval(selectTime, 1000);
            }
            else{
                
                var audio = document.getElementById('audio');
                audio = new Audio("pics/yanliw.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectLoserTimer = setInterval(loser,1000);
            }
        }
        else if(3 == quiz[i].ans){
            if(index == 4){
                var audio = document.getElementById('audio');
                audio = new Audio("pics/dogru.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectTimerr = setInterval(selectTime, 1000);
            }
            else{
                
                var audio = document.getElementById('audio');
                audio = new Audio("pics/yanliw.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectLoserTimer = setInterval(loser,1000);
            }
        }
        else if(4 == quiz[i].ans){
            if(index == 3){
                var audio = document.getElementById('audio');
                audio = new Audio("pics/dogru.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectTimerr = setInterval(selectTime, 1000);
            }
            else{
                
                var audio = document.getElementById('audio');
                audio = new Audio("pics/yanliw.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectLoserTimer = setInterval(loser,1000);
            }
        }
        else if(5 == quiz[i].ans){
            if(index == 2){
                var audio = document.getElementById('audio');
                audio = new Audio("pics/dogru.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectTimerr = setInterval(selectTime, 1000);
            }
            else{
                
                var audio = document.getElementById('audio');
                audio = new Audio("pics/yanliw.mp3");
                audio.play();
                clearInterval(intervalTimer);
                selectLoserTimer = setInterval(loser,1000);
            }
        }
    

    }
    
    quizAnswer.onclick=function(){ 
        AllLoop(1)
    }

    quizAnswer2.onclick=function() {
        AllLoop(2)
    }
    
    quizAnswer3.onclick=function() {
        AllLoop(3)
    }
    
    quizAnswer4.onclick=function() {
        AllLoop(4)
    }
    

    function lohoBuild() {

         logo[1] = new logoConstructor('pics/friends.png');
         logo[2] = new logoConstructor('pics/phone-call.png');
         return logo
 
     }


     function logoInsert() {
        
        var imageChoice = $('<img>');
        imageChoice.attr('src', logo[logoIndex].frends);
        imageChoice.attr('width', '90px');
        return imageChoice;

    }


    function imageInsert() {
        var imageChoice = $('<img>');
        imageChoice.attr('src', quiz[i].imageURL);
        imageChoice.attr('width', '500px');
        return imageChoice;
    }

   function videoInsert() {
        var imageChoice = $('<video>');
        imageChoice.attr("controls", "controls");
        imageChoice.html('<source src=' + quiz[i].videoURL + ' type=\'video/mp4\'>');
        imageChoice.attr('width', '500px');
        return imageChoice;
    }

})
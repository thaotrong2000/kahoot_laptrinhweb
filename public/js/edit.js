var socket = io();

var x = window.location.href;
function chuyenid(x){
    var i;
    var k="";
    var j;
    for(i=0;i<x.length;i++){
        if(x[i]=='='){
            for(j=i+1;j<x.length;j++){
                if(x[j]=="&"){
                    break;
                }
                k += x[j];
            }
            break;
        }
    }
    return k;
}



// var params = jQuery.deparam(window.location.search); //Lấy id từ url
var params = chuyenid(x);


//Khi máy chủ kết nối với máy chủ
socket.on('connect', function() {
    
    //Nói với máy chủ rằng đó là kết nối máy chủ từ chế độ xem trò chơi
    socket.emit('edit-game', params);
});


socket.on('editQuestions', function(data){
    for(var i=0;i<data.size1;i++){
    questionNum = 1+i;
    var questionsDiv = document.getElementById('allQuestions');

    
    

    
    var newQuestionDiv = document.createElement("div");
    
    var questionLabel = document.createElement('label');
    var questionField = document.createElement('input');
    
    var answer1Label = document.createElement('label');
    var answer1Field = document.createElement('input');
    
    var answer2Label = document.createElement('label');
    var answer2Field = document.createElement('input');
    
    var answer3Label = document.createElement('label');
    var answer3Field = document.createElement('input');
    
    var answer4Label = document.createElement('label');
    var answer4Field = document.createElement('input');
    
    var correctLabel = document.createElement('label');
    var correctField = document.createElement('input');
    
    questionLabel.innerHTML = "Question " + String(questionNum) + ": ";

    questionLabel.setAttribute('id','title_question')
    questionField.setAttribute('class', 'question');
    questionField.setAttribute('id', 'q' + String(questionNum));
    questionField.setAttribute('type', 'text');
    questionField.setAttribute('value', data.q1[0+i*10]);
    questionField.setAttribute('placeholder', 'Nhập câu hỏi');
    
    
    correctLabel.innerHTML = "Correct Answer (1-4): ";
    
    
    answer1Field.setAttribute('id', String(questionNum) + "a1");
    answer1Field.setAttribute('type', 'text');
    answer1Field.setAttribute('class', 'answertop1');
    answer1Field.setAttribute('placeholder',"Thêm câu trả lời 1");
    answer1Field.setAttribute('value', data.q1[1+i*10]);
    

    answer2Field.setAttribute('id', String(questionNum) + "a2");
    answer2Field.setAttribute('type', 'text');
    answer2Field.setAttribute('value', data.q1[2+i*10]);
    answer2Field.setAttribute('class', 'answertop2');
    answer2Field.setAttribute('placeholder',"Thêm câu trả lời 2");

    answer3Field.setAttribute('id', String(questionNum) + "a3");
    answer3Field.setAttribute('type', 'text');
    answer3Field.setAttribute('class', 'answerbottom1');
    answer3Field.setAttribute('placeholder',"Thêm câu trả lời 3");
    answer3Field.setAttribute('value', data.q1[3+i*10]);
    answer4Field.setAttribute('id', String(questionNum) + "a4");
    answer4Field.setAttribute('type', 'text');
    answer4Field.setAttribute('class', 'answerbottom2');
    answer4Field.setAttribute('placeholder',"Thêm câu trả lời 4");
    answer4Field.setAttribute('value', data.q1[4+i*10]);

    correctField.setAttribute('id', 'correct' + String(questionNum));
    correctField.setAttribute('class', 'correct' );
    correctField.setAttribute('type', 'number');
    correctField.setAttribute('value', data.q1[5+i*10]);
    newQuestionDiv.setAttribute('id', 'question-field');//Sets class of div
    
    newQuestionDiv.appendChild(questionLabel);
    
    newQuestionDiv.appendChild(questionField);
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(answer1Label);
    newQuestionDiv.appendChild(answer1Field);
    newQuestionDiv.appendChild(answer2Label);
    newQuestionDiv.appendChild(answer2Field);
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(answer3Label);
    newQuestionDiv.appendChild(answer3Field);
    newQuestionDiv.appendChild(answer4Label);
    newQuestionDiv.appendChild(answer4Field);
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(document.createElement('br'));
    newQuestionDiv.appendChild(correctLabel);
    newQuestionDiv.appendChild(correctField);
    
    questionsDiv.appendChild(document.createElement('br'));//Creates a break between each question
    questionsDiv.appendChild(newQuestionDiv);//Adds 
   
    }

    
});
function save(){
    window.location.href="/create/";
}

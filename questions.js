//drop this into console and copy the text out of the appended textarea

var questions = [];
$("ol:first li").each(function() {
    questions.push(escape($(this).text()));
});


var answers = [];
$("ol:last li").each(function() {
    answers.push(escape($(this).text()));
});


var output = [];
var str = "\n";
for(var i=0;i<answers.length;i++) {
    output.push({
        question:questions[i],
        answers:[answers[i]]
    });
    i++
    str+='{\n\tquestion:"' + questions[i] + '",\n\tanswers:["' + (answers[i]) + '"]\n},\n';
}
str = str.substr(0,str.length-2)
str+="";

$("body").append("<textarea>" + str + "</textarea>");
var i = 0;

function adicionarCampo(){
    var form = document.getElementById("newStudent");
    var input = document.createElement("input")
    input.style.width = "30vh";
    input.style.margin = "1vh"
    input.setAttribute("placeholder", "Insira o nome do respectivo aluno")
    
    var p = document.createElement("h3")
    let text = document.createTextNode("Insira o nome do aluno " +i)
    p.appendChild(text)
    
    form.appendChild(p)
    form.appendChild(input);
    ++i
}
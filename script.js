var clickBot = document.getElementById("add");




// var noteindex=0;

clickBot.addEventListener("click", function (){
    
    
    
    var noteArea = document.getElementById("notesArea");
    
    var title = document.getElementById("inpTitle");
    
    
    
    var note = document.getElementById("inpContent");
    
    
    if(!((title.value==null || title.value=="")||(note.value==null||note.value==""))){


        var newNote = document.createElement("div");
        
        newNote.className = "note";
        
        
        // newNote.setAttribute("id", noteindex);
        // noteindex++;

        
        
        var notetitle = document.createElement("div");
        
        notetitle.className = "noteTitle";
        
        
        

        var head = document.createElement("h3");
        head.className="titletext";
        
        
        head.appendChild(document.createTextNode(title.value));
        

        var delbut = document.createElement("button");
        
        delbut.className = "btn";
        
        
        delbut.setAttribute("onclick", "delNote(this)");
        
        var delbutsymbol = document.createElement("i");
        
        delbutsymbol.className = "fa fa-trash";
        delbut.appendChild(delbutsymbol);

        notetitle.appendChild(head);
        
        notetitle.appendChild(delbut);

        newNote.appendChild(notetitle);
        

        var notecont = document.createElement("div");
        
        notecont.className = "noteCont";
        
        var content = document.createElement("textarea");
        
        content.setAttribute("disabled", true);
        
        content.appendChild(document.createTextNode(note.value));
        
        notecont.appendChild(content);
        
        

        newNote.appendChild(notecont);
        noteArea.appendChild(newNote);
        
        
        title.value="";
        
        
        note.value="";
        
        
    }
    
}
                          
)


function delNote(ele){
    
    

    var delnote = ele.parentNode.parentNode;
    
    delnote.remove();
    
    
}
/* The following program contains the source code for a game called Baghchal. 

Baghchal is a popular board game in Nepal where two players
tore the output in a variable called result.
clickBot.addEventListener("click", function (){
    
    
    
    var noteArea = document.getElementById("notesArea");
    
    var title = document.getElementById("inpTitle");
    
    
    
    var note = document.getElementById("inpContent");
    
    
    if(!((title.value==null || title.value=="")||(note.value==null||note.value==""))){


        var newNote = document.createElement("div");
        
        newNote.className = "note";
        
var delbutsymbol = document.createElement("i");
        
        delbutsymbol.className = "fa fa-trash";
        delbut.appendChild(delbutsymbol);

        notetitle.appendChild(head);
        
        notetitle.appendChild(delbut);

        newNote.appendChild(notetitle);
        

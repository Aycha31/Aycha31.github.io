let pictures=['11.jpg','12.jpg','13.jpg','14.jpg','15.jpg'];
let descriptions=
['description for Picture 1',
'description for Picture 2',
'description for Picture 3',
'description for Picture 4',
'description for Picture 5',
];

let picture=document.getElementById('pic');
let description=document.getElementById('desc');
let index=0;

function leftClick(){
    if(index<pictures.length-1){
        index++;
    }
    else index=0;
    showPicture();
}

function rightClick(){
    if(index<=0){
        index=pictures.length-1;
    }

    else 
        index--;
    showPicture();
}
function showPicture(){
    description.innerText=descriptions[index];
}
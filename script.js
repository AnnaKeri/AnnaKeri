$(document).ready(function() {

let AllItems=[];
let btn= $("#taskAdd");
let ul= $("#taskList");

function deleteCurrentElem(currentElem){

console.log(currentElem);
};

btn.on('click',function(){

let currText=$("#taskInput").val();
if($.trim(currText)==='')
{
return false;

}
else {

let el={id:`item-${AllItems.length+1}`,
name:currText};
let span= $(`<span class="delete-btn">X</span>`);

let li =$(`<li id="${el['id']}" >${currText}</li>`);

li.append(span);

AllItems.push(el);
ul.append(li);
span.on('click',function(){

let currentElem=$(this).parent();

currentElem.remove();
});
$("#taskInput").val('');

}
});


});

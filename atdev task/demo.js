function create_tr(table_id) {
    let table_body =document.getElementById(table_id),
    first_tr =table_body.firstElementChild
    tr_clone  =first_tr.cloneNode(true);
    
    table_body.append(tr_clone);

    clear_first_tr(table_body.firstElementChild);
}

function clear_first_tr(first_tr) {
    let children = first_tr.children;
    children = Array.isArray(children) ? children:Object.values(children);
    children.forEach(x=>{
        if(x !== first_tr.lastElementChild)
        {
        x.firstElementChild.value ='';
        }
    });
    
}


function remove_tr(This) {
    if(This.closest('tbody').childElementCount==1)
    {
        alert("You Dont have permission to DELETE This ")
    }
    else{

        This.closest('tr').remove()
    }
    
}

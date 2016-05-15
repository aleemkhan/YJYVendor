function sdb(k,v){
    if(typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        localStorage.setItem(k,v);
    } else {
        // Sorry! No Web Storage support..
        console.log("No Local Database Support");
    }
}
function gdb(k){
    if(typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        return localStorage.getItem(k);
    } else {
        // Sorry! No Web Storage support..
        console.log("No Local Database Support");
        return ".|.";
    }
}
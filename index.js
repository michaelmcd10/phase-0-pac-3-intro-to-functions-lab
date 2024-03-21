function shout(hello){
    return hello.toUpperCase();
}
function whisper(hello){
    return hello.toLowerCase();
}
function logShout(hello){
    console.log(hello.toUpperCase())
}    
function logWhisper(hello){
    console.log(hello.toLowerCase())
}

function sayHiToHeadphonedRoommate(message) {
    if (message === message.toLowerCase()) {
        return "I can't hear you!";
    } 
    if (message === message.toUpperCase()) {
        return "YES INDEED!";
    } 
    if (message === "Let's have dinner together!") {
        return "I would love to!";
    }
}

console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO")); 
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); 

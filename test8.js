var obj = {
    “id” : 4, “name” : “abc”,
    “id” : 10, “name” : “ab2”,
    “id” : 5, “name” : “abc3”,
    “id” : 6, “name” : “abc5”
   };

var arr = [];
for(var i in obj) {
    var o = {};
    if(obj.hasOwnProperty(i)) {
       o.id = i;
       o.name = obj[i].name;
       o.title = obj[i].title;
       arr.push(o); 
    }        
} 
arr.sort(function (a,b) {
   a.id - b.id;
});
console.log(arr);
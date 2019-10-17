//console.log(2+3)
 var socket = io();
  socket.on('connect', function() {
  	console.log('connection estalbsihed')
    //     socket.emit('my event', {data: 'I\'m connected!'});
    // });
});
function handleClick(){
	var inputbox=document.getElementById('inputbox')
	socket.emit('msg',inputbox.value)
	inputbox.value=' '
} 
socket.on('push',function(data){
	var chatbox=document.getElementById('chatbox')
	chatbox.innerHTML+=data+"<br/>"
})
  
// function handleClick(){
// 	//alert('Hello')
// 	var url="/users"
// 	fetch(url).then( function(res){
// 		res.json().then(function(data){
// 			console.log(data)
// 		})
// 	})
// }







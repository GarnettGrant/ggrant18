// $(document).ready(() => {

// })

// $.ajax('/assignment6.json',(data) =>{

// });

// $.ajax({
//     url: "assignment6.json",
//     cache: false
// })
// .done ((content) =>{

// });

// function processInitialLoad(items){
//     //display your library...
    
// }



const xhttp=new XMLHttpRequest();
xhttp.onload = function(xhttp) {
    console.log(xhttp.target.responseText);
};
xhttp.open("GET", 'assignment6.json');
xhttp.send();

$('#album').turn({
            // Width

			width:1025,
			
			// Height

			height:513,

			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true,

            acceleration: true
});

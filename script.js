function postBlog() {
	document.getElementById('posting-blog').style.background = 'rgb(244, 180, 108)'; // put color

	var title = document.getElementById("title").value;
	var fname = document.getElementById("fname").value;
	var mname = document.getElementById("mname").value;
	var lname = document.getElementById("lname").value;
	var content = document.getElementById("content").value;

	document.getElementById("title2").innerHTML = title;
	
	document.getElementById("author2").innerHTML = fname + " " +mname + " "  +lname;
	document.getElementById("content2").innerHTML = content;
}
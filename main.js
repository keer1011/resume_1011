function json(file,callback){

 var xhr=new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
 	if(xhr.readyState===4 && xhr.status===200){
 		callback(xhr.responseText);
 	}
 }
 xhr.send();
}
json("file.JSON",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	carr(d.carrier);
	edu(d.education);
	technicalskills(d.skills);
	ache(d.acheivements);
	desc(d.description);

 
 })
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(basicdetails){
	var i=document.createElement("img");
	i.src=basicdetails.image;
	i.alt="profile photo";
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=basicdetails.name;
	l.appendChild(nam);
	var email=document.createElement("h4");
	email.textContent=basicdetails.email;
	l.appendChild(email);
	var phone=document.createElement("h1");
	phone.textContent=basicdetails.phone;
	l.appendChild(phone);
	var address=document.createElement("h5");
	address.textContent=basicdetails.address;
	l.appendChild(address);
}
   var r=document.createElement("div");
   r.classList.add("right");
   main.appendChild(r);
function edu(e){
	var e1=document.createElement("div");
	e1.classList.add("education");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="educational Details";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));
    for (var i=0;i<e.length;i++){
    	var h=document.createElement("h2");
        h.textContent=e[i].course;
    	e1.appendChild(h);
    	var u=document.createElement("ul");
    	e1.appendChild(u);
    	var list=document.createElement("li");
    	list.textContent=e[i].college;
    	u.appendChild(list);
    	var list1=document.createElement("li");
    	list1.textContent=e[i].percentage;
    	list.appendChild(list1);
    }	
	
}
function technicalskills(s){
	var d=document.createElement("div");
	d.textContent="skills Set";
	r.appendChild(d);
	var tab=document.createElement("table");
	var row="";
	for(var i=0; i<s.length; i++){
		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
	}
	tab.innerHTML=row;
	d.appendChild(tab);
}
function carr(car){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
	h1.textContent="carrier objective";
	c1.appendChild(h1);
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
    para.textContent=car.architechture;
    c1.appendChild(para);
}
function ache(ach){
	var d=document.createElement("div");
	d.setAttribute("id","acheivements");
	r.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="acheivements",
	d.appendChild(h);
	h.appendChild(document.createElement("HR"));

	for(i in ache){
		var u=document.createElement("u1");
		d.appendChild(u);
		var list=document.createElement("li");
		list.textContent=ach[i];
		u.appendChild(list);
	}
}
function desc(D){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h2=document.createElement("h2");
	h2.textContent="description:";
	c1.appendChild(h2);
	h2.appendChild(document.createElement("HR"));
	var para=document.createElement("h2");
	para.textContent=D.desc;
	c1.appendChild(para);
}





function setCookie(c,a){(t=new Date).setTime(t.getTime()+6048e5),document.cookie=c+"="+a+"; expires="+t.toGMTString()+"; path=/;"}function getCookie(a){for(var b,h=a+"=",d=document.cookie.split(";"),f=0;f<d.length;f++)if(b=d[f].trim(),0==b.indexOf(h))return b.substring(h.length,b.length);return!1}function light(){setCookie("DARK_STATUS","0"),$("#toggle-dark-icon").removeClass("fa-sun"),$("#toggle-dark-icon").addClass("fa-moon"),$("html").removeClass("dark")}function dark(){setCookie("DARK_STATUS","1"),$("#toggle-dark-icon").removeClass("fa-moon"),$("#toggle-dark-icon").addClass("fa-sun"),$("html").addClass("dark")}function setExpire(b){b?7>(e=new Date).getHours()?setCookie("DARK_EXPIRE",new Date(e.getFullYear(),e.getMonth(),e.getDate(),7).getTime()):setCookie("DARK_EXPIRE",new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,7).getTime()):6<(e=new Date).getHours()&&20>e.getHours()?setCookie("DARK_EXPIRE",new Date(e.getFullYear(),e.getMonth(),e.getDate(),20).getTime()):setCookie("DARK_EXPIRE",(20<=e.getHours()?new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,7):new Date(e.getFullYear(),e.getMonth(),e.getDate(),7)).getTime())}function toggleDark(){"1"==getCookie("DARK_STATUS")?(light(),setExpire(0)):(dark(),setExpire(1))}function darkInit(){(e=new Date).getTime()>getCookie("DARK_EXPIRE")?(setCookie("DARK_EXPIRE","0"),1==getCookie("AUTO_DARK")?6<(e=new Date).getHours()&&20>e.getHours()?(light(),setExpire(0)):(dark(),setExpire(1)):(light(),setExpire(0))):1==getCookie("DARK_STATUS")?dark():light()}window.matchMedia("(prefers-color-scheme: dark)").addListener(a=>{1==getCookie("AUTO_DARK")&&(a.matches?dark():light(),setCookie("DARK_EXPIRE","0"))}),$(function(){darkInit(),1==getCookie("AUTO_DARK")&&window.matchMedia("prefers-color-scheme: dark").matches&&(dark(),setCookie("DARK_EXPIRE","0"))});
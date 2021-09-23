function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NlSA7sLmHF":
        Script1();
        break;
      case "6LMtCzpzLVw":
        Script2();
        break;
      case "6QtrYkvrKQg":
        Script3();
        break;
      case "6rcd5fDuKMw":
        Script4();
        break;
      case "5h1rbhYku6c":
        Script5();
        break;
      case "5kfc05xfTHA":
        Script6();
        break;
      case "5WWLFfjSpou":
        Script7();
        break;
      case "6CtEahU0XBO":
        Script8();
        break;
      case "5wQb7DjcIVE":
        Script9();
        break;
      case "5kCYTP7v6wW":
        Script10();
        break;
      case "6U0EYgGXhRx":
        Script11();
        break;
      case "5ryQ8mjOhTZ":
        Script12();
        break;
      case "6ZJ588SCLc0":
        Script13();
        break;
      case "5vcFmlqzp9f":
        Script14();
        break;
      case "63eFi6ZhNwA":
        Script15();
        break;
      case "6QzEm9cPXVl":
        Script16();
        break;
      case "6Nr8hczZOk1":
        Script17();
        break;
      case "6XNqC1RsCzj":
        Script18();
        break;
      case "6ASDJwzleYp":
        Script19();
        break;
      case "6ZdyhuraDzE":
        Script20();
        break;
      case "655gJDnGUf9":
        Script21();
        break;
      case "5Zu44ihLB99":
        Script22();
        break;
      case "5tZQYLrDVp3":
        Script23();
        break;
      case "6oavvmErNxK":
        Script24();
        break;
      case "6QhPhTciURx":
        Script25();
        break;
      case "6mbu8dNUayG":
        Script26();
        break;
      case "5mLL9FNU1oL":
        Script27();
        break;
      case "5WVhLzJl42v":
        Script28();
        break;
      case "6fTKG0qYquN":
        Script29();
        break;
      case "6md4PeHmZSj":
        Script30();
        break;
      case "62fOj9A0PpQ":
        Script31();
        break;
      case "5x5R3JQSfOB":
        Script32();
        break;
      case "5rJqVe9Jy5l":
        Script33();
        break;
      case "6VapNzLLWJ2":
        Script34();
        break;
      case "6rKY5GHGhzB":
        Script35();
        break;
      case "6C7H23eSYed":
        Script36();
        break;
      case "6PKZzJgPnSH":
        Script37();
        break;
      case "6ZCZ1vLSCHw":
        Script38();
        break;
      case "6YN8AFnAQpX":
        Script39();
        break;
      case "5cQBGd2GWcs":
        Script40();
        break;
      case "5VwC3tXDKwg":
        Script41();
        break;
      case "6IUDBe0w0Qw":
        Script42();
        break;
      case "5dOTK9F7XAX":
        Script43();
        break;
      case "6GRhfdgGqI1":
        Script44();
        break;
      case "5s0cVvMJzKr":
        Script45();
        break;
      case "5f2ZHi8fYCI":
        Script46();
        break;
      case "6eJMmNwYKNI":
        Script47();
        break;
      case "6937Q3u8UDA":
        Script48();
        break;
      case "5c3epGwFlej":
        Script49();
        break;
      case "68VQa66fLQw":
        Script50();
        break;
      case "612wdjkmaNd":
        Script51();
        break;
      case "67nJKFOiTaI":
        Script52();
        break;
      case "6mJYNDBw6Tl":
        Script53();
        break;
      case "6FBjSJnmX1n":
        Script54();
        break;
      case "6qzKrJsT6GW":
        Script55();
        break;
      case "6JttGMKZEpG":
        Script56();
        break;
      case "5bO3DuguFH8":
        Script57();
        break;
      case "5dY7pnax3lY":
        Script58();
        break;
      case "6dImpnSPYRd":
        Script59();
        break;
      case "6Yv3UbQOBz0":
        Script60();
        break;
      case "6fcbtEnKGDO":
        Script61();
        break;
      case "6VB07PIO3DC":
        Script62();
        break;
      case "67Aw7uNrgfm":
        Script63();
        break;
      case "63qtPpCxyiI":
        Script64();
        break;
      case "5viSoEjLLo5":
        Script65();
        break;
      case "681z6zDkY8c":
        Script66();
        break;
      case "6aFb9NpcbZr":
        Script67();
        break;
      case "5wBBG26sPyk":
        Script68();
        break;
      case "5lOhnaEvM8m":
        Script69();
        break;
      case "6R6zWDB0yBe":
        Script70();
        break;
  }
}

function Script1()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script2()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script3()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script4()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script5()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script6()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script7()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script8()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script9()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script10()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script11()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script12()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script13()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script14()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script15()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script16()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script17()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script18()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script19()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script20()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script21()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script22()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script23()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script24()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script25()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script26()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script27()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script28()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script29()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script30()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script31()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script32()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script33()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script34()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script35()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script36()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script37()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script38()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script39()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script40()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script41()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script42()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script43()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script44()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script45()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script46()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script47()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script48()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script49()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script50()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script51()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script52()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script53()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script54()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script55()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script56()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script57()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script58()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script59()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script60()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script61()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script62()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script63()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script64()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script65()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script66()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script67()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script68()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script69()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script70()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}


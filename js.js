function zasady()
{
	document.getElementById("walka").innerHTML ="<h3>Zasady gry Bitwa o Pierścień</h3><br /><br /> Po rozpoczęciu gry wybieramy wojownika, którym chcemy walczyć, a następnie wybieramy przeciwnika. W każdej rundzie gracz ma szanse uderzyć przeciwnika oraz obronić się przed ciosem. Walka trwa dopóki jeden z wojowników straci wszystkie punkty zdrowia.<br /><br /> INICJATYWA - im większa inicjatywa, tym większa szansa że wojownik uderzy jako pierwszy (opcja jeszcze niedostępna)<br /><br /> ATAK - wojownik trafia, jeżeli liczba oczek kostki wynosi mniej lub jest równa ilości punktów ataku wojownika<br /><br /> OBRONA - wojownik broni się przed ciosem, jeżeli liczba oczek kostki wynosi mniej lub jest równa ilości punktów obrony wojownika<br /><br /> ZDROWIE - z każdym trafieniem i nieudaną obroną ataku przeciwnika, wojownik traci jeden punkt zdrowia <br /><br /><input type='button' value='Powrót do Menu Głównego' onClick='location.reload();' />";
}

function gra()
{
	document.getElementById("walka").innerHTML = "<h3>Witaj w grze Bitwa o Pierścień</h3><br /><br /> Wybierz swojego Wojownika<br /><br /> Aragorn  <input type='submit' value='wybierz'/ onclick='gracz1()'> <br /> <br /> Legolas  <input type='submit' value='wybierz'/ onclick='gracz2()'> <br /> <br />  Gimli <input type='submit' value='wybierz'/ onclick='gracz3()'> <br /> <br />Wybierz swojego przeciwnika <br /><br /> Uruk Hai  <input type='submit' value='wybierz'onclick='villian1()'> <br /> <br /> Azog        <input type='submit' value='wybierz'onclick='villian2()'> <br /> <br />  Saruman  <input type='submit' value='wybierz'/ onclick='villian3()'><br /><br /><input type='submit' id='rozpwalk' value='Rozpocznij walkę!' onclick='walka()' /> "	
}
function gracz1()
{
	var imie1 = "Aragorn";
	var	inicjatywa1 =3; 
	var atak1 = 4 ;
	var obrona1 = 3; 
	var zdrowie1 = 10;
	
	document.getElementById("postac").innerHTML = "<img src='img/aragorn.jpg' height='298' width='250' />";
	document.getElementById("imiexxx").innerHTML = imie1;
	document.getElementById("inicjatywaxxx").innerHTML = inicjatywa1;
	document.getElementById("atakxxx").innerHTML = atak1;
	document.getElementById("obronaxxx").innerHTML = obrona1;
	document.getElementById("zdrowiexxx").innerHTML = zdrowie1;
}
function gracz2()
{
	var imie2 = "Legolas", inicjatywa2 = 6, atak2 = 3, obrona2 = 4, zdrowie2 = 8;
	
	document.getElementById("postac").innerHTML = "<img src='img/legolas.jpg' height='298' width='250' />";
	document.getElementById("imiexxx").innerHTML = imie2;
	document.getElementById("inicjatywaxxx").innerHTML = inicjatywa2;
	document.getElementById("atakxxx").innerHTML = atak2;
	document.getElementById("obronaxxx").innerHTML = obrona2;
	document.getElementById("zdrowiexxx").innerHTML = zdrowie2;
}
function gracz3()
{
	var imie3 = "Gimli", inicjatywa3 = "2", atak3 = "4", obrona3 = "4", zdrowie3 = "5";
	
	document.getElementById("postac").innerHTML = "<img src='img/gimli.jpg' height='298' width='250' />";
	document.getElementById("imiexxx").innerHTML = imie3;
	document.getElementById("inicjatywaxxx").innerHTML = inicjatywa3;
	document.getElementById("atakxxx").innerHTML = atak3;
	document.getElementById("obronaxxx").innerHTML = obrona3;
	document.getElementById("zdrowiexxx").innerHTML = zdrowie3;
}
function villian1()
{
	var imie4 = "Uruk Hai", inicjatywa4 = "1", atak4 = "3", obrona4 = "3", zdrowie4 = "6";
	
	document.getElementById("postacxxxx").innerHTML = "<img src='img/uruk.jpg' height='298' width='250' />";
	document.getElementById("imiexxxx").innerHTML = imie4;
	document.getElementById("inicjatywaxxxx").innerHTML = inicjatywa4;
	document.getElementById("atakxxxx").innerHTML = atak4;
	document.getElementById("obronaxxxx").innerHTML = obrona4;
	document.getElementById("zdrowiexxxx").innerHTML = zdrowie4;
}
function villian2()
{
	var imie5 = "Azog", inicjatywa5 = "4", atak5 = "5", obrona5 = "2", zdrowie5 = "8";
	
	document.getElementById("postacxxxx").innerHTML = "<img src='img/azog.jpg' height='298' width='250' />";
	document.getElementById("imiexxxx").innerHTML = imie5;
	document.getElementById("inicjatywaxxxx").innerHTML = inicjatywa5;
	document.getElementById("atakxxxx").innerHTML = atak5;
	document.getElementById("obronaxxxx").innerHTML = obrona5;
	document.getElementById("zdrowiexxxx").innerHTML = zdrowie5;
}
function villian3()
{
	var imie6 = "Saruman", inicjatywa6 = "10", atak6 = "5", obrona6 = "4", zdrowie6 = "9";
	
	document.getElementById("postacxxxx").innerHTML = "<img src='img/saruman.jpg' height='298' width='250' />";
	document.getElementById("imiexxxx").innerHTML = imie6;
	document.getElementById("inicjatywaxxxx").innerHTML = inicjatywa6;
	document.getElementById("atakxxxx").innerHTML = atak6;
	document.getElementById("obronaxxxx").innerHTML = obrona6;
	document.getElementById("zdrowiexxxx").innerHTML = zdrowie6;
}
	
function walka()
{ 	
		var imiex = document.getElementById("imiexxx").textContent;
		var imiexx = document.getElementById("imiexxxx").textContent; 
		var inicjatywax = +(document.getElementById("inicjatywaxxx").textContent);
		var inicjatywaxx = +(document.getElementById("inicjatywaxxxx").textContent);
		var atakx = +(document.getElementById("atakxxx").textContent);
		var atakxx = +(document.getElementById("atakxxxx").textContent);
		var obronax = +(document.getElementById("obronaxxx").textContent);
		var obronaxx = +(document.getElementById("obronaxxxx").textContent);
		var zdrowiex = +(document.getElementById("zdrowiexxx").textContent);
		var zdrowiexx = +(document.getElementById("zdrowiexxxx").textContent);
		var runda = 0 ;
		var czas;
		var rzut1, rzut2, rzut3, rzut4;
		
		while((zdrowiex>0)&&(zdrowiexx>0))
		{
			rzut1 = Math.floor((Math.random()*6)+1);
			rzut2 = Math.floor((Math.random()*6)+1);
			rzut3 = Math.floor((Math.random()*6)+1);
			rzut4 = Math.floor((Math.random()*6)+1);
		
			runda = runda +1;
			document.getElementById("walka").innerHTML = "walka pomiędzy "+imiex+ " i "+imiexx+"<br /><br />";
			document.getElementById("walka").innerHTML += "Runda "+runda +"<br /><br />";
			//document.getElementById("walka").innerHTML += "Zaczyna Wojownik z większą inicjatywą! <br />";
			document.getElementById("walka").innerHTML += "<div id='pole'><div  id='polewalkigracz'class='polewalki'></div><div id='polewalkiprzeciwnik' class='polewalki'></div></div><div id='wygral'></div>";
			/*			
			document.getElementById("polewalkigracz").innerHTML += "Inicjatywa: "+inicjatywax+"<br />";
			document.getElementById("polewalkiprzeciwnik").innerHTML += "Inicjatywa: "+inicjatywaxx+"<br />";
		
			if (inicjatywax>inicjatywaxx)
			{ 
				document.getElementById("polewalkigracz").innerHTML += "twoja kolej <br />";
				document.getElementById("polewalkiprzeciwnik").innerHTML += "czekaj na swoją kolej<br />";
			}
			else 
			{
				document.getElementById("polewalkiprzeciwnik").innerHTML += "twoja kolej <br />";
				document.getElementById("polewalkigracz").innerHTML += "czekaj na swoją kolej <br />";
			}*/
			//kolejka gracza
			document.getElementById("polewalkigracz").innerHTML += "<br />"+rzut1+"<br />";
		
			if (rzut1<=atakx)
			{
				document.getElementById("polewalkigracz").innerHTML += imiex+ " trafia! <br />";
				if (rzut3<=obronaxx)
				{
					document.getElementById("polewalkiprzeciwnik").innerHTML += "<br />"+rzut3+"<br />"+imiexx+" broni atak od "+imiex+"<br /><br />";
				}
				else 
				{
					document.getElementById("polewalkiprzeciwnik").innerHTML += "<br />"+rzut3+"<br />"+imiexx+ " zostaje raniony przez "+imiex+"<br /><br />";
					zdrowiexx = zdrowiexx -1;
					document.getElementById("polewalkiprzeciwnik").innerHTML += "zdrowie: "+zdrowiexx+"<br /><br />";
					document.getElementById("zdrowiexxxx").innerHTML = zdrowiexx;
				}
			}
			else document.getElementById("polewalkigracz").innerHTML += imiex+" nie trafia"+"<br /><br />";
		
			//kolejka przeciwnika

			document.getElementById("polewalkiprzeciwnik").innerHTML += rzut2+"<br />";
		
			if (rzut2<=atakxx)
			{
				document.getElementById("polewalkiprzeciwnik").innerHTML += imiexx+ " trafia!"+"<br />"+"<br />";
				if (rzut4<=obronax)
				{
					document.getElementById("polewalkigracz").innerHTML += "<br />"+"<br />"+"<br />"+rzut4+"<br />"+imiex+" broni atak od "+imiexx+"<br /><br />";
				}
				else 
				{
					document.getElementById("polewalkigracz").innerHTML += "<br />"+rzut4+"<br />"+imiex+ " zostaje raniony przez "+imiexx+	"<br /><br />";
					zdrowiex = zdrowiex -1;
					document.getElementById("polewalkigracz").innerHTML += "zdrowie: "+zdrowiex+"<br /><br />";
					document.getElementById("zdrowiexxx").innerHTML = zdrowiex;
				}	
		
			}
			else document.getElementById("polewalkiprzeciwnik").innerHTML += imiexx+" nie trafia"+"<br /><br />";
			
		}
		

		if (zdrowiex==0)
		{
			document.getElementById("wygral").innerHTML += "Wygrał "+imiexx;
			document.getElementById("walka").innerHTML += "<img src='img/ring.jpg' height='90' width='90'>";
			
		}
		else 
		{
			document.getElementById("wygral").innerHTML += "Wygrał "+imiex;
			document.getElementById("walka").innerHTML += "<img src='img/ring.jpg' height='90' width='90'>";
		}
}		







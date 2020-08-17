function dodaj_element(id, value){
    const tabela = document.getElementById("tabela");
    var el = document.createElement("tr");
    el.class = "umiejetnosci";
    el.id = "nazwa"+id;
    el.innerHTML = '<td><input type="checkbox" value = "'+value+'" id = "checkbox'+ id +'"></td> <td id = "nazwa' + id +'">'+value+'</td> <td><input type="radio" name="radio'+id+'" id="poziom1" value="1">1</td> <td><input type="radio" name="radio'+id+'" id="poziom2" value="2">2</td> <td><input type="radio" name="radio'+id+'" id="poziom3" value="3">3</td> <td><input type="radio" name="radio'+id+'" id="poziom4" value="4">4</td> <td><input type="radio" name="radio'+id+'" id="poziom5" value="5">5</td>';
    tabela.appendChild(el);
}

function umiejetnosci(){
    var div = document.getElementById("dom");
    var myData = div.textContent;
    var naz_umiejetnosci = [];
    var indeks = myData.indexOf("[0]");

    myData = myData.substring(indeks);
    indeks = myData.indexOf("=>");
    liczba_umiejetnosci = 0;
    while(indeks>0){

        naz_umiejetnosci[liczba_umiejetnosci] = myData.substring(indeks+5, myData.indexOf("\n")-1);

        dodaj_element(liczba_umiejetnosci, naz_umiejetnosci[liczba_umiejetnosci]);

        myData = myData.substring(myData.indexOf("\n")+5);
        indeks = myData.indexOf("=>");
        liczba_umiejetnosci++;
    }
}
function onload(){
    umiejetnosci();
    h = 2;
    d = 2;
    w = 2;
    kurs = 2;
    jezyk = 2;
}

function addh(){
    document.getElementById("z" + h).style.display = "block";
    h++;
}
function addd(){
    document.getElementById("d" + d).style.display = "block";
    d++;
}
function addw(){
    document.getElementById("w" + w).style.display = "block";
    w++;
}
function addkurs(){
    document.getElementById("k" + kurs).style.display = "block";
    kurs++;
}
function addjezyk(){
    document.getElementById("j" + jezyk).style.display = "block";
    jezyk++;
}

function indeks(){
	
	const form = document.getElementById("myForm");
	form.addEventListener("submit", function(e){
		if(!isValid){
			event.preventDefault();
		}
	});
	
	
	
	const imie = document.getElementById("imie").value;
	const nazwisko = document.getElementById("nazwisko").value;
	const email = document.getElementById("email").value;
	const tel = document.getElementById("tel").value;
	const link = document.getElementById("link").value;
	const foto = document.getElementById("foto").files[0].name;

	const h1 = document.getElementById("h1").value;
	const h2 = document.getElementById("h2").value;
	const h3 = document.getElementById("h3").value;
	const h4 = document.getElementById("h4").value;

	const stanowisko1 = document.getElementById("stanowisko1").value;
	const firma1 = document.getElementById("firma1").value;
	const lokalizacja1 = document.getElementById("lokalizacja1").value;
	const data_r1 = document.getElementById("data_r1").value;
	const data_z1 = document.getElementById("data_z1").value;
	const opis1 = document.getElementById("opis1").value;

	const stanowisko2 = document.getElementById("stanowisko2").value;
	const firma2 = document.getElementById("firma2").value;
	const lokalizacja2 = document.getElementById("lokalizacja2").value;
	const data_r2 = document.getElementById("data_r2").value;
	const data_z2 = document.getElementById("data_z2").value;
	const opis2 = document.getElementById("opis2").value;

	const stanowisko3 = document.getElementById("stanowisko3").value;
	const firma3 = document.getElementById("firma3").value;
	const lokalizacja3 = document.getElementById("lokalizacja3").value;
	const data_r3 = document.getElementById("data_r3").value;
	const data_z3 = document.getElementById("data_z3").value;
	const opis3 = document.getElementById("opis3").value;


	const nazwa_sz1 = document.getElementById("nazwa_sz1").value;
	const kierunek1 = document.getElementById("kierunek1").value;
	const specjalizacja1 = document.getElementById("specjalizacja1").value;
	const data_r_sz1 = document.getElementById("data_r_sz1").value;
	const data_z_sz1 = document.getElementById("data_z_sz1").value;

	const nazwa_ce1= document.getElementById("nazwa_ce1").value;

    const nazwa_ce2= document.getElementById("nazwa_ce2").value;

    const nazwa_ce3= document.getElementById("nazwa_ce3").value;

    const nazwa_ce4= document.getElementById("nazwa_ce4").value;

    const nazwa_ce5= document.getElementById("nazwa_ce5").value;



	const jezyk1 = document.getElementById("jezyk1").value;
	const poziom01 = document.getElementById("poziom01").value;

	const jezyk2 = document.getElementById("jezyk2").value;
	const poziom02 = document.getElementById("poziom02").value;

	const jezyk3 = document.getElementById("jezyk3").value;
	const poziom03 = document.getElementById("poziom03").value;

    var zaznaczona_odpowiedz = 0;
    const tab = [30];
    const tab_radio = [30];
    for(let i=0; i<liczba_umiejetnosci; i++){
        var checkBox = document.getElementById("checkbox"+i);
        if (checkBox.checked == true){
            tab[zaznaczona_odpowiedz] = checkBox.value;
            var radio = document.all['radio'+i];
            for(j = 0; j < radio.length; j++){
                if(radio[j].checked){
                    tab_radio[zaznaczona_odpowiedz] = radio[j].value;
                    break;
                }
            }
            zaznaczona_odpowiedz++;
        }
    }

	if(imie.value == 0)
		alert("imie");

    localStorage.clear();
    localStorage.setItem('ilosc_umiejetnosci', zaznaczona_odpowiedz);
    localStorage.setItem('tablica_umiejetnosci', tab);
    localStorage.setItem('tablica_radio', tab_radio);

	localStorage.setItem('imie', imie);//przekazanie zmiennych
	localStorage.setItem('nazwisko', nazwisko);
	localStorage.setItem('email', email);
	localStorage.setItem('tel', tel);
	localStorage.setItem('link', link);
	localStorage.setItem('foto', foto);

	localStorage.setItem('h1', h1);
	localStorage.setItem('h2', h2);
	localStorage.setItem('h3', h3);
	localStorage.setItem('h4', h4);

	localStorage.setItem('stanowisko1', stanowisko1);
	localStorage.setItem('firma1', firma1);
	localStorage.setItem('lokalizacja1', lokalizacja1);
	localStorage.setItem('data_r1', data_r1);
	localStorage.setItem('data_z1', data_z1);
	localStorage.setItem('opis1', opis1);

	localStorage.setItem('stanowisko2', stanowisko2);
	localStorage.setItem('firma2', firma2);
	localStorage.setItem('lokalizacja2', lokalizacja2);
	localStorage.setItem('data_r2', data_r2);
	localStorage.setItem('data_z2', data_z2);
	localStorage.setItem('opis2', opis2);

	localStorage.setItem('stanowisko3', stanowisko3);
	localStorage.setItem('firma3', firma3);
	localStorage.setItem('lokalizacja3', lokalizacja3);
	localStorage.setItem('data_r3', data_r3);
	localStorage.setItem('data_z3', data_z3);
	localStorage.setItem('opis3', opis3);

	localStorage.setItem('nazwa_sz1', nazwa_sz1);
	localStorage.setItem('kierunek1', kierunek1);
	localStorage.setItem('specjalizacja1', specjalizacja1);
	localStorage.setItem('data_r_sz1', data_r_sz1);
	localStorage.setItem('data_z_sz1', data_z_sz1);

	localStorage.setItem('nazwa_ce1', nazwa_ce1);

	localStorage.setItem('nazwa_ce2', nazwa_ce2);

	localStorage.setItem('nazwa_ce3', nazwa_ce3);

	localStorage.setItem('nazwa_ce4', nazwa_ce4);

	localStorage.setItem('nazwa_ce5', nazwa_ce5);

	localStorage.setItem('jezyk1', jezyk1);
	localStorage.setItem('poziom01', poziom01);

    localStorage.setItem('jezyk2', jezyk2);
	localStorage.setItem('poziom02', poziom02);

    localStorage.setItem('jezyk3', jezyk3);
	localStorage.setItem('poziom03', poziom03);

	location.href = "CV.php";
}
function CV(){

    const ilosc_umiejetnosci = localStorage.getItem('ilosc_umiejetnosci')
    const tablica_umiejetnosci =  localStorage.getItem('tablica_umiejetnosci');
    const tablica_radio = localStorage.getItem('tablica_radio')
    console.log(tablica_umiejetnosci);
    console.log(tablica_radio);
    console.log(ilosc_umiejetnosci);

	const imie = localStorage.getItem('imie');
	const nazwisko = localStorage.getItem('nazwisko');
	const email = localStorage.getItem('email');
	const tel = localStorage.getItem('tel');
	const link = localStorage.getItem('link');
	const foto = localStorage.getItem('foto');

	const h1 = localStorage.getItem('h1');
	const h2 = localStorage.getItem('h2');
    const h3 = localStorage.getItem('h3');
	const h4 = localStorage.getItem('h4');

	const stanowisko1 = localStorage.getItem('stanowisko1');
	const firma1 = localStorage.getItem('firma1');
	const lokalizacja1 = localStorage.getItem('lokalizacja1');
	const data_r1 = localStorage.getItem('data_r1');
	const data_z1 = localStorage.getItem('data_z1');
	const opis1 = localStorage.getItem('opis1');

	const stanowisko2 = localStorage.getItem('stanowisko2');
	const firma2 = localStorage.getItem('firma2');
	const lokalizacja2 = localStorage.getItem('lokalizacja2');
	const data_r2 = localStorage.getItem('data_r2');
	const data_z2 = localStorage.getItem('data_z2');
	const opis2 = localStorage.getItem('opis2');

	const stanowisko3 = localStorage.getItem('stanowisko3');
	const firma3 = localStorage.getItem('firma3');
	const lokalizacja3 = localStorage.getItem('lokalizacja3');
	const data_r3 = localStorage.getItem('data_r3');
	const data_z3 = localStorage.getItem('data_z3');
	const opis3 = localStorage.getItem('opis3');

	const nazwa_sz1 = localStorage.getItem('nazwa_sz1');
	const kierunek1 = localStorage.getItem('kierunek1');
	const specjalizacja1 = localStorage.getItem('specjalizacja1');
	const data_r_sz1 = localStorage.getItem('data_r_sz1');
	const data_z_sz1 = localStorage.getItem('data_z_sz1');

	const nazwa_ce1 = localStorage.getItem('nazwa_ce1');

	const nazwa_ce2 = localStorage.getItem('nazwa_ce2');

	const nazwa_ce3 = localStorage.getItem('nazwa_ce3');

	const nazwa_ce4 = localStorage.getItem('nazwa_ce4');

	const nazwa_ce5 = localStorage.getItem('nazwa_ce5');

	const jezyk1 = localStorage.getItem('jezyk1');
	const poziom01 = localStorage.getItem('poziom01');

	const jezyk2 = localStorage.getItem('jezyk2');
	const poziom02 = localStorage.getItem('poziom02');

	const jezyk3 = localStorage.getItem('jezyk3');
	const poziom03 = localStorage.getItem('poziom03');


	const nazwa = localStorage.getItem('nazwa');
	const checkbox = localStorage.getItem('checkbox');
	const radio = localStorage.getItem('radio');
	const poziom1 = localStorage.getItem('poziom1');
	const poziom2 = localStorage.getItem('poziom2');
	const poziom3 = localStorage.getItem('poziom3');
	const poziom4 = localStorage.getItem('poziom4');
	const poziom5 = localStorage.getItem('poziom5');
	
	var sz = 770;//szerokosc
	d_czcionka = 15;
	var n_srodek_x = 320;//napisy_srodek_x
	var n_srodek_y = 100;//napisy_srodek_y
	var o_srodek = 40;//odstep_srodek_y
	var i_srodek_x = 290;//ikony_srodek_x
	var i_srodek_y = 85;//ikony_srodek_y
	n_g_x=25;//napisy_główne_x
	n_g_y=245;
	u_sz=150;//umiejętności_szerokość
	u_w=800;
	u_x=5;
	u_y=210;
	l_dl=120;
	l_sz=2;
	j_x=615;
	j_y=300;
	o=40;//
	h_y=580;
	d_x=190;
	d_sz=400;
	t_x=230;
	t_y=315;
	 
	tlo(0,0,sz,1100, "#a0a09b");//rama
	tlo(5,5,sz-10,200,555);//rama
	tlo(10,10,sz-2*10,190,666);//logo
	zdjecie(foto);
	
	//imie i nazwisko
	textTlo(260, 60, d_czcionka * 3,imie + " " + nazwisko);

	textTlo(n_srodek_x, n_srodek_y, d_czcionka, email, "orange", true);
	icon(i_srodek_x,i_srodek_y,"icons8-important-mail-24.png");
	textTlo(n_srodek_x, n_srodek_y+o_srodek, d_czcionka, tel, "orange", true);
	icon(i_srodek_x,i_srodek_y+o_srodek,"icons8-phone-24.png");
	textTlo(n_srodek_x, n_srodek_y+2*o_srodek, d_czcionka, link, "orange", true);
	icon(i_srodek_x,i_srodek_y+2*o_srodek,"icons8-linkedin-24.png");
	
    //UMIEJETNOSCI
	tlo(5,u_y,u_sz,u_w,666);//umiejetnosci
	textTlo(n_g_x, n_g_y, 20, "Umiejętności");
    tlo(n_g_x,n_g_y+10,l_dl,l_sz,999);//linia
    CV_Umiejętności(tablica_umiejetnosci, tablica_radio, ilosc_umiejetnosci);
	
	//JEZYKI
	tlo(j_x,u_y,u_sz,u_w,666);//jezyki
	textTlo(640, n_g_y, 20, "Języki obce");
	tlo(j_x+15,n_g_y+10,l_dl,l_sz,999);//linia
	textTlo(j_x+o,j_y,d_czcionka, jezyk1 + " " + poziom01,"#eaeaea");
	textTlo(j_x+o,j_y+o,d_czcionka, jezyk2 + " " + poziom02,"#eaeaea");
	textTlo(j_x+o,j_y+80,d_czcionka, jezyk3 + " " + poziom03,"#eaeaea");

	//HOBBY
	textTlo(j_x+50, 530, 20, "Hobby");
	tlo(j_x+20,h_y-40,l_dl,l_sz,999);//linia
    Tekst(j_x+o-10,h_y, d_czcionka, h1,"#eaeaea",10);
	Tekst(j_x+o-10,h_y+o+5, d_czcionka, h2,"#eaeaea",10);
    Tekst(j_x+o-10,h_y+2*(o+5), d_czcionka, h3,"#eaeaea",10);
    Tekst(j_x+o-10,h_y+3*(o+5), d_czcionka, h4,"#eaeaea",10);
	
	//DOŚWIADCZENIE
	tlo(170,u_y,d_sz+5,250,666)//doświadczenie
	textTlo(d_x, n_g_y, 22, "Doświadczenie");
	tlo(200,255,d_sz,250,888);

	if(stanowisko1!=''){
	    icon(t_x,t_y-40,"icons8-new-job-50.png");
	    textTlo(t_x+30,t_y-30, d_czcionka, data_r1 + " - "+ data_z1,"#f5f5f5");
	    Tekst(t_x,t_y, d_czcionka, stanowisko1 + " " + "w " + firma1 + "" + lokalizacja1,"#f5f5f5");
	    Tekst(t_x,t_y+25, d_czcionka, opis1,"#f5f5f5");
	}

    if(stanowisko2!=''){
        icon(t_x,t_y+40,"icons8-new-job-50.png");
        textTlo(t_x+30,t_y+50, d_czcionka, data_r2 + " - "+ data_z2,"#f5f5f5");
        Tekst(t_x,t_y+75, d_czcionka, stanowisko2 + " " + "w " + firma2 + "" + lokalizacja2,"#f5f5f5");
        Tekst(t_x,t_y+100, d_czcionka, opis2,"#f5f5f5");
    }
    if(stanowisko3!=''){
        icon(t_x,t_y+115,"icons8-new-job-50.png");
        textTlo(t_x+30,t_y+125, d_czcionka, data_r3 + " - "+ data_z3,"#f5f5f5");
        Tekst(t_x,t_y+145, d_czcionka, stanowisko3 + " " + "w " + firma3 + "" + lokalizacja3,"#f5f5f5");
        Tekst(t_x,t_y+165, d_czcionka, opis3,"#f5f5f5");
    }
	
	//WYKSZTAŁCENIE
    tlo(d_x-20,520,d_sz+5,175,666)
	textTlo(d_x, 555, 22, "Wyksztalcenie");
	tlo(d_x+10,570,d_sz,175,888);
	icon(d_x+40,590,"icons8-graduation-cap-30.png");
	textTlo(d_x+70,600, d_czcionka, data_r_sz1 + " - "+ data_z_sz1,"#f5f5f5");
	var przsuniecie_wartosci_y_po_edukacji = 0;
	if(nazwa_sz1.length>40){//robienie miejsca na linnie
	    przsuniecie_wartosci_y_po_edukacji = 40;
	}

	Tekst(t_x,630, d_czcionka, nazwa_sz1,"#f5f5f5");
	Tekst(t_x,650+przsuniecie_wartosci_y_po_edukacji, d_czcionka, kierunek1 + " " + specjalizacja1,"#eaeaea");

	//DODATKOWE INFORMACJE
    tlo(d_x-20,765,d_sz+5,200,666);
	textTlo(d_x, 800, 22, "Dodatkowe informacje");
	tlo(d_x+10,815,d_sz,200,888);

    if(nazwa_ce1!=''){
        icon(t_x,830,"icons8-check-all-30.png");
        Tekst(255,845,d_czcionka, nazwa_ce1,"#f5f5f5");
    }
    if(nazwa_ce2!=''){
        icon(t_x,860,"icons8-check-all-30.png");
        Tekst(255,875,d_czcionka, nazwa_ce2,"#f5f5f5");
    }
    if(nazwa_ce3!=''){
        icon(t_x,890,"icons8-check-all-30.png");
        Tekst(255,905,d_czcionka, nazwa_ce3,"#f5f5f5");
    }
    if(nazwa_ce4!=''){
        icon(t_x,920,"icons8-check-all-30.png");
        Tekst(255,940,d_czcionka, nazwa_ce4,"#f5f5f5");
    }
    if(nazwa_ce5!=''){
        icon(t_x,950,"icons8-check-all-30.png");
        Tekst(255,965,d_czcionka, nazwa_ce5,"#f5f5f5");
    }
	
	//KLAUZULA
	textTlo(25, 1036, d_czcionka/1.5, "Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10 maja 2018, ", "#fff");
	textTlo(34, 1050, d_czcionka/1.5, "poz.1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady(UE) 2016/679 z dnia 27kwietnia 2016r. W sprawie ochrony osób fizycznych  ", "#fff");
	textTlo(60, 1064, d_czcionka/1.5, "w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).","#fff");
	
	var delayscript = function(){
          window.print();
     };
     setTimeout(delayscript, 100);
	
}

function zdjecie(foto){

    d3.select("svg")
		.append("image")
		.attr("xlink:href", foto)
		.attr("height", 180)
		.attr("width", 150)
		.attr("x", 40)
		.attr("y", 15)
		.style("fill", 202);
}
function CV_Umiejętności(tab_u, tab_r, ilosc){

     for(let i=0; i<ilosc; i++){
            nazwa = tab_u.substring(0, tab_u.indexOf(','));
            radio = tab_r.substring(0, tab_r.indexOf(','));
            if(i==ilosc-1){
                nazwa = tab_u;
                radio = tab_r;
            }
            star(300 + 60*i, nazwa, radio);
            tab_u = tab_u.substring(tab_u.indexOf(',')+1);
            tab_r = tab_r.substring(tab_r.indexOf(',')+1);
        }

}
function star(y, nazwa, poziom){
    var x=0;
    console.log(nazwa);
    Tekst(x+30,y-5,d_czcionka,nazwa);
    for(let i=0; i<5; i++){
        d3.select("svg")
            .append("image")
            .attr("xlink:href", "icons8-star-26.png")
            .attr("height", 20)
            .attr("width", 20)
            .attr("x", 20+x)
            .attr("y", y);
        x+=25;

    }
    x=20;
        for(let i=0; i<poziom; i++){
            d3.select("svg")
                .append("image")
                .attr("xlink:href", "icons8-christmas-star-24 (1).png")
                .attr("height", 20)
                .attr("width", 20)
                .attr("x", x)
                .attr("y", y);
            x+=25;
        }
}


function icon(x,y,icona){

    d3.select("svg")
		.append("image")
		.attr("xlink:href", icona)
		.attr("height", 20)
		.attr("width", 20)
		.attr("x", x)
		.attr("y", y)
		.style("fill", "orange");
}

function tlo(x, y, szerokosc, wysokosc, kolor){
	d3.select("svg")
		.append("rect")
		.attr("height", wysokosc)
		.attr("width", szerokosc)
		.attr("x", x)
		.attr("y", y)
		.style("fill", kolor);
}
function textTlo(x, y, czcionka, tekst="brak danych", kolor = "orange", tlo1 = false, family="'Josefin Sans', sans-serif "){
	if(tlo1==true)
		tlo(x - czcionka*2.5, y - czcionka*1.5, 300, czcionka*2, 444)
	d3.select("svg")
				.append("text")
				.attr("x", x)
				.attr("y", y)
				.attr("fill", kolor)//kolor
				.attr("font-size", czcionka)
				.attr("font-family", family)
				.text(tekst);
}
function Tekst(x, y, czcionka, tekst="brak danych", kolor = "orange", dlugosc_linijki = 40){
    let x1 = 0;
    var tab = [];
        if(tekst.length > dlugosc_linijki){
                    var pq=tekst.substring(dlugosc_linijki, dlugosc_linijki+10)
                    for(let i = 0; i < 10; i++){
                        x1 = i;
                        if(pq[i] == " ")
                            break;
                    }
                    tab[0] = tekst.substring(0,dlugosc_linijki+x1);
                    pq = tekst.substring(dlugosc_linijki*2+x1,dlugosc_linijki*2+x1+10);
                    for(let i = 0; i < 10; i++){
                        x2 = i;
                        if(pq[i] == " ")
                            break;
                    }
                    tab[1] = tekst.substring(dlugosc_linijki+x1,dlugosc_linijki+x1+dlugosc_linijki+x2);
                    tab[2] = tekst.substring(dlugosc_linijki+x1+dlugosc_linijki+x2,150);

                    for(let i = 0; i < 3; i++){
                        d3.select("svg")
                                .append("text")
                                .attr("x", x)
                                .attr("y", y+i*20)
                                .attr("fill", kolor)
                                .attr("font-size", czcionka)
                                .attr("font-family", "Times New Roman")
                                .text(tab[i]);
                    }
        }
        else{
        	d3.select("svg")
				.append("text")
				.attr("x", x)
				.attr("y", y)
				.attr("fill", kolor)
				.attr("font-size", czcionka)
				.attr("font-family", "Times New Roman")
				.text(tekst);

        }
	}
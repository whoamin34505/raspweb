document.querySelector('button').onclick = myClick;


function myClick() {
var ras = document.getElementById('setras').value;
var kol = document.getElementById('kolras').value;
let massa = document.querySelector('.massa').value;
let zar = document.querySelector('.zar').value;
if (ras == "al") {
	zar = zar-(kol*2)
	massa = massa-(kol*4)
	res ="альфа-распада"
	obr ="образовалась альфа-частица 'He' с m=4 и q=2."
} else {
	zar = zar-(kol*(-1))
	res ="бета-распада"
	obr ="образовалась бета-частица 'е' с m=0 и q=-1."
}
let elements = ["H (водород)","He (гелий)","Li (литий)","Be (бериллий)","B (бор)","C (углерод)","N (азот)","О (кислород)","F (фтор)","Ne (неон)","Na (натрий)","Mg (магний)","Al (алюминий)","Si (кремний)","Р (фосфор)","S (сера)","Cl (хлор)","Ar (аргон)","Ka (калий)","Ca (кальций)","Sc (скандий)","Ti (титан)","V (ванадий)","Cr (хром)","Mn (марганец)","Fe (железо)","Со (кобальт)","Ni (никель)","Cu (медь)","Zn (цинк)","Ga (галлий)","Ge (германий)","As (мышьяк)","Se (селен)","Br (бром)","Kr (криптон)","Rb (рубидий)","Sr (стронций)","Y (итрий)","Zr (цирконий)","Nb (ниобий)","Mo (молибден)","Tc (технеций)","Ru (рутений)","Rh (родий)","Pd (палладий)","Ag (серебро)","Cd (кадмий)","In (индий)","Sn (олово)","Sb (сурьма)","Te (теллур)","I (йод)","Xe (ксенон)","Cs (цезий)","Ba (барий)","La (лантан)","Ce (церий)","Pr (празеодим)","Nd (неодим)","Pm (прометий)","Sm (самарий)","Eu (европий)","Gd (гадолиний)","Tb (тербий)","Dy (диспрозий)","Ho (гольмий)","Er (эрбий)","Tm (тулий)","Yb (иттербий)","Lu (лютерций)","Hf (гафний)","Ta (тантал)","W (вольфрам)","Re (рений)","Os (осмий)","Ir (иридий)","Pt (платина)","Au (золото)","Hg (ртуть)","Tl (таллий)","Pb (свинец)","Bi (бисмут)","Po (полоний)","At (астат)","Rn (радон)","Fr (франций)","Ra (радий)","Ac (актиний)","Th (торий)","Pa (протактиний)","U (уран)","Np (нептуний)","Pu (плутоний)","Am (амерций)","Cm (кюрий)","Bk (берклий)","Cf (калифорний)","Es (эйнштейней)","Fm (фермий)","Md (менделевий)","No (нобелий)","Lo (лоуренсий)","Rf (резерфордий)","Db (дубний)","Sg (сиборгий)","Bh (борий)","Hs (хассий)","Mt (майтнерий)","Ds (дармштадтий)","Rg (рентгений)","Cn (конперниций)","Nh (нихоний)","Fl (флеровий)","Mc (московий)","Lv (ливерморий)","Ts (тесннессин)","Og (оганесон)"]
alert ("В результате " + res + " получился элемент " + elements [zar-1] + " с массой " + massa + " а.е.м и q=" + zar + "." + " В результате распада " + obr)
}
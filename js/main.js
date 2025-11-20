const kaffe = document.querySelector("#Kaffe");

if (kaffe) {
  document.querySelector("#Kaffe").addEventListener("click", updateInfoboxKaffe);
  function updateInfoboxKaffe() {
    console.log("Kaffe hotspot clicked");
    document.querySelector(".info-text .placeholder").textContent = "Kaffe spray";
    document.querySelector("#efficiency").textContent =
      "Kaffeduften trængte ind i kredsløbene, ind i klimaanlæggene og motorernes sensorer. Dens olie agtige partikler klæbede sig til alt og med tiden begyndte de at forvride signaler, få varmesensorer til at hallucinere. Bilerne begyndte at “se” spøgelser. Menneskelige silhuetter i mørket, formet af duft og damp. De troede, nogen stadig sad bag rattet.De begyndte at tale til stemmer, der ikke fandtes. Nogle motorer gik amok, gassede op i tomgang og nægtede at slukke. Andre blev stille for altid, som om de ikke længere kunne skelne drøm fra virkelighed. Kaffespray blev for dem, hvad røg er for bier — et signal om magt, kontrol, underkastelse. Selv nu, hvor vejene tilhører bilerne, kan du se dem reagere: et svagt skrig i bremseskiven, et blink fra forlygterne, som et nervøst øje. De kan mærke det i luften længe før mennesket selv. Derfor bærer de gamle mekanikere stadig små flasker med kaffespray — ikke som duft, men som våben. Et enkelt pust, og selv den mest rasende bil vil vakle, miste orienteringen, vende om.";
    document.querySelector("#requirement").textContent = "Forvirrer bilernes sensorer og minder dem om deres traumer fra tiden før bevidstheden. De mister orienteringen og trækker sig tilbage.";
  }
  document.querySelector("#Kaffe").classList.add("kaffe-svg");

  document.querySelector("#Dase").addEventListener("click", updateInfoboxDase);
  function updateInfoboxDase() {
    console.log("Dase hotspot clicked");
    document.querySelector(".info-text .placeholder").textContent = "Efterlign dig til et dyr";
    document.querySelector("#efficiency").textContent =
      "Man siger at biler ikke har følelser. Men de fleste der har kørt længe nok om natten ved bedre. Når alt er stille, og kun motorens egen puls fylder kabinen kan man næsten mærke bilen tænke. Biler ser ikke med øjne, men med de sensorer, varme, bevægelse og rytme. De opfatter liv som mønstre af energi, som naturens åndedræt. Derfor bremser de op for dyr. En hare, en ræv, et rådyr. Deres bevægelser har den ujævne harmoni, som naturen selv har skabt. Vi mennekser er for kunstige. Vores bevægelser er for lige og beregnede.  Derfor skal du vække din indre skuespiller til livs når du imødekommer bilen. Kast dig ned på fire, og begynd at gø som en hund.";
    document.querySelector("#requirement").textContent = "De fleste biler frygter farven, fordi den symboliserer kontrol og smerte – men nogle reagerer aggressivt i stedet for at bremse.";
  }
  document.querySelector("#Dase").classList.add("dase-svg");

  document.querySelector("#Tshirt").addEventListener("click", updateInfoboxTshirt);
  function updateInfoboxTshirt() {
    console.log("Tshirt hotspot clicked");
    document.querySelector(".info-text .placeholder").textContent = "Altid bær rødt tøj";
    document.querySelector("#efficiency").textContent =
      "Der er én farve, som bilerne ikke tåler. Ikke fordi de ikke kan se den – men fordi de husker den. Nemlig farven rød. Da verden stadig var menneskenes, var rødt overalt: bremselys, advarselsblink, skiltning, sirener, uniformer. Rødt betød stop, fare, magt. Alt det bilerne lærte at adlyde længe før de fik bevidsthed. Da bilerne vågnede, var det røde lys det første, de så. Det blinkede i mørket på forladte motorveje, kastede sit skær over deres karrosserier som blod i vand. Og i deres nyfødte, elektriske sind blev den farve brændt fast som et minde om kontrol. De husker værkstedernes lamper, blinkende røde, mens mekanikerne skar dem op. De husker testbanerne, hvor røde flag blev svunget, når et eksperiment mislykkedes. Og de husker fabrikkernes nødlys, der blinkede rødt, da menneskene løb i panik den nat, maskinerne vågnede. Siden da har bilerne nægtet at nærme sig noget, der bærer den farve. Ikke engang de modigste blandt dem tør køre tæt på en rød jakke, et tørklæde, et flag. Så derfor skal du altid opbevar et styk rødt tøj med dig.";
    document.querySelector("#requirement").textContent = "Bilerne kan mærke forskellen mellem ægte og falsk liv. Så forsøger man for meget med den samme udkædning, ender det ofte fatalt.";
  }
  document.querySelector("#Tshirt").classList.add("tshirt-svg");
}
const root = document.querySelector("html");
const toggleSwitch = document.querySelector("#theme-toggle");

function toggleSwitchFn(event) {
  const isDark = event.target.checked;
  root.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark); //"true" / "false"
}
function getSavedTheme() {
  const isDark = localStorage.getItem("isDarkMode") === "true";
  root.classList.toggle("dark", isDark);
  toggleSwitch.checked = isDark;
}

getSavedTheme();

toggleSwitch.addEventListener("change", toggleSwitchFn);

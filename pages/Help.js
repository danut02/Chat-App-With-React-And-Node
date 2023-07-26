import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion, useSpring } from "framer-motion";
import "./HelpStyle.css"; 

function Help(){
  


    
    let year = new Date().getFullYear();
    
    document.body.style.overflowX = "hidden";

    let [change1, set_change] = useState("english");
    let [drop_bool1, set_drop1] = useState(false);
    let [drop_bool2, set_drop2] = useState(false);
    let [drop_bool3, set_drop3] = useState(false);
   
    let change_select = (e) => {
        set_change(change1 => e.target.value);
       
       

    };
  
    
    let drop1 = () => {
        set_drop1(!drop_bool1);
    }
    let drop2 = () => {

        set_drop2(!drop_bool2);
    }

    let drop3 = () => {

        set_drop3(!drop_bool3);
    }
   


     const div_style={
       position: "absolute",
       marginRight:200,
       top:"50%",
       left: "44%"
    
    };
    const style_problems = {
        textDecorationColor: "black",
        textDecoration: "underline",
        color: "PaleGreen",
        cursor: "pointer",
        marginTop: "15px",
        fontSize: "21px",
        position: "relative",
        left:"0px"
    };

    const dropdown_style = {
        fontSize: "14px",
        position: "relative",
        left: "-190px",
        backgroundColor: "rgba(210,250,5,0.5)",
        marginRight: "120px",
        paddingTop: "5px",
        paddingLeft:"5px",
        paddingBottom: "5px",
        borderRadius:"10px"
      
    }
    const style_img = {

        position: "absolute",
        left: "200px",
        top: "-250px",
        transform:"rotate(20deg)"
    }
   
   
    
    return (
    <div>
        <div id="body1">
        <div style={div_style}>
        
            <img id="help_hands" style={style_img} src="./images/help_img.png" alt=" f" /> 
            <div>
                        <img id="help_sign" src="./images/help_sign.png" alt="img"/> 
                {change1 == "english" && (
                    <div>
                        <h3 style={{ position: "absolute", top: "1860px", left: "50px" }}> Language  </h3>
                        <div onClick={drop1} style={style_problems}>  Connection problem </div>
                        {drop_bool1 && (
                              <motion.p animate={{ filter: "blur(0)",opacity:1}} initial={{ filter: "blur(8px)",opacity:0 }} > 
                            <p style={dropdown_style}> First, verify your network connection. If your internet connection is good, then try to refresh
                                    the page.  </p>
                            </motion.p>
                        )}
                      

                        <div onClick={drop2} style={style_problems}>  I can't send a message to someone </div>
                        {drop_bool2 && (
                            <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                <p style={dropdown_style}> It means that user has blocked you or you have internet issues. To fix internet 
                                issues you should read the first dropdown.
                                </p>
                            </motion.p>
                        
                        )}
                  

                        <div onClick={drop3} style={style_problems}>  A user is spamming me </div>
                        {drop_bool3 && (
                            <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} > 
                            <p style={dropdown_style}> You can block that user's profile (you have a button in the right side of his name).
                                Also, you can report his profile and after we'll review it and if we'll notice that profile is inappropriate we
                                will delete it.         </p>
                                  </motion.p>
                        )}
                        {!drop_bool3 && (
                            <motion.p animate={{ filter: "blur(8px)", opacity: 0 }} initial={{ filter: "blur(0px)", opacity: 1 }} >
                                <p style={dropdown_style}> You can block that user's profile (you have a button in the right side of his name).
                                    Also, you can report his profile and after we'll review it and if we'll notice that profile is inappropriate we
                                    will delete it.         </p>
                            </motion.p>
                        )}
                    </div>
                        )}
                        {change1 == "spanish" && (
                            <div>
                                <h3 style={{ position: "absolute", top: "1860px", left: "50px" }}> Idioma  </h3>
                                <div onClick={drop1} style={style_problems}>  Problema de conexión </div>
                                {drop_bool1 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> Primero, verifique su conexión de red.
                                            Si su conexión a Internet es buena, intente actualizar
                                             la página.  </p>
                                    </motion.p>
                                )}


                                <div onClick={drop2} style={style_problems}> No puedo enviar un mensaje a alguien </div>
                                {drop_bool2 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> Significa que el usuario te ha bloqueado o tienes problemas con Internet. para arreglar internet
                                            problemas que debe leer el primer menú desplegable.
                                        </p>
                                    </motion.p>

                                )}


                                <div onClick={drop3} style={style_problems}>  Un usuario me está enviando spam </div>
                                {drop_bool3 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> Puedes bloquear el perfil de ese usuario (tienes un botón en el lado derecho de su nombre).
                                            Además, puede informar su perfil y luego lo revisaremos y si notamos que el perfil es inapropiado, lo
                                             lo eliminará.       </p>
                                    </motion.p>
                                )}
                                {!drop_bool3 && (
                                    <motion.p animate={{ filter: "blur(8px)", opacity: 0 }} initial={{ filter: "blur(0px)", opacity: 1 }} >
                                        <p style={dropdown_style}> You can block that user's profile (you have a button in the right side of his name).
                                            Also, you can report his profile and after we'll review it and if we'll notice that profile is inappropriate we
                                            will delete it.         </p>
                                    </motion.p>
                                )}
                            </div>
                        )}  

                {change1 == "romanian" && (
                    <div>
                        <h3 style={{ position: "absolute", top: "1860px",  left: "60px" }}> Limba  </h3>
                        <div onClick={drop1} style={style_problems}> Problema cu conexiunea  </div>
                        {drop_bool1 && (
                            <motion.p animate={{ filter: "blur(0)",opacity:1}} initial={{ filter: "blur(8px)",opacity:0 }} > 
                            <p style={dropdown_style}>În primul rând, verificați conexiunea la rețea. Dacă aveti o
                                conexiune la internet bună, atunci încercați să dati refresh la pagina. </p>
                            </motion.p>

                        )}

                        <div onClick={drop2} style={style_problems}> Nu pot trimite mesaje </div>
                        {drop_bool2 && (
                            <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                <p style={dropdown_style}> Nu poti trimite mesaje deoarece este posibil ca acea persoana sa te fi blocat, sau 
                                este posibil sa ai probleme cu conexiunea.
                                </p>
                            </motion.p>

                        )}
                        <div onClick={drop3} style={style_problems}> Cineva ma spameaza </div>
                        {drop_bool3 && (
                            <motion.p animate={{ filter: "blur(0)",opacity:1}} initial={{ filter: "blur(8px)",opacity:0 }} > 
                            <p style={dropdown_style}> Puteți bloca profilul utilizatorului respectiv (aveți un buton în partea dreaptă a numelui său).
                                De asemenea, îi puteți raporta profilul și după ce îl vom examina și dacă vom observa că profilul este nepotrivit,
                                îl vom șterge. </p>
                            </motion.p>
                        )}
                        {!drop_bool3 && (
                            <motion.p animate={{ filter: "blur(8px)", opacity: 0 }} initial={{ filter: "blur(0px)", opacity: 1 }} >
                                <p style={dropdown_style}> Puteți bloca profilul utilizatorului respectiv (aveți un buton în partea dreaptă a numelui său).
                                    De asemenea, îi puteți raporta profilul și după ce îl vom examina și dacă vom observa că profilul este nepotrivit,
                                    îl vom șterge. </p>
                            </motion.p>
                        )}
                     </div>
                )}
                

                <br />
            {
                change1 == "english" && (
                        <h2 style={{ position: "absolute", top: "-90px", left: "-5px" }}>  What's your problem?  </h2>

               
        
                            )} 
                        {
                            change1 == "magyar" && (
                                <h2 style={{ position: "absolute", top: "-90px", left: "35px" }}>  Mi a bajod? </h2>



                            )} 
                        {
                            change1 == "spanish" && (
                                <h2 style={{ position: "absolute", top: "-90px", left: "0px" }}> Cuál es tu problema?  </h2>



                            )} 

                {
                    change1 == "romanian" && (
                        <h2 style={{ position: "absolute", top: "-90px", left: "5px" }}>  Ce problema aveti?  </h2>



                    )} 
                { 
                change1 == "italian" && (
                <h2 style={{ position: "absolute", top: "-90px", left: "5px" }}>  Che problema hai?  </h2>



                    )} 

                {change1 == "italian" && (
                    <div>
                        <h3 style={{ position: "absolute", top: "1860px", left: "60px" }}> Lingua  </h3>
                        <div onClick={drop1} style={style_problems}> Problema di connessione  </div>
                        {drop_bool1 && (
                            <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                <p style={dropdown_style}>Innanzitutto, controlla la tua connessione di rete. Se hai un
                                     buona connessione a Internet, quindi provare ad aggiornare la pagina. </p>
                            </motion.p>

                        )}

                        <div onClick={drop2} style={style_problems}> Non riesco a inviare messaggi </div>
                        {drop_bool2 && (
                            <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                <p style={dropdown_style}>Non puoi inviare messaggi perché quella persona potrebbe averti bloccato o
                                    potresti avere problemi con la connessione.
                                </p>
                            </motion.p>

                        )}
                        <div onClick={drop3} style={style_problems}> Qualcuno mi sta inviando spam </div>
                        {drop_bool3 && (
                            <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                <p style={dropdown_style}> Puoi bloccare il profilo di quell'utente (hai un pulsante a destra del suo nome).
                                    Puoi anche segnalare il loro profilo e dopo averlo esaminato e se troviamo che il profilo è inappropriato,
                                     lo cancelleremo. </p>
                            </motion.p>
                        )}
                        {!drop_bool3 && (
                            <motion.p animate={{ filter: "blur(8px)", opacity: 0 }} initial={{ filter: "blur(0px)", opacity: 1 }} >
                                <p style={dropdown_style}>Puoi bloccare il profilo di quell'utente (hai un pulsante a destra del suo nome).
                                    Puoi anche segnalare il loro profilo e dopo averlo esaminato e se troviamo che il profilo è inappropriato,
                                     lo cancelleremo. </p>
                            </motion.p>
                        )}
                    </div>
                        )}
                        {change1 == "magyar" && (
                            <div>
                                <h3 style={{ position: "absolute", top: "1860px", left: "60px" }}> Nyelv </h3>
                                <div onClick={drop1} style={style_problems}> Csatlakozási probléma  </div>
                                {drop_bool1 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> Először ellenőrizze a hálózati kapcsolatot. Ha van a
                                            jó internetkapcsolatot, majd próbálja meg frissíteni az oldalt. </p>
                                    </motion.p>

                                )}

                                <div onClick={drop2} style={style_problems}> Nem tudok üzeneteket küldeni </div>
                                {drop_bool2 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}>Nem küldhet üzenetet, mert az adott személy letilthatta vagy
                                            csatlakozási problémái lehetnek.
                                        </p>
                                    </motion.p>

                                )}
                                <div onClick={drop3} style={style_problems}> Valaki spammelget nekem </div>
                                {drop_bool3 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> Letilthatja az adott felhasználó profilját (a nevétől jobbra van egy gomb).
                                            Bejelentheti a profilját is, és miután átnézte, és ha úgy találjuk, hogy a profil nem megfelelő,
                                            törölni fogjuk. </p>
                                    </motion.p>
                                )}
                                {!drop_bool3 && (
                                    <motion.p animate={{ filter: "blur(8px)", opacity: 0 }} initial={{ filter: "blur(0px)", opacity: 1 }} >
                                        <p style={dropdown_style}>Letilthatja az adott felhasználó profilját (a nevétől jobbra van egy gomb).
                                            Bejelentheti a profilját is, és miután átnézte, és ha úgy találjuk, hogy a profil nem megfelelő,
                                            törölni fogjuk. </p>
                                    </motion.p>
                                )}
                            </div>
                        )}

                        {
                            change1 == "chinese" && (
                                <h2 style={{ position: "absolute", top: "-90px", left: "5px" }}> 你有什麼問題?    </h2>



                            )}

                        {change1 == "chinese" && (
                            <div>
                                <h3 style={{ position: "absolute", top: "1860px", left: "75px" }}> 語言 </h3>
                                <div onClick={drop1} style={style_problems}> 連接問題  </div>
                                {drop_bool1 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> 首先，檢查您的網絡連接。 如果你有一個 互聯網連接良好，然後嘗試刷新頁面.</p>
                                    </motion.p>

                                )}

                                <div onClick={drop2} style={style_problems}> 我無法發送消息 </div>
                                {drop_bool2 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> 您無法發送消息，因為那個人可能已阻止您，或者您可能有連接問題。
                                        </p>
                                    </motion.p>

                                )}
                                <div onClick={drop3} style={style_problems}> 有人向我發送垃圾郵件 </div>
                                {drop_bool3 && (
                                    <motion.p animate={{ filter: "blur(0)", opacity: 1 }} initial={{ filter: "blur(8px)", opacity: 0 }} >
                                        <p style={dropdown_style}> 您可以阻止該用戶的個人資料（他們姓名右側有一個按鈕）。 您也可以舉報他們的個人資料，我們審核後發現該個人資料不合適，我們將刪除它。 </p>
                                    </motion.p>
                                )}
                                {!drop_bool3 && (
                                    <motion.p animate={{ filter: "blur(8px)", opacity: 0 }} initial={{ filter: "blur(0px)", opacity: 1 }} >
                                        <p style={dropdown_style}> 您可以阻止該用戶的個人資料（他們姓名右側有一個按鈕）。 您也可以舉報他們的個人資料，我們審核後發現該個人資料不合適，我們將刪除它。</p>
                                    </motion.p>
                                )}
                            </div>
                        )}
            </div>
            <select style={{ position: "absolute", top: "1930px" }} onChange={change_select} name="language" >

         <option value="romanian">Romanian </option>
         <option value="english" selected>English </option>
         <option value="magyar"> Magyar </option>
         <option value="italian">Italian </option>
         <option value="spanish">Spanish </option>
         <option value="chinese">Chinese </option>
                    </select>

                    
                    <div style={{ position: "relative", top: "1800px", left: "30px", height: "140px" }}>
                        <h3 style={{ position:"relative",left:"-20px" }}>
                        All rights reserved </h3> Copyright {year}</div>
           </div>      

            </div>
            {change1 == "english" && (
                <h1 id="title2_style" >  <div style={{position: "relative",left:"410px"}} > This a free chat app.  </div>
                    If you have another problem, you can leave us a message in the <a href="https://localhost:3000/contact"> Contact </a>
                    section. </h1>)}
            {change1 == "spanish" && (
                <h1 id="title2_style" >  <div style={{ position: "relative", left: "280px" }} > Esta es una aplicación de chat gratuita.  </div>
                    Si tiene otro problema, puede dejarnos un mensaje en el <a href="https://localhost:3000/contact"> Contacto </a>
                     sección. </h1>)}
            {change1 == "romanian" && (
                <h1 id="title2_style">  <div style={{ position: "relative", left: "320px" }} > Aceasta aplicatie este gratuita.  </div>
                    Daca mai aveti si alte intrebari sau intampinati alte probleme, puteti sa ni le
                    trimiteti in sectiunea de<a href="https://localhost:3000/contact"> Contact</a>.
                </h1>)}
            {change1 == "italian" && (
                <h1 id="title2_style">  <div style={{ position: "relative", left: "310px" }}> Questa è un'app di chat gratuita.  </div>
                    Se hai altre domande o incontri altri problemi, puoi farcelo sapere
                    inviare nella sezione di<a href="https://localhost:3000/contact"> Contact</a>.
                </h1>)}
        </div>
);
}
export default Help;
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { React, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { BrowserRouter as Router, useNavigate, Link, Navigate, Route, Routes, Switch } from "react-router-dom";
import Fetch from 'react-fetch';
import io from "socket.io-client";
import Contact from './pages/Contact';
import Help from './pages/Help';


function App() {
    const nume = "Ana";

    let [count, setCount] = useState(0);
    const [rand_nr, random] = useState(0);


    const [menu, setMenu] = useState(false);
    let [nr, setNr] = useState(0);
    const [color, setColor] = useState("#45E317");
    const [colorBg, setBg] = useState("white");
    let [rand_color, setRandClr] = useState(0);
    let [left_mouse, set_mouse1] = useState(0);
    let [top_mouse, set_mouse2] = useState(0);
    let [mess, setMess] = useState("");
    let [mouse_cursor, set_cursor] = useState(" ");
    let [transp_head, set_head] = useState("rgba(117, 250, 211, 0.9)");
    let [blur_head, set_blur] = useState("blur(0px)");
    let [text_head, set_text] = useState("black");
    let [api1, set_api1] = useState([]);
    let [api2, set_api2] = useState([]);
    let [borderW, set_bord] = useState(9);
    let [home_bool, set_home] = useState(true);
    let [chat_mess, set_chat] = useState("");
    let [src_img, set_src] = useState("");
    let [click_mess, set_clickMess] = useState("");
    const [array_mess, set_array] = useState([]);
    let [bool_mess, set_bool_mess] = useState(false);
    let [name_socket, set_name_s] = useState("");
    let [receive_name_sock, set_receiver] = useState("");
    let [bool_name, set_bool_name] = useState(false);
    let [image_socket, set_img] = useState("");
    let [get_img, set_imgNr] = useState("");
    let [bool_img1, set_bool1] = useState(false);
    let [bool_img2, set_bool2] = useState(false);
    let [bool_img3, set_bool3] = useState(false);
    let [left1, set_left1] = useState("");
    let [left2, set_left2] = useState("");
    let [transition1, set_trans] = useState("0.2s");
    let [no_border, set_border] = useState("");
    let [bool_hover1, set_hover1] = useState(false);
    let [bool_hover2, set_hover2] = useState(false);
    let [input_pos, set_pos] = useState("40");

    let port_server = window.location.port;
    let protocol_server = window.location.protocol;

    let socket = io.connect('http://localhost:5000');

    const socket_emit = () => {

        if (mess != "") {
            socket.emit("send", { message: `${mess}` });

        }
        set_clickMess(click_mess => mess);
        set_array(array_mess => [...array_mess, click_mess]);

    };



    const enter_name = (e) => {
        if (name_socket != "" && e.keyCode == 13) {
            socket.emit("name", { name: `${name_socket}` });

            set_bool_name(bool_name => true);
        }


    }
    const name_change = (e) => {
        set_name_s(name_socket => e.target.value);
    }

    setInterval(() => {
        if (window.innerWidth < 1850)
            setNr(nr => window.innerWidth / 2)
        
            if (window.innerWidth < 600)
                setNr(nr => window.innerWidth / 2 + 40)
            
        if (window.innerWidth > 1200)
            setNr(nr => window.innerWidth / 2 - 60)
        if (window.innerWidth < 800)
            set_pos(input_pos => 15)
      
           if (window.innerWidth < 680)
               set_pos(input_pos => 0)
        
               if (window.innerWidth > 800)
           set_pos(input_pos => 40)
    },   
        300
    );
    console.log(name_socket);
    useEffect(() => {
        socket.on("receive_socket", (data) => {
           //alert(data.message);
            set_chat(chat_mess => data.message);
            set_array(array_mess => [...array_mess, click_mess]);
              
        })
        socket.on("receive_name", (data) => {
            set_receiver(receive_name_sock => data.name);

        })
        socket.on("receive_image", (data) => {
            set_imgNr(get_img=>data.image_nr);
        })
    }
        , []);
    
    console.log(array_mess);
    console.log(get_img);


    useEffect(() => {
        array_mess.forEach(array => {
            array != chat_mess ? set_bool_mess(bool_mess => true) : set_bool_mess(bool_mess => false);
        })
    }
    )
    console.log(bool_mess);
  
    const API_call = () => {
        return fetch('http://localhost:5001/users')
            .then(res => res.json())
            .then(data => set_api1(data))
            .catch(err => console.log(err));
    };
    useEffect(() => {

        API_call();
    }, []);
  
        const Users_call = () => {
            return fetch('http://localhost:5001/api')
                .then(res => res.json())
                .then(data => set_api2(data))
                .catch(err => console.log(err));
        };

   
    useEffect(() => {

        Users_call();
    }, []);
     

    const api1_converted = Object.values(api1);
    let navi = useNavigate();
    useEffect(() => {
        console.log("pag:"+window.pageYOffset);

        if (window.location.href == `${protocol_server}//localhost:${port_server}/`) {
          
            navi(`/home`);
        }

    });
    

    if (window.location.href == `${protocol_server}//localhost:${port_server}/home`)
        document.title = "Home";
    if (window.location.href == `${protocol_server}//localhost:${port_server}/contact`)
        document.title = "Contact";
    if (window.location.href == `${protocol_server}//localhost:${port_server}/help`)
        document.title = "Help";

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 0) {
                set_head((transp_head) => "rgba(117, 250, 211, 0.4)");
                set_blur((blur_head) => "blur(1.5px)");
                set_text((text_head) => "white");
            }
            else {
                set_text((text_head) => "black");
                set_head((transp_head) => "rgba(117, 250, 211, 0.9)");
                set_blur((blur_head) => "blur(0px)");
            }
                 
        }
        );
    });

    console.log(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener("mousedown", () => {
            set_cursor((mouse_cursor) => "rgba(255, 0, 0, 0.6)")

        });
        window.addEventListener("mouseup", () => {
            set_cursor((mouse_cursor) => "rgba(250, 255, 0, 0.6)")

        });
        window.addEventListener("mousemove", (e) => {
           
            set_mouse1((left_mouse) => e.clientX);
            set_mouse2((top_mouse) => e.clientY);

            
          

            if (left_mouse <= 10 || top_mouse <= 60 || left_mouse >= (window.innerWidth - 100) || top_mouse >= window.innerHeight - 85)
                set_cursor((mouse_cursor) => "rgba(0, 0, 0, 0.6)")
            else
                set_cursor((mouse_cursor) => "rgba(250, 255, 0, 0.6)");
             
                if (e.target.tagName == 'IMG')
                set_cursor((mouse_cursor) => "rgba(0, 0, 0, 0)");
            if (window.pageYOffset >= 150 && top_mouse>=760)
                set_cursor((mouse_cursor) => "rgba(0, 0, 0, 0)");
              
            
          // console.log(left_mouse + " " + top_mouse);



        })

    });
    
 
    const enter_send = (e) => {
        if (e.key == "Enter" && mess!="") {
            socket.emit("send", { message: `${mess}` });
            //setMess(mess => " ");
            set_clickMess(click_mess => mess);
            set_array(array_mess => [...array_mess, click_mess]);
        }
              
        

    }
    console.log(window.location.protocol);

    console.log(click_mess);

  

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    const img1_mouse_in = () => {
      
            img3.style.display = "none";
            img2.style.display = "none";
        
    };
    
    const img1_mouse_out = () => {
        if (!bool_img1) {
            img2.style.display = "block";
            img3.style.display = "block";
        }
        

        
    };
    const img2_mouse_in = () => {
        img3.style.display = "none";
        img1.style.display = "none";
        if (bool_hover1)
        set_border(no_border=>"dotted 3px #740")

    };
    const img2_mouse_out = () => {
        if (!bool_img2) {
            img1.style.display = "block";
            img3.style.display = "block";
        }
        set_border(no_border => "")
    };
    const img3_mouse_in = () => {
        
        img1.style.display = "none";
        img2.style.display = "none";
        if (bool_hover2)
            set_border(no_border => "dotted 3px #740");


    };
    const img3_mouse_out = () => {
        if (!bool_img3) {
            img2.style.display = "block";
            img1.style.display = "block";
        }
        set_border(no_border => "")
    };
    const click_img1 = () => {
      set_bool1 (bool_img1=>true);
        set_src(src_img => avatar_img[0]);
        set_img(image_socket => 0);
        socket.emit("image", { image_nr: 0 });
    }
    const click_img2 = () => {
        set_hover1(bool_hover1 => true);
        set_trans(transition1 => "2s");
        set_bool2(bool_img2 => true);
        set_left1(left1 => "10px");
        set_src(src_img => avatar_img[1]);
        set_img(image_socket => 1);
        socket.emit("image", { image_nr: 1 });
    }
    const click_img3 = () => {
        set_hover2(bool_hover2 => true);
        set_bool3(bool_img3 => true);
        set_trans(transition1 => "2s");
        set_left2(left2 => "10px");
        set_src(src_img => avatar_img[2]);
        set_img(image_socket => 2);
        socket.emit("image", { image_nr: 2 });

    }
    const update_mess = (e) => {
        setMess(mess => e.target.value);
     //   console.log(mess);

    };

    const change = () => {
        console.log("GATAAA");
        setCount((count) => 2);
    };

    let date1 = new Date().getFullYear();

    console.log(date1);
    const Colors = ["white", "yellow", "#993399", "#ff3300", "green"];

    const menu_down = () => {
        setMenu(!menu);
    };

    const mouseIn = () => {
        setColor((color) => "#FF48F4");
    };
    const mouseOut = () => {
        setColor((color) => "#45E317");
        set_bord((borderW) => 9);
    };
    const click = () => {
        random((rand_nr) => Math.floor(Math.random() * count));
        setRandClr((rand_color) => Math.floor(Math.random() * 5));
        console.log(rand_color);
        setBg((colorBg) => Colors[rand_color]);

        setCount((count) => count + 1);
        set_bord((borderW) => 0);

        if (count == 10 || count == 100) setNr((nr) => nr - 0.5);
    };

    let avatar_img = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg"];
    console.log(avatar_img);


    document.body.style.height = "1040px";

    const props = {
        nume: "Popescu Ion",

    };
    const transparent_bg = {
        backgroundColor: `${mouse_cursor}`,
        color: "red",
        width: "80px",
        height: "80px",
        zIndex:"0",
        borderRadius: "40px",
        position: "fixed",
        left: `${left_mouse}px`,
        top: `${top_mouse}px`

    };

    const style_mid = {
        display: "block",
        marginRight: "auto",
        marginLeft: "auto",
        width: "12%",
        postiion: "fixed"
    };
    const design_title = {

        color: "#03FFC6",
        position: "relative",
        left: `${nr}px`,
        top: "40px",
        width: "250px"

    };
    const design_button = {
        backgroundColor: `${color}`,
        transition : "all 1.5s",
        position: "relative",
        left: "44%",
        transform: "translate(0,50%)",
        width: "200px",
        height: "35px",
        borderRadius: "15px",
        borderTop:`${borderW}px solid rgba(190, 7, 7 ,0.8)`,
        borderRight:`${borderW}px solid rgba(217, 3, 3 ,0.8)`,
        borderLeftWidth: "0px",
        borderBottomWidth: "0px",
        cursor: "pointer",
        top: "30px"

    };
    const design_menu = {
        background: "linear-gradient(to top,rgba(215, 120, 0,0.2), rgba(255, 165, 0,1))",
        position: "relative",
        top: "10px",
        height: "150px",
        borderRadius: "7px",
        border: `3px  solid Maroon `,
        width: "750px",
        left: "29%"
    };

    const text_menu = {
        position: "relative",

        top: "35px"
    };
    const image_style = {
        position: "absolute",

        top: "10%",
        overflowY: "hidden",

    };


    const bg_style = {
        background: `radial-gradient(${colorBg},#ff00ff,blue,red, #f69d3c)`,
        height: "940px",
        padding: "6px",
        margin: "0px",
        overflowX: "hidden",
        overflowY: "hidden"
    };
    const random_style = {
        position: "relative",
        left: "45%",
        fontSize: "1.5em",
        top: "-80px",
        textShadow: "4px 5px 8px lime"
    };
    const header_style = {
        backgroundColor: `${transp_head}`,
        transition: "all 1s",
        filter: `${blur_head}`,
        color: `${text_head}`

    }

    const img_style2 = {
        transition: `all ${transition1}`,
        left: `${left1}`,
        border: `${no_border}`
    } 
    const img_style3 = {
        transition: `all ${transition1}`,
        left: `${left2}`,
        border: `${no_border}`
    }

    const input_style = {

        left: `${input_pos}%`

    }

    return (

        <div>
            <Routes>

                <Route exact path="/home" element={<div/>}>  </Route>
                <Route path="/contact" element={<Contact />}>  </Route>
                <Route path="/help" params={image_socket} element={<Help />}>  </Route>

            </Routes>
            <div id="header" style={header_style}>
                <h1><Link  style={{ textDecoration: " none", color: "black" }} to="/home"> Home </Link> </h1>
                <h1> <Link style={{ textDecoration: " none", color: "black" }} to="/contact"> Contact </Link>  </h1>
                <h1> <Link image={image_socket} style={{ textDecoration: "none ", color: "black" }} to="/help"> Help Center </Link>  </h1>
            </div>
           
            {home_bool && (window.location.href == `${protocol_server}//localhost:${port_server}/` || window.location.href == `${protocol_server}//localhost:${port_server}/home`) && (
               
             
                <motion.body
                    animate={{
                        background: "radial-gradient(#ccffff,#ff00ff,pink,red, #f69d3c)"
                    }}
                >

                    <body style={Object.assign(bg_style)}>
                        <div>

                            <div style={transparent_bg}>     </div>
                            <h2 id="text1" style={design_title}>
                                {count} clicks
                                
                            </h2>

                            <button className="buton1"
                                onClick={click}
                                style={design_button}
                                onMouseEnter={mouseIn}
                                onMouseLeave={mouseOut}
                            >

                                Count{" "}
                            </button>

                            <br />
                            <br />
                            <br />
                            <br />

                            <button id="menu_text" onClick={menu_down}>
                                MENU
                            </button>
                            <div className="grid_img">
                                <img id="img1" onClick={click_img1} onMouseEnter={img1_mouse_in}
                                    onMouseLeave={img1_mouse_out} style={image_style} src="./images/img1.jpg" alt=""
                                    height="180px" width="200px" />
                                <img id="img2" onClick={click_img2} onMouseEnter={img2_mouse_in}
                                    style={img_style2}    onMouseLeave={img2_mouse_out} src="./images/img2.jpg" height="180px" width="200px" />
                                <img id="img3" onClick={click_img3} style={img_style3} onMouseEnter={img3_mouse_in}
                                    onMouseLeave={img3_mouse_out} src="./images/img3.jpg" height="180px" width="200px" ></img>

                                
                            </div>

                            {menu && (
                                <motion.div
                                    animate={{ y: 15, scale: 1, opacity: 1 }}
                                    initial={{ scale: 0, opacity: 0.1 }}
                                >
                                    <div style={design_menu}>
                                        <a
                                            href="https://www.instagram.com"
                                            style={Object.assign(style_mid, text_menu)}
                                        >
                                            {" "}
                                            Instagram <br />
                                            <br />
                                        </a>
                                        <a
                                            style={Object.assign(style_mid, text_menu)}
                                            href="https://www.facebook.com"
                                        >
                                            {" "}
                                            Facebook{" "}
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                            {!menu && (
                                <motion.div animate={{ opacity: 0, scale: 0.2 }}>
                                    <div style={design_menu}>
                                        <a
                                            href="https://www.instagram.com"
                                            style={Object.assign(style_mid, text_menu)}
                                        >

                                            Instagram <br />
                                            <br />
                                        </a>
                                        <a
                                            style={Object.assign(style_mid, text_menu)}
                                            href="https://www.facebook.com"
                                        >
                                            {" "}
                                            Facebook{" "}
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                            {!menu && (
                                <h3 id="text2" style={random_style}>
                                    {" "}
                                    Random colors <br />
                                   
                                </h3>
                            )}

                            {menu && (
                                <motion.h3
                                    animate={{
                                        y: 90,
                                        x: -10,
                                        opacity: 0.7,
                                        fontFamily: "Arial, Helvetica, sans-serif"
                                    }}
                                >
                                    <h3 id="text2" style={random_style}>
                                        {" "}
                                       Random colors <br />
                                      
                                    </h3>
                                </motion.h3>
                            )}
                        </div>
                        <br /> <br />
                        <h1 id="nume1"> Name:
                            {bool_name==false &&
                                <input id="name_box_input" onChange={name_change} onKeyDown={enter_name} />
                                || <div>{name_socket} </div>
                            }</h1>  
                        {src_img &&
                            <img id="avatar_img"  src={src_img} alt="" />
                        }
                        <label for="input_style1" style={input_style} className="input_style2" > Transmite un mesaj : </label>
                        <input style={input_style} value={mess} onKeyDown={enter_send} onChange={update_mess} id="input_style1" />
                        <br />
                        <button id="socket_button" onClick={socket_emit}> send </button>

                        <div className="text_behind_mess"> You :</div><p class="p1">  {mess}</p>
                        <br />
                        {receive_name_sock != name_socket &&
                            <div className="text_behind_mess"> {receive_name_sock}: </div>
                            || <div className="text_behind_mess"> Others: </div>
                         }
                        {chat_mess != click_mess && bool_mess &&
                           
                                  <p class="p1">  {chat_mess} </p>
                         
                        }
                        <p id="p2">
                            <ul> 
                                
                                {receive_name_sock && receive_name_sock!=name_socket &&
                                    <li>{receive_name_sock} </li>
                                }
                            </ul>
                        </p>
                        {get_img != "" && get_img != image_socket &&
                            <img id="img_io" src={avatar_img[get_img]} alt="" />
                        }
                        <div id="nr_users"> 
                            {Object.values(api2)}
                        </div>
                    </body>
                    <div id="bottom"> 
                    Copyright {date1}  </div>
                </motion.body>
            )}
        </div>


    );
}


export default App;

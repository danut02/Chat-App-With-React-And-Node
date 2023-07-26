import React, { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
    
    document.body.style.height = "880px";

   let [hover,set_hover]=useState("rgb(218, 102, 209)");
   let [buttonY,setY_b]=useState(630); 
   let [feedback,set_feed]=useState("");
   let [show_feed,set_feed1]=useState("");
    let [submit_pressed, set_submit] = useState(false);
    let [cnt_btn_submit, set_cnt] = useState(0);
    let [border_clr, set_border] = useState("red");

  
  
    const div_style={

       position:"absolute",
       top:"50%",
       left:"810px",
       fontSize:"20px"

    }
    const inp_style = {
        backgroundColor: "black",
        color: "white",
        paddingLeft: "150px",
        
        borderRadius:"35px",
        width: "340px",
        borderWidth: "3px",
        borderColor: `${border_clr}`,
        height:"110px",
        position:"fixed",
        top:"55%",
        left:"615px"
    }

    const submit_style={

    position:"fixed",
    top:`${buttonY}px`,
    left:"810px",
    borderRadius:"7px",
    height:"40px",
    backgroundColor:`${hover}`,
    width:"90px",
    transition:"all 0.8s",
    borderWidth:"4px"
    }
    const update1=(e)=>{
        set_feed(feedback => e.target.value);
        async function fetch_feedback() {
           await fetch("http://localhost:5001/users", {

                method: "POST",
                body: e.target.value
            }).then(res => res.json());
        }
        setInterval(()=>
        fetch_feedback()
        ,2000);
    }
    
    const click1 = () => {
        set_cnt((cnt_btn_submit) => cnt_btn_submit + 1);

        if(feedback!="")
            set_border((border_clr) => "green");
        else
            set_border((border_clr) => "red");
            

        set_feed1(show_feed => feedback);

        setY_b((buttonY) => buttonY - 7)
       

        set_submit(submit_pressed => true);
        if (cnt_btn_submit >= 4) { 
            setY_b(buttonY => 630);
            set_cnt(cnt_btn_submit => 0); 
        }
    }

    const enter_press = (e)=>{
        if (e.key == "Enter") {
            set_submit(submit_pressed => true);
            set_feed1(show_feed => feedback);
            if (feedback != "")
                set_border((border_clr) => "green");
            else
                set_border((border_clr) => "red");
        }
    }
   
    console.log(feedback);
    const non_hover_b=()=>{
          set_hover((hover)=>"rgb(218, 102, 209)");
          setY_b((buttonY)=>630)
    }
    const hover_button=()=>{
          set_hover((hover)=>"red");

    };
    const style_text_feed={
        position:"fixed",
        top:"85%",
        left: "42%",
        color:"white"
    };
  
    const video_style = {
        position: "fixed",
        width: "100%"
       
       
    }
  
    return (
        
        <div>

            <video style={video_style} autoPlay muted>
                <source src="video_bg.mp4" type="video/mp4"/>
            </video>
            
<div style={div_style}> Contact us</div>
      
                <input onKeyDown={enter_press} type="text" onChange={update1} value={feedback} style={inp_style} />
                   
                    

                <button type="submit" onClick={click1} onMouseEnter={hover_button} onMouseLeave={non_hover_b} style={submit_style} type="button"> Submit </button>
           
 {submit_pressed &&
                   
                    <p style={style_text_feed}>
                        {feedback && (   
                            <div>
  <div> Your feedback is sent : " {show_feed} " </div>
                                <h3 > We will contact you very soon </h3>
                      </div>
                       )}
                        </p> }
    

</div>
    );
}
export default Contact;
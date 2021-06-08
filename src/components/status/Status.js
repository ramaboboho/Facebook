import React, { Component } from "react";
import styles from "./status.module.css";

import cx from "classnames";

export default class Status extends Component {
    render() {
        let className=cx(styles.status, "mt-3");
        let style={
            iBs:[
                {
                    marginLeft: "-30px", 
                    marginRight: "5px" , 
                    backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/jf2FEdWbFI4.png?_nc_eui2=AeG9UGTq8OCgdyJOAdqWGtxg0OSR9SRVJdLQ5JH1JFUl0h0C2rUPQTIeuUEkNFSFDy3N0uNCykAOC8gN9OFCEt1V')",
                    backgroundPosition: "0 0" ,
                    backgroundSize: "auto" , 
                    width: "24px" , 
                    height: "24px" , 
                    backgroundRepeat: "no-repeat" , 
                    display: "inline-block" 
                },
                {
                    marginLeft: "-30px",
                    marginRight: "5px",
                    backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/jf2FEdWbFI4.png?_nc_eui2=AeG9UGTq8OCgdyJOAdqWGtxg0OSR9SRVJdLQ5JH1JFUl0h0C2rUPQTIeuUEkNFSFDy3N0uNCykAOC8gN9OFCEt1V')",
                    backgroundPosition: "0 -175px",
                    backgroundSize: "auto",
                    width: "24px",
                    height: "24px",
                    backgroundRepeat: "no-repeat",
                    display: "inline-block"
                },
            ],
            iStatus:[
                {
                    marginLeft: "-10px", 
                    backgroundImage:"url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/2ro15h8aagx.png?_nc_eui2=AeEws4wqQoStPQSE-wbFpfAuI__-kztFje8j__6TO0WN72X74nnK_hLWoVXaGMANZ15-8xapKWTtI3Be6SUr3Z1i&quot;)",
                    backgroundPosition:"0 -147px",
                    backgroundSize: "auto" , 
                    width: "18px",
                    height: "18px",
                    backgroundRepeat: "no-repeat" ,
                    display: "inline-block" 
                }
            ]
        }
        return (
            <>
            <div className={styles.buatStatus}>
                <img src="assets/img/Fajar.png" alt="rama" width="40px"/>
                    <input type="text" placeholder="Apa yang Anda pikirkan, Rama Fajar?"/>
                        <hr/>
                            <div className="d-flex justify-content-around">
                                <span className="d-flex align-items-center">
                                    <i style={style.iBs[0]}></i>
                                    Video Siaran Langsung
                            </span>
                                <span className="d-flex align-items-center">
                                    <i style={style.iBs[1]}></i>
                                    Foto/Video
                            </span>
                            </div>
            </div>
            <div className={className}>
                        <img src="assets/img/Fajar.png" alt="rama" width="40px"/>
                        <span>
                            <a href="">Rama Fajar</a>
                        </span>
                        <p>Lama  gak main fb, ternyata banyak yang uf</p>
                        <hr/>
                        <div className="d-flex align-content-center justify-content-around">
                            <span >
                                <i style={style.iStatus[0]}></i>
                                Suka
                            </span>
                            <span className="d-flex align-items-center"> 
                                <i style={{marginRight:"5px"},{backgroundImage:"url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/2ro15h8aagx.png?_nc_eui2=AeEws4wqQoStPQSE-wbFpfAuI__-kztFje8j__6TO0WN72X74nnK_hLWoVXaGMANZ15-8xapKWTtI3Be6SUr3Z1i&quot;)"},{backgroundPosition:"0px -109px"},{backgroundSize:"auto"},{width:"18px"},{height:"18px"},{backgroundRepeat:"no-repeat"},{display:"inline-block"}}></i>
                                Komentari
                            </span>
                            <span className="d-flex align-items-center">
                                <i style={{marginRight:"5px"},{backgroundImage:"url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/2ro15h8aagx.png?_nc_eui2=AeEws4wqQoStPQSE-wbFpfAuI__-kztFje8j__6TO0WN72X74nnK_hLWoVXaGMANZ15-8xapKWTtI3Be6SUr3Z1i&quot;)"},{backgroundPosition:"0px -166px"},{backgroundSize:"auto"},{width:"18px"},{height:"18px"},{backgroundRepeat:"no-repeat"},{display:"inline-block"}}></i>
                                Bagikan
                            </span>
                        </div>
                        <hr/>
                        <img src="assets/img/Fajar.png" alt="rama" className="rounded-circle" width="40px"/>
                        <input type="text" placeholder="Tulis Komentar... "/>
            </div>
            </>
        )
    }
}

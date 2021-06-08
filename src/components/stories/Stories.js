import React, { Component } from "react";
import styles from "./stories.module.css";

export default class  Stories extends Component {
    render() {
        const bg="";
        const style={
            i:{
                backgroundImage:`url(${bg})`, 
                backgroundPosition: "0px -200px" , 
                backgroundSize: "auto", 
                width: "24px", 
                height: "24px" , 
                backgroundRepeat: "no-repeat" , 
                display: "inline-block" 
            },
            storie:{
                background: 'url(assets/img/Fajar-square.jpg)' ,
                backgroundSize: "cover" , 
                backgroundPosition: "center"
            },
            storieP:{
                marginTop: "24vh",
                fontWeight:"bold", 
                color:"#fff",
                textAlign:"left",
                fontSize:"15px",
                marginLeft:"15px"
            }
        }
        return (
            <div className={styles.stories}>
                <div className={styles.storie}>
                    <img src="assets/img/Fajar-square.jpg" alt="fajar"/>
                        <div className={styles.tambahCerita}><i style={style.i}></i></div>
                        <div className={styles.text}>
                            <p>Buat Cerita</p>
                        </div>
                </div>
                <div className={styles.storie} style={style.storie}>
                    <div className={styles.fotoProfile}> <img src="assets/img/Fajar.png" alt="rama" width="30px"/></div>
                        <div className={styles.text}>
                            <p style={style.storieP}>Rama <br/>Fajar</p>
                        </div>
                </div>
                <div className={styles.storie} style={style.storie}>
                    <div className={styles.fotoProfile}> <img src="assets/img/Fajar.png" alt="rama" width="30px" /></div>
                    <div className={styles.text}>
                        <p style={style.storieP}>Rama <br />Fajar</p>
                    </div>
                </div>
                <div className={styles.storie} style={style.storie}>
                    <div className={styles.fotoProfile}> <img src="assets/img/Fajar.png" alt="rama" width="30px" /></div>
                    <div className={styles.text}>
                        <p style={style.storieP}>Rama <br />Fajar</p>
                    </div>
                </div>

                <div className={styles.storie} style={style.storie}>
                    <div className={styles.fotoProfile}> <img src="assets/img/Fajar.png" alt="rama" width="30px" /></div>
                    <div className={styles.text}>
                        <p style={style.storieP}>Rama <br />Fajar</p>
                    </div>
                </div>


            </div>
        )
    }
}
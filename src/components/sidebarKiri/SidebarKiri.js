import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class SidebarKiri extends Component {
    render() {
        const style={
            img:{
                marginLeft:"5px",
                marginRight:"5px"
            },
            list:{
                background:"unset"
            }
        }

        return (
            <ListGroup>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="assets/img/Fajar.png" alt="rama" width="30px" style={style.img}/>Rama Fajar</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png?_nc_eui2=AeFSrYLpFDhSY6kg_NqtRxXCFjhaWUpP68wWOFpZSk_rzF_D2crUwYtYqE3ElCnBKn8De5qDqKZocd6AbXEece3A" width="30px" style={style.img} alt="covid"/>COVID-19:Pusat Informasi</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeHazKJa3Q24KifxN9L_acXPqfpKmA4GtxSp-kqYDga3FJktjbunZAVEJHN1y8O5rnm7iUNlnnEeveZF4nRj89R1" width="30px" style={style.img} alt="Teman" />Teman</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeHbH5VWUU0gui2xrf3kmoE2Z3xAUM5_bWpnfEBQzn9taub7XoleDLtJ6smanPJWlWd_i5Uk9ec0gean0PitMcyT" width="30px" style={style.img} alt="Grup" />Grup</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeGfgQmT9JVkGHTwUV0M25QO-vsl1K9A-9v6-yXUr0D72xUs2LhK5IdkSzh3igTPWJ6-YDyR6ENNB5beQlRFDZII" width="30px" style={style.img} alt="Marketplace" />Marketplace</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeGH7lPd09K-8tUiFzM7_E7-2NRDTXGHJ53Y1ENNcYcnnWsw6sqc2Mpym8l5fuAckfZgfmpPmNA3830TmeMBXQ1h" width="30px" style={style.img} alt="Watch" />Watch</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png?_nc_eui2=AeFgwWxmwm-mNrzv5OVQErVaeGQYcQV2gv94ZBhxBXaC__Y8ewr4AYNnDbWIIOfC1kHBP32MWYVoxPTzwk2pTn1z" width="30px" style={style.img} alt="Acara" />Acara</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png?_nc_eui2=AeHsXmb5KaFmfCVEwE-fOYtoFvGCZ9KBlcEW8YJn0oGVwVnDkGDaHcBIz3pQ8h__dbUSy1vUZMT_FDw2rduXrYTt" width="30px" style={style.img} alt="Kenangan" />Kenangan</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png?_nc_eui2=AeET1XgwuFAKVwBUucFJXwA6-5kYScafj0T7mRhJxp-PRMIXJDZJIzT75RUMGVDPI8P8NGWmSjlkkitPvn4-evh7" width="30px" style={style.img} alt="Tersimpan" />Tersimpan</ListGroup.Item>
                <ListGroup.Item className="border-0 d-flex align-items-center" style={style.list}><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png?_nc_eui2=AeET_8PEHWGVLCMp_BKp8mNutEPFOzh_t-u0Q8U7OH-364FlhsuydIapJQcMA5gNnpSHB-IV7KJ8vZMaWNpWKCHM" width="30px" style={style.img} alt="Halaman" />Halaman</ListGroup.Item>
            </ListGroup>
        )
    }
}
import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap"
import menus from "../data/menus"


export default function MainMenu(){

    const subMenus = menus.map(subMenu => {
        return(
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children}/>
        )
    })
    return(
        <div>
            <div> here is Main menu</div>
            <Navbar bg="light" expand="lg">
                {subMenus}
            </Navbar>
            
        </div>
    )
}


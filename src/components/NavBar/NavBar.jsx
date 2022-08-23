import Link from "next/link";
import { Container, Menu } from "./Styles";

export default function NavBar() {
    return(
        <Container>
          <Menu>
                <ul>
                    <Link passHref href="#about"><li>About</li></Link>
                    <Link passHref href="#projects"><li>Projects</li></Link>
                    <Link passHref href="#contact"><li>Contact</li></Link>
                </ul>
            </Menu>  
        </Container>
    )


}
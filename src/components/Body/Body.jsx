// import { Divisor } from "../Divider/Divisor";
import Image from "next/image";
// import { Divisor } from "../Divider/Divisor";
import Wolf from "../../../public/wolf.webp";
import { Container, ContainerImage } from "./Styles";

export default function Body() {
    return(
        <>
        <Container>
           <ContainerImage>
                <h1>
                    Hi <br/> 
                    Im Gabriel <br/>
                    Developer<br/> Front-<span>End</span>.
                </h1>
                <Image src={Wolf} alt="wolf origami" width={390} height={290} />
            </ContainerImage> 
        </Container>
            
        </>
    )


}
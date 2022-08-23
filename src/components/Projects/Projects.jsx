import Image from "next/image";
import Unicorn from "../../../public/unicorn.webp";
import Phenix from "../../../public/phenix.webp";
import { Container, Title, ContainerTitle, ContainerImage, ProjectCard, ContainerCard, DescriptionImage, ImageContainer } from "./Styles";

export default function Projects() {
    return(
       <Container id="projects">
            <ContainerImage>
            <ContainerTitle>
                <Title>
                    <h1>PROJECTS</h1>
                </Title>
            </ContainerTitle>
            <ContainerCard>
            
            

                <ProjectCard>
                    <p>So Pets</p>
                    <DescriptionImage>
                        <ul>
                            <li>
                                React-Native
                            </li>
                            <li>
                                NodeJs
                            </li>
                            <li>
                                MySQL
                            </li>
                        </ul>
                        <ImageContainer>
                    <Image src={Unicorn} alt="unicorn origamid"  width={162} height={148}/>
                </ImageContainer>  
                    </DescriptionImage>
                </ProjectCard>

                <ProjectCard>
                    <p>Clone-Spotify</p>
                    <DescriptionImage>
                        <ul>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                NodeJs
                            </li>
                            <li>
                               Css
                            </li>
                        </ul>
                        <ImageContainer>
                    <Image src={Phenix} alt="bird origamid" width={162} height={148}/>
                </ImageContainer>  
                    </DescriptionImage>
                  
                
                </ProjectCard>
                </ContainerCard>

            </ContainerImage>

            
       </Container>



    )
}
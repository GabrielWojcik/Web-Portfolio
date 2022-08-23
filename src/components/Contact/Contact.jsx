import Link from "next/link"
import { Container, Title, ContainerTitle, ContainerImage, ProjectCard, ContainerCard, 
DescriptionImage } from "./Styles";


export default function Contact() {
    return(
        <>
       <Container id="contact">
            <ContainerImage>
            <ContainerTitle>
                <Title>
                    <h1>CONTACT</h1>
                </Title>
            </ContainerTitle>
            <ContainerCard>
            
            

                <ProjectCard>
                    <DescriptionImage>
                        <Link passHref href={"https://www.linkedin.com/in/gabriel-wojcik/"}>
                            <p>Link<span>edIn</span></p>
                        </Link>
                    </DescriptionImage>
                </ProjectCard>

                <ProjectCard>
                    <DescriptionImage>
                    <Link passHref href={"https://github.com/GabrielWojcik?tab=overview&from=2022-08-01&to=2022-08-18"}>
                        <p>Git<span id="hub">Hub</span></p>
                    </Link>
                    </DescriptionImage>
                  
                </ProjectCard>
                </ContainerCard>

            </ContainerImage>

            
       </Container>

        </>
    )



}
import {
    Flex, Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent, useColorModeValue,
    Stack, useColorMode, IconButton, useMediaQuery, useDisclosure, HStack, Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "../arrays/ProfileArray";
import * as TbIcons from "react-icons/tb";

const NavBar = (props: { color: string }) => {
    const profile = ProfileArray();
    const colors = {
        "blue": "#3182CE",
        "cyan": "#00B5D8",
        "gray": "#718096",
        "green": "#38A169",
        "orange": "#DD6B20",
        "pink": "#D53F8C",
        "purple": "#805AD5",
        "red": "#E53E3E",
        "teal": "#319795",
        "yellow": "#D69E2E"
    };
    const [scroll, setScroll] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
    const scrollToHeader = () => {
        const heroSection = document.querySelector("#header");
        heroSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToAbout = () => {
        const aboutSection = document.querySelector("#about");
        aboutSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToExperience = () => {
        const experienceSection = document.querySelector("#experience");
        experienceSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToEducation = () => {
        const experienceSection = document.querySelector("#education");
        experienceSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToProjects = () => {
        const projectsSection = document.querySelector("#projects");
        projectsSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToSkills = () => {
        const skillsSection = document.querySelector("#skills");
        skillsSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToInterests = () => {
        const interestsSection = document.querySelector("#interests");
        interestsSection.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        const contactSection = document.querySelector("#contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    };
    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    const TbLetterComponents = [];

    for (let i = 0; i < profile.logo.length; i++) {
        const letter = profile.logo[i].toUpperCase();
        if (window.visualViewport.width <= 768 && letter === " ") {
            break;
        }
        const component = letter === " " ? TbIcons['TbSeparator'] : TbIcons[`TbLetter${letter}`];
        TbLetterComponents.push(component);
    }

    return (
        <>
            <Flex
                bg={useColorModeValue("gray.100", "gray.900")}
                px={4}
                h={16}
                boxShadow={scroll ? "base" : "none"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
            >
                <Link onClick={scrollToHeader}>
                    <HStack gap={'0.3rm'}>
                        {TbLetterComponents.map((Component, index) => {
                            if (Component.name === "TbSeparator") {
                                return <Component key={index} color={'transparent'} />;
                            } else {
                                return <Component key={index} color={colors[props.color]} />
                            }
                        }
                        )}
                    </HStack>
                </Link>

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={3}>
                        {isLargerThanMD ? (
                            <>
                                <Button variant="ghost" onClick={scrollToAbout}>
                                    About
                                </Button>
                                <Button variant="ghost" onClick={scrollToExperience}>
                                    Experience
                                </Button>
                                <Button variant="ghost" onClick={scrollToEducation}>
                                    Education
                                </Button>
                                <Button variant="ghost" onClick={scrollToProjects}>
                                    Projects
                                </Button>
                                <Button variant="ghost" onClick={scrollToSkills}>
                                    Skills
                                </Button>
                                <Button variant="ghost" onClick={scrollToInterests}>
                                    Interests
                                </Button>
                                <Button variant="ghost" onClick={scrollToContact}>
                                    Contact
                                </Button>
                            </>
                        ) : (
                            <></>
                        )}
                        <Button onClick={toggleColorMode}>
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>

                        {isLargerThanMD ? (
                            <></>
                        ) : (
                            <>
                                <Button
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    onClick={onOpen}
                                ></Button>
                                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                                    <DrawerOverlay />
                                    <DrawerContent>
                                        <DrawerBody>
                                            <Button variant="ghost" onClick={scrollToAbout}>
                                                About
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToExperience}>
                                                Experience
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToEducation}>
                                                Education
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToProjects}>
                                                Projects
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToSkills}>
                                                Skills
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToInterests}>
                                                Interests
                                            </Button>
                                            <Button variant="ghost" onClick={scrollToContact}>
                                                Contact
                                            </Button>
                                        </DrawerBody>
                                    </DrawerContent>
                                </Drawer>
                            </>
                        )}
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}

export default NavBar;
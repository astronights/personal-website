import { useState, useEffect } from 'react';
import { marked } from 'marked'

const parseProfile = (mdContent) => {
    const profile = {
        siteName: "",
        headerName: "",
        headerRole: "",
        headerDesc: "",
        about: "",
        contact: "",
        linkedin: "",
        github: "",
        email: "",
        logo: "",
    };

    const parser = new DOMParser();
    const doc = parser.parseFromString(mdContent, 'text/html').getElementsByTagName('body')[0];

    Array.from(doc.getElementsByTagName('h2')).forEach((element) => {
        switch (element.textContent) {
            case 'Site Name':
                profile.siteName = element.nextElementSibling.textContent;
                break;
            case 'Header':
                ['headerName', 'headerRole', 'headerDesc'].forEach((child, index) => {
                    profile[child] = element.nextElementSibling.children[index].textContent;
                });
                break;
            case "About":
                profile.about = element.nextElementSibling.textContent;
                break;
            case "Contact":
                profile.contact = element.nextElementSibling.textContent;
                const links = element.nextElementSibling.nextElementSibling;
                ["LinkedIn", "GitHub", "Email"].forEach((link, index) => {
                    profile[link.toLowerCase()] = links.children[index].textContent.split(": ")[1];
                });
                break;
            case "Logo":
                profile.logo = element.nextElementSibling.textContent;
                break;
            default:
                break;
        }
    });
    return profile;
};

const ProfileArray = () => {
    const [profile, setProfile] = useState({
        siteName: "",
        headerName: "",
        headerRole: "",
        headerDesc: "",
        about: "",
        contact: "",
        linkedin: "",
        github: "",
        email: "",
        logo: "",
    });

    useEffect(() => {
        fetch("../content/Profile.md")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch markdown content");
                }
                return response.text();
            })
            .then((mdContent) => {
                setProfile(parseProfile(marked(mdContent)));
            })
            .catch((error) => {
                console.error("Error fetching markdown content:", error);
            });
    }, []);

    return profile;
};

export default ProfileArray;
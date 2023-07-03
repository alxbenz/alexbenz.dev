import { ContactInfo, Information } from "@/types";
import React from "react";

interface ContactProps {
    information: Information;
}

export const Contact: React.FC<ContactProps> = ({ information }) => {
    const links = information.links.filter(
        (link) => link.usage.indexOf("contact") !== -1
    );
    return (
        <div className="">
            <a
                className="underline hover:no-underline block"
                href={`tel:${information.contact.phone}`}
            >
                {information.contact.phone}
            </a>
            <a
                className="underline hover:no-underline block mt-4"
                href={`tel:${information.contact.mail}`}
            >
                {information.contact.mail}
            </a>
            {links.map((link) => (
                <a
                    key={link.id}
                    className="underline hover:no-underline block mt-4"
                    href={link.url}
                >
                    {link.id}
                </a>
            ))}
        </div>
    );
};

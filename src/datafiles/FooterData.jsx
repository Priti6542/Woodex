import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterData = {
    Newsletter: [
        {
            FooterHeading: "Our Newsletter",
            SubHeading: "Subscribe to our newsletter and get a 50% discount.",
        }
    ],

    Woodex: [
        {
            name: "Woodex",
            location: "Woodex, Chicago, USA 2022",
            call: "+1234567890",
            socialLinks: [
                { name: "Facebook", icon: FacebookIcon },
                { name: "Twitter", icon: TwitterIcon },
                { name: "LinkedIn", icon: LinkedInIcon }
            ]
        }
    ],

    Information: [
        { title: "Help & Information" },
        { title: "Help & Contact Us" },
        { title: "Returns & Refunds" },
        { title: "Online Stores" },
        { title: "Terms & Conditions" }
    ],

    AboutUs: [
        { title: "About Us" },
        { title: "What We Do" },
        { title: "FAQ Page" },
        { title: "Contact Us" }
    ], 

    NewsletterLinks: [
        {
            name: "Newsletter",
            map:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4805444381873!2d73.80296337496489!3d18.59744348251118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95d8c1f62cf%3A0xa88ec1997c7acf8b!2sDevcons%20Software%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1739612248930!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        }
    ]
};

export default FooterData;

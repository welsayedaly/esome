import React from "react";

const ShareButtons = ({ url, title, description }) => {
  // Ensure URL is properly encoded
  const encodedUrl = encodeURIComponent(url || window.location.href);
  const encodedTitle = encodeURIComponent(title || "");
  const encodedDescription = encodeURIComponent(description || "");

  // Social sharing URLs
  const socialLinks = [
    {
      name: "Twitter",
      icon: "twitter",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      icon: "facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      icon: "whatsapp",
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: "Email",
      icon: "mail",
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
    },
  ];

  return (
    <ul className="social share-buttons">
      {socialLinks.map((platform, i) => (
        <li key={i} title={`Share on ${platform.name}`}>
          <a 
            href={platform.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Share on ${platform.name}`}
            onClick={(e) => {
              // For most social platforms, open a popup window instead of navigating
              if (platform.name !== "Email" && platform.name !== "WhatsApp") {
                e.preventDefault();
                window.open(
                  platform.url,
                  `share-${platform.name}`,
                  "width=600,height=400,location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1"
                );
              }
            }}
          >
            <img
              className="svg"
              src={`/assets/img/svg/social/${platform.icon}.svg`}
              alt={`Share on ${platform.name}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ShareButtons;
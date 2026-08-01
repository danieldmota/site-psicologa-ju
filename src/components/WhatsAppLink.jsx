import whatsappDarkIconUrl from "../../assets/images/whatsapp-black.png";
import whatsappIconUrl from "../../assets/images/whatsapp.png";
import { siteLinks } from "../data/site";

export default function WhatsAppLink({
  children,
  className = "",
  iconTone = "light",
}) {
  const iconUrl =
    iconTone === "dark" ? whatsappDarkIconUrl : whatsappIconUrl;

  return (
    <a
      className={className}
      href={siteLinks.whatsapp}
      rel="noreferrer"
      target="_blank"
    >
      <img
        alt=""
        aria-hidden="true"
        className="whatsapp-icon"
        height="512"
        src={iconUrl}
        width="512"
      />
      <span>{children}</span>
    </a>
  );
}

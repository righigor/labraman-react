import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import Sublinhado from "../../utils/sublinhado";
import insta from "../../assets/icons/insta.svg";

export default function SocialList() {
  return (
    <div className="flex flex-col items-center gap-4 font-body text-sm">
      <a href="" target="_blank" className="hover:opacity-80">
        <img src={insta} alt="Instagram" className="w-6" />
      </a>
      <div className="flex items-center gap-2 group relative">
        <PhoneIcon className="w-5 h-5" />
        <p>+55 (31) 3409-6611</p>
        <Sublinhado />
      </div>
      <div className="flex items-center gap-2 group relative">
        <EnvelopeIcon className="w-5 h-5" />
        <a href="mailto:email@email.com">email@email.com</a>
        <Sublinhado />
      </div>
    </div>
  );
}

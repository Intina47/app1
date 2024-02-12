// path:components/heroComponents/SocialLink.jsx
import Link from 'next/link';

const SocialLink = ({ social }) => (
  <Link href={social.url} title={social.name}>
    <img
      key={social.name}
      src={social.url}
      alt={social.name}
      className="w-[24px] h-[24px] object-contain cursor-pointer font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden"
    />
  </Link>
);

export default SocialLink;

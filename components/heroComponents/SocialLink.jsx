import Link from 'next/link';

const SocialLink = ({ social }) => (
  <Link href={social.link} title={social.name}>
    <div className="flex items-center">
      <img
        key={social.name}
        src={social.url}
        alt={social.name}
        className="w-[24px] h-[24px] object-contain cursor-pointer font-bold text-xl transform hover:scale-105 transition duration-300 relative overflow-hidden"
      />
      <h4 className="text-white text-sm loc_underline-on-hover ml-2">{social.name}</h4>
    </div>
  </Link>
);

export default SocialLink;

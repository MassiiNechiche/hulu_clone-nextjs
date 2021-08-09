import Image from "next/image";
import HeaderItem from "./HeaderItem";

import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
        alt=""
        width={110}
        height={50}
        className="object-contain"
      />
    </header>
  );
}

export default Header;

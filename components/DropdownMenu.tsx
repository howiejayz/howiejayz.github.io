import Menu from "@/components/Menu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function DropdownMenu() {
  const size = "28";

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-circle lg:hidden">
        <Bars3Icon
          className="swap-off fill-current"
          width={size}
          height={size}
        ></Bars3Icon>
      </div>
      <Menu isDropdown={true} />
    </div>
  );
}

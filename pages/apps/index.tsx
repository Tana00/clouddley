import { AppList } from "../../components";
import { PlusIcon } from "../../assets";
import Link from "next/link";

export default function Apps() {
  return (
    <div className="flex h-full flex-col items-center" data-testid="apps">
      <h2 className="font-bold text-2xl">Applications</h2>
      <Link
        href="/apps/create-app"
        className="flex items-center justify-end w-full my-6"
      >
        <button className="flex bg-[#BC2E80] rounded-md py-3 px-6 text-white text-sm">
          <PlusIcon />
          New App
        </button>
      </Link>
      <AppList />
    </div>
  );
}

import Globe from "../../ui/globe";

export default function AppLogo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex max-w-xs items-center justify-center overflow-hidden p-6">
        <Globe />
      </div>

      <span className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
        Huffy's World
      </span>
    </div>
  );
}

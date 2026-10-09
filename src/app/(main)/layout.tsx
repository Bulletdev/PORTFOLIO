import Navigation from "../components/Navigation";
import ConsoleEgg from "../components/ConsoleEgg";
import { RightClickGuard } from "../components/RightClickGuard";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConsoleEgg />
      <RightClickGuard />
      <Navigation />
      {children}
    </>
  );
}

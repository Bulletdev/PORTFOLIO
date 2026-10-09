import Navigation from "../components/Navigation";
import ConsoleEgg from "../components/ConsoleEgg";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConsoleEgg />
      <Navigation />
      {children}
    </>
  );
}

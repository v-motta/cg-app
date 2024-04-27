import { ModeToggle } from "@/components/mode-toggle";

function Home() {
  return (
    <>
      <div className="absolute start-0 top-0 m-3">
        <ModeToggle />
      </div>
      <p className="absolute start-1/2 top-1/2">Teste da esteira</p>
    </>
  );
}

export default Home;

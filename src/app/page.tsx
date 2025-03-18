import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="bg-gray-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <title>Developer - Viper_Electric</title>
        <div className="flex flex-row items-center gap-12 bg-gray-600 p-10 rounded-lg shadow-accent shadow-lg hover:shadow-2xl hover:shadow-accent transition-shadow  motion-duration-2000 motion-duration-[5s]/opacity motion-opacity-in-0 motion-translate-y-in-[-100%]  motion-translate-x-in-[-100%]">
          <Avatar>
            <AvatarImage src="https://github.com/viperelectric.png" alt="viper"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <label className="text-4xl">ViperElectric: Daniel Cser</label>
        </div>
        <div className="flex flex-col gap-8">
         <p> More to come. This page is a work in progress.</p>
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}

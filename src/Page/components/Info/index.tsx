import Description from "./Description";
import Profile from "./Profile/indes";
import Projects from "./Projects";
import Social from "./Social";

export default function Info() {
    return (
        <>
            <div className="xl:grid flex flex-col grid-flow-row grid-cols-1 xl:grid-cols-3 xl:grid-rows-2 xl:mt-0 h-max w-full align-center gap-3">
                <div className="flex col-span-2 row-span-1 gap-3 w-full h-max bg-zinc-800 rounded-xl border-green-800 flex-row border-2 p-3">
                    <Profile />
                </div>
                <div className="flex col-span-1 row-span-1 w-full h-full">
                    <Social />
                </div>
                <div className="flex col-span-3 row-span-1 gap-3 w-auto h-max bg-zinc-800 rounded-xl border-green-800 flex-row border-2 p-3">
                    <Description />
                </div>
                <div className="flex col-span-3 row-span-1 gap-2 w-auto h-max flex-row">
                    <Projects />
                </div>
            </div>
        </>
    )
}
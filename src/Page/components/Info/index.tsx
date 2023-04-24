import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import Contacts from "./Contacts";
import Description from "./Description";
import Profile from "./Profile/indes";
import Share from "./Share";
import Social from "./Social";

const boxes = "flex gap-3 w-auto h-full bg-zinc-800 rounded-xl  border-green-800 flex-row border-2 p-3  items-center justify-center";
export default function Info() {
    return (

        <>
            <div className=" flex lg:mt-0  flex-col h-full w-full justify-center gap-3">

                <div className="flex gap-3 flex-col lg:flex-row  w-full justify-between">
                    <div className={boxes}>
                        <Profile />

                    </div>
                    <div className={boxes}>
                        <Contacts />

                    </div>

                </div>
                <div className={boxes}>
                    <Description />


                </div>


                <div>
                    <Social />
                </div>
                <div>
                    <Share />
                </div>

            </div>

        </>
    )
}
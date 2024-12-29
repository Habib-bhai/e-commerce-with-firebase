import Image from "next/image";
import { DM_Sans } from "next/font/google"

const dmsans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});
export default function CompanyAssurances({icon, title, description}: {icon: string, title: string, description: string} ) {
    return (
        <div className={`${dmsans.className} w-[320px] flex flex-col justify-center items-center gap-3 mt-10 md:mt-0`}>

            <div className="w-[60px] h-[60px] border-black border-[1px] flex justify-center items-center rounded-full">
                <Image src={`/images/icons/${icon}`} width={30} height={30} alt={"shipping-fast"} />
            </div>
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="w-[284px] text-center text-gray-500">{description}</p>
        </div>
    )
}

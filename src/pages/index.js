import {Inter} from 'next/font/google'
import GPTCard from "@/components/gptContainer";
import Footer from "@/components/footer";
import Workflow from "@/components/gptWorkflow";

export const runtime = 'experimental-edge';

const inter = Inter({subsets: ['latin']})

export default function Home({gptData}) {

    return (
        <div>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >

                <div className="section-banner">
                    <div id="star-1">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>

                    <div id="star-2">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>

                    <div id="star-3">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>

                    <div id="star-4">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>

                    <div id="star-5">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>

                    <div id="star-6">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>

                    <div id="star-7">
                        <div className="curved-corner-star">
                            <div id="curved-corner-bottomright"></div>
                            <div id="curved-corner-bottomleft"></div>
                        </div>
                        <div className="curved-corner-star">
                            <div id="curved-corner-topright"></div>
                            <div id="curved-corner-topleft"></div>
                        </div>
                    </div>
                </div>

                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] py-24">
                    <button className="btn" type="button">
                        <h1> <strong>GPTs Workflow Gallery</strong> </h1>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>

                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>

                </div>


                <Workflow gptData={gptData} />
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const response = await fetch('https://booki.chat/get_workflow?key=seo');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const gptData = await response.json();

        return {
            props: { gptData }
        };
    } catch (error) {
        console.error('Error fetching GPT data:', error.message);
        throw error;
    }
}
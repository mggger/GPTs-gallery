import {Inter} from 'next/font/google'
import GPTCard from "@/components/gptContainer";
import Footer from "@/components/footer";
import cheerio from 'cheerio';

export const runtime = 'experimental-edge';

const inter = Inter({subsets: ['latin']})

export default function Home({gptDataArray}) {

    return (
        <div>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

                    <div
                        className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="https://mggg.cloud"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-xl text-black">Created By mggg.cloud </p>
                        </a>
                    </div>
                </div>

                <div
                    className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] py-24">
                    <h1 className="text-6xl text-black">Mggg GPTS Gallery</h1>
                </div>


                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
                    {gptDataArray.map((gptData, index) => (
                        <GPTCard
                            key={index}
                            description={gptData.description}
                            title={gptData.title}
                            imageUrl={gptData.imageUrl}
                            linkUrl={gptData.linkUrl}
                        />
                    ))}
                </div>
            </main>
            <Footer/>
        </div>
    )
}


export async function getServerSideProps(context) {
    let gptDataArray = [];

    try {
        const response = await fetch('https://booki.chat/gpt_urls');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 解析响应体为 JSON
        const data = await response.json();

        // 验证返回数据结构
        if (!data.success || !data.results) {
            throw new Error('Invalid response format');
        }

        // 从返回的数据中提取 URL 列表
        const urls = data.results.map(item => item.url);

        for (const url of urls) {
            if (url) {
                const response = await fetch(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36',
                    }
                });

                const html = await response.text();
                console.log(html);
                const $ = cheerio.load(html);
                const title = $('title').text();
                const imageUrl = $('meta[property="og:image"]').attr('content');
                const description = $('meta[name="description"]').attr('content');
                const linkUrl = url;
                console.log(title);
                gptDataArray.push({title, imageUrl, description, linkUrl});
            }
        }
        return {
            props: {gptDataArray}
        };
    } catch (error) {
        console.error('Error fetching GPT data:', error.message);
        throw error;
    }
}

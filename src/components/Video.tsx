import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

export default function Video() {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-ratio"></div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">Explore the Apollo platform</h1>
                        <p className="mt-4 text-gray-400 leading-relaxed">Apollo is a platform for building a unified supergraph, a communication layer that helps you manage the flow of data between your application clients (such as web and native apps) and your backend services. At the heart of the supergraph is a query language called GraphQL.</p>

                        <div className="flex items-center gap-4 mt-6">
                            <img className="h-16 w-16 rounded-full border-2 border-blue-500" src="https://avatars.githubusercontent.com/u/36018196?v=4" alt="" />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">Felipe Martins</strong>
                                <span className="text-gray-200 text-sm block">Tech Lead @somosrevo</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>

                        <a href="" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex  items-stretch gap-6 hover:bg-gray-600 transition-colors" >
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Lorem ipsum dolor</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a venenatis magna. 
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex  items-stretch gap-6 hover:bg-gray-600 transition-colors" >
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">Lorem ipsum dolor</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a venenatis magna. 
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export default function Subscribe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex- flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <p className="text-2xl mb-6 black">
                        <strong>Inscreva-se</strong>
                    </p>

                    <form onSubmit={handleSubmit} action="" className="flex flex-col gap-2 w-full">
                        <input onChange={(event) => setName(event.target.value)} type="text" name="" id="" placeholder="Seu nome completo" className="bg-gray-900 rounded px-5 h-14" />
                        <input onChange={(event) => setEmail(event.target.value)} type="text" name="" id="" placeholder="Email" className="bg-gray-900 rounded px-5 h-14" />
                        <button type="submit" disabled={loading} className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-60">Garantir minha vaga</button>
                    </form>
                </div>
            </div>

            <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
        </div>
    );
}

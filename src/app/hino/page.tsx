'use client'
import { FaMagnifyingGlassMinus, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { ButtonLeft, Content, ContentHino, ContentTitulo, P, PNoEstrofe, Rodape } from "./styles";
import { FaHome, FaList } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import hinos from "@/app/datas/letraHinos.json";
import { Numans } from "next/font/google";
import { useState } from "react";



export default function Hino() {

    const router = useRouter();
    const [noEstrofe, setNoEstrofe] = useState(1);
    const [posicao, setPosicao] = useState(0);
    const searchParams = useSearchParams();
    const no = searchParams.get('num')

    const numero = Array.isArray(no) ? parseInt(no[0]) : parseInt(no ?? '')
    const hino = hinos.find((hino) => hino.numero === numero)

    const handleHome = () => {
        router.push('/');
    }
    return (
        <div>

            <ContentTitulo>
                <h1>{hino?.titulo}</h1>
            </ContentTitulo>
            <Content>
                <ButtonLeft>&lt;</ButtonLeft>
                <ContentHino>
                    {hino?.temCoro ? hino.posicaoCoro === posicao ?
                        <div>
                            <PNoEstrofe>Coro</PNoEstrofe>
                            {hino.coro?.map(
                                (verso, index) => <P key={index} >{verso}</P>
                            )}
                        </div>
                        : <div>
                            {hino.estrofes.map((estrofe, i) => (
                                <div key={i}>
                                    <PNoEstrofe>{i + 1}</PNoEstrofe>
                                    {estrofe.map(
                                        (verso, index) => <P key={index}>{verso}</P>
                                    )}
                                
                                {hino.posicaoCoro === i+1 && (
                                <div>
                                    <PNoEstrofe>Coro</PNoEstrofe>
                                    {hino.coro?.map(
                                        (verso, index) =>(<P key={index} >{verso}</P>)
                                    )}
                                </div>
                                )}
                            </div>
                            ))
                            }
                        </div>
                        : <div>
                            {hino?.estrofes.map((estrofe, index) => (
                                <div key={index}>
                                    <PNoEstrofe>{index + 1}</PNoEstrofe>
                                    {estrofe.map((verso, i) => (
                                        <P key={i}>{verso}</P>
                                    ))}
                                </div>
                            ))
                            }
                        </div>
                    }

                </ContentHino>
                <ButtonLeft>&gt;</ButtonLeft>
            </Content>
            <Rodape>

                <FaMagnifyingGlassPlus />
                <FaMagnifyingGlassMinus />
                <FaHome onClick={handleHome} />
                <FaList />

            </Rodape>


        </div>
    );



}
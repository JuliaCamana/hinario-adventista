'use client'
import { FaMagnifyingGlassMinus, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { ButtonLeft, Content, ContentHino, ContentTitulo, P, PNoEstrofe, Rodape } from "./styles";
import { FaHome, FaList } from "react-icons/fa";
import { useRouter } from "next/navigation";



export default function Hino() {

    const router = useRouter();

    const handleHome = () =>{
        router.push('/');
    }
    return (
        <div>
          
            <ContentTitulo>
                <h1>420 - Oh! Que Amigo em Cristo Temos!</h1>
            </ContentTitulo>
            <Content>
                <ButtonLeft>&lt;</ButtonLeft>
            <ContentHino>

                <PNoEstrofe>1</PNoEstrofe>
                <P>Oh! que amigo em Cristo temos! Mais chegado que um irmão!</P>
                <P>Quer que tudo nós levemos Ao bom Deus em oração.</P>
                <P>Oh! que paz perdemos sempre, Oh! que dor de coração!</P>
                <P>Só porque não recorremos ao bom Deus em oração!</P>


                <PNoEstrofe>2</PNoEstrofe>
                <P>Há tristezas e pesares, Há na vida tentação;</P>
                <P>Não ficamos sem conforto, Indo a Cristo em oração.</P>
                <P>Pode haver um outro amigo Tão grandioso em compaixão?</P>
                <P>Aos humildes e contritos, Cristo atende em oração.</P>

                <PNoEstrofe>3</PNoEstrofe>
                <P> Quando em dor desfalecemos, Cristo estendenos a mão,</P>
                <P> Pois é sempre a nossa força, É refúgio em oração.</P>
                <P> E se aqui nos menosprezam, Cristo é nosso em oração;</P>
                <P> Em Seus braços nos acolhe, E nos dá consolação.</P>

            </ContentHino>
            <ButtonLeft>&gt;</ButtonLeft>
            </Content>
            <Rodape>

                <FaMagnifyingGlassPlus  />
                 <FaMagnifyingGlassMinus />
                 <FaHome onClick={handleHome} />
                <FaList />

            </Rodape>


        </div>
    );



}
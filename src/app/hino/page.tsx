'use client'
import { FaMagnifyingGlassMinus, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { ButtonLeft, Content, ContentHino, ContentTitulo, P, Rodape } from "./styles";
import { FaHome, FaList } from "react-icons/fa";



export default function Hino() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Sobre</a>
                            <a className="nav-link" href="#">Contacto</a>
                            <a className="nav-link" href="#">Credito</a>
                        </div>
                    </div>
                </div>
            </nav>
            <ContentTitulo>
                <h1>420 - Oh! Que Amigo em Cristo Temos!</h1>
            </ContentTitulo>
            <Content>
                <ButtonLeft>&lt;</ButtonLeft>
            <ContentHino>

                1
                <P>Oh! que amigo em Cristo temos! Mais chegado que um irmão!</P>
                <P>Quer que tudo nós levemos Ao bom Deus em oração.</P>
                <P>Oh! que paz perdemos sempre, Oh! que dor de coração!</P>
                <P>Só porque não recorremos ao bom Deus em oração!</P>


                2
                <P>Há tristezas e pesares, Há na vida tentação;</P>
                <P>Não ficamos sem conforto, Indo a Cristo em oração.</P>
                <P>Pode haver um outro amigo Tão grandioso em compaixão?</P>
                <P>Aos humildes e contritos, Cristo atende em oração.</P>

                3
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
                 <FaHome />
                <FaList />

            </Rodape>


        </div>
    );



}
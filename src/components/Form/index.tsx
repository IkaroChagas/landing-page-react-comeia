import React from "react"
import WhatsappButton from "../Button"

function Form() {

    return (
        <>
            <div className="box4">
                <h3>Contato</h3>
                <div className="box5">
                    <form action="" method="">
                        <label htmlFor="nome"></label>
                        <input type="text" placeholder="Seu nome" id="nome" name="nome" required />
                        <br />

                        <label htmlFor="email"></label>
                        <input type="email" placeholder="Seu email" id="email" name="email" required />
                        <br />

                        <label htmlFor="mensagem"></label>
                        <textarea id="mensagem" placeholder="Digite sua mensagem" name="mensagem" required ></textarea>

                        <div className="botao-enviar">
                            <WhatsappButton nome={undefined} email={undefined} mensagem={undefined} />
                        </div>
                    </form >
                </div >
            </div>
        </>
    )
}

export default Form
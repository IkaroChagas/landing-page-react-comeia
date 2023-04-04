import React from "react"

function Form() {

    return (
        <>
            <div className="box4">
                <h3>Contato</h3>
                <form action="" method="">
                    <div className="box5" />
                    <label htmlFor="nome"></label>
                    <input type="text" placeholder="Seu nome" id="nome" name="nome" required /><br>

                        <label htmlFor="email"></label>
                        <input type="email" placeholder="Seu email" id="email" name="email" required /><br>

                            <label htmlFor="mensagem"></label>
                            <textarea id="mensagem" placeholder="Digite sua mensagem" name="mensagem" required ></textarea>
                        </br>
                    </div>
                    <div className="botao-enviar">
                        <button type="submit" id="meuBotao" className="botao">Enviar</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form
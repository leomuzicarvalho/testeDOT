const BottomFrom = () =>{
    return(
        <div className="form-section">
            <form>
                <div className="input-wrapper w-100">
                    <p className="input-title">*Nome:</p>
                    <input type="text" className="input w-100" required placeholder="Informe seu nome"></input>
                </div>
                <div className="input-wrapper w-50">
                    <p className="input-title">*E-mail:</p>
                    <input type="text" className="input w-100" required placeholder="Informe seu e-mail"></input>
                </div>
                <div className="input-wrapper w-50">
                    <p className="input-title">*Telefone:</p>
                    <input type="text" className="name input w-100" required placeholder="(__)_____-____"></input>
                </div>
                <div className="input-wrapper w-100">
                    <p className="input-title textarea">*Mensagem:</p>
                    <textarea type="textarea" className="name input w-100" required placeholder="Escreva aqui"></textarea>
                </div>
                <div className="input-wrapper w-100" style={{'text-align': 'center'}}>
                    <button type="submit" className="submit">ENVIAR</button>
                </div>
            </form>
        </div>
    )
}

export default BottomFrom;
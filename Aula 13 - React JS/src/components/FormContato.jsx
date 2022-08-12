

export default function FormContato(){
    return(
        <div className="container-form">
        <form action="" id="contact-form">
            <div className="text-form">
                <h2>Formulário de contato</h2>
                <p>Preencha os dados abaixo e entre em contato conosco:</p>
            </div>
           <label for=""><input type="text" id="name" name="name" placeholder="Digite o nome"/></label> 
           <label for=""><input type="text" id="email" name="email" placeholder="Digite o e-mail"/></label> 
           <label for=""><input type="text" id="telefone" name="telefone" placeholder="Digite o telefone"/></label> 
           <label for=""><input type="text" id="assunto" name="assunto" placeholder="Digite o assunto"/></label> 
           <label for=""><textarea id="mensagem-text" name="mensagem" placeholder="Digite uma mensagem"></textarea></label> 
           <button id="btn-form">Enviar</button>   
        </form>
        
      
    </div>
    )
}
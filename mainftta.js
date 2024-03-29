
function abrirWhatsapp1(){
    var nome1 = document.getElementById("tecnico1").value;
    var registro1 = document.getElementById("re1").value;
    var fttx1 = document.getElementById("fttx1").value;
    // var ftta = document.getElementById("ftta").value;
    // var ftth = document.getElementById("ftth").value;
    var supervisor1 = document.getElementById("supervisor1").value;
    var instancia1 = document.getElementById("instancia1").value;
    var client1 = document.getElementById("client1").value;
    var extern1 = document.getElementById("extern1").value;
    var msg1 = document.getElementById("comment1").value;
    var idInput1 = document.getElementById("nsupervisor1");
    var intern1 = document.getElementById("intern1").value;
    var execution1 = document.getElementById("execution1").value;
    var equipament_cliente1 = document.getElementById("equipament_cliente1").value;
    var cliente_final1 = document.getElementById("cliente_final1").value;
    var encerramento1 = document.getElementById("encerramento1").value;
    var aposEncerramento1 = document.getElementById("aposEncerramento1").value;
    // var desativa_execucao = document.getElementById("desativa_execucao").value;
    var desativa_ftth1 =  document.getElementById("desativa_ftth1").value;
    var url1 = `https://wa.me/55${idInput1.value}?text=` // Seu numero




    + "*PASSO A PASSO - INSTALAÇÃO FTTX" + "%0a" // Mensagem personalizada
+ "%0a" // Quebra de linha
+ "*Nome do técnico*: " + nome1 + "%0a" // Dados do formulário
+ "*R.E*: " + registro1 + "%0a"
+ "*Segmento*: " + fttx1 + "%0a"
// + "*Segmento*: " + ftth + "%0a"
+ "*Supervisor*: " + supervisor1 + "%0a"
+ "*Instância*: " + instancia1 + "%0a"
+ "%0a"
+ "*ENTREVISTA COM O CLIENTE*:"
+ "%0a"
+ "Confirmar nome do assinante: " + client1 + "%0a"
+ "Verificar o pacote contratado: " + client1 + "%0a"
+ "Informar o tempo estimado para execução do serviço: " + client1 + "%0a"
+ "Se a ordem tiver Voip, antes de iniciar deve informar que o telefone  deve ser instalado do lado do Hgu: " + client1 + "%0a"
+ "Orientar que irá fazer o check-list externo e o tempo estimado para essa atividade: " + client1 + "%0a"
+ "%0a"
+ "*VIABILIDADE EXTERNA*:" + "%0a"
+ "Utilizar a caneta de limpeza na porta designada e o conector universal, antes de medir: " + extern1 + "%0a"
+ "Realizar o teste de potência na fibra designada na CTOP deve estar entre -8 dBm a -24,5 dBm: " + extern1 + "%0a"
+ "Se a porta estiver sem sinal deve procurar outra, se não achar no raio de 500 metros deve abrir TA: " + extern1 + "%0a"
+ "Caso precise de manobra, faça e cheque a potência da porta: " + extern1 + "%0a"
+ "Verificar trajeto da rede e distância: " + extern1 + "%0a"
+ "%0a"
+ "*VIABILIDADE INTERNA*:" + "%0a"
+ "Verificar trajeto da rede interna: " + intern1 + "%0a"
+ "Observar as tubulações ( obstrução ou rede elétrica passando junto): " + intern1 + "%0a"
+ "Utilizar as ferramentas (Magic tool, mapa de calor) para melhor posicionamento dos equipamentos: " + intern1 + "%0a"
+ "Observar se o cliente possui móvel planejado: " + intern1 + "%0a"
+ "Escolher junto ao cliente o melhor local para instalar Hgu, sem esquecer que precisa de uma tomada: " + intern1 + "%0a"
+ "%0a"
+ "*EXECUÇÃO*:" + "%0a"
+ "Começar o lançamento do drop sempre pela alimentadora: " + execution1 + "%0a"
// + "Verificar se precisa equipar o(s) poste(s): " + desativa_execucao1 + "%0a"
+ "Local instalado possui drop?: " + execution1 + "%0a"
+ "Reaproveitamento de drop, a utilização será parcial ou total? Fazer check-list no trajeto todo e deixar tudo no padrão: " + execution1 + "%0a"
+ "Instalação no local possui cabo Roc? Se tiver tem que trocar pois foi descontinuado em hipótese alguma pode reutilizar: " + execution1 + "%0a"
+ "Caso precise de manobra, faça e cheque a potência da porta: " + execution1 + "%0a"
// + "Quando necessitar o uso do suporte DM na parede, tem que ser com bucha e parafuso utilizando os 2 furos: " + desativa_execucao + "%0a"
+ "Em caso de furo inserir tubo de proteção em ambos os lados da parede: " + execution1 + "%0a"
+ "Lembrando que furo tem que ter a permissão do cliente: " + execution1 + "%0a"
+ "Antes de furar deve perguntar ao cliente se tem passagem de canos hidráulicos ou elétricos: " + execution1 + "%0a"
+ "Fixar o drop no ambiente externo com fixa fio, com distância máxima em paredes de 50 cm e madeira 70 cm: " + execution1 + "%0a"
// + "Retirar o mensageiro do drop na interna e fixar com cola quente ou canaleta: " + desativa_execucao + "%0a"
+ "Em nenhuma hipótese deverá passar o drop junto com a rede elétrica: " + execution1 + "%0a"
// INICIO DO QUESTIONARIO FTTA 
+ "Instalação do Low Friction (“Dropinho”) na CDOI/C deve passar fita auto fusão a 5 cm da saída e colocar identificação (verde): " + desativa_ftth1 + "%0a"
+ "O Low Friction deve fazer o trajeto na caixa, no sentido do cabo Riser e deve ser presa nas extremidades com fixa fio: " + desativa_ftth1 + "%0a"
+ "A sobra técnica deve ser deixa no andar do cliente, salve os casos que seja fora do padrão deixar no CDOI/C: " + desativa_ftth1 + "%0a"
+ "Nunca deixar sobra técnica na caixa de passagem em forma de lupa: " + desativa_ftth1 + "%0a"
+ "Anotar nas tampas ( CDOI, DGOI, CDOIC E DGOIC ) as informações do assinante (FTTA): " + desativa_ftth1 + "%0a"
+ "Observar se a tampa caixa possui parafuso, caso não tenha deve colocar a informação no comentário do Zeus: " + desativa_ftth1 + "%0a"
+ "Limpeza do ambiente, como caixa de passagem, sobra de materiais e caixas de equipamentos: " + execution1 + "%0a"
 // FIM DO QUESTIONARIO FTTA 
+ "Não deve deixar sobra técnica em forma de lupa próxima do Hgu: " + execution1 + "%0a"
+ "A sobra técnica se faz necessário apenas para movimentar no mesmo local para limpeza: " + execution1 + "%0a"
+ "Orientar o cliente sobre os cuidados com a fibra: " + execution1 + "%0a"
+ "%0a"
+ "*EQUIPAMENTO NO ASSINANTE*:" + "%0a"
+ "Observar na ordem de serviço qual modelo que será instalado no cliente ( com voz, sem voz, Hgu comum ou Hgu Hpna): " + equipament_cliente1 + "%0a"
+ "Serviço de IPTV até 3 pontos deve utilizar Hgu, 2 pontos no cabo ETH e 1 ponto no Wifi: " + equipament_cliente1 + "%0a"
+ "A quantidade máxima de pontos de IPTV é de 9 pontos por equipamento, deverá ser utilizado Hgu Hpna: " + equipament_cliente1 + "%0a"
+ "Quando subir os pontos de IPTV deve fazer a certificação em todos os pontos: " + equipament_cliente1 + "%0a"
+ "Aperte as teclas “ Mudo  mudo  8486 ”, para fazer a certificação manual: " + equipament_cliente1 + "%0a"
+ "Instalação do Hgu deve ser diretamente sobre uma mesa, rack/estante: " + equipament_cliente1 + "%0a"
+ "Se não tiver ponto de energia disponível, deve colocar uma régua de alimentação, nunca utilizar adaptador benjamim “T”: " + equipament_cliente1 + "%0a"
+ "Verificar o Firmware do dispositivo: " + equipament_cliente1 + "%0a"
+ "Para colocar o SLID no HGU a fibra não deve estar inserida: " + equipament_cliente1 + "%0a"
+ "Cortar 5 cm de fita auto fusão e envolver no conector antes de colocar no Hgu: " + equipament_cliente1 + "%0a"
+ "Aplicar fita auto fusão na fibra a 10 cm do conector, prender com Hellerman junto com a fonte( Hgu modelo antigo): " + equipament_cliente1 + "%0a"
+ "Colocar fita auto fusão na fibra, passar hellerman por baixo e prender (Hgu modelo atual): " + equipament_cliente1 + "%0a"
+ "%0a"
+ "*CLIENTE*:" + "%0a"
+ "Executar teste de velocidade pelo cabo de rede e demostrar ao cliente: " + cliente_final1 + "%0a"
+ "O teste de velocidade deve ser feito no site EAQ Brasil Banda Larga ou pelo site da Vivo: " + cliente_final1 + "%0a"
+ "Orientar sobre os APP's, meu Vivo e Serviços Digitais: " + cliente_final1 + "%0a"
+ "Pedir e auxiliar o cliente a conectar em todos dispositivos: " + cliente_final1 + "%0a"
+ "Orientar sobre o TDNA e solicitar uma boa avaliação, deixar claro que a nota é referente ao seu serviço: " + cliente_final1 + "%0a"
+ "Demonstrar e explicar sobre o funcionamento da linha Voip: " + cliente_final1 + "%0a"
+ "Quando subir os pontos de IPTV deve fazer a certificação em todos os pontos: " + cliente_final1 + "%0a"
+ "Explicar o funcionamento da TV ( IPTV ): " + cliente_final1 + "%0a"
+ "Explicar sobre a diferença das redes 2.4 Ghz e 5 Ghz ( Hgu antigo): " + cliente_final1 + "%0a"
+ "Orientar sobre a unificação das rede 2.4 Ghz e 5 Ghz ( Hgu atual): " + cliente_final1 + "%0a"
+ "Realizar os testes do Magic tool: " + cliente_final1 + "%0a"
+ "%0a"
+ "*ENCERRAMENTO*:" + "%0a"
+ "Anexar as fotos no Zeus, Mapa de calor, Velocidade, Hgu sincronizado, Certificação Magic Tool e Foto da Caixa.: " + encerramento1 + "%0a"
+ "Adicionar no comentário do Zeus qualquer anomalia: " + encerramento1 + "%0a"
+ "Incluir no campo comentário do Zeus o nome e o contato de quem acompanhou o serviço: " + encerramento1 + "%0a"
+ "Orientar sobre os prazos de garantia do serviço: " + encerramento1 + "%0a"
+ "Fidelizar via WhatsApp enviando os números do nosso suporte: " + encerramento1 + "%0a"
+ "Preencher o termo aceite digital e pedir que o cliente assine: " + encerramento1 + "%0a"
+ "É expressamente proibido para o técnico assinar, no campo destinado ao client: " + encerramento1 + "%0a"
+ "Aplicar material corretamente no Vicky: " + encerramento1 + "%0a"
+ "Deve perguntar para o cliente se tem alguma dúvida, parabenizar pela aquisição do produto: " + encerramento1 + "%0a"
+ "Despedir-se e agradecer em nome da Vivo: " + encerramento1 + "%0a"
+ "Finalizar o serviço ainda no ambiente do cliente: " + encerramento1 + "%0a"
+ "%0a"
* "*APOS O ENCERRAMENTO*:" + "%0a"
+ "Aplicar gasto dos materiais utilizados que não estão no Vicky via ANIEL: " + aposEncerramento1 + "%0a"
+ "%0a"
+ "*Comentário*: "
+ "%0a" + msg1; + "%0a"
window.open(url1, '_blank').focus();
}

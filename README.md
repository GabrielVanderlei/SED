# Sistema de eventos descentralizado
Essa aplicação Web foi desenvolvido na plataforma StackBlitz e se utiliza de **angular** e **ethereum** para permitir a realização de eventos de forma descentralizada. Atualmente é basicamente um projeto simples, que permite a utilização de contratos descentralizados para configurar uma inscrição de evento. O sistema atualmente **apenas permite que você se inscreva no evento**, essa inscrição vai ficar conectada a sua carteira no ethereum, por um contrato inteligente.

## Como usar?
- Instale o MetaMask
- Abra o projeto no StackBlitz
- Se inscreva no evento em sua conta de testes

## O que faz até agora?
- Permite comunicação app -> rede ethereum via MetaMask
- Utiliza serviços do Angular para facilitar o *code*
- Armazena dados em um contrato real onde configuração também está descrita no projeto.

## O que falta fazer?
- Possuir uma interface mais bonita.
- Gerar a inscrição em um QR-Code
- Permitir que as pessoas possuam um sistema de logjn e registro (Sugestão: Firebase)
- Permitir que com o mesmo app ou com outro que seja possível a verificação da inscrição do usuário por parte do administrador.

## Fluxo
O aplicativo é bem simples, a pessoa utilizando sua carteira ethereum compra uma inscrição no evento. Após isso o administrador vai saber que existe uma nova inscrição e na hora da entrada basta a pessoa apresentar sua carteira pública. Como apenas apresentar a carteira pode ser problemático, por questões de segurança. Então uma simples compra com a carteira na hora da entrada, como uma taxa de verificação, é o suficiente.

Também é possível se utilizar de sistemas centralizados em conjunto com o ethereum para reforçar a parte de segurança e torna-lo mais viável. Usando o ethereum como modo de pagamento inteligente.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-6aifa2)

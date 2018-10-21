**Estudando o básico de react native**

## Anotações

Para executar o app:
* Iniciar o emulador android
> emulator @nome-do-emulador

* Executar android app na raiz do projeto

> react-native run-android


### Configurações
* Adicionar variáveis de ambiente do android
```
ANDROID_HOME=~/Library/Android/sdk/
PATH=$PATH:~/android-sdks/platform-tools/
PATH=$PATH:~/android-sdks/tools/
```
> a variável  de ambiente do android pode ser substituída criando um arquivo na pasta android chamado:  "local.properties"  e adicionando: sdk.dir = C:\\Android\\Sdk, 



* Configurar um emulador normalmente pelo Android Studo (criar um projeto simples para isso)



### Usando emulador na linha de comando
* listando os emuladores
> $ emulator -list-avds

* iniciando um emulador
> $ emulator @name-of-your-emulator

ou

> $ emulator -avd name-of-your-emulator


`Em caso de emulador transparente, editar configurações e mudar GRAPHICS para Software `

### Comandos no Emulador
* R+R:  Para atualizar
* CTRL + M: Abrir menu DEV

### Modo debug
* Ativar modo debug no console do davegador
> CTRL + M => Debug JS Remotely


* Resolvendo problemas de timeout
    * CTRL + M na tela do emulador
    * Escolher Dev settings > Debug server host & port for device
    * Setar localhost:8081
    * Executar novamente android app: react-native run-android

### Instalado
* Chocolatey
* Npm
* Yarn
* react-native-cli
* Android
* Java
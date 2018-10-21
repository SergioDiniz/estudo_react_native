**Estudando o básico de react native**

## Anotações
* Adicionar variáveis de ambiente do android
```
ANDROID_HOME=~/Library/Android/sdk/
PATH=$PATH:~/android-sdks/platform-tools/
PATH=$PATH:~/android-sdks/tools/
```
> a variável  de ambiente do android pode ser substituída criando um arquivo na pasta android chamado:  "local.properties"  e adicionando: sdk.dir = C:\\Android\\Sdk, 



* Configurar um emulador normalmente pelo Android Studo (criar um projeto simples para isso)



### Usando na linha de comando
* listando os emuladores
> $ emulator -list-avds

* iniciando um emulador
> $ emulator @name-of-your-emulator

ou

> $ emulator -avd name-of-your-emulator


`Em caso de emulador transparente, editar configurações e mudar GRAPHICS para Software `

### Comando no Emulador
* R+R:  Para atualizar
* CTRL + M: Abrir menu DEV

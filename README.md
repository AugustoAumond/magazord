DESAFIOS:
SWR: Implementar o SWR foi um desafio significativo, já que não tenho muita experiência com essa biblioteca. Ela me causou algumas dificuldades devido à forma como gerencia as requisições e os estados dos dados. O principal obstáculo foi a demora no recebimento dos dados, o que fez com que a variável que eu utilizava para armazenar a resposta da requisição ficasse como undefined. Estou mais acostumado a trabalhar com o Axios usando async/await, e a abordagem do SWR, com foco em cache e revalidação automática, me gerou um pouco de confusão. Além disso, a implementação da tela de "Buscar Usuário" foi particularmente desafiadora, pois dependia de uma requisição para obter dados iniciais e, em seguida, uma nova requisição usando a resposta da primeira. Também enfrentei dificuldades para implementar o filtro baseado no dropdown na tela do usuário, pois a requisição precisava ser feita de forma dinâmica após a escolha do filtro.

Zustand: O Zustand inicialmente me causou certa dificuldade, mas com o tempo, consegui me adaptar rapidamente. Embora tenha sido um pouco complicado no começo, a biblioteca se mostrou intuitiva e eficiente para gerenciar o estado global da aplicação. Após algumas horas de estudo e prática, consegui dominar a utilização do Zustand com mais tranquilidade.


Melhorias:
A aplicação pode ser aprimorada com a implementação de paginação, o que ajudaria a reduzir o tempo de carregamento e a melhorar a experiência do usuário. Embora a aplicação já retorne os dados rapidamente, a adição de um paginador contribuiria significativamente para a usabilidade, especialmente em cenários com grandes volumes de dados, oferecendo ao usuário um controle mais eficiente sobre a navegação e o carregamento de informações.


INSTRUÇÕES:
Comece criando uma pasta para o projeto e, em seguida, clone o repositório usando o comando: "git clone https://github.com/AugustoAumond/magazord.git".

Para rodar a aplicação, primeiro instale as dependências do projeto executando o comando "npm i".

ADICIONANDO TOKEN A APLICAÇÃO
Na raiz do projeto clonado, crie um arquivo .env para armazenar variáveis de ambiente.

Acesse o GitHub e faça login com sua conta.

No canto superior direito, clique na sua foto de perfil e depois em Settings (Configurações).

No menu lateral esquerdo, clique em Developer settings (Configurações do desenvolvedor) última opção da aba.

Em Developer settings, clique em Personal access tokens (Tokens de acesso pessoal).

Clique em Generate new token (Gerar novo token).

Volte até o arquivo .env e crie uma variável da seguinte maneira => VITE_API_KEY = MEU_TOKEN!! => [alt text](./public/image.png)


COMO FUNCIONA A APLICAÇÃO:
A aplicação começa com uma página de repositórios populares, onde o usuário pode escolher a linguagem de programação desejada (incluí apenas algumas opções que considero mais relevantes no mercado). Também há um paginator para navegar entre os repositórios subsequentes.

No Header, há um ícone que permite navega para a página de busca por Usuários. Ao clicar no ícone, o usuário é redirecionado para a página de busca de perfis, que exibe inicialmente os usuários mais populares da plataforma, garantindo que a página não fique vazia enquanto o filtro ainda não foi utilizado.

Ao acionar o filtro e clicar no botão de pesquisa, a aplicação busca todos os usuários que correspondem aos critérios da pesquisa, exibindo os 50 primeiros resultados.

Quando o usuário clica no perfil desejado, ele é direcionado para a página do perfil (figma fornecido pela Magazord). Nessa página, é possível filtrar os repositórios por tags (marcados ou todos), por linguagens e também por tipo. No entanto, fiquei um pouco confuso quanto ao conceito de tipo (não encontrei dados relevantes que justificassem a inclusão desse filtro).

Como bônus, inclui a funcionalidade de visualizar os commits de um repositório ao clicar sobre ele. Se o usuário clicar em um commit específico, será redirecionado para a página do commit no GitHub. Além disso, na parte superior da dialog de commits, há um link que leva diretamente para o diretório do projeto.


ESTRUTURAÇÃO DO CÓDIGO:
COMPONENTES:
Esta pasta contém todos os componentes utilizados nas páginas da aplicação. Dentro dela, há subpastas específicas para cada página, com os componentes relevantes a ela. Também existe uma pasta chamada globals, onde são armazenados componentes reutilizáveis em várias partes da aplicação, como Header, Footer, entre outros.

ENVIRONMENTS:
Aqui ficam armazenadas as variáveis de ambiente que são distribuídas para a aplicação. Essa estrutura centraliza a configuração e facilita a manutenção dos ambientes de desenvolvimento e produção.

HOOKS:
Todos os hooks personalizados com funcionalidades específicas estão nesta pasta. Hooks são utilizados para encapsular lógicas reutilizáveis e compartilhar comportamentos entre componentes.

INTERFACES:
Nesta pasta, estão os arquivos de tipagem utilizados em toda a aplicação. Apenas adiciono tipos que são compartilhados entre múltiplos componentes. Para tipagens específicas de um componente, geralmente as defino diretamente no próprio componente antes de inicializar a função.

LIBRARY:
Aqui ficam todos os materiais reutilizáveis criados para o projeto, como inputs, botões, dropdowns, entre outros. O objetivo é padronizar os elementos visuais e de interação, garantindo consistência em toda a aplicação.

PAGES:
Esta pasta contém as rotas da aplicação. Cada página da aplicação está associada a um arquivo dentro desta pasta, que organiza e renderiza os componentes necessários para exibir a interface do usuário.

SERVICE:
Aqui centralizo as requisições para as APIs. Essa estrutura permite uma melhor organização e reutilização de funções responsáveis por interagir com as APIs da aplicação, além de facilitar a manutenção e teste dessas funções.

STORE:
Nesta pasta, armazeno as bibliotecas de gerenciamento de estado global, como Redux ou Zustand, além das funções que manipulam o localStorage ou sessionStorage. O objetivo é centralizar o controle de estado e os dados persistentes da aplicação.
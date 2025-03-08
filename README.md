DESAFIOS:
SWR: Foi um desafio implementar, não é uma biblioteca com a qual trabalho regularmente, ela acabou me complicando em diversos momentos devido a minha falta de experiência, em diversos momentos não conseguir tratar a resposta da requisição, fazia a requisição porém demorava um tempo para receber os dados e a variável na qual eu adicionava os dados ficava undefined (estou acostumado a trabalhar com axios com async e await e o SWR é um pouco diferente, acabou me complicando um pouco). Perdi bastante tempo para desenvolver a tela de "Buscar Usuário" pois eu precisava receber a resposta de uma requisição para depois fazer uma nova requisição com o nome do usuário que havia sido recebido na requisição anterior. E na tela do usuário para fazer o filtro baseado no dropdown.

Zustand: Também foi um complicador no primeiro momento, porém a lib é bastante intuitiva e depois de algumas horas consegui me adaptar com tranquilidade.

MELHORIAS
É possível melhorar a aplicação através da implementação de paginators, isso irá diminuir o tempo de resposta para o usuário. Apesar disso, a aplicação está retornando rapidament. O paginador poderia melhor a UX do usuário.

Dark Mode: É uma feature que irá agregar ao projeto, tendo em vista que muitos usuário preferem o Dark Theme ao Light.


INSTRUÇÕES:
Para rodar a aplicação é necessário roda o "npm i" para baixar as dependências utilizadas no projeto, 

Criar um arquivo .env e adicionar um arquivo com .env.
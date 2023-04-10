# FoodFit
Escopo: criar um site para ajudar a montar um plano de dieta para o usuário.

Principais features: geração automatica de uma dieta levando em consideração input do usuário, login, aba para acompanhamento

Membros da equipe: Caio Teles Cunha e Gabriel Castelo (frontend), Ivan Vilaça e Henrique Rotsen (backend)

Linguaguem: javaScript, utilizaremos o framework react no frontend

---
## Backlog

1. Como **visitante do site** quero acessar uma landing page para saber os benefícios do sistema e os planos de assinatura.

2. Como **usuário do sistema** quero poder me cadastrar e logar no sistema.

3. Como **usuário do sistema** quero poder visualizar e alterar meus dados que estão no sistema.

4. Como **usuário do sistema** quero poder gerar por AI uma dieta com base em meus objetivos pessoais.

5. Como **usuário do sistema** quero acompanhar o histórico de todas as dietas que já fiz e ver os resultados no meu peso.

6. Como **usuário do sistema** quero poder ter as minhas dietas para meu email para tê-las em qualquer local.

7. Como **usuário do sistema** eu gostaria de ver meus pesos ao longo dos meses como gráficos.

8. Como **administrador do sistema** quero poder realizar um cadastro prévio de nutricionistas parceiro que interagirão com usuários do sistema.

9. Como **usuário do sistema** quero poder contratar um nutricionista parceiro para analisar a dieta na qual estou e sugerir alterações.

10. Como **nutricionista parceiro** quero poder alterar qual será o valor das consultas que eu oferecerei para os usuários pelo sistema.

11. Como **usuário do sistema** eu gostaria de poder montar a minha dieta a partir de uma lista de alimentos e seu valor calórico.

12. Como **usuário do sistema** eu gostaria de poder avaliar a dieta que eu montei com auxilio do sistema.

13. Como **usuário do sistema** gostaria de receber dicas de vida saudável.

14. Como **usuário do sistema** quero poder redefinir minha senha através do email cadastrado no sistema.

---
## Backlog da Sprint

1. Como **visitante do site** quero acessar uma landing page para saber os benefícios do sistema e os planos de assinatura.

> - Fazer protótipo da landing page.
> - Fazer landing page.

2. Como usuário do sistema quero poder me cadastrar e logar no sistema.

> - Fazer prototipo da tela de login. 
> - Implementar a tela de login.
> - Implementar a lógica de login. 
> - Implementar a modais de erro de login. 
> - Configurar Banco de dados. 
> - Instalar nodejs e Express.
> - Criar a tabela do Usuário no Banco. 
> - Fazer Create e read de usuário.
> - Criar rota de login. 
> - Criar rota de logout. 

3. Como **usuário do sistema** quero poder visualizar e alterar meus dados que estão no sistema.

> - Criar rota para retornar dados do usuário logado.
> - Criar página meu perfil.
> - Conexão com o Back End.

4. Como **usuário do sistema** quero poder gerar por AI uma dieta com base em meus objetivos pessoais.

> - Fazer prototiopagem da tela de dieta. 
> - Implementar tela de dieta.
> - Conexão com back end (lógica de envio de formulário). 
> - Criar a tabela de dietas no banco. 
> - Fazer Create, Read e Update de dietas. 
> - Conectar com a API do GPT e fazer a rota que sera a dieta e salva no banco. 

5. Como **usuário do sistema** quero acompanhar o histórico de todas as dietas que já fiz e ver os resultados no meu peso.

> - Fazer rota de consultas de dietas relacionadas a cada usuário.
> - Fazer tela de listagem de dietas.
> - Fazer tela de visualização individual de dietas. 
> - Fazer conexão com o Back End.

6. Como **usuário do sistema** quero poder ter as minhas dietas para meu email para tê-las em qualquer local.

> - Criar rota que envia a dieta para o email do usuário [Rotsen e Ivan]
> - Conexão com o Back End.
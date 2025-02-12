let users = [];

module.exports = class userController {
  static async createUser(req, res) {
    const { cpf, email, password, name, data_nascimento } = req.body;

    if (!cpf || !email || !password || !name ||!data_nascimento) {
      return res
        .status(400)
        .json({ error: "Todos os campos devem ser preenchidos" });
    } else if (isNaN(cpf) || cpf.length !== 11) {
      return res.status(400).json({
        error: "CPF inválido. Deve conter exatamente 11 dígitos numéricos",
      });
    } else if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido. Deve conter @" });
    }

    // Verifica se já existe um usuário com o mesmo CPF
    const existingUser = users.find((user) => user.cpf === cpf);
    if (existingUser) {
      return res.status(400).json({ error: "CPF já cadastrado" });
    }

    // Cria e adiciona novo usuário
    const newUser = { cpf, email, password, name, data_nascimento };
    users.push(newUser);

    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: newUser });
  }

  static async getAllUsers(req, res) {
    return res
      .status(200)
      .json({ message: "Obtendo todos os usuários", users });
  }

  static async updateUser(req, res) {
    //desestrutura e recupera os dados enviados via corpo da requisição
    const { cpf, email, password, name } = req.body;
    //valida se todos os campos foram preenchidos
    if (!cpf || !email || !password || !name) {
      return res
        .status(400)
        .json({ error: "todos os campos devem ser preenchidos" });
    }
    //procurar o user no array 'users' pelo cpf
    const userIndex = users.findIndex((user) => user.cpf === cpf);

    //se o usuario não for encontrado userIndex equivale a -1
    if (userIndex === -1) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }

    //Atualiza os dados do usuario no Array 'users'
    users[userIndex] = { cpf, email, password, name };

    return res
      .status(200)
      .json({ message: "usuario atualizado", user: users[userIndex] });
  }

  static async deleteUser(req, res) {
    //obtem o parametro id da requisição, que é o CPF do usario a ser deletado
    const userId = req.params.cpf;

    //procurar o user no array 'users' pelo cpf
    const userIndex = users.findIndex((user) => user.cpf === userId);

    //se o usuario não for encontrado userIndex equivale a -1
    if (userIndex === -1) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }

    //removendo o usuario do array 'users'
    users.splice(userIndex, 1);

    return res.status(200).json({ message: "Usuario Apagado" });
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email e senha são obrigatórios" });
    }

    const query = "SELECT * FROM usuario WHERE email = ?";

    try {
      connect.query(query, [email], (err, results) => {
        if (err) {
          return res.status(500).json({ error: "Erro interno do servidor" });
        }

        if (results.length === 0) {
          return res.status(400).json({ error: "Usuário não encontrado" });
        }

        const user = results[0];

        if (user.password !== password) {
          return res.status(400).json({ error: "Senha incorreta" });
        }

        return res.status(200).json({ message: "Login bem-sucedido", user });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};

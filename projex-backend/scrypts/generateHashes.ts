import bcrypt from 'bcrypt';

const saltRounds = 10;

const generateHash = async (password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`Hashed password: ${hashedPassword}`);
  } catch (error) {
    console.error('Error generating hash:', error);
  }
};

// Use o código abaixo para gerar uma senha hasheada
generateHash('sua_senha_aqui');

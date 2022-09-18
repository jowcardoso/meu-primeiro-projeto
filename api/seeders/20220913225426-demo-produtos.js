'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Produtos', [
      {
        nome: 'Jogo de Lençol Percal Neon',
        descricao: 'Com um mix de cores vibrantes, o Jogo de Lençol Neon é perfeito para alegrar o seu décor.',
        categoria: 'Cama',
        preco: 229.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Kit Colcha Matelassê Darma',
        descricao: 'Com elementos zen em sua estampa, o Kit Colcha Darma transforma o quarto em um templo de reflexão e autoconhecimento.',
        categoria: 'Cama',
        preco: 399.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Toalha Fio Penteado Sina',
        descricao: 'Seu banheiro completo e cheio de charme. A Toalha Sina é um artigo que vai transformar seu ambiente.',
        categoria: 'Banho',
        preco: 44.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Toalha de Piso Jacquard Basic',
        descricao: 'Nada melhor que tomar um banho relaxante e sentir o toque agradável da Toalha de Piso Basic em seus pés.',
        categoria: 'Banho',
        preco: 24.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Vaso em Cerâmica Borbulhas',
        descricao: 'A modernidade que sua casa pediu. O Vaso Borbulhas é contemporâneo e traz um ar inovador para casa.',
        categoria: 'Decor',
        preco: 109.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Relógio de Mesa Atlântica',
        descricao: 'Útil e bonito. O Relógio de Mesa Atlântica é perfeito para a mesinha de cabeceira, a mesa de estudos ou do escritório.',
        categoria: 'Decpr',
        preco: 89.90,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Produtos', null, {});

  }
};

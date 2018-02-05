angular.module('busca', [])
  .controller('BuscaListaController', function($scope) {
    
    $scope.parceiras = [
        {
            nome: 'Estúdio Hermanas',
            categoria: 'Bordados',
            faixa_valor: 'R$60 a R$375',
            localizacao: 'São Paulo - SP',
            descricao: 'O Estúdio Hermanas nasceu da vontade de duas irmãs se juntarem para fazerem o que mais amam. Juliana Mazzo é Designer e apaixonada por caligrafia e lettering. Letícia Mazzo é Arquiteta e apaixonada por desenho. O Estúdio é a união dessas paixões materializadas no papel ou no tecido.',
            img: 'img/perfil_eh.png',
            site: 'http://www.estudiohermanas.com.br/'
        },
        {
            nome: 'dsadas',
            categoria: 'Ilustração',
            faixa_valor: 'dsdasd',
            localizacao: 'asdsadasdasd',
            descricao: 'sdasd',
            img: 'img/perfil_eh.png',
            site: 'www.google.com.br'
        }
    ];
  });


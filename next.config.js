/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.teciam.com.br',
        pathname: '/files/upload/057a7eeaf273a9010e4ef1acb68f4b04.jpg',
      },
      {
        protocol: 'https',
        hostname: 'gradetec.com.br',
        pathname: '/wp-content/uploads/2019/04/grades-de-piso-galvanizada.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.marechaltelas.com.br',
        pathname: '/imagens/produtos/tela-ondulada-quadrada/tela-ondulada-quadrada-02.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.furosteel.com.br',
        pathname: '/images/servicos/chapa-perfurada-aco-carbono.jpg',
      },
      {
        protocol: 'https',
        hostname: 'grupocsx.com.br',
        pathname: '/wp-content/uploads/2021/04/esteiras-transportadoras.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.highsolutions.com.br',
        pathname: '/wp-content/uploads/2018/06/transportadores-industriais.jpg',
      },
    ],
  },
}

module.exports = nextConfig

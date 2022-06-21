import { createServer } from "miragejs"

export const makeServer = () => {
    const server = createServer({
        routes() {
            this.namespace = 'api'

            this.get('/continents', () => {
                return [
                    {
                        slug: 'eruopa',
                        name: 'Europa',
                        description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
                        bannerImage: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    },
                    {
                        slug: 'america',
                        name: 'América',
                        description: 'América é um dos cinco continentes do mundo, sendo o maior deles territorialmente de norte a sul. O continente é dividido em três subcontinentes repletos de particularidades.',
                        bannerImage: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    },
                    {
                        slug: "asia",
                        name: "Ásia",
                        description: "A Ásia é o maior continente, tanto em área (chega a quase um terço de todas as terras emersas do nosso planeta) como em população, onde habitam aproximadamente 4,5 bilhões de habitantes.",
                        bannerImage: "https://source.unsplash.com/WHhbYArwFt8"
                    },
                    {
                        slug: "africa",
                        name: "África",
                        description: "África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. É conhecida pela sua pluralidade étnica e cultural, e, por meio de uma história milenar, é capaz de contar a história de toda a humanidade.",
                        bannerImage: "https://source.unsplash.com/60XLoOgwkfA",
                    },
                    {
                        slug: "oceania",
                        name: "Oceania",
                        description: "A Oceania é o continente mais isolado do mundo, sua barreira geográfica fez com que fosse o último a ser descoberto pelos europeus. Em razão desse atraso em seu descobrimento ficou conhecido como 'mundo novo'.",
                        bannerImage: "https://source.unsplash.com/Hao52Fu9-F8",
                    }
                ]
            })
        }
    })

    return server
}
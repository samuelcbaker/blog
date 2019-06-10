let fakedb = {
    "posts" : [
        {
            "id" : 1,
            "nome" : "Justificação pela fé",
            "texto" : "As obras são como meras muletas. As pessoas se apoiam nelas pra falarem que são boas, mas a verdade é que independente do que elas façam, elas sabem que ainda são naturalmente ruins. Muitas vezes as pessoas acham que ao fazer o bem, se aproximam de Deus. Mas saiba que a única forma de se aproximar de Deus é crendo no sacrifício perfeito do seu filho, Jesus Cristo! Leia Romanos 1",
            "imagem" : "/img/conteudo/justificacaoPelaFe.jpg",
            "curtidas" : 100,
            "periodo" : "08/06/2019",
            "comentarios" : [
                {
                    "nome" : "Samuel",
                    "msg" : "Amém!"
                }
            ],
        },
        {
            "id": 2,
            "nome": "Novo nascimento",
            "texto": "Cristo morreu por todos a humanidade e levou sobre si todos os pecados existentes. Mas a salvação vem do crer nesse sacrifício, e isso faz com que a gente tenha um novo nascimento. Uma nova criatura que é totalmente diferente da antiga, que tem plena comunhão com o Pai e agora pode ter paz.",
            "imagem": "/img/conteudo/novoNascimento.jpg",
            "curtidas": 200,
            "periodo": "07/06/2019",
            "comentarios": [
                {
                    "nome": "Marcos",
                    "msg": "Amém!!!!!!!"
                }
            ],
        },
        {
            "id": 3,
            "nome": "Santificação",
            "texto": "O amor a aquele que nos amou primeiro faz com que nós tenhamos uma reação. Muitas vezes as pessoas zoam porque você é igual todo mundo, mas a verdade é que pra nós (crentes) é muito bom não fazer as mesmas coisas. Existe uma felicidade muito maior do que a oferecida pelo mundo... Uma alegria eterna e verdadeira!!",
            "imagem": "/img/conteudo/santificacao.jpg",
            "curtidas": 300,
            "periodo": "06/06/2019",
            "comentarios": [
                {
                    "nome": "Anna",
                    "msg": "Estou alegre!"
                },
                {
                    "nome": "Samuel",
                    "msg": "Glória a Jesus!"
                }
            ],
        },
        {
            "id": 4,
            "nome": "A volta de Cristo",
            "texto": "Um dia Ele veio para a salvação, mas agora Ele vai volvar para o juízo. Além disso Ele vai buscar aqueles que creram e essas pessoas viveram para sempre com Jesus na nova Jerusalém!! Maranata, ora vem Senhor Jesus!!!",
            "imagem": "/img/conteudo/santificacao.jpg",
            "curtidas": 400,
            "periodo": "05/06/2019",
            "comentarios": [
                {
                    "nome": "Solange",
                    "msg": "Eu vou estar com Ele!"
                },
                {
                    "nome": "Samuel",
                    "msg": "Eu também!!!"
                },
                {
                    "nome": "João",
                    "msg": "Glória a Jesus! Maranata!!"
                }
            ],
        },
        {
            "id": 5,
            "nome": "Mensagem importante ao leitor",
            "texto": "Leitor, aquele que crer em Cristo e ser batizado será salvo! Será que é mentira mesmo igual você pensa? Saiba que não é! Sim, a fé é difícil, porque voce crê naquilo que não vê, mas espera.... Você viu o BigBang? Pois é, atente... o tempo está acabando! Basta orar e conversar com Ele! Vai... faz isso agora.... Creia.",
            "imagem": "/img/conteudo/cruz.jpg",
            "curtidas": 400,
            "periodo": "05/06/2019",
            "comentarios": [
                {
                    "nome": "Solange",
                    "msg": "Amém!"
                },
                {
                    "nome": "Samuel",
                    "msg": "Glória a Deus!!!"
                },
                {
                    "nome": "João",
                    "msg": "Glória a Jesus! Maranata!!"
                }
            ],
        }
    ],
}

function init(){
    if (!localStorage.getItem('dbSamuelBaker')) localStorage.setItem('dbSamuelBaker', JSON.stringify(fakedb));
    let db = JSON.parse(localStorage.getItem('dbSamuelBaker'));

    for(i=0; i < db.posts.length; i++){
        console.log(i);
    }


    let posts = '';
    
}
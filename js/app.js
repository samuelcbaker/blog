let fakedb = {
    "posts": [
        {
            "id": 1,
            "nome": "Justificação pela fé",
            "texto": "As obras são como meras muletas. As pessoas se apoiam nelas pra falarem que são boas, mas a verdade é que independente do que elas façam, elas sabem que ainda são naturalmente ruins. Muitas vezes as pessoas acham que ao fazer o bem, se aproximam de Deus. Mas saiba que a única forma de se aproximar de Deus é crendo no sacrifício perfeito do seu filho, Jesus Cristo! Leia Romanos 1",
            "imagem": "/img/conteudo/justificacaoPelaFe.jpg",
            "curtidas": 100,
            "periodo": "01/06/2019",
            "comentarios": [
                {
                    "nome": "Samuel",
                    "msg": "Amém!"
                }
            ],
            "flagCurtida": false,
        },
        {
            "id": 2,
            "nome": "Novo nascimento",
            "texto": "Cristo morreu por todos a humanidade e levou sobre si todos os pecados existentes. Mas a salvação vem do crer nesse sacrifício, e isso faz com que a gente tenha um novo nascimento. Uma nova criatura que é totalmente diferente da antiga, que tem plena comunhão com o Pai e agora pode ter paz.",
            "imagem": "/img/conteudo/novoNascimento.jpg",
            "curtidas": 200,
            "periodo": "02/06/2019",
            "comentarios": [
                {
                    "nome": "Marcos",
                    "msg": "Amém!!!!!!!"
                }
            ],
            "flagCurtida": false,
        },
        {
            "id": 3,
            "nome": "Santificação",
            "texto": "O amor a aquele que nos amou primeiro faz com que nós tenhamos uma reação. Muitas vezes as pessoas zoam porque você é igual todo mundo, mas a verdade é que pra nós (crentes) é muito bom não fazer as mesmas coisas. Existe uma felicidade muito maior do que a oferecida pelo mundo... Uma alegria eterna e verdadeira!!",
            "imagem": "/img/conteudo/santificacao.jpg",
            "curtidas": 300,
            "periodo": "03/06/2019",
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
            "flagCurtida": false,
        },
        {
            "id": 4,
            "nome": "A volta de Cristo",
            "texto": "Um dia Ele veio para a salvação, mas agora Ele vai volvar para o juízo. Além disso Ele vai buscar aqueles que creram e essas pessoas viveram para sempre com Jesus na nova Jerusalém!! Maranata, ora vem Senhor Jesus!!!",
            "imagem": "/img/conteudo/santificacao.jpg",
            "curtidas": 400,
            "periodo": "04/06/2019",
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
            "flagCurtida": false,
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
            "flagCurtida": false,
        }
    ],
}

if (!localStorage.getItem('dbSamuelBaker')) localStorage.setItem('dbSamuelBaker', JSON.stringify(fakedb));
let dbSamuelBaker = JSON.parse(localStorage.getItem('dbSamuelBaker'));

let postClicado;

let maoApagada = "likeBlank.png";
let maoPreenchida = "likeFilled.png";
let idsCurtidos = [];

function init() {

    limparCurtidas();

    exibePosts();

    let photo = document.getElementById("imagem");
    photo.addEventListener('change', loadImage, false);

    $('#form-post').submit(function (e) {
        e.preventDefault();
        
        let titulo = $('#titulo').val();
        let texto = $('#texto').val();
        let imagem = $('#jsonstore')[0].innerHTML;

        cadastraPost(titulo, texto, imagem);

        $('#btn-fechar').click();

        exibePosts();
    });

    $('#form-comentario').submit(function(e){
        e.preventDefault();

        let nome = $('#nome').val();
        let msg = $('#msg').val();

        cadastraComentario(nome, msg, postClicado);

        console.log(postClicado);

        $('#btn-fechar-comentario').click();

        exibePosts();
    });

}

function exibePosts(){

    let arrayPosts = dbSamuelBaker.posts.map(post => (
        `
        <div class="card">
            <h5 class="card-header center">${post.nome}</h5>
            <div class="card-body">
                <img src="${post.imagem}" alt="imagem" class="img-blog">
                <p class="card-text">${post.texto}</p>
                <a ${post.flagCurtida ? '' : `onclick="cadastraCurtida(${post.id})"`}><img src="/img/site/${post.flagCurtida?maoPreenchida:maoApagada}" alt="Gostei" class="like" id="btn-curtida"></a>
                <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#modal-comentarios" onclick="setPostClicado(${post.id})">
                    Comentar
                </button>
                <p>${post.curtidas}</p>

                <div class="comentarios">
                    <h3>Comentários</h3>
                    ${post.comentarios.map(comentario => (
                        `<div class="card">
                            <div class="card-body">
                                <h6 class="card-subtitle mb-2 text-muted">${comentario.nome}</h6>
                                <p class="card-text">${comentario.msg}</p>
                            </div>
                        </div>`
                    )).join('')}
                </div>
            </div>
            <div class="card-footer text-muted">
                ${post.periodo}
            </div>
        </div>
        `
    )).reverse().join('');

    $('#card-post').html(arrayPosts);
}

function montaObjPost(titulo, texto, photo){
    loadimage(titulo, texto, photo);
}

function cadastraPost(titulo, texto, imagem) {

    var jsonPost = {
        "id": dbSamuelBaker.posts[dbSamuelBaker.posts.length - 1].id + 1,
        "nome": titulo,
        "texto": texto,
        "imagem": imagem,
        "curtidas": 0,
        "periodo": new Date().toLocaleDateString("pt-BR"),
        "comentarios": [],
        "flagCurtida": false,
    };

    dbSamuelBaker.posts.push(jsonPost);
    localStorage.setItem('dbSamuelBaker', JSON.stringify(dbSamuelBaker));
}

function cadastraComentario(nome, msg, id){
    let comentario = {
        "nome": nome,
        "msg": msg
    };

    for(i=0;i<dbSamuelBaker.posts.length; i++){
        if(dbSamuelBaker.posts[i].id == id){
            dbSamuelBaker.posts[i].comentarios.push(comentario);
        }
    }

    localStorage.setItem('dbSamuelBaker', JSON.stringify(dbSamuelBaker));
}

function cadastraCurtida(id){

    for (i = 0; i < dbSamuelBaker.posts.length; i++) {
        if (dbSamuelBaker.posts[i].id == id) {
            dbSamuelBaker.posts[i].curtidas++;
        }
    }

    localStorage.setItem('dbSamuelBaker', JSON.stringify(dbSamuelBaker));

    for (i = 0; i < dbSamuelBaker.posts.length; i++) {
        if (dbSamuelBaker.posts[i].id == id) {
            dbSamuelBaker.posts[i].flagCurtida = true;
        }
    }

    exibePosts();
}

function imageHandler(e2) {
    var store = document.getElementById('imgstore');
    store.innerHTML = '<img src="' + e2.target.result + '" width="80%">';

    var jsonstore = document.getElementById('jsonstore');
    jsonstore.innerHTML = `${e2.target.result}`;
}

function loadImage(e) {
    var filename = e.target.files[0];
    var fr = new FileReader();
    fr.onload = imageHandler;
    fr.readAsDataURL(filename);
}

function setPostClicado(id){
    postClicado = id;
    console.log(id);
}

function limparCurtidas(){
    for (i = 0; i < dbSamuelBaker.posts.length; i++) {
        dbSamuelBaker.posts[i].flagCurtida = false;
    }
}
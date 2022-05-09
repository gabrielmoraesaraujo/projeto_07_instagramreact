import React from "react";

function Story(props){
    return(
    <div class="story">
        <div class="imagem">
            <img src={props.image} />
        </div>
        <div class="usuario">
            {props.user}
        </div>
    </div>
    );
}



function CarregarStories(){
    const stories = [{image: "assets/img/9gag.svg", user: "9gag"}, 
{image: "assets/img/meowed.svg", user: "meowed"},
{image: "assets/img/barked.svg", user: "barked"},
{image: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
{image: "assets/img/wawawicomics.svg", user: "wawawicomics"},
{image: "assets/img/respondeai.svg", user: "respondeai"},
{image: "assets/img/filomoderna.svg", user: "filomoderna"},
{image: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}];

return stories;
}



function Post(props){
  const [heart, setHeart] = React.useState("");
  const [heartLiked, setHeartLiked] = React.useState("liked none");

  function curtir(){
    if(heart === "none"){
      setHeart("md hydrated");
      setHeartLiked("liked none");
    }else{
      setHeart("none");
      setHeartLiked("liked md hydrated");
    }
  }
  

    return(
<div class="post" onClick={curtir}>
    <div class="topo">
      <div class="usuario">
        <img src={props.user_image} />
        {props.user}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.image} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name="heart-outline" class={heart} onClick={curtir}></ion-icon>
          <ion-icon name="heart-sharp" class={heartLiked} onClick={curtir}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.likes_image} />
        <div class="texto">
        Curtido por <strong>{props.likes_user}</strong> e <strong>{props.likes_pessoas}</strong>
        </div>
      </div>
    </div>
</div>);
}


function CarregarPosts(){
    const posts = [{user_image: "assets/img/meowed.svg", user: "meowed", image: "assets/img/gato-telefone.svg", likes_image: "assets/img/respondeai.svg", likes_user: "respondeai", likes_pessoas:"outras 101.523 pessoas"}, 
    {user_image: "assets/img/barked.svg", user: "barked", image: "assets/img/dog.svg", likes_image: "assets/img/adorable_animals.svg", likes_user: "adorable_animals", likes_pessoas:"outras 99.159 pessoas"}];

    return posts;
}

function CarregarSugestoes(){
  const sugestoes = [{user_image: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", follow: "Segue você"},
  {user_image: "assets/img/chibirdart.svg", user: "chibirdart", follow: "Segue você"},
  {user_image: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", follow: "Novo no Instagram"},
  {user_image: "assets/img/adorable_animals.svg", user: "adorable_animals", follow: "Segue você"},
  {user_image: "assets/img/smallcutecats.svg", user:"smallcutecats", follow: "Segue você"}
];

return sugestoes;
}

function Sugestao(props){
  return(
  <div class="sugestao">
    <div class="usuario">
      <img src={props.user_image} />
      <div class="texto">
        <div class="nome">{props.user}</div>
        <div class="razao">{props.follow}</div>
      </div>
  </div>

  <div class="seguir">Seguir</div>
  </div>);
}

function User(props){
  return(
  <div class="usuario">
    <img src={props.user_image} />
    <div class="texto">
      <strong>{props.user}</strong>
      {props.descr}
    </div>
  </div>);
}

export default function Corpo(){
    const stories = CarregarStories();
    const posts = CarregarPosts();
    const sugestoes = CarregarSugestoes();


    return(
        <div class="corpo">
        <div class="esquerda">
          <div class="stories">

            {stories.map(story => <Story image={story.image} user={story.user}/>)}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">

            {posts.map(post => <Post user_image={post.user_image} user={post.user}
            image={post.image} likes_image={post.likes_image} likes_user={post.likes_user}
            likes_pessoas={post.likes_pessoas}
            />)}

          </div>
        </div>

        

        <div class="sidebar">
        <User user_image="assets/img/catanacomics.svg" user="catanacomics" descr="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestoes.map(sugestao => <Sugestao user_image={sugestao.user_image} user={sugestao.user} follow={sugestao.follow} />)}

          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>

    );
}
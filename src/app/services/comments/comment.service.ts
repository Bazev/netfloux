import {Injectable} from '@angular/core';
import {Comment} from "../../models/comment";
import {BehaviorSubject} from "rxjs";
import {Serie} from "../../models/serie";
import {SerieService} from "../serie/serie.service";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentsSG: BehaviorSubject<Array<Comment>>
  commentMand: BehaviorSubject<Array<Comment>>
  commentsPoldark: BehaviorSubject<Array<Comment>>
  commentsCasa: BehaviorSubject<Array<Comment>>
  comments : BehaviorSubject<Array<Comment>>

  constructor() {
    const commentSg = [
      new Comment(new Date(2021 / 5 / 6), 'Samuel', `Encore une série très sur-côtée ! Tout est prévisible au possible, l'idée n'est pas si originale que ça et la fin est vraiment mauvaise... Cependant le jeu d'acteur et la qualité visuelle sont excellents ! On se laisse prendre au fur et à mesure des épisodes mais au final on savait très bien ce qui allait se passer quand, comment et pourquoi et c'est bien dommage. On est bien loin des gros drames coréens ! Ici c'est soft, un peu débile et souvent insupportable mais tout cela reste regardable. `),
      new Comment(new Date(2021, 10, 5), 'Thomas', `Série ultra violente, malsaine et sur jouée. Mais malheureusement à l'image de notre société.. Sans intérêt. `)
    ]
    this.commentsSG = new BehaviorSubject<Array<Comment>>(commentSg)
    const commentMand = [
      new Comment(new Date(2021, 11, 8), 'Julien R', `Cette série est incroyable! Pas ultra fan des nouveaux star wars, que je trouve construit pour la surenchère d'effets visuels inutiles, the mandalorian vient tout simplement à contre courant des films! L'intrique est prenante, les persos attachants, les visuels somptueux et cette fois-ci, mise au service d'une réelle histoire. J'ai rarement vu une série aussi prenante et belle visuellement (peut être westworld?). L’esthétique est à coupé le souffle et pour moi, chaque épisode écrase littéralement un film de la saga originelle.
Merci au réalisateur qui à su parfaitement retranscrire ce que j'ai toujours rêver de voir dans un star wars: de la profondeur, de la subtilité, de l'humour, et du grand cinéma.
Incontestablement la meilleur serie 2020 pour ma part!`),
      new Comment(new Date(2020, 1, 16), 'Lecter_H', `Franchise Star Wars mais des aventures à part entière dans l'esprit des premiers Star Wars. J'ai même envie de dire dans l'esprit de G. Lucas. C'est excellent, pas grand reproche à faire. Un western intergalactique avec souvent de grands espaces perdus sur différentes planètes. Ce sont de petites histoires distinctes d'un épisode avec avec un fil rouge (la mission de l'enfant). Le personnage Mando est très charismatique, il fait le succès de la série. Il se la joue dans l'action mais avec une certaine réserve, ce qui nous donne le temps de bien s'imprégner des dialogues, des décors et de ce qui s'y passe (cela s'appelle la maitrise). La saison 1 comme la saison 2 sont du même très haut niveau. Et puis ce final à la fin de la 2è saison : nous avons tous été surpris ! A voir sans détour. `)
    ]
    this.commentMand = new BehaviorSubject<Array<Comment>>(commentMand)
    const commentsPoldark = [
      new Comment(new Date(2020 / 2 / 2), 'Jean C', `5,0
Publiée le 2 février 2020
Une des plus belles séries qui m’ait été donné de voir. Un héros charismatique et attachant, une histoire à rebondissements pleine de suspens et de sentiments. On rit, on pleure, on vibre. Je recommande sans modération `),
      new Comment(new Date(2019 / 11 / 7), 'Clo C', `J ai adoré. Je me suis fait les 5 saisons en 6 jours . J attends avec impatience la saison 6.
Les acteurs sont parfaits, magnifiques. `)
    ]
    this.commentsPoldark = new BehaviorSubject<Array<Comment>>(commentsPoldark)
    const commentsCasa = [
      new Comment(new Date(2021, 9, 7), 'Flobert64', `Du mitraillage en continue...ça tourne en rond...plus d'intérêt (sans parler de la fin...). Dommage, j'avais adoré les 2 premières saisons...`),
      new Comment(new Date(2021, 9, 7), 'Math719', `Je sors de la première partie de la dernière saison.. je tenez à dire quand même que c’est un chef d’œuvre. Il y a pas un épisode où je m’ennuie, on est toujours à fond, pas un manquement du scénario, alors voilà bravo ! Quand c’est super il faut le dire !! `)
    ]
    this.commentsCasa = new BehaviorSubject<Array<Comment>>(commentsCasa)

    const comments = [new Comment(new Date(), '', '')];
    this.comments = new BehaviorSubject<Array<Comment>>(comments)

  }


}

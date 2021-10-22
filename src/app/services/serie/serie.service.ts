import {Component, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Serie} from "../../models/serie";
import {CommentService} from "../comments/comment.service";
import {Comment} from "../../models/comment";


@Injectable({
  providedIn: 'root',
})

export class SerieService {

  series: BehaviorSubject<Array<Serie>>

  constructor(private commentsService:CommentService) {

    const seriesToPush = [
      new Serie('Squid Game', new Date(2021,9,17),  1, `456 personnes, qui ont toutes des difficultés financières dans la vie, sont invitées à prendre part à une mystérieuse compétition de survie. Participant à une série de jeux traditionnels pour enfants mais avec des rebondissements mortels, elles risquent leur vie pour concourir pour un prix de 45,6 milliards de wons (soit environ 32 millions d'euros).`, `Ultraviolence, critique sociale, complotisme... la série coréenne au top des charts de Netflix appuie sur tous les boutons et tient le spectateur en haleine par son suspense sadique. Mais la recette est connue et ne parvient jamais vraiment à cacher le manque d'originalité.`, `https://justabouttv.fr/wp-content/uploads/__thumbnail-post-365134-squid-game--lavis-de-la-rdac-sur-la-saison-1--justabouttv.jpeg`, commentsService.commentsSG.getValue()),


      new Serie('Poldark', new Date(2015, 3, 8), 5, `En Cornouailles (comté de l'extrême sud-ouest du Royaume-Uni), à la fin du XVIIIe siècle, Ross Poldark revient de la guerre d'Indépendance américaine pour retrouver sa bien-aimée, mais il ne trouve qu'un monde en ruine : son père est mort, la mine familiale a fermé et la femme qu'il convoitait avant la guerre est fiancée à son cousin. En ville, Ross rencontre une jeune femme nommée Demelza Carne, habillée en garçon. Après avoir appris que son père la battait, Poldark lui propose de l'engager comme aide cuisinière, et décide finalement de l'épouser. Il lutte ensuite pour aider les ouvriers de son père et les villageois tout en dirigeant la mine de cuivre dont il a hérité, poursuivi par l'arrogant et avide George Warleggan.`, `Magnifique série! Paysages magnifiques, acteurs attachants et une très belle histoire ! Les 5 saisons regardées avec plaisir en enchaînant les épisodes et se couchant très tard... Il y a une suite... alors s'il vous plaît Monsieur Turner et toutes l'équipe du tournage acceptez de le réaliser pour nous émerveiller.`, `https://fr.web.img6.acsta.net/pictures/20/01/14/12/05/4373606.jpg`, commentsService.commentsPoldark.getValue()),

      new Serie('The Mandalorian', new Date(2019, 11, 12), 3, `Cinq ans après la chute de l'Empire et la fondation de la Nouvelle République, le métier de chasseur de primes ne paie plus. Le Mandalorien, surnommé Mando, connu pour être un des plus redoutables chasseurs de primes, accepte un contrat non officiel. Il s'agit pour lui, moyennant une prime élevée, de retrouver et de ramener à ses commanditaires un être vivant de 50 ans. En cours de mission, Mando découvre que, malgré son âge, c'est un bébé ou un enfant de la même espèce que Yoda. Il découvre aussi que sa cible maîtrise déjà la Force. Après avoir rempli son contrat auprès d'un vieil homme portant un insigne de l'Empire entouré de nombreux Stormtroopers et touché la prime, le Mandalorien se ravise et revient sauver l'Enfant. Il doit ensuite prendre la fuite avec lui, poursuivi par tout ce que la galaxie compte de chasseurs de primes lancés à leurs trousses, ainsi que par une garnison d'impériaux émergeant des cendres de l'Empire… `, `The Mandalorian est une très bonne occasion de se replonger dans l'univers de Star Wars avec les moyens d'aujourd'hui. Par principe les fans assidus détestent tout ce qui sort des studios Disney et qui touche à leur idole, mais franchement c'est loin d'être mauvais, l'esthétique est là, l'univers aussi.`, `https://static.posters.cz/image/750/affiches-et-posters/star-wars-the-mandalorian-nightfall-i103406.jpg`, commentsService.commentMand.getValue()),

      new Serie('La casa de papel', new Date(2017, 5, 2), 5, `Un homme mystérieux, surnommé le Professeur3, planifie le meilleur braquage jamais réalisé. Pour exécuter son plan, il recrute huit des meilleurs malfaiteurs en Espagne qui n'ont rien à perdre.
Le but est d'infiltrer la Fabrique nationale de la monnaie et du timbre afin d'imprimer 2,4 milliards d'euros, en petites coupures de 50 € et cela en moins de onze jours, sans victimes — malgré la présence de 67 otages, dont la fille de l'ambassadeur du Royaume-Uni, Alison Parker. `, `La Casa de Papel, il était une fin…
Si l'action prend tout le pas sur le reste, c'est bien parce que le show n'a strictement plus rien à raconter. Même les incohérences systématiques se font presque moins grossières tant elles ne cohabitent qu'avec du vent.`, `https://fr.web.img6.acsta.net/pictures/21/08/02/16/08/1706767.jpg`, commentsService.commentsCasa.getValue())
    ]
    this.series = new BehaviorSubject<Array<Serie>>(seriesToPush)
  }

  deleteSerie(serieIdToDelete: number) {
    const series = this.series.getValue();

    for (let [index, serie] of series.entries()) {
      if (serie.id === serieIdToDelete) {
        series.splice(index, 1);
        this.series.next(series);
        break;
      }
    }
  }

  getSerieById(idOfSerie: number): Promise<Serie> {
    return new Promise<Serie>(
      (res, rej) => {
        const series = this.series.getValue();

        for (let serie of series) {
          if (serie.id === idOfSerie) {
            res(serie);
            break;
          }
        }
      }
    )
  }

  save(serieToAdd: Serie): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const series = this.series.getValue();
          series.push(serieToAdd);
          this.series.next(series);
          res();
        }, 1000)
      }
    )

  }

  editSerie(editedSerie: Serie): Promise<void> {
    return new Promise<void>(
      (res, rej) => {
        setTimeout(() => {
          const series = this.series.getValue();

          for (let [index, serie] of series.entries()) {
            if (serie.id === editedSerie.id) {
              series[index] = editedSerie;
              this.series.next(series);
              res();
              break;
            }
          }
        }, 1000)
      }
    )
  }

  addCom(comment: Comment, serie: Serie) {
    comment.id=serie.comments.length;
    comment.date = new Date()
    serie.comments.push(comment)
  }
}

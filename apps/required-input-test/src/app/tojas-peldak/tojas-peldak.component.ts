import { Component, Input, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { isNil } from '../typeguard/is-nil';
import { IsNotNilDirective } from '../directive/is-not-nil.directive';
import { IsNotNilPipe } from '../is-nil-pipe/is-not-nil.pipe';

@Component({
  selector: 'required-input-test-tojas-peldak',
  standalone: true,
  templateUrl: 'tojas-peldak.component.html',
  imports: [NgIf, IsNotNilDirective, IsNotNilPipe],
})
export class TojasPeldakComponent implements OnInit {
  /**
   * Felkialtojel kell ts miatt(tsconfig beallitas kerdese, bar nem ajanlom kikapcsolni!),
   * angular nem tud mit tenni
   */
  @Input({ required: true }) required1!: string;
  /**
   * default erteknek igazabol nincs ertelme ebben az esetben,
   * mivel kotelezo tolteni, ezert kapni fog kivulrol erteket
   */
  @Input({ required: true }) required2 = 'with default value';
  /**
   * Ha olyan kodban vagy amiben nincs meg required, akkor igy tudod szerintem csak megoldani
   * (probaltam decoratorral, de ng 14 vagy 15 ota valami nagyon valtozott es sajat decoratorral mar nem tudod
   * ellatni az inputot ... bar 16-ban meg nem probaltam es mar nem is kell ;) )
   */
  @Input() oldRequired!: string;

  /**
   * Ezt ilyenkor mar nem erdemes ellatni pl optional -val (?),
   * bar persze a BI miatt elofordulhat olyan eset, de lehetoleg kerulni erdemes,
   * ha nagyon kell akkor string | null legyen, mert ts es angular oldalrol is inkabb a null az ajanlas
   */
  @Input() withDefaultValue = 'withDefaultValue';
  /**
   * na basszus ilyenkor vagyok ki ;) fenti valtozonal irtam hogy angular styleguide, na most valtozott
   * es most https://angular.io/guide/styleguide#initialize-inputs megint az optional az ajanlas
   */
  @Input() optional: string | null = null;
  /**
   * @Attila -nak igaza volt, abban hogy ez tenyleg helyes es ajanlott az optional kezelesere
   * (szemely szerint performance oldalrol jobban orulok ennek)
   */
  @Input() optionalNowByStyleGuides?: string;

  ngOnInit() {
    /**
     * Aki nagyon ki akarja maxolni, az bizonyos esetekben ezt ivy ota rakhatja
     * a constructorba is, de az csak specialis esetben fog mukodni, pl elso render-nel mar fel van toltve az input...
     */
    if (isNil(this.oldRequired)) {
      throw new Error(`'OldRequired' input is required!`);
    }
  }
}

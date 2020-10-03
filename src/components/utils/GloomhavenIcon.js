import React, { Component } from 'react';

import elementAir from '../../images/icons/elements/element-small-air.png';
import elementAll from '../../images/icons/elements/element-small-all.png';
import elementConsume from '../../images/icons/elements/element-small-consume.png';
import elementDark from '../../images/icons/elements/element-small-dark.png';
import elementEarth from '../../images/icons/elements/element-small-earth.png';
import elementFire from '../../images/icons/elements/element-small-fire.png';
import elementIce from '../../images/icons/elements/element-small-ice.png';
import elementLight from '../../images/icons/elements/element-small-light.png';

import statusEffectAddTarget from '../../images/icons/status-effect/status-effect-small-add-target.png';
import statusEffectBless from '../../images/icons/status-effect/status-effect-small-bless.png';
import statusEffectCurse from '../../images/icons/status-effect/status-effect-small-curse.png';
import statusEffectDisarm from '../../images/icons/status-effect/status-effect-small-disarm.png';
import statusEffectImmobilize from '../../images/icons/status-effect/status-effect-small-immobilize.png';
import statusEffectInvisible from '../../images/icons/status-effect/status-effect-small-invisible.png';
import statusEffectMuddle from '../../images/icons/status-effect/status-effect-small-muddle.png';
import statusEffectPierce from '../../images/icons/status-effect/status-effect-small-pierce.png';
import statusEffectPoison from '../../images/icons/status-effect/status-effect-small-poison.png';
import statusEffectPush from '../../images/icons/status-effect/status-effect-small-push.png';
import statusEffectPull from '../../images/icons/status-effect/status-effect-small-pull.png';
import statusEffectStrengthen from '../../images/icons/status-effect/status-effect-small-strengthen.png';
import statusEffectStun from '../../images/icons/status-effect/status-effect-small-stun.png';
import statusEffectWound from '../../images/icons/status-effect/status-effect-small-wound.png';

import generalAttack from '../../images/icons/general/general-small-attack.png';
import generalAttackHex from '../../images/icons/general/general-small-attack-hex.png';
import generalHeal from '../../images/icons/general/general-small-heal.png';
import generalJump from '../../images/icons/general/general-small-jump.png';
import generalLoot from '../../images/icons/general/general-small-loot.png';
import generalMove from '../../images/icons/general/general-small-move.png';
import generalRange from '../../images/icons/general/general-small-range.png';
import generalRetaliate from '../../images/icons/general/general-small-retaliate.png';
import generalShield from '../../images/icons/general/general-small-shield.png';
import generalTarget from '../../images/icons/general/general-small-target.png';
import generalPlusOne from '../../images/icons/general/general-small-plus-one.png';

import characterIconBrute from '../../images/icons/characters/brute-icon.png';
import characterIconCragheart from '../../images/icons/characters/cragheart-icon.png';
import characterIconMindthief from '../../images/icons/characters/mindthief-icon.png';
import characterIconScoundrel from '../../images/icons/characters/scoundrel-icon.png';
import characterIconSpellweaver from '../../images/icons/characters/spellweaver-icon.png';
import characterIconTinkerer from '../../images/icons/characters/tinkerer-icon.png';

import characterMatFrontBrute from '../../images/icons/characters/brute-mat-front.png';
import characterMatFrontCragheart from '../../images/icons/characters/cragheart-mat-front.png';
import characterMatFrontMindthief from '../../images/icons/characters/mindthief-mat-front.png';
import characterMatFrontScoundrel from '../../images/icons/characters/scoundrel-mat-front.png';
import characterMatFrontSpellweaver from '../../images/icons/characters/spellweaver-mat-front.png';
import characterMatFrontTinkerer from '../../images/icons/characters/tinkerer-mat-front.png';

import characterMatBackBrute from '../../images/icons/characters/brute-mat-back.png';
import characterMatBackCragheart from '../../images/icons/characters/cragheart-mat-back.png';
import characterMatBackMindthief from '../../images/icons/characters/mindthief-mat-back.png';
import characterMatBackScoundrel from '../../images/icons/characters/scoundrel-mat-back.png';
import characterMatBackSpellweaver from '../../images/icons/characters/spellweaver-mat-back.png';
import characterMatBackTinkerer from '../../images/icons/characters/tinkerer-mat-back.png';

import classBrute from '../../images/icons/classes/brute.png';
import classTinkerer from '../../images/icons/classes/tinkerer.png';
import classSpellweaver from '../../images/icons/classes/spellweaver.png';
import classScoundrel from '../../images/icons/classes/scoundrel.png';
import classCragheart from '../../images/icons/classes/cragheart.png';
import classMindthief from '../../images/icons/classes/mindthief.png';
import classSun from '../../images/icons/classes/sun.png';
import classLightning from '../../images/icons/classes/lightning.png';
import class3Spears from '../../images/icons/classes/3spears.png';
import classCircles from '../../images/icons/classes/circles.png';
import classEclipse from '../../images/icons/classes/eclipse.png';
import classCthulhu from '../../images/icons/classes/cthulhu.png';
import classMusic from '../../images/icons/classes/music.png';
import classAngryface from '../../images/icons/classes/angryface.png';
import classSaw from '../../images/icons/classes/saw.png';
import classTriangles from '../../images/icons/classes/triangles.png';
import classTwomini from '../../images/icons/classes/twomini.png';
import classEye from '../../images/icons/classes/eye.png';

const icons = {
  elementAir,
  elementAll,
  elementConsume,
  elementDark,
  elementEarth,
  elementFire,
  elementIce,
  elementLight,

  statusEffectAddTarget,
  statusEffectBless,
  statusEffectCurse,
  statusEffectDisarm,
  statusEffectImmobilize,
  statusEffectInvisible,
  statusEffectMuddle,
  statusEffectPierce,
  statusEffectPoison,
  statusEffectPush,
  statusEffectPull,
  statusEffectStrengthen,
  statusEffectStun,
  statusEffectWound,

  generalAttack,
  generalAttackHex,
  generalHeal,
  generalJump,
  generalLoot,
  generalMove,
  generalRange,
  generalRetaliate,
  generalShield,
  generalTarget,
  generalPlusOne,

  classBrute,
  classTinkerer,
  classSpellweaver,
  classScoundrel,
  classCragheart,
  classMindthief,
  classSun,
  classLightning,
  class3Spears,
  classCircles,
  classEclipse,
  classCthulhu,
  classMusic,
  classAngryface,
  classSaw,
  classTriangles,
  classTwomini,
  classEye,

  characterIconBrute,
  characterIconCragheart,
  characterIconMindthief,
  characterIconScoundrel,
  characterIconSpellweaver,
  characterIconTinkerer,

  characterMatFrontBrute,
  characterMatFrontCragheart,
  characterMatFrontMindthief,
  characterMatFrontScoundrel,
  characterMatFrontSpellweaver,
  characterMatFrontTinkerer,

  characterMatBackBrute,
  characterMatBackCragheart,
  characterMatBackMindthief,
  characterMatBackScoundrel,
  characterMatBackSpellweaver,
  characterMatBackTinkerer,
};

class GloomhavenIconComponent extends Component {
  findIcon() {
    return icons[this.props.icon];
  }

  render() {
    return (
      <img src={this.findIcon()} width={this.props.width} alt={this.props.icon} height={this.props.height} onClick={this.props.onClick} className="gloomhaven-icon-img" />
    );
  }
}

export default GloomhavenIconComponent;
